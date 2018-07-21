import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './ServicePrice.updateform.less'
import ServicePriceBase from './ServicePrice.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class ServicePriceUpdateForm extends Component {
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
    const {fieldLabels} = ServicePriceBase
    
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const servicePriceId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, servicePriceId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateServicePrice`,
          payload: {
            id: owner.id,
            type: 'servicePrice',
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
        const servicePriceId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, servicePriceId, ...imagesValues }

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
          type: `${owner.type}/updateServicePrice`,
          payload: {
            id: owner.id,
            type: 'servicePrice',
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
        type: `${owner.type}/gotoNextServicePriceUpdateRow`,
        payload: {
          id: owner.id,
          type: 'servicePrice',
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
          type: 'servicePrice',
          listName:'合同价格列表' 
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
        title={"更新合同价格"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新合同价格"
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
                <Form.Item label={fieldLabels.serviceKey} {...formItemLayout}>
                  {getFieldDecorator('serviceKey', {
                    initialValue: selectedRow.serviceKey,
                    rules: [{ required: true, message: '请输入服务代码' }],
                  })(
                    <Input placeholder="请输入服务代码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceDescription} {...formItemLayout}>
                  {getFieldDecorator('serviceDescription', {
                    initialValue: selectedRow.serviceDescription,
                    rules: [{ required: true, message: '请输入服务描述' }],
                  })(
                    <Input placeholder="请输入服务描述" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.servicePriceType} {...formItemLayout}>
                  {getFieldDecorator('servicePriceType', {
                    initialValue: selectedRow.servicePriceType,
                    rules: [{ required: true, message: '请输入合同价格类型' }],
                  })(
                    <Input placeholder="请输入合同价格类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.basePriceValue} {...formItemLayout}>
                  {getFieldDecorator('basePriceValue', {
                    initialValue: selectedRow.basePriceValue,
                    rules: [{ required: true, message: '请输入服务价格' }],
                  })(
                    <Input placeholder="请输入服务价格" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.otherPriceValue} {...formItemLayout}>
                  {getFieldDecorator('otherPriceValue', {
                    initialValue: selectedRow.otherPriceValue,
                    rules: [{ required: true, message: '请输入后续服务价格' }],
                  })(
                    <Input placeholder="请输入后续服务价格" />
                    
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
                <Form.Item label={fieldLabels.serviceEnabled} {...switchFormItemLayout}>
                  {getFieldDecorator('serviceEnabled', {
                    initialValue: selectedRow.serviceEnabled,
                    rules: [{ required: true, message: '请输入是否提供服务' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否提供服务bool" />
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
}))(Form.create()(ServicePriceUpdateForm))



