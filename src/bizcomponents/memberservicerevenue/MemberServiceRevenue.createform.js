import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './MemberServiceRevenue.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import MemberServiceRevenueBase from './MemberServiceRevenue.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  memberName: '张三',
  serviceStartDate: '2017-04-22',
  serviceEndDate: '2018-04-01',
  monthlyServiceFee: '18.29',
  storeName: '书香社区慕和南道店',
  storeServiceCount: '0',
  totalServiceCount: '0',
  storeServiceRevenueRate: '80%',
  storeServiceRevenue: '5.75',
  memberId: 'C000001',
  storeId: 'S000001',
  mainOrderId: 'MO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class MemberServiceRevenueCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMemberSearch("")
    
    
    this.executeCandidateStoreSearch("")
    
    
    this.executeCandidateMainOrderSearch("")
    
 
    
    
    
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  
  executeCandidateMemberSearch = (filterKey) =>{

    const {MemberServiceRevenueService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberServiceRevenueService.requestCandidateMember("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMemberList=>{
      this.setState({
        candidateMemberList
      })

    })

  }	 
  handleCandidateMemberSearch = (value) => {
    this.executeCandidateMemberSearch(value)
  }

  executeCandidateStoreSearch = (filterKey) =>{

    const {MemberServiceRevenueService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberServiceRevenueService.requestCandidateStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateStoreList=>{
      this.setState({
        candidateStoreList
      })

    })

  }	 
  handleCandidateStoreSearch = (value) => {
    this.executeCandidateStoreSearch(value)
  }

  executeCandidateMainOrderSearch = (filterKey) =>{

    const {MemberServiceRevenueService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberServiceRevenueService.requestCandidateMainOrder("mainOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMainOrderList=>{
      this.setState({
        candidateMainOrderList
      })

    })

  }	 
  handleCandidateMainOrderSearch = (value) => {
    this.executeCandidateMainOrderSearch(value)
  }
 



  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }


  render() {
    const { form, dispatch, submitting } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const {fieldLabels} = MemberServiceRevenueBase
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addMemberServiceRevenue`,
          payload: { id: owner.id, type: 'memberServiceRevenue', parameters },
        })
      })
    }
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }
        
        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        
        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addMemberServiceRevenue`,
          payload: { id: owner.id, type: 'memberServiceRevenue', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'memberServiceRevenue',listName:'会员服务收益列表' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
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
    

    
    const {candidateMemberList} = this.state
    if(!candidateMemberList){
      return (<div>等等</div>)
    }
    if(!candidateMemberList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateStoreList} = this.state
    if(!candidateStoreList){
      return (<div>等等</div>)
    }
    if(!candidateStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMainOrderList} = this.state
    if(!candidateMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateMainOrderList.candidates){
      return (<div>等等</div>)
    }   
    
    
    
    const tryinit  = (fieldName) => {
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
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
        title="新建一个会员服务收益"
        content="新建一个会员服务收益"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberName} {...formItemLayout}>
                  {getFieldDecorator('memberName', {
                    rules: [{ required: true, message: '请输入会员昵称' }],
                  })(
                    <Input placeholder="请输入会员昵称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceStartDate} {...formItemLayout}>
                  {getFieldDecorator('serviceStartDate', {
                    rules: [{ required: true, message: '请输入服务开始日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入服务开始日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceEndDate} {...formItemLayout}>
                  {getFieldDecorator('serviceEndDate', {
                    rules: [{ required: true, message: '请输入服务结束日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入服务结束日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.monthlyServiceFee} {...formItemLayout}>
                  {getFieldDecorator('monthlyServiceFee', {
                    rules: [{ required: true, message: '请输入当月会员服务费' }],
                  })(
                    <Input placeholder="请输入当月会员服务费" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeName} {...formItemLayout}>
                  {getFieldDecorator('storeName', {
                    rules: [{ required: true, message: '请输入网点名字' }],
                  })(
                    <Input placeholder="请输入网点名字" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeServiceCount} {...formItemLayout}>
                  {getFieldDecorator('storeServiceCount', {
                    rules: [{ required: true, message: '请输入网点服务次数' }],
                  })(
                    <Input placeholder="请输入网点服务次数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.totalServiceCount} {...formItemLayout}>
                  {getFieldDecorator('totalServiceCount', {
                    rules: [{ required: true, message: '请输入本月会员服务总次数' }],
                  })(
                    <Input placeholder="请输入本月会员服务总次数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeServiceRevenueRate} {...formItemLayout}>
                  {getFieldDecorator('storeServiceRevenueRate', {
                    rules: [{ required: true, message: '请输入网点会员服务收益百分比' }],
                  })(
                    <Input placeholder="请输入网点会员服务收益百分比" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeServiceRevenue} {...formItemLayout}>
                  {getFieldDecorator('storeServiceRevenue', {
                    rules: [{ required: true, message: '请输入网点会员收益' }],
                  })(
                    <Input placeholder="请输入网点会员收益" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.member} {...formItemLayout}>
                  {getFieldDecorator('memberId', {
                  	initialValue: tryinit('member'),
                    rules: [{ required: true, message: '请输入会员' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMemberList.candidates}
                    
                    
                    onSearch={this.handleCandidateMemberSearch}
                    placeholder="请输入会员"
                    
                    disabled={!availableForEdit('member')}
                  >
                  {candidateMemberList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.store} {...formItemLayout}>
                  {getFieldDecorator('storeId', {
                  	initialValue: tryinit('store'),
                    rules: [{ required: true, message: '请输入服务网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateStoreSearch}
                    placeholder="请输入服务网点"
                    
                    disabled={!availableForEdit('store')}
                  >
                  {candidateStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                  	initialValue: tryinit('mainOrder'),
                    rules: [{ required: true, message: '请输入主订单' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateMainOrderSearch}
                    placeholder="请输入主订单"
                    
                    disabled={!availableForEdit('mainOrder')}
                  >
                  {candidateMainOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.title}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
            提交
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            提交并建下一个
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            放弃
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(MemberServiceRevenueCreateForm))




