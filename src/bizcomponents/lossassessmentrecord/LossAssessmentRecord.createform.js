import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './LossAssessmentRecord.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import LossAssessmentRecordBase from './LossAssessmentRecord.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  lossComment: '第2页到第5页缺失',
  bookCopyEvaluationPrice: '29.18',
  bookCopyId: 'BC000001',
  recordStoreId: 'S000001',
  lossDiscountId: 'LD000001',
  recordPersonId: 'E000001',
  damagePersonId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'lossImage',
]


class LossAssessmentRecordCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookCopySearch("")
    
    
    this.executeCandidateRecordStoreSearch("")
    
    
    this.executeCandidateLossDiscountSearch("")
    
    
    this.executeCandidateRecordPersonSearch("")
    
    
    this.executeCandidateDamagePersonSearch("")
    
 
    
    
    
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

  
  executeCandidateBookCopySearch = (filterKey) =>{

    const {LossAssessmentRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = LossAssessmentRecordService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyList=>{
      this.setState({
        candidateBookCopyList
      })

    })

  }	 
  handleCandidateBookCopySearch = (value) => {
    this.executeCandidateBookCopySearch(value)
  }

  executeCandidateRecordStoreSearch = (filterKey) =>{

    const {LossAssessmentRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = LossAssessmentRecordService.requestCandidateRecordStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateRecordStoreList=>{
      this.setState({
        candidateRecordStoreList
      })

    })

  }	 
  handleCandidateRecordStoreSearch = (value) => {
    this.executeCandidateRecordStoreSearch(value)
  }

  executeCandidateLossDiscountSearch = (filterKey) =>{

    const {LossAssessmentRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = LossAssessmentRecordService.requestCandidateLossDiscount("lossDiscount", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateLossDiscountList=>{
      this.setState({
        candidateLossDiscountList
      })

    })

  }	 
  handleCandidateLossDiscountSearch = (value) => {
    this.executeCandidateLossDiscountSearch(value)
  }

  executeCandidateRecordPersonSearch = (filterKey) =>{

    const {LossAssessmentRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = LossAssessmentRecordService.requestCandidateRecordPerson("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateRecordPersonList=>{
      this.setState({
        candidateRecordPersonList
      })

    })

  }	 
  handleCandidateRecordPersonSearch = (value) => {
    this.executeCandidateRecordPersonSearch(value)
  }

  executeCandidateDamagePersonSearch = (filterKey) =>{

    const {LossAssessmentRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = LossAssessmentRecordService.requestCandidateDamagePerson("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDamagePersonList=>{
      this.setState({
        candidateDamagePersonList
      })

    })

  }	 
  handleCandidateDamagePersonSearch = (value) => {
    this.executeCandidateDamagePersonSearch(value)
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
    const {fieldLabels} = LossAssessmentRecordBase
    
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
          type: `${owner.type}/addLossAssessmentRecord`,
          payload: { id: owner.id, type: 'lossAssessmentRecord', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'lossAssessmentRecord',listName:'定损记录列表' },
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
    

    
    const {candidateBookCopyList} = this.state
    if(!candidateBookCopyList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateRecordStoreList} = this.state
    if(!candidateRecordStoreList){
      return (<div>等等</div>)
    }
    if(!candidateRecordStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateLossDiscountList} = this.state
    if(!candidateLossDiscountList){
      return (<div>等等</div>)
    }
    if(!candidateLossDiscountList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateRecordPersonList} = this.state
    if(!candidateRecordPersonList){
      return (<div>等等</div>)
    }
    if(!candidateRecordPersonList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateDamagePersonList} = this.state
    if(!candidateDamagePersonList){
      return (<div>等等</div>)
    }
    if(!candidateDamagePersonList.candidates){
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
        title="新建一个定损记录"
        content="新建一个定损记录"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lossComment} {...formItemLayout}>
                  {getFieldDecorator('lossComment', {
                    rules: [{ required: true, message: '请输入定损备注' }],
                  })(
                    <Input placeholder="请输入定损备注" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopyEvaluationPrice} {...formItemLayout}>
                  {getFieldDecorator('bookCopyEvaluationPrice', {
                    rules: [{ required: true, message: '请输入评估价' }],
                  })(
                    <Input placeholder="请输入评估价" />
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
                  buttonTitle="定损照片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'lossImage')}
                  fileList={convertedImagesValues.lossImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopy} {...formItemLayout}>
                  {getFieldDecorator('bookCopyId', {
                  	initialValue: tryinit('bookCopy'),
                    rules: [{ required: true, message: '请输入书籍副本' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookCopyList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopySearch}
                    placeholder="请输入书籍副本"
                    
                    disabled={!availableForEdit('bookCopy')}
                  >
                  {candidateBookCopyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookCopySharingType}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.recordStore} {...formItemLayout}>
                  {getFieldDecorator('recordStoreId', {
                  	initialValue: tryinit('recordStore'),
                    rules: [{ required: true, message: '请输入操作网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateRecordStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateRecordStoreSearch}
                    placeholder="请输入操作网点"
                    
                    disabled={!availableForEdit('recordStore')}
                  >
                  {candidateRecordStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lossDiscount} {...formItemLayout}>
                  {getFieldDecorator('lossDiscountId', {
                  	initialValue: tryinit('lossDiscount'),
                    rules: [{ required: true, message: '请输入定损折扣' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateLossDiscountList.candidates}
                    
                    
                    onSearch={this.handleCandidateLossDiscountSearch}
                    placeholder="请输入定损折扣"
                    
                    disabled={!availableForEdit('lossDiscount')}
                  >
                  {candidateLossDiscountList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.recordPerson} {...formItemLayout}>
                  {getFieldDecorator('recordPersonId', {
                  	initialValue: tryinit('recordPerson'),
                    rules: [{ required: true, message: '请输入定损记录人' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateRecordPersonList.candidates}
                    
                    
                    onSearch={this.handleCandidateRecordPersonSearch}
                    placeholder="请输入定损记录人"
                    
                    disabled={!availableForEdit('recordPerson')}
                  >
                  {candidateRecordPersonList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.damagePerson} {...formItemLayout}>
                  {getFieldDecorator('damagePersonId', {
                  	initialValue: tryinit('damagePerson'),
                    rules: [{ required: false, message: '请输入损害人' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateDamagePersonList.candidates}
                    
                    
                    onSearch={this.handleCandidateDamagePersonSearch}
                    placeholder="请输入损害人"
                    
                    disabled={!availableForEdit('damagePerson')}
                  >
                  {candidateDamagePersonList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
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
}))(Form.create()(LossAssessmentRecordCreateForm))




