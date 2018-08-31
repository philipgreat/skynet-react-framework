

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './PlatformConfiguration.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class PlatformConfigurationSearchForm extends PureComponent {
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
      platformConfigurationList: 1,
      'platformConfigurationList.searchField': fieldName,
      'platformConfigurationList.searchVerb': 'startsWith',
      'platformConfigurationList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'memberServiceAgreement'),
        ...this.buildStringSearchParameters(fieldsValue, 'bookSharingAgreement'),
        ...this.buildStringSearchParameters(fieldsValue, 'accountRechargeAgreement'),
        ...this.buildStringSearchParameters(fieldsValue, 'messageInStoreListPage'),
        ...this.buildStringSearchParameters(fieldsValue, 'feedbackContactInfo'),
        ...this.buildStringSearchParameters(fieldsValue, 'myRightsTitle'),
        ...this.buildStringSearchParameters(fieldsValue, 'myBorrowingTitle'),
        ...this.buildStringSearchParameters(fieldsValue, 'myCampaignTitle'),
        ...this.buildStringSearchParameters(fieldsValue, 'myBalanceTitle'),
        ...this.buildStringSearchParameters(fieldsValue, 'myBookReviewTitle'),
        ...this.buildStringSearchParameters(fieldsValue, 'myOrderTitle'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, platformConfigurationSearchFormParameters: fieldsValue },
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
            <FormItem label="会员服务协议">
              {getFieldDecorator('memberServiceAgreement')(
                <Input placeholder="请输入会员服务协议" />
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
            <FormItem label="会员服务协议">
              {getFieldDecorator('memberServiceAgreement')(
                <Input placeholder="请输入会员服务协议" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="图书共享协议">
              {getFieldDecorator('bookSharingAgreement')(
                <Input placeholder="请输入图书共享协议" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="账户充值协议">
              {getFieldDecorator('accountRechargeAgreement')(
                <Input placeholder="请输入账户充值协议" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="存储列表页中的消息">
              {getFieldDecorator('messageInStoreListPage')(
                <Input placeholder="请输入存储列表页中的消息" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="反馈联系信息">
              {getFieldDecorator('feedbackContactInfo')(
                <Input placeholder="请输入反馈联系信息" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="我的权益的功能的显示名称">
              {getFieldDecorator('myRightsTitle')(
                <Input placeholder="请输入我的权益的功能的显示名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="我的借阅记录的功能的显示名称">
              {getFieldDecorator('myBorrowingTitle')(
                <Input placeholder="请输入我的借阅记录的功能的显示名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="我的活动的功能的显示名称">
              {getFieldDecorator('myCampaignTitle')(
                <Input placeholder="请输入我的活动的功能的显示名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="我的余额的功能的显示名称">
              {getFieldDecorator('myBalanceTitle')(
                <Input placeholder="请输入我的余额的功能的显示名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="我的书评的功能的显示名称">
              {getFieldDecorator('myBookReviewTitle')(
                <Input placeholder="请输入我的书评的功能的显示名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="我的订单的功能的显示名称">
              {getFieldDecorator('myOrderTitle')(
                <Input placeholder="请输入我的订单的功能的显示名称" />
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

export default Form.create()(PlatformConfigurationSearchForm)


