import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookCopyOperationRecord.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookCopyOperationRecordBase from './BookCopyOperationRecord.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  bookName: '飘',
  bookCopyId: 'BC000001',
  bookCopyOperateTypeId: 'BCOT000001',
  operateStoreId: 'S000001',
  operationEmployeeId: 'E000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookCopyOperationRecordCreateForm extends Component {
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
    
    
    this.executeCandidateBookCopyOperateTypeSearch("")
    
    
    this.executeCandidateOperateStoreSearch("")
    
    
    this.executeCandidateOperationEmployeeSearch("")
    
 
    
    
    
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

    const {BookCopyOperationRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyOperationRecordService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
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

  executeCandidateBookCopyOperateTypeSearch = (filterKey) =>{

    const {BookCopyOperationRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyOperationRecordService.requestCandidateBookCopyOperateType("bookCopyOperateType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyOperateTypeList=>{
      this.setState({
        candidateBookCopyOperateTypeList
      })

    })

  }	 
  handleCandidateBookCopyOperateTypeSearch = (value) => {
    this.executeCandidateBookCopyOperateTypeSearch(value)
  }

  executeCandidateOperateStoreSearch = (filterKey) =>{

    const {BookCopyOperationRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyOperationRecordService.requestCandidateOperateStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOperateStoreList=>{
      this.setState({
        candidateOperateStoreList
      })

    })

  }	 
  handleCandidateOperateStoreSearch = (value) => {
    this.executeCandidateOperateStoreSearch(value)
  }

  executeCandidateOperationEmployeeSearch = (filterKey) =>{

    const {BookCopyOperationRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyOperationRecordService.requestCandidateOperationEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOperationEmployeeList=>{
      this.setState({
        candidateOperationEmployeeList
      })

    })

  }	 
  handleCandidateOperationEmployeeSearch = (value) => {
    this.executeCandidateOperationEmployeeSearch(value)
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
    const {fieldLabels} = BookCopyOperationRecordBase
    
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
          type: `${owner.type}/addBookCopyOperationRecord`,
          payload: { id: owner.id, type: 'bookCopyOperationRecord', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopyOperationRecord',listName:'书籍副本操作记录列表' },
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
    
    
    const {candidateBookCopyOperateTypeList} = this.state
    if(!candidateBookCopyOperateTypeList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyOperateTypeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateOperateStoreList} = this.state
    if(!candidateOperateStoreList){
      return (<div>等等</div>)
    }
    if(!candidateOperateStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateOperationEmployeeList} = this.state
    if(!candidateOperationEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateOperationEmployeeList.candidates){
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
        title="新建一个书籍副本操作记录"
        content="新建一个书籍副本操作记录"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookName} {...formItemLayout}>
                  {getFieldDecorator('bookName', {
                    rules: [{ required: true, message: '请输入书名' }],
                  })(
                    <Input placeholder="请输入书名" />
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
                <Form.Item label={fieldLabels.bookCopyOperateType} {...formItemLayout}>
                  {getFieldDecorator('bookCopyOperateTypeId', {
                  	initialValue: tryinit('bookCopyOperateType'),
                    rules: [{ required: true, message: '请输入书籍副本操作类型' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookCopyOperateTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopyOperateTypeSearch}
                    placeholder="请输入书籍副本操作类型"
                    
                    disabled={!availableForEdit('bookCopyOperateType')}
                  >
                  {candidateBookCopyOperateTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.operateStore} {...formItemLayout}>
                  {getFieldDecorator('operateStoreId', {
                  	initialValue: tryinit('operateStore'),
                    rules: [{ required: true, message: '请输入执行网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateOperateStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateOperateStoreSearch}
                    placeholder="请输入执行网点"
                    
                    disabled={!availableForEdit('operateStore')}
                  >
                  {candidateOperateStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.operationEmployee} {...formItemLayout}>
                  {getFieldDecorator('operationEmployeeId', {
                  	initialValue: tryinit('operationEmployee'),
                    rules: [{ required: true, message: '请输入执行员工' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateOperationEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidateOperationEmployeeSearch}
                    placeholder="请输入执行员工"
                    
                    disabled={!availableForEdit('operationEmployee')}
                  >
                  {candidateOperationEmployeeList.candidates.map(item=>{
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
}))(Form.create()(BookCopyOperationRecordCreateForm))




