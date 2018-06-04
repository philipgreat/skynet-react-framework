import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './DrugApplication.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  applicationNumber: '申请号',
  company: '公司',
  applicationType: '申请类型',
  drug: '药物',
  drugType: '药物类型',
  applicationDate: '申请日',
  createTime: '创建时间',
  platform: '平台',
  description: '描述',
}
const testValues = {};
/*
const testValues = {
  applicationNumber: 'JYSB1700087',
  applicationDate: '2018-04-07',
  companyId: 'C000001',
  applicationTypeId: 'AT000001',
  drugId: 'D000001',
  drugTypeId: 'DT000001',
  platformId: 'DP000001',
  description: 'CYHB1701175,补充申请,四川青木制药有限公司,乌苯美司,化药,,2017-05-03',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class DrugApplicationCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCompanySearch("")
    
    
    this.executeCandidateApplicationTypeSearch("")
    
    
    this.executeCandidateDrugSearch("")
    
    
    this.executeCandidateDrugTypeSearch("")
    
    
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

  
  executeCandidateCompanySearch = (filterKey) =>{

    const {DrugApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = DrugApplicationService.requestCandidateCompany("company", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCompanyList=>{
      this.setState({
        candidateCompanyList
      })

    })

  }	 
  handleCandidateCompanySearch = (value) => {
    this.executeCandidateCompanySearch(value)
  }

  executeCandidateApplicationTypeSearch = (filterKey) =>{

    const {DrugApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = DrugApplicationService.requestCandidateApplicationType("applicationType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateApplicationTypeList=>{
      this.setState({
        candidateApplicationTypeList
      })

    })

  }	 
  handleCandidateApplicationTypeSearch = (value) => {
    this.executeCandidateApplicationTypeSearch(value)
  }

  executeCandidateDrugSearch = (filterKey) =>{

    const {DrugApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = DrugApplicationService.requestCandidateDrug("drug", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDrugList=>{
      this.setState({
        candidateDrugList
      })

    })

  }	 
  handleCandidateDrugSearch = (value) => {
    this.executeCandidateDrugSearch(value)
  }

  executeCandidateDrugTypeSearch = (filterKey) =>{

    const {DrugApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = DrugApplicationService.requestCandidateDrugType("drugType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDrugTypeList=>{
      this.setState({
        candidateDrugTypeList
      })

    })

  }	 
  handleCandidateDrugTypeSearch = (value) => {
    this.executeCandidateDrugTypeSearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {DrugApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = DrugApplicationService.requestCandidatePlatform("dataPlatform", id, filterKey, pageNo);
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
    const { form, dispatch, submitting } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
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
          type: `${owner.type}/addDrugApplication`,
          payload: { id: owner.id, type: 'drugApplication', parameters },
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
          type: `${owner.type}/addDrugApplication`,
          payload: { id: owner.id, type: 'drugApplication', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'drugApplication',listName:'药物申请列表' },
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
    

    
    const {candidateCompanyList} = this.state
    if(!candidateCompanyList){
      return (<div>等等</div>)
    }
    if(!candidateCompanyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateApplicationTypeList} = this.state
    if(!candidateApplicationTypeList){
      return (<div>等等</div>)
    }
    if(!candidateApplicationTypeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateDrugList} = this.state
    if(!candidateDrugList){
      return (<div>等等</div>)
    }
    if(!candidateDrugList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateDrugTypeList} = this.state
    if(!candidateDrugTypeList){
      return (<div>等等</div>)
    }
    if(!candidateDrugTypeList.candidates){
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
        title="新建一个药物申请"
        content="新建一个药物申请"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.applicationNumber} {...formItemLayout}>
                  {getFieldDecorator('applicationNumber', {
                    rules: [{ required: true, message: '请输入申请号' }],
                  })(
                    <Input placeholder="请输入申请号" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.applicationDate} {...formItemLayout}>
                  {getFieldDecorator('applicationDate', {
                    rules: [{ required: true, message: '请输入申请日' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入申请日" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="描述" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入描述" />
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
                <Form.Item label={fieldLabels.company} {...formItemLayout}>
                  {getFieldDecorator('companyId', {
                  	initialValue: tryinit('company'),
                    rules: [{ required: true, message: '请输入公司' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCompanyList.candidates}
                    
                    
                    onSearch={this.handleCandidateCompanySearch}
                    placeholder="请输入公司"
                    
                    disabled={!availableForEdit('company')}
                  >
                  {candidateCompanyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.applicationType} {...formItemLayout}>
                  {getFieldDecorator('applicationTypeId', {
                  	initialValue: tryinit('applicationType'),
                    rules: [{ required: true, message: '请输入申请类型' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateApplicationTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateApplicationTypeSearch}
                    placeholder="请输入申请类型"
                    
                    disabled={!availableForEdit('applicationType')}
                  >
                  {candidateApplicationTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.drug} {...formItemLayout}>
                  {getFieldDecorator('drugId', {
                  	initialValue: tryinit('drug'),
                    rules: [{ required: true, message: '请输入药物' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateDrugList.candidates}
                    
                    
                    onSearch={this.handleCandidateDrugSearch}
                    placeholder="请输入药物"
                    
                    disabled={!availableForEdit('drug')}
                  >
                  {candidateDrugList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.drugType} {...formItemLayout}>
                  {getFieldDecorator('drugTypeId', {
                  	initialValue: tryinit('drugType'),
                    rules: [{ required: true, message: '请输入药物类型' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateDrugTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateDrugTypeSearch}
                    placeholder="请输入药物类型"
                    
                    disabled={!availableForEdit('drugType')}
                  >
                  {candidateDrugTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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
}))(Form.create()(DrugApplicationCreateForm))




