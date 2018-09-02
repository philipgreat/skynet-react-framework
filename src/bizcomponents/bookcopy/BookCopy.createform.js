import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookCopy.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookCopyBase from './BookCopy.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  bookCopySharingType: '共享',
  evaluationPrice: '43.00',
  wxaId: 'https://shuxiang.ycinfotech.cn/shuxiang/wxaService/bookCopyScanned/BC000001/',
  bookInfoId: 'B000001',
  bookCopyVendorId: 'C000001',
  locationStoreId: 'S000001',
  bookCopyStatusId: 'BCS000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookCopyCreateForm extends Component {
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
    
    
    this.executeCandidateBookCopyVendorSearch("")
    
    
    this.executeCandidateLocationStoreSearch("")
    
    
    this.executeCandidateBookCopyStatusSearch("")
    
 
    
    
    
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

    const {BookCopyService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyService.requestCandidateBookInfo("book", id, filterKey, pageNo);
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

  executeCandidateBookCopyVendorSearch = (filterKey) =>{

    const {BookCopyService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyService.requestCandidateBookCopyVendor("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyVendorList=>{
      this.setState({
        candidateBookCopyVendorList
      })

    })

  }	 
  handleCandidateBookCopyVendorSearch = (value) => {
    this.executeCandidateBookCopyVendorSearch(value)
  }

  executeCandidateLocationStoreSearch = (filterKey) =>{

    const {BookCopyService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyService.requestCandidateLocationStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateLocationStoreList=>{
      this.setState({
        candidateLocationStoreList
      })

    })

  }	 
  handleCandidateLocationStoreSearch = (value) => {
    this.executeCandidateLocationStoreSearch(value)
  }

  executeCandidateBookCopyStatusSearch = (filterKey) =>{

    const {BookCopyService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyService.requestCandidateBookCopyStatus("bookCopyStatus", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyStatusList=>{
      this.setState({
        candidateBookCopyStatusList
      })

    })

  }	 
  handleCandidateBookCopyStatusSearch = (value) => {
    this.executeCandidateBookCopyStatusSearch(value)
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
    const {fieldLabels} = BookCopyBase
    
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
          type: `${owner.type}/addBookCopy`,
          payload: { id: owner.id, type: 'bookCopy', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopy',listName:'书籍副本列表' },
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
    
    
    const {candidateBookCopyVendorList} = this.state
    if(!candidateBookCopyVendorList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyVendorList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateLocationStoreList} = this.state
    if(!candidateLocationStoreList){
      return (<div>等等</div>)
    }
    if(!candidateLocationStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyStatusList} = this.state
    if(!candidateBookCopyStatusList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyStatusList.candidates){
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
        title="新建一个书籍副本"
        content="新建一个书籍副本"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopySharingType} {...formItemLayout}>
                  {getFieldDecorator('bookCopySharingType', {
                    rules: [{ required: true, message: '请输入书籍副本共享类型' }],
                  })(
                    <Input placeholder="请输入书籍副本共享类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.evaluationPrice} {...formItemLayout}>
                  {getFieldDecorator('evaluationPrice', {
                    rules: [{ required: true, message: '请输入评估价格' }],
                  })(
                    <Input placeholder="请输入评估价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wxaId} {...formItemLayout}>
                  {getFieldDecorator('wxaId', {
                    rules: [{ required: true, message: '请输入小程序ID' }],
                  })(
                    <Input placeholder="请输入小程序ID" />
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
                <Form.Item label={fieldLabels.bookCopyVendor} {...formItemLayout}>
                  {getFieldDecorator('bookCopyVendorId', {
                  	initialValue: tryinit('bookCopyVendor'),
                    rules: [{ required: true, message: '请输入书籍副本共享人' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookCopyVendorList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopyVendorSearch}
                    placeholder="请输入书籍副本共享人"
                    
                    disabled={!availableForEdit('bookCopyVendor')}
                  >
                  {candidateBookCopyVendorList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.locationStore} {...formItemLayout}>
                  {getFieldDecorator('locationStoreId', {
                  	initialValue: tryinit('locationStore'),
                    rules: [{ required: true, message: '请输入所在网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateLocationStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateLocationStoreSearch}
                    placeholder="请输入所在网点"
                    
                    disabled={!availableForEdit('locationStore')}
                  >
                  {candidateLocationStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopyStatus} {...formItemLayout}>
                  {getFieldDecorator('bookCopyStatusId', {
                  	initialValue: tryinit('bookCopyStatus'),
                    rules: [{ required: true, message: '请输入书籍副本状态' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookCopyStatusList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopyStatusSearch}
                    placeholder="请输入书籍副本状态"
                    
                    disabled={!availableForEdit('bookCopyStatus')}
                  >
                  {candidateBookCopyStatusList.candidates.map(item=>{
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
}))(Form.create()(BookCopyCreateForm))




