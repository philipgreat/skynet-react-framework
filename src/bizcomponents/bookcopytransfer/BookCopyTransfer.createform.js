import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookCopyTransfer.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookCopyTransferBase from './BookCopyTransfer.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  bookName: '飘',
  bookCopyId: 'BC000001',
  originalStoreId: 'S000001',
  newStoreId: 'S000001',
  transferTypeId: 'TT000001',
  responsibleEmployeeId: 'E000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookCopyTransferCreateForm extends Component {
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
    
    
    this.executeCandidateOriginalStoreSearch("")
    
    
    this.executeCandidateNewStoreSearch("")
    
    
    this.executeCandidateTransferTypeSearch("")
    
    
    this.executeCandidateResponsibleEmployeeSearch("")
    
 
    
    
    
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

    const {BookCopyTransferService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyTransferService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
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

  executeCandidateOriginalStoreSearch = (filterKey) =>{

    const {BookCopyTransferService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyTransferService.requestCandidateOriginalStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOriginalStoreList=>{
      this.setState({
        candidateOriginalStoreList
      })

    })

  }	 
  handleCandidateOriginalStoreSearch = (value) => {
    this.executeCandidateOriginalStoreSearch(value)
  }

  executeCandidateNewStoreSearch = (filterKey) =>{

    const {BookCopyTransferService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyTransferService.requestCandidateNewStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateNewStoreList=>{
      this.setState({
        candidateNewStoreList
      })

    })

  }	 
  handleCandidateNewStoreSearch = (value) => {
    this.executeCandidateNewStoreSearch(value)
  }

  executeCandidateTransferTypeSearch = (filterKey) =>{

    const {BookCopyTransferService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyTransferService.requestCandidateTransferType("transferType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTransferTypeList=>{
      this.setState({
        candidateTransferTypeList
      })

    })

  }	 
  handleCandidateTransferTypeSearch = (value) => {
    this.executeCandidateTransferTypeSearch(value)
  }

  executeCandidateResponsibleEmployeeSearch = (filterKey) =>{

    const {BookCopyTransferService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyTransferService.requestCandidateResponsibleEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateResponsibleEmployeeList=>{
      this.setState({
        candidateResponsibleEmployeeList
      })

    })

  }	 
  handleCandidateResponsibleEmployeeSearch = (value) => {
    this.executeCandidateResponsibleEmployeeSearch(value)
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
    const {fieldLabels} = BookCopyTransferBase
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
          type: `${owner.type}/addBookCopyTransfer`,
          payload: { id: owner.id, type: 'bookCopyTransfer', parameters },
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
          type: `${owner.type}/addBookCopyTransfer`,
          payload: { id: owner.id, type: 'bookCopyTransfer', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopyTransfer',listName:'图书副本迁移记录列表' },
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
    
    
    const {candidateOriginalStoreList} = this.state
    if(!candidateOriginalStoreList){
      return (<div>等等</div>)
    }
    if(!candidateOriginalStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateNewStoreList} = this.state
    if(!candidateNewStoreList){
      return (<div>等等</div>)
    }
    if(!candidateNewStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateTransferTypeList} = this.state
    if(!candidateTransferTypeList){
      return (<div>等等</div>)
    }
    if(!candidateTransferTypeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateResponsibleEmployeeList} = this.state
    if(!candidateResponsibleEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateResponsibleEmployeeList.candidates){
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
        title="新建一个图书副本迁移记录"
        content="新建一个图书副本迁移记录"
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
                <Form.Item label={fieldLabels.originalStore} {...formItemLayout}>
                  {getFieldDecorator('originalStoreId', {
                  	initialValue: tryinit('originalStore'),
                    rules: [{ required: true, message: '请输入原网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateOriginalStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateOriginalStoreSearch}
                    placeholder="请输入原网点"
                    
                    disabled={!availableForEdit('originalStore')}
                  >
                  {candidateOriginalStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.newStore} {...formItemLayout}>
                  {getFieldDecorator('newStoreId', {
                  	initialValue: tryinit('newStore'),
                    rules: [{ required: true, message: '请输入新网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateNewStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateNewStoreSearch}
                    placeholder="请输入新网点"
                    
                    disabled={!availableForEdit('newStore')}
                  >
                  {candidateNewStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.transferType} {...formItemLayout}>
                  {getFieldDecorator('transferTypeId', {
                  	initialValue: tryinit('transferType'),
                    rules: [{ required: true, message: '请输入转移类型' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateTransferTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateTransferTypeSearch}
                    placeholder="请输入转移类型"
                    
                    disabled={!availableForEdit('transferType')}
                  >
                  {candidateTransferTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.responsibleEmployee} {...formItemLayout}>
                  {getFieldDecorator('responsibleEmployeeId', {
                  	initialValue: tryinit('responsibleEmployee'),
                    rules: [{ required: true, message: '请输入操作员工' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateResponsibleEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidateResponsibleEmployeeSearch}
                    placeholder="请输入操作员工"
                    
                    disabled={!availableForEdit('responsibleEmployee')}
                  >
                  {candidateResponsibleEmployeeList.candidates.map(item=>{
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
}))(Form.create()(BookCopyTransferCreateForm))




