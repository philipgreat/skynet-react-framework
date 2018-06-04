

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './ObjectAccess.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class ObjectAccessSearchForm extends PureComponent {
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
      objectAccessList: 1,
      'objectAccessList.searchField': fieldName,
      'objectAccessList.searchVerb': 'startsWith',
      'objectAccessList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'name'),
        ...this.buildStringSearchParameters(fieldsValue, 'objectType'),
        ...this.buildStringSearchParameters(fieldsValue, 'list1'),
        ...this.buildStringSearchParameters(fieldsValue, 'list2'),
        ...this.buildStringSearchParameters(fieldsValue, 'list3'),
        ...this.buildStringSearchParameters(fieldsValue, 'list4'),
        ...this.buildStringSearchParameters(fieldsValue, 'list5'),
        ...this.buildStringSearchParameters(fieldsValue, 'list6'),
        ...this.buildStringSearchParameters(fieldsValue, 'list7'),
        ...this.buildStringSearchParameters(fieldsValue, 'list8'),
        ...this.buildStringSearchParameters(fieldsValue, 'list9'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, objectAccessSearchFormParameters: fieldsValue },
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
            <FormItem label="名称">
              {getFieldDecorator('name')(
                <Input placeholder="请输入名称" />
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
            <FormItem label="名称">
              {getFieldDecorator('name')(
                <Input placeholder="请输入名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="访问对象类型">
              {getFieldDecorator('objectType')(
                <Input placeholder="请输入访问对象类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表1">
              {getFieldDecorator('list1')(
                <Input placeholder="请输入列表1" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表2">
              {getFieldDecorator('list2')(
                <Input placeholder="请输入列表2" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表3">
              {getFieldDecorator('list3')(
                <Input placeholder="请输入列表3" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表4">
              {getFieldDecorator('list4')(
                <Input placeholder="请输入列表4" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表5">
              {getFieldDecorator('list5')(
                <Input placeholder="请输入列表5" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表6">
              {getFieldDecorator('list6')(
                <Input placeholder="请输入列表6" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表7">
              {getFieldDecorator('list7')(
                <Input placeholder="请输入列表7" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表8">
              {getFieldDecorator('list8')(
                <Input placeholder="请输入列表8" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="列表9">
              {getFieldDecorator('list9')(
                <Input placeholder="请输入列表9" />
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

export default Form.create()(ObjectAccessSearchForm)


