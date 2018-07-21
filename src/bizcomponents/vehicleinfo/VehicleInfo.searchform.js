

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './VehicleInfo.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class VehicleInfoSearchForm extends PureComponent {
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
      vehicleInfoList: 1,
      'vehicleInfoList.searchField': fieldName,
      'vehicleInfoList.searchVerb': 'startsWith',
      'vehicleInfoList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'licensePlateNumber'),
        ...this.buildStringSearchParameters(fieldsValue, 'vehicleType'),
        ...this.buildStringSearchParameters(fieldsValue, 'useCharacter'),
        ...this.buildStringSearchParameters(fieldsValue, 'engineNumber'),
        ...this.buildStringSearchParameters(fieldsValue, 'vehicleIdentificationNumber'),
        ...this.buildStringSearchParameters(fieldsValue, 'vehiclePermitHolderName'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, vehicleInfoSearchFormParameters: fieldsValue },
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
            <FormItem label="车牌号码">
              {getFieldDecorator('licensePlateNumber')(
                <Input placeholder="请输入车牌号码" />
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
            <FormItem label="车牌号码">
              {getFieldDecorator('licensePlateNumber')(
                <Input placeholder="请输入车牌号码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="车辆类型">
              {getFieldDecorator('vehicleType')(
                <Input placeholder="请输入车辆类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="使用性质">
              {getFieldDecorator('useCharacter')(
                <Input placeholder="请输入使用性质" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="发动机号">
              {getFieldDecorator('engineNumber')(
                <Input placeholder="请输入发动机号" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="车架号">
              {getFieldDecorator('vehicleIdentificationNumber')(
                <Input placeholder="请输入车架号" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="所有人">
              {getFieldDecorator('vehiclePermitHolderName')(
                <Input placeholder="请输入所有人" />
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

export default Form.create()(VehicleInfoSearchForm)


