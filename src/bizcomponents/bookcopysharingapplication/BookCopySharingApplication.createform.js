import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookCopySharingApplication.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookCopySharingApplicationBase from './BookCopySharingApplication.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  bookCopyQuantity: '较少',
  contactAddress: '成都市高新区天府五街欧香小镇',
  contactName: '张三',
  contactMobile: '18012341234',
  deliverMethodId: 'DM000001',
  destinationStoreId: 'S000001',
  applicationStatusId: 'AS000001',
  customerId: 'C000001',
  employeeId: 'E000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookCopySharingApplicationCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateDeliverMethodSearch("")
    
    
    this.executeCandidateDestinationStoreSearch("")
    
    
    this.executeCandidateApplicationStatusSearch("")
    
    
    this.executeCandidateCustomerSearch("")
    
    
    this.executeCandidateEmployeeSearch("")
    
 
    
    
    
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

  
  executeCandidateDeliverMethodSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateDeliverMethod("deliverMethod", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDeliverMethodList=>{
      this.setState({
        candidateDeliverMethodList
      })

    })

  }	 
  handleCandidateDeliverMethodSearch = (value) => {
    this.executeCandidateDeliverMethodSearch(value)
  }

  executeCandidateDestinationStoreSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateDestinationStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDestinationStoreList=>{
      this.setState({
        candidateDestinationStoreList
      })

    })

  }	 
  handleCandidateDestinationStoreSearch = (value) => {
    this.executeCandidateDestinationStoreSearch(value)
  }

  executeCandidateApplicationStatusSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateApplicationStatus("applicationStatus", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateApplicationStatusList=>{
      this.setState({
        candidateApplicationStatusList
      })

    })

  }	 
  handleCandidateApplicationStatusSearch = (value) => {
    this.executeCandidateApplicationStatusSearch(value)
  }

  executeCandidateCustomerSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateCustomer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCustomerList=>{
      this.setState({
        candidateCustomerList
      })

    })

  }	 
  handleCandidateCustomerSearch = (value) => {
    this.executeCandidateCustomerSearch(value)
  }

  executeCandidateEmployeeSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateEmployee("employee", id, filterKey, pageNo);
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
    const {fieldLabels} = BookCopySharingApplicationBase
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
          type: `${owner.type}/addBookCopySharingApplication`,
          payload: { id: owner.id, type: 'bookCopySharingApplication', parameters },
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
          type: `${owner.type}/addBookCopySharingApplication`,
          payload: { id: owner.id, type: 'bookCopySharingApplication', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopySharingApplication',listName:'图书共享申请列表' },
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
    

    
    const {candidateDeliverMethodList} = this.state
    if(!candidateDeliverMethodList){
      return (<div>等等</div>)
    }
    if(!candidateDeliverMethodList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateDestinationStoreList} = this.state
    if(!candidateDestinationStoreList){
      return (<div>等等</div>)
    }
    if(!candidateDestinationStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateApplicationStatusList} = this.state
    if(!candidateApplicationStatusList){
      return (<div>等等</div>)
    }
    if(!candidateApplicationStatusList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateEmployeeList} = this.state
    if(!candidateEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateEmployeeList.candidates){
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
        title="新建一个图书共享申请"
        content="新建一个图书共享申请"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopyQuantity} {...formItemLayout}>
                  {getFieldDecorator('bookCopyQuantity', {
                    rules: [{ required: true, message: '请输入共享数量' }],
                  })(
                    <Input placeholder="请输入共享数量" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddress} {...formItemLayout}>
                  {getFieldDecorator('contactAddress', {
                    rules: [{ required: true, message: '请输入联系地址' }],
                  })(
                    <Input placeholder="请输入联系地址" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName} {...formItemLayout}>
                  {getFieldDecorator('contactName', {
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(
                    <Input placeholder="请输入联系人姓名" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactMobile} {...formItemLayout}>
                  {getFieldDecorator('contactMobile', {
                    rules: [{ required: true, message: '请输入联系人手机' }],
                  })(
                    <Input placeholder="请输入联系人手机" />
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
                <Form.Item label={fieldLabels.deliverMethod} {...formItemLayout}>
                  {getFieldDecorator('deliverMethodId', {
                  	initialValue: tryinit('deliverMethod'),
                    rules: [{ required: true, message: '请输入共享方式' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateDeliverMethodList.candidates}
                    
                    
                    onSearch={this.handleCandidateDeliverMethodSearch}
                    placeholder="请输入共享方式"
                    
                    disabled={!availableForEdit('deliverMethod')}
                  >
                  {candidateDeliverMethodList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.destinationStore} {...formItemLayout}>
                  {getFieldDecorator('destinationStoreId', {
                  	initialValue: tryinit('destinationStore'),
                    rules: [{ required: true, message: '请输入目标网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateDestinationStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateDestinationStoreSearch}
                    placeholder="请输入目标网点"
                    
                    disabled={!availableForEdit('destinationStore')}
                  >
                  {candidateDestinationStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.applicationStatus} {...formItemLayout}>
                  {getFieldDecorator('applicationStatusId', {
                  	initialValue: tryinit('applicationStatus'),
                    rules: [{ required: true, message: '请输入应用程序状态' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateApplicationStatusList.candidates}
                    
                    
                    onSearch={this.handleCandidateApplicationStatusSearch}
                    placeholder="请输入应用程序状态"
                    
                    disabled={!availableForEdit('applicationStatus')}
                  >
                  {candidateApplicationStatusList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.customer} {...formItemLayout}>
                  {getFieldDecorator('customerId', {
                  	initialValue: tryinit('customer'),
                    rules: [{ required: true, message: '请输入用户' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCustomerList.candidates}
                    
                    
                    onSearch={this.handleCandidateCustomerSearch}
                    placeholder="请输入用户"
                    
                    disabled={!availableForEdit('customer')}
                  >
                  {candidateCustomerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
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
}))(Form.create()(BookCopySharingApplicationCreateForm))




