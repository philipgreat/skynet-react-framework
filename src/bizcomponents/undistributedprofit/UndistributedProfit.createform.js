import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './UndistributedProfit.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import UndistributedProfitBase from './UndistributedProfit.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  summary: '6个月会员费',
  chargeStartDate: '2016-04-05',
  chargeEndDate: '2017-11-06',
  amount: '70.36',
  balance: '9.46',
  profitTypeId: 'PT000001',
  profitDistributeStateId: 'PDS000001',
  mainOrderId: 'MO000001',
  customerId: 'C000001',
  platformId: 'BSP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class UndistributedProfitCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateProfitTypeSearch("")
    
    
    this.executeCandidateProfitDistributeStateSearch("")
    
    
    this.executeCandidateMainOrderSearch("")
    
    
    this.executeCandidateCustomerSearch("")
    
    
    this.executeCandidatePlatformSearch("")
    
 
    
    
    
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

  
  executeCandidateProfitTypeSearch = (filterKey) =>{

    const {UndistributedProfitService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = UndistributedProfitService.requestCandidateProfitType("profitType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateProfitTypeList=>{
      this.setState({
        candidateProfitTypeList
      })

    })

  }	 
  handleCandidateProfitTypeSearch = (value) => {
    this.executeCandidateProfitTypeSearch(value)
  }

  executeCandidateProfitDistributeStateSearch = (filterKey) =>{

    const {UndistributedProfitService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = UndistributedProfitService.requestCandidateProfitDistributeState("profitDistributeState", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateProfitDistributeStateList=>{
      this.setState({
        candidateProfitDistributeStateList
      })

    })

  }	 
  handleCandidateProfitDistributeStateSearch = (value) => {
    this.executeCandidateProfitDistributeStateSearch(value)
  }

  executeCandidateMainOrderSearch = (filterKey) =>{

    const {UndistributedProfitService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = UndistributedProfitService.requestCandidateMainOrder("mainOrder", id, filterKey, pageNo);
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

  executeCandidateCustomerSearch = (filterKey) =>{

    const {UndistributedProfitService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = UndistributedProfitService.requestCandidateCustomer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCustomerList=>{
      this.setState({
        candidateCustomerList
      })

    })

  }	 
  handleCandidateCustomerSearch = (value) => {
    this.executeCandidateCustomerSearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {UndistributedProfitService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = UndistributedProfitService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlatformList=>{
      this.setState({
        candidatePlatformList
      })

    })

  }	 
  handleCandidatePlatformSearch = (value) => {
    this.executeCandidatePlatformSearch(value)
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
    const { form, dispatch, submitting, role } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const {fieldLabels} = UndistributedProfitBase
    
    const capFirstChar = (value)=>{
    	//const upper = value.replace(/^\w/, c => c.toUpperCase());
  		const upper = value.charAt(0).toUpperCase() + value.substr(1);
  		return upper
  	}
    
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        const cappedRoleName = capFirstChar(role)
        dispatch({
          type: `${owner.type}/add${cappedRoleName}`,
          payload: { id: owner.id, role: role, parameters },
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
          type: `${owner.type}/addUndistributedProfit`,
          payload: { id: owner.id, type: 'undistributedProfit', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'undistributedProfit',listName:'未分割收入列表' },
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
    

    
    const {candidateProfitTypeList} = this.state
    if(!candidateProfitTypeList){
      return (<div>等等</div>)
    }
    if(!candidateProfitTypeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateProfitDistributeStateList} = this.state
    if(!candidateProfitDistributeStateList){
      return (<div>等等</div>)
    }
    if(!candidateProfitDistributeStateList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMainOrderList} = this.state
    if(!candidateMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateMainOrderList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePlatformList} = this.state
    if(!candidatePlatformList){
      return (<div>等等</div>)
    }
    if(!candidatePlatformList.candidates){
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
        title="新建一个未分割收入"
        content="新建一个未分割收入"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.summary} {...formItemLayout}>
                  {getFieldDecorator('summary', {
                    rules: [{ required: true, message: '请输入摘要' }],
                  })(
                    <Input placeholder="请输入摘要" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.chargeStartDate} {...formItemLayout}>
                  {getFieldDecorator('chargeStartDate', {
                    rules: [{ required: true, message: '请输入费用起始日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入费用起始日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.chargeEndDate} {...formItemLayout}>
                  {getFieldDecorator('chargeEndDate', {
                    rules: [{ required: true, message: '请输入费用结束日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入费用结束日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.amount} {...formItemLayout}>
                  {getFieldDecorator('amount', {
                    rules: [{ required: true, message: '请输入账户余额' }],
                  })(
                    <Input placeholder="请输入账户余额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.balance} {...formItemLayout}>
                  {getFieldDecorator('balance', {
                    rules: [{ required: true, message: '请输入余额' }],
                  })(
                    <Input placeholder="请输入余额" />
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
                <Form.Item label={fieldLabels.profitType} {...formItemLayout}>
                  {getFieldDecorator('profitTypeId', {
                  	initialValue: tryinit('profitType'),
                    rules: [{ required: true, message: '请输入利润类型' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateProfitTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateProfitTypeSearch}
                    placeholder="请输入利润类型"
                    
                    disabled={!availableForEdit('profitType')}
                  >
                  {candidateProfitTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.profitDistributeState} {...formItemLayout}>
                  {getFieldDecorator('profitDistributeStateId', {
                  	initialValue: tryinit('profitDistributeState'),
                    rules: [{ required: true, message: '请输入利润分配状态' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateProfitDistributeStateList.candidates}
                    
                    
                    onSearch={this.handleCandidateProfitDistributeStateSearch}
                    placeholder="请输入利润分配状态"
                    
                    disabled={!availableForEdit('profitDistributeState')}
                  >
                  {candidateProfitDistributeStateList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.customer} {...formItemLayout}>
                  {getFieldDecorator('customerId', {
                  	initialValue: tryinit('customer'),
                    rules: [{ required: true, message: '请输入用户' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCustomerList.candidates}
                    
                    
                    onSearch={this.handleCandidateCustomerSearch}
                    placeholder="请输入用户"
                    
                    disabled={!availableForEdit('customer')}
                  >
                  {candidateCustomerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.platform} {...formItemLayout}>
                  {getFieldDecorator('platformId', {
                  	initialValue: tryinit('platform'),
                    rules: [{ required: true, message: '请输入平台' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidatePlatformList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlatformSearch}
                    placeholder="请输入平台"
                    
                    disabled={!availableForEdit('platform')}
                  >
                  {candidatePlatformList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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
}))(Form.create()(UndistributedProfitCreateForm))




