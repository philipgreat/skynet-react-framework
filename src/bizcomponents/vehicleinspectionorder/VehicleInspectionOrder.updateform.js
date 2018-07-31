import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleInspectionOrder.updateform.less'
import VehicleInspectionOrderBase from './VehicleInspectionOrder.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'vehiclePermitImage1',
  'vehiclePermitImage2',
  'vehiclePermitImage3',
  'vehiclePermitImage4',
  'vehiclePermitImage5',
]


class VehicleInspectionOrderUpdateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentWillMount() {
    const selectedRow = this.getSelectedRow()
    if (!selectedRow) {
      return
    }
    this.setState({
      convertedImagesValues: mapFromImageValues(selectedRow,imageKeys)
    })
  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return true
  }

  getSelectedRow() {
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { selectedRows, currentUpdateIndex } = this.props
    if (!selectedRows) {
      return
    }
    if (currentUpdateIndex >= selectedRows.length) {
      return
    }
    const convertiedValues = selectedRows.map((item) => {
      return {
        ...item,
        createTime: moment(item.createTime),
        lastUpdateTime: moment(item.lastUpdateTime),
        planInspectionDate: moment(item.planInspectionDate),
        vehicleRegistrationDate: moment(item.vehicleRegistrationDate),
        inspectionValidationDate: moment(item.inspectionValidationDate),
        insuranceValidationDate: moment(item.insuranceValidationDate),
        vehiclePermitIssueDate: moment(item.vehiclePermitIssueDate),

      }
    })
    const selectedRow = convertiedValues[currentUpdateIndex]
    return selectedRow
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change: ', source)
    const { fileList } = event
    const { convertedImagesValues } = this.state
    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change: ', source)
  }


  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const { convertedImagesValues } = this.state
    const { setFieldsValue } = this.props.form
    const {fieldLabels} = VehicleInspectionOrderBase
    
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const vehicleInspectionOrderId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, vehicleInspectionOrderId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateVehicleInspectionOrder`,
          payload: {
            id: owner.id,
            type: 'vehicleInspectionOrder',
            parameters,
            selectedRows,
            currentUpdateIndex: 0,
            continueNext: false,
          },
        })
      })
    }
    
    const submitUpdateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const vehicleInspectionOrderId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, vehicleInspectionOrderId, ...imagesValues }

        // TODO
        const { currentUpdateIndex } = this.props
        
        if (currentUpdateIndex >= selectedRows.length - 1) {
          return
        }
        this.setState({
          currentUpdateIndex: currentUpdateIndex + 1,
        })
        //setFieldsValue(selectedRows[currentUpdateIndex + 1])
        const newIndex = currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateVehicleInspectionOrder`,
          payload: {
            id: owner.id,
            type: 'vehicleInspectionOrder',
            parameters,
            selectedRows,
            currentUpdateIndex: newIndex,
            continueNext: true,
          },
        })
      })
    }
    
    const skipToNext = () => {
      const { currentUpdateIndex } = this.props
      const { owner } = this.props
        
      const newIndex = currentUpdateIndex + 1
      dispatch({
        type: `${owner.type}/gotoNextVehicleInspectionOrderUpdateRow`,
        payload: {
          id: owner.id,
          type: 'vehicleInspectionOrder',
          selectedRows,
          currentUpdateIndex: newIndex,
          continueNext: true,
          update: false,
        },
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: {
          id: owner.id,
          type: 'vehicleInspectionOrder',
          listName:'年检订单列表' 
        },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for='${fieldKey}']`)
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      )
    }
    
    if (!selectedRows) {
      return (<div>缺少被更新的对象</div>)
    }
	const selectedRow = this.getSelectedRow()

	const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }

    return (
      <PageHeaderLayout
        title={"更新年检订单"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新年检订单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: '请输入ID' }],
                  })(
                    <Input placeholder="请输入ID" disabled/>
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderStatus} {...formItemLayout}>
                  {getFieldDecorator('orderStatus', {
                    initialValue: selectedRow.orderStatus,
                    rules: [{ required: true, message: '请输入订单状态' }],
                  })(
                    <Input placeholder="请输入订单状态" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleLicensePlateNumber} {...formItemLayout}>
                  {getFieldDecorator('vehicleLicensePlateNumber', {
                    initialValue: selectedRow.vehicleLicensePlateNumber,
                    rules: [{ required: true, message: '请输入车牌号码' }],
                  })(
                    <Input placeholder="请输入车牌号码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime} {...formItemLayout}>
                  {getFieldDecorator('createTime', {
                    initialValue: selectedRow.createTime,
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入创建时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName} {...formItemLayout}>
                  {getFieldDecorator('contactName', {
                    initialValue: selectedRow.contactName,
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(
                    <Input placeholder="请输入联系人姓名" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactMobileNumber} {...formItemLayout}>
                  {getFieldDecorator('contactMobileNumber', {
                    initialValue: selectedRow.contactMobileNumber,
                    rules: [{ required: true, message: '请输入联系人手机' }],
                  })(
                    <Input placeholder="请输入联系人手机" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.productType} {...formItemLayout}>
                  {getFieldDecorator('productType', {
                    initialValue: selectedRow.productType,
                    rules: [{ required: true, message: '请输入产品类型' }],
                  })(
                    <Input placeholder="请输入产品类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddressDetail} {...formItemLayout}>
                  {getFieldDecorator('contactAddressDetail', {
                    initialValue: selectedRow.contactAddressDetail,
                    rules: [{ required: true, message: '请输入地址' }],
                  })(
                    <Input placeholder="请输入地址" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planInspectionDate} {...formItemLayout}>
                  {getFieldDecorator('planInspectionDate', {
                    initialValue: selectedRow.planInspectionDate,
                    rules: [{ required: true, message: '请输入计划年检日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入计划年检日期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType} {...formItemLayout}>
                  {getFieldDecorator('vehicleType', {
                    initialValue: selectedRow.vehicleType,
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(
                    <Input placeholder="请输入车辆类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleUseCharacter} {...formItemLayout}>
                  {getFieldDecorator('vehicleUseCharacter', {
                    initialValue: selectedRow.vehicleUseCharacter,
                    rules: [{ required: true, message: '请输入使用性质' }],
                  })(
                    <Input placeholder="请输入使用性质" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleSeatsQuantity} {...formItemLayout}>
                  {getFieldDecorator('vehicleSeatsQuantity', {
                    initialValue: selectedRow.vehicleSeatsQuantity,
                    rules: [{ required: true, message: '请输入核准座位数' }],
                  })(
                    <Input placeholder="请输入核准座位数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleRegistrationDate} {...formItemLayout}>
                  {getFieldDecorator('vehicleRegistrationDate', {
                    initialValue: selectedRow.vehicleRegistrationDate,
                    rules: [{ required: true, message: '请输入注册日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入注册日期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionValidationDate} {...formItemLayout}>
                  {getFieldDecorator('inspectionValidationDate', {
                    initialValue: selectedRow.inspectionValidationDate,
                    rules: [{ required: true, message: '请输入检测有效期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入检测有效期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceValidationDate} {...formItemLayout}>
                  {getFieldDecorator('insuranceValidationDate', {
                    initialValue: selectedRow.insuranceValidationDate,
                    rules: [{ required: true, message: '请输入保险有效期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入保险有效期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.engineNumber} {...formItemLayout}>
                  {getFieldDecorator('engineNumber', {
                    initialValue: selectedRow.engineNumber,
                    rules: [{ required: false, message: '请输入发动机号' }],
                  })(
                    <Input placeholder="请输入发动机号" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleIdentificationNumber} {...formItemLayout}>
                  {getFieldDecorator('vehicleIdentificationNumber', {
                    initialValue: selectedRow.vehicleIdentificationNumber,
                    rules: [{ required: false, message: '请输入车架号' }],
                  })(
                    <Input placeholder="请输入车架号" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitIssueDate} {...formItemLayout}>
                  {getFieldDecorator('vehiclePermitIssueDate', {
                    initialValue: selectedRow.vehiclePermitIssueDate,
                    rules: [{ required: true, message: '请输入发证日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入发证日期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitHolderName} {...formItemLayout}>
                  {getFieldDecorator('vehiclePermitHolderName', {
                    initialValue: selectedRow.vehiclePermitHolderName,
                    rules: [{ required: true, message: '请输入所有人' }],
                  })(
                    <Input placeholder="请输入所有人" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    initialValue: selectedRow.longitude,
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    initialValue: selectedRow.latitude,
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                    
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>
        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasSixYearExemption} {...switchFormItemLayout}>
                  {getFieldDecorator('hasSixYearExemption', {
                    initialValue: selectedRow.hasSixYearExemption,
                    rules: [{ required: true, message: '请输入6年免检' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入6年免检bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasInspection} {...switchFormItemLayout}>
                  {getFieldDecorator('hasInspection', {
                    initialValue: selectedRow.hasInspection,
                    rules: [{ required: true, message: '请输入上线检测' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入上线检测bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasSecondLevelMaintenance} {...switchFormItemLayout}>
                  {getFieldDecorator('hasSecondLevelMaintenance', {
                    initialValue: selectedRow.hasSecondLevelMaintenance,
                    rules: [{ required: true, message: '请输入二级维护' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入二级维护bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasGradeEstimation} {...switchFormItemLayout}>
                  {getFieldDecorator('hasGradeEstimation', {
                    initialValue: selectedRow.hasGradeEstimation,
                    rules: [{ required: true, message: '请输入等级评定' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入等级评定bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.merchantDiscount} {...switchFormItemLayout}>
                  {getFieldDecorator('merchantDiscount', {
                    initialValue: selectedRow.merchantDiscount,
                    rules: [{ required: true, message: '请输入商户优惠' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入商户优惠bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.agreed} {...switchFormItemLayout}>
                  {getFieldDecorator('agreed', {
                    initialValue: selectedRow.agreed,
                    rules: [{ required: true, message: '请输入同意' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入同意bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.trafficAccidentAnnouncement} {...switchFormItemLayout}>
                  {getFieldDecorator('trafficAccidentAnnouncement', {
                    initialValue: selectedRow.trafficAccidentAnnouncement,
                    rules: [{ required: true, message: '请输入无伤人交通事故' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入无伤人交通事故bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.engagementLetterProvided} {...switchFormItemLayout}>
                  {getFieldDecorator('engagementLetterProvided', {
                    initialValue: selectedRow.engagementLetterProvided,
                    rules: [{ required: true, message: '请输入提供委托书' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入提供委托书bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePickUp} {...switchFormItemLayout}>
                  {getFieldDecorator('homePickUp', {
                    initialValue: selectedRow.homePickUp,
                    rules: [{ required: true, message: '请输入上门取车' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入上门取车bool" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>        
        
        
        
        

        <Card title="服务公司信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('serviceCompanyInfo', {
                  	initialValue: selectedRow.serviceCompanyInfo,
                    rules: [{  required: true, message: '请输入服务公司信息' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入服务公司信息" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>


        <Card title={<div>附件 <Popover title="扫描二维码可以从手机上传图片或者附件" content={<div><img src='./qrtest.png'/></div>}><Icon type="qrcode" ></Icon></Popover></div>} className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage1')}
                  fileList={convertedImagesValues.vehiclePermitImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage2')}
                  fileList={convertedImagesValues.vehiclePermitImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage3')}
                  fileList={convertedImagesValues.vehiclePermitImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage4')}
                  fileList={convertedImagesValues.vehiclePermitImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage5')}
                  fileList={convertedImagesValues.vehiclePermitImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
            更新
          </Button>
          <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            更新并装载下一个
          </Button>
          <Button type="info" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            略过
          </Button>
          <Button type="info" onClick={goback} loading={submitting}>
            取消
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(VehicleInspectionOrderUpdateForm))


