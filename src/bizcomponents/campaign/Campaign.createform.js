import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './Campaign.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import CampaignBase from './Campaign.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  campaignName: '世界读书日读书活动',
  campaignStartTime: '2017-10-25 11:14:02',
  campaignFinishTime: '2016-09-29 02:23:42',
  campaignHoldAddress: '成都市天府广场东侧新博物馆2楼李四光厅',
  registerDeadlineLeadHours: '1',
  minimumRegisterQuantity: '1',
  availableRegisterQuantity: '489',
  campaignStatusId: 'CS000001',
  publishStoreId: 'S000001',
  publishEmployeeId: 'E000001',
  campaignPlazaId: 'CP000001',
  campaignContent: '<div>\
	<h1>一级会员服务</h1>\
	<ul>\
		<li>可以借阅图书</li>\
		<li>可以购买</li>\
		<li>可以报名参加活动</li>\
	</ul>\
</div>',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'campaignImage',
]


class CampaignCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCampaignStatusSearch("")
    
    
    this.executeCandidatePublishStoreSearch("")
    
    
    this.executeCandidatePublishEmployeeSearch("")
    
    
    this.executeCandidateCampaignPlazaSearch("")
    
 
    
    
    
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

  
  executeCandidateCampaignStatusSearch = (filterKey) =>{

    const {CampaignService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CampaignService.requestCandidateCampaignStatus("campaignStatus", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCampaignStatusList=>{
      this.setState({
        candidateCampaignStatusList
      })

    })

  }	 
  handleCandidateCampaignStatusSearch = (value) => {
    this.executeCandidateCampaignStatusSearch(value)
  }

  executeCandidatePublishStoreSearch = (filterKey) =>{

    const {CampaignService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CampaignService.requestCandidatePublishStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePublishStoreList=>{
      this.setState({
        candidatePublishStoreList
      })

    })

  }	 
  handleCandidatePublishStoreSearch = (value) => {
    this.executeCandidatePublishStoreSearch(value)
  }

  executeCandidatePublishEmployeeSearch = (filterKey) =>{

    const {CampaignService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CampaignService.requestCandidatePublishEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePublishEmployeeList=>{
      this.setState({
        candidatePublishEmployeeList
      })

    })

  }	 
  handleCandidatePublishEmployeeSearch = (value) => {
    this.executeCandidatePublishEmployeeSearch(value)
  }

  executeCandidateCampaignPlazaSearch = (filterKey) =>{

    const {CampaignService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CampaignService.requestCandidateCampaignPlaza("campaignPlaza", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCampaignPlazaList=>{
      this.setState({
        candidateCampaignPlazaList
      })

    })

  }	 
  handleCandidateCampaignPlazaSearch = (value) => {
    this.executeCandidateCampaignPlazaSearch(value)
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
    const {fieldLabels} = CampaignBase
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
          type: `${owner.type}/addCampaign`,
          payload: { id: owner.id, type: 'campaign', parameters },
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
          type: `${owner.type}/addCampaign`,
          payload: { id: owner.id, type: 'campaign', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'campaign',listName:'活动列表' },
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
    

    
    const {candidateCampaignStatusList} = this.state
    if(!candidateCampaignStatusList){
      return (<div>等等</div>)
    }
    if(!candidateCampaignStatusList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePublishStoreList} = this.state
    if(!candidatePublishStoreList){
      return (<div>等等</div>)
    }
    if(!candidatePublishStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePublishEmployeeList} = this.state
    if(!candidatePublishEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidatePublishEmployeeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCampaignPlazaList} = this.state
    if(!candidateCampaignPlazaList){
      return (<div>等等</div>)
    }
    if(!candidateCampaignPlazaList.candidates){
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
        title="新建一个活动"
        content="新建一个活动"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignName} {...formItemLayout}>
                  {getFieldDecorator('campaignName', {
                    rules: [{ required: true, message: '请输入活动名称' }],
                  })(
                    <Input placeholder="请输入活动名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignStartTime} {...formItemLayout}>
                  {getFieldDecorator('campaignStartTime', {
                    rules: [{ required: true, message: '请输入开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入开始时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignFinishTime} {...formItemLayout}>
                  {getFieldDecorator('campaignFinishTime', {
                    rules: [{ required: true, message: '请输入结束时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入结束时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignHoldAddress} {...formItemLayout}>
                  {getFieldDecorator('campaignHoldAddress', {
                    rules: [{ required: true, message: '请输入活动地址' }],
                  })(
                    <Input placeholder="请输入活动地址" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.registerDeadlineLeadHours} {...formItemLayout}>
                  {getFieldDecorator('registerDeadlineLeadHours', {
                    rules: [{ required: true, message: '请输入开始前几小时停止注册' }],
                  })(
                    <Input placeholder="请输入开始前几小时停止注册" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.minimumRegisterQuantity} {...formItemLayout}>
                  {getFieldDecorator('minimumRegisterQuantity', {
                    rules: [{ required: true, message: '请输入最低注册数量' }],
                  })(
                    <Input placeholder="请输入最低注册数量" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableRegisterQuantity} {...formItemLayout}>
                  {getFieldDecorator('availableRegisterQuantity', {
                    rules: [{ required: true, message: '请输入报名人数限制' }],
                  })(
                    <Input placeholder="请输入报名人数限制" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="活动内容" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('campaignContent', {
                    rules: [{ required: true, message: '请输入活动内容' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入活动内容" />
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
                  buttonTitle="活动图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'campaignImage')}
                  fileList={convertedImagesValues.campaignImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignStatus} {...formItemLayout}>
                  {getFieldDecorator('campaignStatusId', {
                  	initialValue: tryinit('campaignStatus'),
                    rules: [{ required: true, message: '请输入活动状态' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCampaignStatusList.candidates}
                    
                    
                    onSearch={this.handleCandidateCampaignStatusSearch}
                    placeholder="请输入活动状态"
                    
                    disabled={!availableForEdit('campaignStatus')}
                  >
                  {candidateCampaignStatusList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.publishStore} {...formItemLayout}>
                  {getFieldDecorator('publishStoreId', {
                  	initialValue: tryinit('publishStore'),
                    rules: [{ required: true, message: '请输入发布网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidatePublishStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidatePublishStoreSearch}
                    placeholder="请输入发布网点"
                    
                    disabled={!availableForEdit('publishStore')}
                  >
                  {candidatePublishStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.publishEmployee} {...formItemLayout}>
                  {getFieldDecorator('publishEmployeeId', {
                  	initialValue: tryinit('publishEmployee'),
                    rules: [{ required: true, message: '请输入发布员工' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidatePublishEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidatePublishEmployeeSearch}
                    placeholder="请输入发布员工"
                    
                    disabled={!availableForEdit('publishEmployee')}
                  >
                  {candidatePublishEmployeeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.campaignPlaza} {...formItemLayout}>
                  {getFieldDecorator('campaignPlazaId', {
                  	initialValue: tryinit('campaignPlaza'),
                    rules: [{ required: true, message: '请输入活动广场' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCampaignPlazaList.candidates}
                    
                    
                    onSearch={this.handleCandidateCampaignPlazaSearch}
                    placeholder="请输入活动广场"
                    
                    disabled={!availableForEdit('campaignPlaza')}
                  >
                  {candidateCampaignPlazaList.candidates.map(item=>{
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
}))(Form.create()(CampaignCreateForm))




