import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './Inform.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import InformBase from './Inform.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  comments: '用户举报',
  informerId: 'C000001',
  campaignReviewId: 'CR000001',
  bookReviewId: 'BR000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class InformCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateInformerSearch("")
    
    
    this.executeCandidateCampaignReviewSearch("")
    
    
    this.executeCandidateBookReviewSearch("")
    
 
    
    
    
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

  
  executeCandidateInformerSearch = (filterKey) =>{

    const {InformService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InformService.requestCandidateInformer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateInformerList=>{
      this.setState({
        candidateInformerList
      })

    })

  }	 
  handleCandidateInformerSearch = (value) => {
    this.executeCandidateInformerSearch(value)
  }

  executeCandidateCampaignReviewSearch = (filterKey) =>{

    const {InformService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InformService.requestCandidateCampaignReview("campaignReview", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCampaignReviewList=>{
      this.setState({
        candidateCampaignReviewList
      })

    })

  }	 
  handleCandidateCampaignReviewSearch = (value) => {
    this.executeCandidateCampaignReviewSearch(value)
  }

  executeCandidateBookReviewSearch = (filterKey) =>{

    const {InformService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = InformService.requestCandidateBookReview("bookReview", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookReviewList=>{
      this.setState({
        candidateBookReviewList
      })

    })

  }	 
  handleCandidateBookReviewSearch = (value) => {
    this.executeCandidateBookReviewSearch(value)
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
    const {fieldLabels} = InformBase
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
          type: `${owner.type}/addInform`,
          payload: { id: owner.id, type: 'inform', parameters },
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
          type: `${owner.type}/addInform`,
          payload: { id: owner.id, type: 'inform', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'inform',listName:'举报列表' },
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
    

    
    const {candidateInformerList} = this.state
    if(!candidateInformerList){
      return (<div>等等</div>)
    }
    if(!candidateInformerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCampaignReviewList} = this.state
    if(!candidateCampaignReviewList){
      return (<div>等等</div>)
    }
    if(!candidateCampaignReviewList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookReviewList} = this.state
    if(!candidateBookReviewList){
      return (<div>等等</div>)
    }
    if(!candidateBookReviewList.candidates){
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
        title="新建一个举报"
        content="新建一个举报"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.comments} {...formItemLayout}>
                  {getFieldDecorator('comments', {
                    rules: [{ required: true, message: '请输入评论' }],
                  })(
                    <Input placeholder="请输入评论" />
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
                <Form.Item label={fieldLabels.informer} {...formItemLayout}>
                  {getFieldDecorator('informerId', {
                  	initialValue: tryinit('informer'),
                    rules: [{ required: true, message: '请输入举报人' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateInformerList.candidates}
                    
                    
                    onSearch={this.handleCandidateInformerSearch}
                    placeholder="请输入举报人"
                    
                    disabled={!availableForEdit('informer')}
                  >
                  {candidateInformerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignReview} {...formItemLayout}>
                  {getFieldDecorator('campaignReviewId', {
                  	initialValue: tryinit('campaignReview'),
                    rules: [{ required: true, message: '请输入活动评论' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCampaignReviewList.candidates}
                    
                    
                    onSearch={this.handleCandidateCampaignReviewSearch}
                    placeholder="请输入活动评论"
                    
                    disabled={!availableForEdit('campaignReview')}
                  >
                  {candidateCampaignReviewList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.reviewContent}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookReview} {...formItemLayout}>
                  {getFieldDecorator('bookReviewId', {
                  	initialValue: tryinit('bookReview'),
                    rules: [{ required: true, message: '请输入书评' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookReviewList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookReviewSearch}
                    placeholder="请输入书评"
                    
                    disabled={!availableForEdit('bookReview')}
                  >
                  {candidateBookReviewList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.reviewContent}(${item.id})`}</Option>);
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
}))(Form.create()(InformCreateForm))




