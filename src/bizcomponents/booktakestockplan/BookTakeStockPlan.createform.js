import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookTakeStockPlan.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookTakeStockPlanBase from './BookTakeStockPlan.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  planName: '盘点计划名称',
  planDatetime: '2016-04-28 06:51:52',
  storeId: 'S000001',
  planCreatorId: 'E000001',
  takeStockStatusId: 'TSS000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookTakeStockPlanCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateStoreSearch("")
    
    
    this.executeCandidatePlanCreatorSearch("")
    
    
    this.executeCandidateTakeStockStatusSearch("")
    
 
    
    
    
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

  
  executeCandidateStoreSearch = (filterKey) =>{

    const {BookTakeStockPlanService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockPlanService.requestCandidateStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateStoreList=>{
      this.setState({
        candidateStoreList
      })

    })

  }	 
  handleCandidateStoreSearch = (value) => {
    this.executeCandidateStoreSearch(value)
  }

  executeCandidatePlanCreatorSearch = (filterKey) =>{

    const {BookTakeStockPlanService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockPlanService.requestCandidatePlanCreator("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlanCreatorList=>{
      this.setState({
        candidatePlanCreatorList
      })

    })

  }	 
  handleCandidatePlanCreatorSearch = (value) => {
    this.executeCandidatePlanCreatorSearch(value)
  }

  executeCandidateTakeStockStatusSearch = (filterKey) =>{

    const {BookTakeStockPlanService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTakeStockPlanService.requestCandidateTakeStockStatus("takeStockStatus", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTakeStockStatusList=>{
      this.setState({
        candidateTakeStockStatusList
      })

    })

  }	 
  handleCandidateTakeStockStatusSearch = (value) => {
    this.executeCandidateTakeStockStatusSearch(value)
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
    const {fieldLabels} = BookTakeStockPlanBase
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
          type: `${owner.type}/addBookTakeStockPlan`,
          payload: { id: owner.id, type: 'bookTakeStockPlan', parameters },
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
          type: `${owner.type}/addBookTakeStockPlan`,
          payload: { id: owner.id, type: 'bookTakeStockPlan', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookTakeStockPlan',listName:'图书盘点计划列表' },
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
    

    
    const {candidateStoreList} = this.state
    if(!candidateStoreList){
      return (<div>等等</div>)
    }
    if(!candidateStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePlanCreatorList} = this.state
    if(!candidatePlanCreatorList){
      return (<div>等等</div>)
    }
    if(!candidatePlanCreatorList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateTakeStockStatusList} = this.state
    if(!candidateTakeStockStatusList){
      return (<div>等等</div>)
    }
    if(!candidateTakeStockStatusList.candidates){
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
        title="新建一个图书盘点计划"
        content="新建一个图书盘点计划"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planName} {...formItemLayout}>
                  {getFieldDecorator('planName', {
                    rules: [{ required: true, message: '请输入计划名称' }],
                  })(
                    <Input placeholder="请输入计划名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planDatetime} {...formItemLayout}>
                  {getFieldDecorator('planDatetime', {
                    rules: [{ required: true, message: '请输入计划日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入计划日期时间" />
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
                <Form.Item label={fieldLabels.store} {...formItemLayout}>
                  {getFieldDecorator('storeId', {
                  	initialValue: tryinit('store'),
                    rules: [{ required: true, message: '请输入服务网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateStoreSearch}
                    placeholder="请输入服务网点"
                    
                    disabled={!availableForEdit('store')}
                  >
                  {candidateStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planCreator} {...formItemLayout}>
                  {getFieldDecorator('planCreatorId', {
                  	initialValue: tryinit('planCreator'),
                    rules: [{ required: true, message: '请输入计划创建人' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidatePlanCreatorList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlanCreatorSearch}
                    placeholder="请输入计划创建人"
                    
                    disabled={!availableForEdit('planCreator')}
                  >
                  {candidatePlanCreatorList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.takeStockStatus} {...formItemLayout}>
                  {getFieldDecorator('takeStockStatusId', {
                  	initialValue: tryinit('takeStockStatus'),
                    rules: [{ required: true, message: '请输入盘点状态' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateTakeStockStatusList.candidates}
                    
                    
                    onSearch={this.handleCandidateTakeStockStatusSearch}
                    placeholder="请输入盘点状态"
                    
                    disabled={!availableForEdit('takeStockStatus')}
                  >
                  {candidateTakeStockStatusList.candidates.map(item=>{
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
}))(Form.create()(BookTakeStockPlanCreateForm))




