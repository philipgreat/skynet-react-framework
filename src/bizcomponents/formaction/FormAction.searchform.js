

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './FormAction.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class FormActionSearchForm extends PureComponent {
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
      formActionList: 1,
      'formActionList.searchField': fieldName,
      'formActionList.searchVerb': 'startsWith',
      'formActionList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'label'),
        ...this.buildStringSearchParameters(fieldsValue, 'localeKey'),
        ...this.buildStringSearchParameters(fieldsValue, 'actionKey'),
        ...this.buildStringSearchParameters(fieldsValue, 'level'),
        ...this.buildStringSearchParameters(fieldsValue, 'url'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, formActionSearchFormParameters: fieldsValue },
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
            <FormItem label="标签">
              {getFieldDecorator('label')(
                <Input placeholder="请输入标签" />
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
            <FormItem label="标签">
              {getFieldDecorator('label')(
                <Input placeholder="请输入标签" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="消息键值">
              {getFieldDecorator('localeKey')(
                <Input placeholder="请输入消息键值" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="行动的关键">
              {getFieldDecorator('actionKey')(
                <Input placeholder="请输入行动的关键" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="水平">
              {getFieldDecorator('level')(
                <Input placeholder="请输入水平" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="url">
              {getFieldDecorator('url')(
                <Input placeholder="请输入url" />
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

export default Form.create()(FormActionSearchForm)











