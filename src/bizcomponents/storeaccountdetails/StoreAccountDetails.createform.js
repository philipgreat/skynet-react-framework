import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './StoreAccountDetails.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import StoreAccountDetailsBase from './StoreAccountDetails.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  summary: '共享收益',
  amount: '0.72',
  transactionTypeId: 'TT000001',
  storeAccountId: 'SA000001',
  relatedMainOrderId: 'MO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class StoreAccountDetailsCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateTransactionTypeSearch("")
    
    
    this.executeCandidateStoreAccountSearch("")
    
    
    this.executeCandidateRelatedMainOrderSearch("")
    
 
    
    
    
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

  
  executeCandidateTransactionTypeSearch = (filterKey) =>{

    const {StoreAccountDetailsService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreAccountDetailsService.requestCandidateTransactionType("transactionType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTransactionTypeList=>{
      this.setState({
        candidateTransactionTypeList
      })

    })

  }	 
  handleCandidateTransactionTypeSearch = (value) => {
    this.executeCandidateTransactionTypeSearch(value)
  }

  executeCandidateStoreAccountSearch = (filterKey) =>{

    const {StoreAccountDetailsService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreAccountDetailsService.requestCandidateStoreAccount("storeAccount", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateStoreAccountList=>{
      this.setState({
        candidateStoreAccountList
      })

    })

  }	 
  handleCandidateStoreAccountSearch = (value) => {
    this.executeCandidateStoreAccountSearch(value)
  }

  executeCandidateRelatedMainOrderSearch = (filterKey) =>{

    const {StoreAccountDetailsService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreAccountDetailsService.requestCandidateRelatedMainOrder("mainOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateRelatedMainOrderList=>{
      this.setState({
        candidateRelatedMainOrderList
      })

    })

  }	 
  handleCandidateRelatedMainOrderSearch = (value) => {
    this.executeCandidateRelatedMainOrderSearch(value)
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
    const {fieldLabels} = StoreAccountDetailsBase
    
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
          type: `${owner.type}/addStoreAccountDetails`,
          payload: { id: owner.id, type: 'storeAccountDetails', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'storeAccountDetails',listName:'网点账户明细列表' },
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
    

    
    const {candidateTransactionTypeList} = this.state
    if(!candidateTransactionTypeList){
      return (<div>等等</div>)
    }
    if(!candidateTransactionTypeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateStoreAccountList} = this.state
    if(!candidateStoreAccountList){
      return (<div>等等</div>)
    }
    if(!candidateStoreAccountList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateRelatedMainOrderList} = this.state
    if(!candidateRelatedMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateRelatedMainOrderList.candidates){
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
        title="新建一个网点账户明细"
        content="新建一个网点账户明细"
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
                <Form.Item label={fieldLabels.amount} {...formItemLayout}>
                  {getFieldDecorator('amount', {
                    rules: [{ required: true, message: '请输入账户余额' }],
                  })(
                    <Input placeholder="请输入账户余额" />
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
                <Form.Item label={fieldLabels.transactionType} {...formItemLayout}>
                  {getFieldDecorator('transactionTypeId', {
                  	initialValue: tryinit('transactionType'),
                    rules: [{ required: true, message: '请输入交易类型' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateTransactionTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateTransactionTypeSearch}
                    placeholder="请输入交易类型"
                    
                    disabled={!availableForEdit('transactionType')}
                  >
                  {candidateTransactionTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeAccount} {...formItemLayout}>
                  {getFieldDecorator('storeAccountId', {
                  	initialValue: tryinit('storeAccount'),
                    rules: [{ required: true, message: '请输入网点账户' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateStoreAccountList.candidates}
                    
                    
                    onSearch={this.handleCandidateStoreAccountSearch}
                    placeholder="请输入网点账户"
                    
                    disabled={!availableForEdit('storeAccount')}
                  >
                  {candidateStoreAccountList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.relatedMainOrder} {...formItemLayout}>
                  {getFieldDecorator('relatedMainOrderId', {
                  	initialValue: tryinit('relatedMainOrder'),
                    rules: [{ required: true, message: '请输入相关订单' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateRelatedMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateRelatedMainOrderSearch}
                    placeholder="请输入相关订单"
                    
                    disabled={!availableForEdit('relatedMainOrder')}
                  >
                  {candidateRelatedMainOrderList.candidates.map(item=>{
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
}))(Form.create()(StoreAccountDetailsCreateForm))




