import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './ServiceVehicleRepairing.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import ServiceVehicleRepairingBase from './ServiceVehicleRepairing.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  serviceStatus: '报价',
  serviceSummary: '请联系客户{姓名:电话} 沟通车辆修理事宜。',
  startTime: '2018-03-27 15:27:47',
  longitude: '105.84781284534324',
  latitude: '31.35623381544232',
  repairingQuotationTotalAmount: '859.54',
  repairingFinishedDatetime: '2015-11-29 12:50:33',
  responsibleWorkerId: 'VSCE000001',
  serviceVehicleInspectionId: 'SVI000001',
  merchantId: 'VSC000001',
  mainOrderId: 'VIO000001',
  repairingPartListComment: '正常',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'inspectionReportImage1',
  'inspectionReportImage2',
  'inspectionReportImage3',
  'inspectionReportImage4',
  'inspectionReportImage5',
  'repairingQuotationImage1',
  'repairingQuotationImage2',
  'repairingQuotationImage3',
  'repairingQuotationImage4',
  'repairingQuotationImage5',
  'repairingPartImg1',
  'repairingPartImg2',
  'repairingPartImg3',
  'repairingPartImg4',
  'repairingPartImg5',
]


class ServiceVehicleRepairingCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateResponsibleWorkerSearch("")
    
    
    this.executeCandidateServiceVehicleInspectionSearch("")
    
    
    this.executeCandidateMerchantSearch("")
    
    
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

  
  executeCandidateResponsibleWorkerSearch = (filterKey) =>{

    const {ServiceVehicleRepairingService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceVehicleRepairingService.requestCandidateResponsibleWorker("vehicleServiceCompanyEmployee", id, filterKey, pageNo);
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

  executeCandidateServiceVehicleInspectionSearch = (filterKey) =>{

    const {ServiceVehicleRepairingService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceVehicleRepairingService.requestCandidateServiceVehicleInspection("serviceVehicleInspection", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceVehicleInspectionList=>{
      this.setState({
        candidateServiceVehicleInspectionList
      })

    })

  }	 
  handleCandidateServiceVehicleInspectionSearch = (value) => {
    this.executeCandidateServiceVehicleInspectionSearch(value)
  }

  executeCandidateMerchantSearch = (filterKey) =>{

    const {ServiceVehicleRepairingService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceVehicleRepairingService.requestCandidateMerchant("vehicleServiceCompany", id, filterKey, pageNo);
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

  executeCandidateMainOrderSearch = (filterKey) =>{

    const {ServiceVehicleRepairingService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceVehicleRepairingService.requestCandidateMainOrder("vehicleInspectionOrder", id, filterKey, pageNo);
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
    const {fieldLabels} = ServiceVehicleRepairingBase
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
          type: `${owner.type}/addServiceVehicleRepairing`,
          payload: { id: owner.id, type: 'serviceVehicleRepairing', parameters },
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
          type: `${owner.type}/addServiceVehicleRepairing`,
          payload: { id: owner.id, type: 'serviceVehicleRepairing', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'serviceVehicleRepairing',listName:'维修服务列表' },
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
    

    
    const {candidateResponsibleWorkerList} = this.state
    if(!candidateResponsibleWorkerList){
      return (<div>等等</div>)
    }
    if(!candidateResponsibleWorkerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceVehicleInspectionList} = this.state
    if(!candidateServiceVehicleInspectionList){
      return (<div>等等</div>)
    }
    if(!candidateServiceVehicleInspectionList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMerchantList} = this.state
    if(!candidateMerchantList){
      return (<div>等等</div>)
    }
    if(!candidateMerchantList.candidates){
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
        title="新建一个维修服务"
        content="新建一个维修服务"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceStatus} {...formItemLayout}>
                  {getFieldDecorator('serviceStatus', {
                    rules: [{ required: true, message: '请输入服务状态' }],
                  })(
                    <Input placeholder="请输入服务状态" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceSummary} {...formItemLayout}>
                  {getFieldDecorator('serviceSummary', {
                    rules: [{ required: true, message: '请输入服务概述' }],
                  })(
                    <Input placeholder="请输入服务概述" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.startTime} {...formItemLayout}>
                  {getFieldDecorator('startTime', {
                    rules: [{ required: true, message: '请输入开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入开始时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingQuotationTotalAmount} {...formItemLayout}>
                  {getFieldDecorator('repairingQuotationTotalAmount', {
                    rules: [{ required: true, message: '请输入车辆维修报价总金额' }],
                  })(
                    <Input placeholder="请输入车辆维修报价总金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingFinishedDatetime} {...formItemLayout}>
                  {getFieldDecorator('repairingFinishedDatetime', {
                    rules: [{ required: true, message: '请输入维修完成日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入维修完成日期时间" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="车辆维修备注" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('repairingPartListComment', {
                    rules: [{ required: true, message: '请输入车辆维修备注' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入车辆维修备注" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>



        <Card title="附件" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage1')}
                  fileList={convertedImagesValues.inspectionReportImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage2')}
                  fileList={convertedImagesValues.inspectionReportImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage3')}
                  fileList={convertedImagesValues.inspectionReportImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage4')}
                  fileList={convertedImagesValues.inspectionReportImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage5')}
                  fileList={convertedImagesValues.inspectionReportImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage1')}
                  fileList={convertedImagesValues.repairingQuotationImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage2')}
                  fileList={convertedImagesValues.repairingQuotationImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage3')}
                  fileList={convertedImagesValues.repairingQuotationImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage4')}
                  fileList={convertedImagesValues.repairingQuotationImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage5')}
                  fileList={convertedImagesValues.repairingQuotationImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg1')}
                  fileList={convertedImagesValues.repairingPartImg1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg2')}
                  fileList={convertedImagesValues.repairingPartImg2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg3')}
                  fileList={convertedImagesValues.repairingPartImg3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg4')}
                  fileList={convertedImagesValues.repairingPartImg4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg5')}
                  fileList={convertedImagesValues.repairingPartImg5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

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
                <Form.Item label={fieldLabels.serviceVehicleInspection} {...formItemLayout}>
                  {getFieldDecorator('serviceVehicleInspectionId', {
                  	initialValue: tryinit('serviceVehicleInspection'),
                    rules: [{ required: true, message: '请输入车辆上线检测' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceVehicleInspectionList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceVehicleInspectionSearch}
                    placeholder="请输入车辆上线检测"
                    
                    disabled={!availableForEdit('serviceVehicleInspection')}
                  >
                  {candidateServiceVehicleInspectionList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

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
                <Form.Item label={fieldLabels.mainOrder} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                  	initialValue: tryinit('mainOrder'),
                    rules: [{ required: true, message: '请输入年检订单' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateMainOrderSearch}
                    placeholder="请输入年检订单"
                    
                    disabled={!availableForEdit('mainOrder')}
                  >
                  {candidateMainOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.orderStatus}(${item.id})`}</Option>);
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
}))(Form.create()(ServiceVehicleRepairingCreateForm))




