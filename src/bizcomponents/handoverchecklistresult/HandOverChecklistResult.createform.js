import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './HandOverChecklistResult.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import HandOverChecklistResultBase from './HandOverChecklistResult.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  handOverCheckItemName: '刹车是否完好?',
  handOverCheckResult: '通过',
  availableHandOverItemId: 'AHOI000001',
  serviceTypeVehicleC2mId: 'SVMC000001',
  serviceTypeVehicleM2mId: 'SVMM000001',
  serviceTypeVehicleM2cId: 'SVMM000001',
  serviceTypeFileC2mId: 'SFMC000001',
  serviceTypeFileM2mId: 'SFMM000001',
  serviceTypeFileM2cId: 'SFMM000001',
  checkItemDescription: '<div>\
	<h1>一级会员服务</h1>\
	<ul>\
		<li>可以借阅图书</li>\
		<li>可以购买</li>\
		<li>可以报名参加活动</li>\
	</ul>\
</div>',
  handOverCheckComment: '<div>\
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
  'handOverCheckEvidenceImage1',
  'handOverCheckEvidenceImage2',
  'handOverCheckEvidenceImage3',
  'handOverCheckEvidenceImage4',
  'handOverCheckEvidenceImage5',
]


class HandOverChecklistResultCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateAvailableHandOverItemSearch("")
    
    
    this.executeCandidateServiceTypeVehicleC2mSearch("")
    
    
    this.executeCandidateServiceTypeVehicleM2mSearch("")
    
    
    this.executeCandidateServiceTypeVehicleM2cSearch("")
    
    
    this.executeCandidateServiceTypeFileC2mSearch("")
    
    
    this.executeCandidateServiceTypeFileM2mSearch("")
    
    
    this.executeCandidateServiceTypeFileM2cSearch("")
    
 
    
    
    
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

  
  executeCandidateAvailableHandOverItemSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateAvailableHandOverItem("availableHandOverItem", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateAvailableHandOverItemList=>{
      this.setState({
        candidateAvailableHandOverItemList
      })

    })

  }	 
  handleCandidateAvailableHandOverItemSearch = (value) => {
    this.executeCandidateAvailableHandOverItemSearch(value)
  }

  executeCandidateServiceTypeVehicleC2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeVehicleC2m("serviceVehicleMovementC2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeVehicleC2mList=>{
      this.setState({
        candidateServiceTypeVehicleC2mList
      })

    })

  }	 
  handleCandidateServiceTypeVehicleC2mSearch = (value) => {
    this.executeCandidateServiceTypeVehicleC2mSearch(value)
  }

  executeCandidateServiceTypeVehicleM2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeVehicleM2m("serviceVehicleMovementM2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeVehicleM2mList=>{
      this.setState({
        candidateServiceTypeVehicleM2mList
      })

    })

  }	 
  handleCandidateServiceTypeVehicleM2mSearch = (value) => {
    this.executeCandidateServiceTypeVehicleM2mSearch(value)
  }

  executeCandidateServiceTypeVehicleM2cSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeVehicleM2c("serviceVehicleMovementM2c", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeVehicleM2cList=>{
      this.setState({
        candidateServiceTypeVehicleM2cList
      })

    })

  }	 
  handleCandidateServiceTypeVehicleM2cSearch = (value) => {
    this.executeCandidateServiceTypeVehicleM2cSearch(value)
  }

  executeCandidateServiceTypeFileC2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeFileC2m("serviceFileMovementC2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeFileC2mList=>{
      this.setState({
        candidateServiceTypeFileC2mList
      })

    })

  }	 
  handleCandidateServiceTypeFileC2mSearch = (value) => {
    this.executeCandidateServiceTypeFileC2mSearch(value)
  }

  executeCandidateServiceTypeFileM2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeFileM2m("serviceFileMovementM2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeFileM2mList=>{
      this.setState({
        candidateServiceTypeFileM2mList
      })

    })

  }	 
  handleCandidateServiceTypeFileM2mSearch = (value) => {
    this.executeCandidateServiceTypeFileM2mSearch(value)
  }

  executeCandidateServiceTypeFileM2cSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeFileM2c("serviceFileMovementM2c", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeFileM2cList=>{
      this.setState({
        candidateServiceTypeFileM2cList
      })

    })

  }	 
  handleCandidateServiceTypeFileM2cSearch = (value) => {
    this.executeCandidateServiceTypeFileM2cSearch(value)
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
    const {fieldLabels} = HandOverChecklistResultBase
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
          type: `${owner.type}/addHandOverChecklistResult`,
          payload: { id: owner.id, type: 'handOverChecklistResult', parameters },
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
          type: `${owner.type}/addHandOverChecklistResult`,
          payload: { id: owner.id, type: 'handOverChecklistResult', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'handOverChecklistResult',listName:'交接检查结果列表' },
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
    

    
    const {candidateAvailableHandOverItemList} = this.state
    if(!candidateAvailableHandOverItemList){
      return (<div>等等</div>)
    }
    if(!candidateAvailableHandOverItemList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeVehicleC2mList} = this.state
    if(!candidateServiceTypeVehicleC2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeVehicleC2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeVehicleM2mList} = this.state
    if(!candidateServiceTypeVehicleM2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeVehicleM2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeVehicleM2cList} = this.state
    if(!candidateServiceTypeVehicleM2cList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeVehicleM2cList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeFileC2mList} = this.state
    if(!candidateServiceTypeFileC2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeFileC2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeFileM2mList} = this.state
    if(!candidateServiceTypeFileM2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeFileM2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeFileM2cList} = this.state
    if(!candidateServiceTypeFileM2cList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeFileM2cList.candidates){
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
        title="新建一个交接检查结果"
        content="新建一个交接检查结果"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckItemName} {...formItemLayout}>
                  {getFieldDecorator('handOverCheckItemName', {
                    rules: [{ required: true, message: '请输入检查项名称' }],
                  })(
                    <Input placeholder="请输入检查项名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckResult} {...formItemLayout}>
                  {getFieldDecorator('handOverCheckResult', {
                    rules: [{ required: true, message: '请输入检车项结果' }],
                  })(
                    <Input placeholder="请输入检车项结果" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="检查项目描述" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('checkItemDescription', {
                    rules: [{ required: true, message: '请输入检查项目描述' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入检查项目描述" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>

        <Card title="检查项意见" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('handOverCheckComment', {
                    rules: [{ required: true, message: '请输入检查项意见' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入检查项意见" />
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
                  buttonTitle="凭证图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage1')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="凭证图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage2')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="凭证图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage3')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="凭证图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage4')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="凭证图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage5')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableHandOverItem} {...formItemLayout}>
                  {getFieldDecorator('availableHandOverItemId', {
                  	initialValue: tryinit('availableHandOverItem'),
                    rules: [{ required: true, message: '请输入交接检查项' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateAvailableHandOverItemList.candidates}
                    
                    
                    onSearch={this.handleCandidateAvailableHandOverItemSearch}
                    placeholder="请输入交接检查项"
                    
                    disabled={!availableForEdit('availableHandOverItem')}
                  >
                  {candidateAvailableHandOverItemList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.checkItemName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleC2m} {...formItemLayout}>
                  {getFieldDecorator('serviceTypeVehicleC2mId', {
                  	initialValue: tryinit('serviceTypeVehicleC2m'),
                    rules: [{ required: true, message: '请输入收车服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceTypeVehicleC2mList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceTypeVehicleC2mSearch}
                    placeholder="请输入收车服务"
                    
                    disabled={!availableForEdit('serviceTypeVehicleC2m')}
                  >
                  {candidateServiceTypeVehicleC2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2m} {...formItemLayout}>
                  {getFieldDecorator('serviceTypeVehicleM2mId', {
                  	initialValue: tryinit('serviceTypeVehicleM2m'),
                    rules: [{ required: true, message: '请输入移车服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceTypeVehicleM2mList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceTypeVehicleM2mSearch}
                    placeholder="请输入移车服务"
                    
                    disabled={!availableForEdit('serviceTypeVehicleM2m')}
                  >
                  {candidateServiceTypeVehicleM2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2c} {...formItemLayout}>
                  {getFieldDecorator('serviceTypeVehicleM2cId', {
                  	initialValue: tryinit('serviceTypeVehicleM2c'),
                    rules: [{ required: true, message: '请输入还车服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceTypeVehicleM2cList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceTypeVehicleM2cSearch}
                    placeholder="请输入还车服务"
                    
                    disabled={!availableForEdit('serviceTypeVehicleM2c')}
                  >
                  {candidateServiceTypeVehicleM2cList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileC2m} {...formItemLayout}>
                  {getFieldDecorator('serviceTypeFileC2mId', {
                  	initialValue: tryinit('serviceTypeFileC2m'),
                    rules: [{ required: true, message: '请输入收件服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceTypeFileC2mList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceTypeFileC2mSearch}
                    placeholder="请输入收件服务"
                    
                    disabled={!availableForEdit('serviceTypeFileC2m')}
                  >
                  {candidateServiceTypeFileC2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2m} {...formItemLayout}>
                  {getFieldDecorator('serviceTypeFileM2mId', {
                  	initialValue: tryinit('serviceTypeFileM2m'),
                    rules: [{ required: true, message: '请输入移件服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceTypeFileM2mList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceTypeFileM2mSearch}
                    placeholder="请输入移件服务"
                    
                    disabled={!availableForEdit('serviceTypeFileM2m')}
                  >
                  {candidateServiceTypeFileM2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2c} {...formItemLayout}>
                  {getFieldDecorator('serviceTypeFileM2cId', {
                  	initialValue: tryinit('serviceTypeFileM2c'),
                    rules: [{ required: true, message: '请输入还件服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateServiceTypeFileM2cList.candidates}
                    
                    
                    onSearch={this.handleCandidateServiceTypeFileM2cSearch}
                    placeholder="请输入还件服务"
                    
                    disabled={!availableForEdit('serviceTypeFileM2c')}
                  >
                  {candidateServiceTypeFileM2cList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
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
}))(Form.create()(HandOverChecklistResultCreateForm))




