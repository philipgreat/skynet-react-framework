

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './VehicleServiceCompany.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class VehicleServiceCompanySearchForm extends PureComponent {
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
      vehicleServiceCompanyList: 1,
      'vehicleServiceCompanyList.searchField': fieldName,
      'vehicleServiceCompanyList.searchVerb': 'startsWith',
      'vehicleServiceCompanyList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'companyName'),
        ...this.buildStringSearchParameters(fieldsValue, 'description'),
        ...this.buildStringSearchParameters(fieldsValue, 'operatingStatus'),
        ...this.buildStringSearchParameters(fieldsValue, 'addressDetail'),
        ...this.buildStringSearchParameters(fieldsValue, 'openingTime'),
        ...this.buildStringSearchParameters(fieldsValue, 'contactPhone'),
        ...this.buildStringSearchParameters(fieldsValue, 'orderContact'),
        ...this.buildStringSearchParameters(fieldsValue, 'orderContactPhone'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, vehicleServiceCompanySearchFormParameters: fieldsValue },
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
            <FormItem label="商户名称">
              {getFieldDecorator('companyName')(
                <Input placeholder="请输入商户名称" />
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
            <FormItem label="商户名称">
              {getFieldDecorator('companyName')(
                <Input placeholder="请输入商户名称" />
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
            <FormItem label="服务状态">
              {getFieldDecorator('operatingStatus')(
                <Input placeholder="请输入服务状态" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="所在地址">
              {getFieldDecorator('addressDetail')(
                <Input placeholder="请输入所在地址" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="营业时间">
              {getFieldDecorator('openingTime')(
                <Input placeholder="请输入营业时间" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="联系电话">
              {getFieldDecorator('contactPhone')(
                <Input placeholder="请输入联系电话" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="订单默认联系人">
              {getFieldDecorator('orderContact')(
                <Input placeholder="请输入订单默认联系人" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="订单默认联系人电话">
              {getFieldDecorator('orderContactPhone')(
                <Input placeholder="请输入订单默认联系人电话" />
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

export default Form.create()(VehicleServiceCompanySearchForm)


