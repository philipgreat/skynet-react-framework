import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookTakeStockResult.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookTakeStockResultBase from './BookTakeStockResult.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  bookName: '飘',
  bookCopyId: 'BC000001',
  bookTakeStockStatusId: 'BTSS000001',
  employeeId: 'E000001',
  takeStoreResultsId: 'TSR000001',
  bookTakeStockPlanId: 'BTSP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookTakeStockResultCreateForm extends Component {
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
    
    
    this.executeCandidateBookTakeStockStatusSearch("")
    
    
    this.executeCandidateEmployeeSearch("")
    
    
    this.executeCandidateTakeStoreResultsSearch("")
    
    
    this.executeCandidateBookTakeStockPlanSearch("")
    
 
    
    
    
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

    const {BookTakeStockResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockResultService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
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

  executeCandidateBookTakeStockStatusSearch = (filterKey) =>{

    const {BookTakeStockResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockResultService.requestCandidateBookTakeStockStatus("bookTakeStockStatus", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookTakeStockStatusList=>{
      this.setState({
        candidateBookTakeStockStatusList
      })

    })

  }	 
  handleCandidateBookTakeStockStatusSearch = (value) => {
    this.executeCandidateBookTakeStockStatusSearch(value)
  }

  executeCandidateEmployeeSearch = (filterKey) =>{

    const {BookTakeStockResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockResultService.requestCandidateEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateEmployeeList=>{
      this.setState({
        candidateEmployeeList
      })

    })

  }	 
  handleCandidateEmployeeSearch = (value) => {
    this.executeCandidateEmployeeSearch(value)
  }

  executeCandidateTakeStoreResultsSearch = (filterKey) =>{

    const {BookTakeStockResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockResultService.requestCandidateTakeStoreResults("takeStoreResults", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTakeStoreResultsList=>{
      this.setState({
        candidateTakeStoreResultsList
      })

    })

  }	 
  handleCandidateTakeStoreResultsSearch = (value) => {
    this.executeCandidateTakeStoreResultsSearch(value)
  }

  executeCandidateBookTakeStockPlanSearch = (filterKey) =>{

    const {BookTakeStockResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockResultService.requestCandidateBookTakeStockPlan("bookTakeStockPlan", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookTakeStockPlanList=>{
      this.setState({
        candidateBookTakeStockPlanList
      })

    })

  }	 
  handleCandidateBookTakeStockPlanSearch = (value) => {
    this.executeCandidateBookTakeStockPlanSearch(value)
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
    const {fieldLabels} = BookTakeStockResultBase
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
          type: `${owner.type}/addBookTakeStockResult`,
          payload: { id: owner.id, type: 'bookTakeStockResult', parameters },
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
          type: `${owner.type}/addBookTakeStockResult`,
          payload: { id: owner.id, type: 'bookTakeStockResult', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookTakeStockResult',listName:'图书盘点结果列表' },
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
    
    
    const {candidateBookTakeStockStatusList} = this.state
    if(!candidateBookTakeStockStatusList){
      return (<div>等等</div>)
    }
    if(!candidateBookTakeStockStatusList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateEmployeeList} = this.state
    if(!candidateEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateEmployeeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateTakeStoreResultsList} = this.state
    if(!candidateTakeStoreResultsList){
      return (<div>等等</div>)
    }
    if(!candidateTakeStoreResultsList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookTakeStockPlanList} = this.state
    if(!candidateBookTakeStockPlanList){
      return (<div>等等</div>)
    }
    if(!candidateBookTakeStockPlanList.candidates){
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
        title="新建一个图书盘点结果"
        content="新建一个图书盘点结果"
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
                <Form.Item label={fieldLabels.bookTakeStockStatus} {...formItemLayout}>
                  {getFieldDecorator('bookTakeStockStatusId', {
                  	initialValue: tryinit('bookTakeStockStatus'),
                    rules: [{ required: true, message: '请输入图书盘点状态' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookTakeStockStatusList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookTakeStockStatusSearch}
                    placeholder="请输入图书盘点状态"
                    
                    disabled={!availableForEdit('bookTakeStockStatus')}
                  >
                  {candidateBookTakeStockStatusList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.employee} {...formItemLayout}>
                  {getFieldDecorator('employeeId', {
                  	initialValue: tryinit('employee'),
                    rules: [{ required: true, message: '请输入员工' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidateEmployeeSearch}
                    placeholder="请输入员工"
                    
                    disabled={!availableForEdit('employee')}
                  >
                  {candidateEmployeeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.takeStoreResults} {...formItemLayout}>
                  {getFieldDecorator('takeStoreResultsId', {
                  	initialValue: tryinit('takeStoreResults'),
                    rules: [{ required: true, message: '请输入盘点结果' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateTakeStoreResultsList.candidates}
                    
                    
                    onSearch={this.handleCandidateTakeStoreResultsSearch}
                    placeholder="请输入盘点结果"
                    
                    disabled={!availableForEdit('takeStoreResults')}
                  >
                  {candidateTakeStoreResultsList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookTakeStockPlan} {...formItemLayout}>
                  {getFieldDecorator('bookTakeStockPlanId', {
                  	initialValue: tryinit('bookTakeStockPlan'),
                    rules: [{ required: true, message: '请输入图书盘点计划' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookTakeStockPlanList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookTakeStockPlanSearch}
                    placeholder="请输入图书盘点计划"
                    
                    disabled={!availableForEdit('bookTakeStockPlan')}
                  >
                  {candidateBookTakeStockPlanList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.planName}(${item.id})`}</Option>);
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
}))(Form.create()(BookTakeStockResultCreateForm))




