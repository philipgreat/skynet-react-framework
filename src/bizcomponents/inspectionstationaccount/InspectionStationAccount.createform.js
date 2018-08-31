import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './InspectionStationAccount.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import InspectionStationAccountBase from './InspectionStationAccount.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  serviceOrderNumber: 'SID11234',
  inspectionType: '上线检测',
  inspectionVehicleInfo: '川A44W11',
  inspectionFinalResult: '通过',
  inspectionDatetime: '2016-12-09 02:15:19',
  inspectionStationName: '大源车辆检测站',
  mainOrderNumber: 'vehicle_inspection_order',
  merchantId: 'VSC000001',
  responsibleWorkerId: 'VSCE000001',
  inspectionStationId: 'IS000001',
  accountId: 'A000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class InspectionStationAccountCreateForm extends Component {
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
    
    
    this.executeCandidateInspectionStationSearch("")
    
    
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

    const {InspectionStationAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InspectionStationAccountService.requestCandidateMerchant("vehicleServiceCompany", id, filterKey, pageNo);
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

    const {InspectionStationAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InspectionStationAccountService.requestCandidateResponsibleWorker("vehicleServiceCompanyEmployee", id, filterKey, pageNo);
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

  executeCandidateInspectionStationSearch = (filterKey) =>{

    const {InspectionStationAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InspectionStationAccountService.requestCandidateInspectionStation("inspectionStation", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateInspectionStationList=>{
      this.setState({
        candidateInspectionStationList
      })

    })

  }	 
  handleCandidateInspectionStationSearch = (value) => {
    this.executeCandidateInspectionStationSearch(value)
  }

  executeCandidateAccountSearch = (filterKey) =>{

    const {InspectionStationAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InspectionStationAccountService.requestCandidateAccount("account", id, filterKey, pageNo);
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
    const {fieldLabels} = InspectionStationAccountBase
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
          type: `${owner.type}/addInspectionStationAccount`,
          payload: { id: owner.id, type: 'inspectionStationAccount', parameters },
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
          type: `${owner.type}/addInspectionStationAccount`,
          payload: { id: owner.id, type: 'inspectionStationAccount', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'inspectionStationAccount',listName:'检测站对账单列表' },
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
    
    
    const {candidateInspectionStationList} = this.state
    if(!candidateInspectionStationList){
      return (<div>等等</div>)
    }
    if(!candidateInspectionStationList.candidates){
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
        title="新建一个检测站对账单"
        content="新建一个检测站对账单"
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
                <Form.Item label={fieldLabels.inspectionType} {...formItemLayout}>
                  {getFieldDecorator('inspectionType', {
                    rules: [{ required: true, message: '请输入年检类型' }],
                  })(
                    <Input placeholder="请输入年检类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionVehicleInfo} {...formItemLayout}>
                  {getFieldDecorator('inspectionVehicleInfo', {
                    rules: [{ required: true, message: '请输入车辆信息' }],
                  })(
                    <Input placeholder="请输入车辆信息" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionFinalResult} {...formItemLayout}>
                  {getFieldDecorator('inspectionFinalResult', {
                    rules: [{ required: true, message: '请输入检测结果' }],
                  })(
                    <Input placeholder="请输入检测结果" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionDatetime} {...formItemLayout}>
                  {getFieldDecorator('inspectionDatetime', {
                    rules: [{ required: true, message: '请输入检测日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入检测日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionStationName} {...formItemLayout}>
                  {getFieldDecorator('inspectionStationName', {
                    rules: [{ required: true, message: '请输入检测站' }],
                  })(
                    <Input placeholder="请输入检测站" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderNumber} {...formItemLayout}>
                  {getFieldDecorator('mainOrderNumber', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(
                    <Input placeholder="请输入年检订单ID" />
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
                <Form.Item label={fieldLabels.inspectionStation} {...formItemLayout}>
                  {getFieldDecorator('inspectionStationId', {
                  	initialValue: tryinit('inspectionStation'),
                    rules: [{ required: true, message: '请输入检测站' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateInspectionStationList.candidates}
                    
                    
                    onSearch={this.handleCandidateInspectionStationSearch}
                    placeholder="请输入检测站"
                    
                    disabled={!availableForEdit('inspectionStation')}
                  >
                  {candidateInspectionStationList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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
}))(Form.create()(InspectionStationAccountCreateForm))




