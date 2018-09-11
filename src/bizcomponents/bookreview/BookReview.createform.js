import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookReview.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookReviewBase from './BookReview.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  reviewContent: '关于这本书籍的评论',
  bookInfoId: 'B000001',
  bookCopyId: 'BC000001',
  reviewerId: 'C000001',
  bookPlazaId: 'BP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookReviewCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookInfoSearch("")
    
    
    this.executeCandidateBookCopySearch("")
    
    
    this.executeCandidateReviewerSearch("")
    
    
    this.executeCandidateBookPlazaSearch("")
    
 
    
    
    
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

  
  executeCandidateBookInfoSearch = (filterKey) =>{

    const {BookReviewService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookReviewService.requestCandidateBookInfo("book", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookInfoList=>{
      this.setState({
        candidateBookInfoList
      })

    })

  }	 
  handleCandidateBookInfoSearch = (value) => {
    this.executeCandidateBookInfoSearch(value)
  }

  executeCandidateBookCopySearch = (filterKey) =>{

    const {BookReviewService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookReviewService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
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

  executeCandidateReviewerSearch = (filterKey) =>{

    const {BookReviewService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookReviewService.requestCandidateReviewer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateReviewerList=>{
      this.setState({
        candidateReviewerList
      })

    })

  }	 
  handleCandidateReviewerSearch = (value) => {
    this.executeCandidateReviewerSearch(value)
  }

  executeCandidateBookPlazaSearch = (filterKey) =>{

    const {BookReviewService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookReviewService.requestCandidateBookPlaza("bookPlaza", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookPlazaList=>{
      this.setState({
        candidateBookPlazaList
      })

    })

  }	 
  handleCandidateBookPlazaSearch = (value) => {
    this.executeCandidateBookPlazaSearch(value)
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
    const {fieldLabels} = BookReviewBase
    
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
          type: `${owner.type}/addBookReview`,
          payload: { id: owner.id, type: 'bookReview', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookReview',listName:'书评列表' },
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
    

    
    const {candidateBookInfoList} = this.state
    if(!candidateBookInfoList){
      return (<div>等等</div>)
    }
    if(!candidateBookInfoList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyList} = this.state
    if(!candidateBookCopyList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateReviewerList} = this.state
    if(!candidateReviewerList){
      return (<div>等等</div>)
    }
    if(!candidateReviewerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookPlazaList} = this.state
    if(!candidateBookPlazaList){
      return (<div>等等</div>)
    }
    if(!candidateBookPlazaList.candidates){
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
        title="新建一个书评"
        content="新建一个书评"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.reviewContent} {...formItemLayout}>
                  {getFieldDecorator('reviewContent', {
                    rules: [{ required: true, message: '请输入评论内容' }],
                  })(
                    <Input placeholder="请输入评论内容" />
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
                <Form.Item label={fieldLabels.bookInfo} {...formItemLayout}>
                  {getFieldDecorator('bookInfoId', {
                  	initialValue: tryinit('bookInfo'),
                    rules: [{ required: true, message: '请输入书籍信息' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookInfoList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookInfoSearch}
                    placeholder="请输入书籍信息"
                    
                    disabled={!availableForEdit('bookInfo')}
                  >
                  {candidateBookInfoList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

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
                <Form.Item label={fieldLabels.reviewer} {...formItemLayout}>
                  {getFieldDecorator('reviewerId', {
                  	initialValue: tryinit('reviewer'),
                    rules: [{ required: true, message: '请输入评论人' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateReviewerList.candidates}
                    
                    
                    onSearch={this.handleCandidateReviewerSearch}
                    placeholder="请输入评论人"
                    
                    disabled={!availableForEdit('reviewer')}
                  >
                  {candidateReviewerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookPlaza} {...formItemLayout}>
                  {getFieldDecorator('bookPlazaId', {
                  	initialValue: tryinit('bookPlaza'),
                    rules: [{ required: true, message: '请输入图书天地' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookPlazaList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookPlazaSearch}
                    placeholder="请输入图书天地"
                    
                    disabled={!availableForEdit('bookPlaza')}
                  >
                  {candidateBookPlazaList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookPlazaName}(${item.id})`}</Option>);
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
}))(Form.create()(BookReviewCreateForm))




