

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './PrinterTask.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class PrinterTaskSearchForm extends PureComponent {
  state = {
    // addInputValue: '',
    // modalVisible: false,
    expandForm: false,
    // selectedRows: [],
    // formValues: {},
  }
  componentDidMount() {
    // const { dispatch } = this.props
    // console.log(this.props)
    // const { getFieldDecorator, setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    const { searchFormParameters } = this.props
    if (!searchFormParameters) {
      return
    }
    // console.log("searchFormParameters", searchFormParameters)
    setFieldsValue(searchFormParameters)
  }
  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm,
    })
  }
  handleFormReset = () => {
    const { form, dispatch } = this.props
    form.resetFields()
    dispatch({
      type: 'rule/fetch',
      payload: {},
    })
  }
  buildStringSearchParameters = (formValues, fieldName) => {
    const fieldValue = formValues[fieldName]
    if (!fieldValue) {
      console.log('NO VALUE')
      return {}
    }
    return {
      printerTaskList: 1,
      'printerTaskList.searchField': fieldName,
      'printerTaskList.searchVerb': 'startsWith',
      'printerTaskList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'title'),
        ...this.buildStringSearchParameters(fieldsValue, 'submitter'),
        ...this.buildStringSearchParameters(fieldsValue, 'content1'),
        ...this.buildStringSearchParameters(fieldsValue, 'content2'),
        ...this.buildStringSearchParameters(fieldsValue, 'content3'),
        ...this.buildStringSearchParameters(fieldsValue, 'content4'),
        ...this.buildStringSearchParameters(fieldsValue, 'content5'),
        ...this.buildStringSearchParameters(fieldsValue, 'content6'),
        ...this.buildStringSearchParameters(fieldsValue, 'printTaskStatus'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, printerTaskSearchFormParameters: fieldsValue },
      })
    })
  }
      
  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>

          <Col md={8} sm={24}>
            <FormItem label="ID">
              {getFieldDecorator('id')(
                <Input placeholder="请输入ID" />
               )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="标题">
              {getFieldDecorator('title')(
                <Input placeholder="请输入标题" />
               )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}> 展开 <Icon type="down" /> </a>
            </span>
          </Col>
        </Row>
      </Form>
    )
  }
  renderAdvancedForm() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>

          <Col md={8} sm={24}>
            <FormItem label="ID">
              {getFieldDecorator('id')(
                <Input placeholder="请输入ID" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="标题">
              {getFieldDecorator('title')(
                <Input placeholder="请输入标题" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="提交者">
              {getFieldDecorator('submitter')(
                <Input placeholder="请输入提交者" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容1">
              {getFieldDecorator('content1')(
                <Input placeholder="请输入内容1" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容2">
              {getFieldDecorator('content2')(
                <Input placeholder="请输入内容2" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容3">
              {getFieldDecorator('content3')(
                <Input placeholder="请输入内容3" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容4">
              {getFieldDecorator('content4')(
                <Input placeholder="请输入内容4" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容5">
              {getFieldDecorator('content5')(
                <Input placeholder="请输入内容5" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容6">
              {getFieldDecorator('content6')(
                <Input placeholder="请输入内容6" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="打印任务状态">
              {getFieldDecorator('printTaskStatus')(
                <Input placeholder="请输入打印任务状态" />
              )}
            </FormItem>
          </Col>

        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>收起 <Icon type="up" /></a>
          </span>
        </div>
      </Form>
    )
  }

  render() {
    return this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm()
  }
}

export default Form.create()(PrinterTaskSearchForm)


