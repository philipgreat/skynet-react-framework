import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './ServiceCompanyAccount.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import ServiceCompanyAccountBase from './ServiceCompanyAccount.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  serviceOrderNumber: 'SID11234',
  serviceOrderCode: 'VEHICLE_C2M_RECEIVE_IN_STORE',
  serviceOrderName: '门店收车',
  serviceFulfilledDatetime: '2015-11-11 11:07:57',
  contractId: 'CTA00001',
  contractPriceValue: '20.00',
  contractPriceType: '二次送修',
  serviceWorkerName: '周杰伦',
  serviceCompanyName: 'vehicle_service_company',
  mainOrderId: 'vehicle_inspection_order',
  merchantDiscount: '28.27',
  merchantId: 'VSC000001',
  responsibleWorkerId: 'VSCE000001',
  accountId: 'A000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class ServiceCompanyAccountCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMerchantSearch("")
    
    
    this.executeCandidateResponsibleWorkerSearch("")
    
    
    this.executeCandidateAccountSearch("")
    
 
    
    
    
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

  
  executeCandidateMerchantSearch = (filterKey) =>{

    const {ServiceCompanyAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceCompanyAccountService.requestCandidateMerchant("vehicleServiceCompany", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMerchantList=>{
      this.setState({
        candidateMerchantList
      })

    })

  }	 
  handleCandidateMerchantSearch = (value) => {
    this.executeCandidateMerchantSearch(value)
  }

  executeCandidateResponsibleWorkerSearch = (filterKey) =>{

    const {ServiceCompanyAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceCompanyAccountService.requestCandidateResponsibleWorker("vehicleServiceCompanyEmployee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateResponsibleWorkerList=>{
      this.setState({
        candidateResponsibleWorkerList
      })

    })

  }	 
  handleCandidateResponsibleWorkerSearch = (value) => {
    this.executeCandidateResponsibleWorkerSearch(value)
  }

  executeCandidateAccountSearch = (filterKey) =>{

    const {ServiceCompanyAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceCompanyAccountService.requestCandidateAccount("account", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateAccountList=>{
      this.setState({
        candidateAccountList
      })

    })

  }	 
  handleCandidateAccountSearch = (value) => {
    this.executeCandidateAccountSearch(value)
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
    const {fieldLabels} = ServiceCompanyAccountBase
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
          type: `${owner.type}/addServiceCompanyAccount`,
          payload: { id: owner.id, type: 'serviceCompanyAccount', parameters },
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
          type: `${owner.type}/addServiceCompanyAccount`,
          payload: { id: owner.id, type: 'serviceCompanyAccount', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'serviceCompanyAccount',listName:'服务商户对账单列表' },
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
    

    
    const {candidateMerchantList} = this.state
    if(!candidateMerchantList){
      return (<div>等等</div>)
    }
    if(!candidateMerchantList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateResponsibleWorkerList} = this.state
    if(!candidateResponsibleWorkerList){
      return (<div>等等</div>)
    }
    if(!candidateResponsibleWorkerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateAccountList} = this.state
    if(!candidateAccountList){
      return (<div>等等</div>)
    }
    if(!candidateAccountList.candidates){
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
        title="新建一个服务商户对账单"
        content="新建一个服务商户对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderNumber} {...formItemLayout}>
                  {getFieldDecorator('serviceOrderNumber', {
                    rules: [{ required: true, message: '请输入服务单号' }],
                  })(
                    <Input placeholder="请输入服务单号" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderCode} {...formItemLayout}>
                  {getFieldDecorator('serviceOrderCode', {
                    rules: [{ required: true, message: '请输入服务单代码' }],
                  })(
                    <Input placeholder="请输入服务单代码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderName} {...formItemLayout}>
                  {getFieldDecorator('serviceOrderName', {
                    rules: [{ required: true, message: '请输入服务单名称' }],
                  })(
                    <Input placeholder="请输入服务单名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceFulfilledDatetime} {...formItemLayout}>
                  {getFieldDecorator('serviceFulfilledDatetime', {
                    rules: [{ required: true, message: '请输入服务完成时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入服务完成时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractId} {...formItemLayout}>
                  {getFieldDecorator('contractId', {
                    rules: [{ required: true, message: '请输入合同编号' }],
                  })(
                    <Input placeholder="请输入合同编号" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceValue} {...formItemLayout}>
                  {getFieldDecorator('contractPriceValue', {
                    rules: [{ required: true, message: '请输入服务价格' }],
                  })(
                    <Input placeholder="请输入服务价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceType} {...formItemLayout}>
                  {getFieldDecorator('contractPriceType', {
                    rules: [{ required: true, message: '请输入服务类型' }],
                  })(
                    <Input placeholder="请输入服务类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceWorkerName} {...formItemLayout}>
                  {getFieldDecorator('serviceWorkerName', {
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(
                    <Input placeholder="请输入服务人员" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompanyName} {...formItemLayout}>
                  {getFieldDecorator('serviceCompanyName', {
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(
                    <Input placeholder="请输入商户名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(
                    <Input placeholder="请输入年检订单ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.merchantDiscount} {...formItemLayout}>
                  {getFieldDecorator('merchantDiscount', {
                    rules: [{ required: true, message: '请输入商户优惠' }],
                  })(
                    <Input placeholder="请输入商户优惠" />
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
                <Form.Item label={fieldLabels.merchant} {...formItemLayout}>
                  {getFieldDecorator('merchantId', {
                  	initialValue: tryinit('merchant'),
                    rules: [{ required: true, message: '请输入商户' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMerchantList.candidates}
                    
                    
                    onSearch={this.handleCandidateMerchantSearch}
                    placeholder="请输入商户"
                    
                    disabled={!availableForEdit('merchant')}
                  >
                  {candidateMerchantList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.companyName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.responsibleWorker} {...formItemLayout}>
                  {getFieldDecorator('responsibleWorkerId', {
                  	initialValue: tryinit('responsibleWorker'),
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateResponsibleWorkerList.candidates}
                    
                    
                    onSearch={this.handleCandidateResponsibleWorkerSearch}
                    placeholder="请输入服务人员"
                    
                    disabled={!availableForEdit('responsibleWorker')}
                  >
                  {candidateResponsibleWorkerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.employeeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.account} {...formItemLayout}>
                  {getFieldDecorator('accountId', {
                  	initialValue: tryinit('account'),
                    rules: [{ required: true, message: '请输入对账单' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateAccountList.candidates}
                    
                    
                    onSearch={this.handleCandidateAccountSearch}
                    placeholder="请输入对账单"
                    
                    disabled={!availableForEdit('account')}
                  >
                  {candidateAccountList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.description}(${item.id})`}</Option>);
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
}))(Form.create()(ServiceCompanyAccountCreateForm))




