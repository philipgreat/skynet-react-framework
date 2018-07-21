

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './ServiceVehicleMovementM2m.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class ServiceVehicleMovementM2mSearchForm extends PureComponent {
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
      serviceVehicleMovementM2mList: 1,
      'serviceVehicleMovementM2mList.searchField': fieldName,
      'serviceVehicleMovementM2mList.searchVerb': 'startsWith',
      'serviceVehicleMovementM2mList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceStatus'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceSummary'),
        ...this.buildStringSearchParameters(fieldsValue, 'transferVerifyCode'),
        ...this.buildStringSearchParameters(fieldsValue, 'movementPurpose'),
        ...this.buildStringSearchParameters(fieldsValue, 'notifyAddress'),
        ...this.buildStringSearchParameters(fieldsValue, 'notifyComment'),
        ...this.buildStringSearchParameters(fieldsValue, 'handoverResult'),
        ...this.buildStringSearchParameters(fieldsValue, 'handoverResultComment'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, serviceVehicleMovementM2mSearchFormParameters: fieldsValue },
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
            <FormItem label="服务状态">
              {getFieldDecorator('serviceStatus')(
                <Input placeholder="请输入服务状态" />
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
            <FormItem label="服务状态">
              {getFieldDecorator('serviceStatus')(
                <Input placeholder="请输入服务状态" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务概述">
              {getFieldDecorator('serviceSummary')(
                <Input placeholder="请输入服务概述" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="交接检查码">
              {getFieldDecorator('transferVerifyCode')(
                <Input placeholder="请输入交接检查码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务类型">
              {getFieldDecorator('movementPurpose')(
                <Input placeholder="请输入服务类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="通知地址">
              {getFieldDecorator('notifyAddress')(
                <Input placeholder="请输入通知地址" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="备注">
              {getFieldDecorator('notifyComment')(
                <Input placeholder="请输入备注" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="交接检查结果">
              {getFieldDecorator('handoverResult')(
                <Input placeholder="请输入交接检查结果" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="交接检查备注">
              {getFieldDecorator('handoverResultComment')(
                <Input placeholder="请输入交接检查备注" />
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

export default Form.create()(ServiceVehicleMovementM2mSearchForm)


