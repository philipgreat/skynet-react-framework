

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './FormField.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class FormFieldSearchForm extends PureComponent {
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
      formFieldList: 1,
      'formFieldList.searchField': fieldName,
      'formFieldList.searchVerb': 'startsWith',
      'formFieldList.searchValue': fieldValue,
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
        ...this.buildStringSearchParameters(fieldsValue, 'parameterName'),
        ...this.buildStringSearchParameters(fieldsValue, 'type'),
        ...this.buildStringSearchParameters(fieldsValue, 'placeholder'),
        ...this.buildStringSearchParameters(fieldsValue, 'defaultValue'),
        ...this.buildStringSearchParameters(fieldsValue, 'description'),
        ...this.buildStringSearchParameters(fieldsValue, 'fieldGroup'),
        ...this.buildStringSearchParameters(fieldsValue, 'minValue'),
        ...this.buildStringSearchParameters(fieldsValue, 'maxValue'),
        ...this.buildStringSearchParameters(fieldsValue, 'candidateValues'),
        ...this.buildStringSearchParameters(fieldsValue, 'suggestValues'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, formFieldSearchFormParameters: fieldsValue },
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
            <FormItem label="语言环境的关键">
              {getFieldDecorator('localeKey')(
                <Input placeholder="请输入语言环境的关键" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="参数名称">
              {getFieldDecorator('parameterName')(
                <Input placeholder="请输入参数名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="类型">
              {getFieldDecorator('type')(
                <Input placeholder="请输入类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="占位符">
              {getFieldDecorator('placeholder')(
                <Input placeholder="请输入占位符" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="默认值">
              {getFieldDecorator('defaultValue')(
                <Input placeholder="请输入默认值" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="描述">
              {getFieldDecorator('description')(
                <Input placeholder="请输入描述" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="字段组">
              {getFieldDecorator('fieldGroup')(
                <Input placeholder="请输入字段组" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="最小值">
              {getFieldDecorator('minValue')(
                <Input placeholder="请输入最小值" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="最大的价值">
              {getFieldDecorator('maxValue')(
                <Input placeholder="请输入最大的价值" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="候选人的价值观">
              {getFieldDecorator('candidateValues')(
                <Input placeholder="请输入候选人的价值观" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="建议值">
              {getFieldDecorator('suggestValues')(
                <Input placeholder="请输入建议值" />
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

export default Form.create()(FormFieldSearchForm)


