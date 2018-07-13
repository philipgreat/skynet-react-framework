import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './MainOrderAccount.updateform.less'
import MainOrderAccountBase from './MainOrderAccount.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class MainOrderAccountUpdateForm extends Component {
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
        orderPlacedDatetime: moment(item.orderPlacedDatetime),
        orderPaymentDatetime: moment(item.orderPaymentDatetime),
        orderFinishedDatetime: moment(item.orderFinishedDatetime),

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
    const {fieldLabels} = MainOrderAccountBase
    
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const mainOrderAccountId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, mainOrderAccountId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateMainOrderAccount`,
          payload: {
            id: owner.id,
            type: 'mainOrderAccount',
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
        const mainOrderAccountId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, mainOrderAccountId, ...imagesValues }

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
          type: `${owner.type}/updateMainOrderAccount`,
          payload: {
            id: owner.id,
            type: 'mainOrderAccount',
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
        type: `${owner.type}/gotoNextMainOrderAccountUpdateRow`,
        payload: {
          id: owner.id,
          type: 'mainOrderAccount',
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
          type: 'mainOrderAccount',
          listName:'年检订单对账单列表' 
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
        title={"更新年检订单对账单"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新年检订单对账单"
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
                <Form.Item label={fieldLabels.productName} {...formItemLayout}>
                  {getFieldDecorator('productName', {
                    initialValue: selectedRow.productName,
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <Input placeholder="请输入产品名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionPrice} {...formItemLayout}>
                  {getFieldDecorator('inspectionPrice', {
                    initialValue: selectedRow.inspectionPrice,
                    rules: [{ required: true, message: '请输入年检费用' }],
                  })(
                    <Input placeholder="请输入年检费用" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.agentServicePrice} {...formItemLayout}>
                  {getFieldDecorator('agentServicePrice', {
                    initialValue: selectedRow.agentServicePrice,
                    rules: [{ required: true, message: '请输入代办服务费用' }],
                  })(
                    <Input placeholder="请输入代办服务费用" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.city} {...formItemLayout}>
                  {getFieldDecorator('city', {
                    initialValue: selectedRow.city,
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入城市" />
                    
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
                <Form.Item label={fieldLabels.orderTotalAmount} {...formItemLayout}>
                  {getFieldDecorator('orderTotalAmount', {
                    initialValue: selectedRow.orderTotalAmount,
                    rules: [{ required: true, message: '请输入订单总金额' }],
                  })(
                    <Input placeholder="请输入订单总金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPromotionDiscount} {...formItemLayout}>
                  {getFieldDecorator('orderPromotionDiscount', {
                    initialValue: selectedRow.orderPromotionDiscount,
                    rules: [{ required: true, message: '请输入优惠折扣' }],
                  })(
                    <Input placeholder="请输入优惠折扣" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCouponDiscount} {...formItemLayout}>
                  {getFieldDecorator('orderCouponDiscount', {
                    initialValue: selectedRow.orderCouponDiscount,
                    rules: [{ required: true, message: '请输入优惠券折扣' }],
                  })(
                    <Input placeholder="请输入优惠券折扣" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderInsuranceAmount} {...formItemLayout}>
                  {getFieldDecorator('orderInsuranceAmount', {
                    initialValue: selectedRow.orderInsuranceAmount,
                    rules: [{ required: true, message: '请输入保单费用' }],
                  })(
                    <Input placeholder="请输入保单费用" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderMerchantDiscount} {...formItemLayout}>
                  {getFieldDecorator('orderMerchantDiscount', {
                    initialValue: selectedRow.orderMerchantDiscount,
                    rules: [{ required: true, message: '请输入商户优惠' }],
                  })(
                    <Input placeholder="请输入商户优惠" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCustomerPaymentAmount} {...formItemLayout}>
                  {getFieldDecorator('orderCustomerPaymentAmount', {
                    initialValue: selectedRow.orderCustomerPaymentAmount,
                    rules: [{ required: true, message: '请输入客户付款总金额' }],
                  })(
                    <Input placeholder="请输入客户付款总金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderServiceAmount} {...formItemLayout}>
                  {getFieldDecorator('orderServiceAmount', {
                    initialValue: selectedRow.orderServiceAmount,
                    rules: [{ required: true, message: '请输入商户服务费总金额' }],
                  })(
                    <Input placeholder="请输入商户服务费总金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlatformBalance} {...formItemLayout}>
                  {getFieldDecorator('orderPlatformBalance', {
                    initialValue: selectedRow.orderPlatformBalance,
                    rules: [{ required: true, message: '请输入平台结余总金额' }],
                  })(
                    <Input placeholder="请输入平台结余总金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlacedDatetime} {...formItemLayout}>
                  {getFieldDecorator('orderPlacedDatetime', {
                    initialValue: selectedRow.orderPlacedDatetime,
                    rules: [{ required: true, message: '请输入下单时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入下单时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPaymentDatetime} {...formItemLayout}>
                  {getFieldDecorator('orderPaymentDatetime', {
                    initialValue: selectedRow.orderPaymentDatetime,
                    rules: [{ required: true, message: '请输入付款时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入付款时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderFinishedDatetime} {...formItemLayout}>
                  {getFieldDecorator('orderFinishedDatetime', {
                    initialValue: selectedRow.orderFinishedDatetime,
                    rules: [{ required: true, message: '请输入订单完成时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入订单完成时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                    initialValue: selectedRow.mainOrderId,
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(
                    <Input placeholder="请输入年检订单ID" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatOrderId} {...formItemLayout}>
                  {getFieldDecorator('wechatOrderId', {
                    initialValue: selectedRow.wechatOrderId,
                    rules: [{ required: true, message: '请输入微信订单ID' }],
                  })(
                    <Input placeholder="请输入微信订单ID" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatPrepayId} {...formItemLayout}>
                  {getFieldDecorator('wechatPrepayId', {
                    initialValue: selectedRow.wechatPrepayId,
                    rules: [{ required: true, message: '请输入微信预付订单ID' }],
                  })(
                    <Input placeholder="请输入微信预付订单ID" />
                    
                  )}
                </Form.Item>
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
}))(Form.create()(MainOrderAccountUpdateForm))



