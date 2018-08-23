import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './Store.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import StoreBase from './Store.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  storeName: '书香慕和南道店',
  storeSubname: '亲子阅读馆',
  storeAddress: '慕和南道',
  storeOpenTime: '9:00~22:00,周末不休',
  storeOpenTimeSecond: '9:00~22:00,周末不休',
  storeRoomNumber: '16-02',
  longitude: '103.65692975995412',
  latitude: '30.53309398190027',
  storeTypeId: 'ST000001',
  cityId: 'C000001',
  platformId: 'BSP000001',
  storeImage: 'https://www.wildgratitude.com/wp-content/uploads/2014/04/stacey-couch-boulder-bookstore.jpg',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'storeImage',
]


class StoreCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateStoreTypeSearch("")
    
    
    this.executeCandidateCitySearch("")
    
    
    this.executeCandidatePlatformSearch("")
    
 
    
    
    
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

  
  executeCandidateStoreTypeSearch = (filterKey) =>{

    const {StoreService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreService.requestCandidateStoreType("storeType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateStoreTypeList=>{
      this.setState({
        candidateStoreTypeList
      })

    })

  }	 
  handleCandidateStoreTypeSearch = (value) => {
    this.executeCandidateStoreTypeSearch(value)
  }

  executeCandidateCitySearch = (filterKey) =>{

    const {StoreService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreService.requestCandidateCity("city", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCityList=>{
      this.setState({
        candidateCityList
      })

    })

  }	 
  handleCandidateCitySearch = (value) => {
    this.executeCandidateCitySearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {StoreService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlatformList=>{
      this.setState({
        candidatePlatformList
      })

    })

  }	 
  handleCandidatePlatformSearch = (value) => {
    this.executeCandidatePlatformSearch(value)
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
    const {fieldLabels} = StoreBase
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
          type: `${owner.type}/addStore`,
          payload: { id: owner.id, type: 'store', parameters },
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
          type: `${owner.type}/addStore`,
          payload: { id: owner.id, type: 'store', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'store',listName:'服务网点列表' },
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
    

    
    const {candidateStoreTypeList} = this.state
    if(!candidateStoreTypeList){
      return (<div>等等</div>)
    }
    if(!candidateStoreTypeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCityList} = this.state
    if(!candidateCityList){
      return (<div>等等</div>)
    }
    if(!candidateCityList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePlatformList} = this.state
    if(!candidatePlatformList){
      return (<div>等等</div>)
    }
    if(!candidatePlatformList.candidates){
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
        title="新建一个服务网点"
        content="新建一个服务网点"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeName} {...formItemLayout}>
                  {getFieldDecorator('storeName', {
                    rules: [{ required: true, message: '请输入网点名字' }],
                  })(
                    <Input placeholder="请输入网点名字" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeSubname} {...formItemLayout}>
                  {getFieldDecorator('storeSubname', {
                    rules: [{ required: true, message: '请输入网点副标题' }],
                  })(
                    <Input placeholder="请输入网点副标题" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeAddress} {...formItemLayout}>
                  {getFieldDecorator('storeAddress', {
                    rules: [{ required: true, message: '请输入网点地址' }],
                  })(
                    <Input placeholder="请输入网点地址" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeOpenTime} {...formItemLayout}>
                  {getFieldDecorator('storeOpenTime', {
                    rules: [{ required: true, message: '请输入网点营业时间' }],
                  })(
                    <Input placeholder="请输入网点营业时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeOpenTimeSecond} {...formItemLayout}>
                  {getFieldDecorator('storeOpenTimeSecond', {
                    rules: [{ required: true, message: '请输入网点营业时间补充说明' }],
                  })(
                    <Input placeholder="请输入网点营业时间补充说明" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeRoomNumber} {...formItemLayout}>
                  {getFieldDecorator('storeRoomNumber', {
                    rules: [{ required: true, message: '请输入网点房间号码' }],
                  })(
                    <Input placeholder="请输入网点房间号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="网点图片" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('storeImage', {
                    rules: [{ required: true, message: '请输入网点图片' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入网点图片" />
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
                  buttonTitle="网点图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'storeImage')}
                  fileList={convertedImagesValues.storeImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeType} {...formItemLayout}>
                  {getFieldDecorator('storeTypeId', {
                  	initialValue: tryinit('storeType'),
                    rules: [{ required: true, message: '请输入网点类型' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateStoreTypeList.candidates}
                    
                    
                    onSearch={this.handleCandidateStoreTypeSearch}
                    placeholder="请输入网点类型"
                    
                    disabled={!availableForEdit('storeType')}
                  >
                  {candidateStoreTypeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.city} {...formItemLayout}>
                  {getFieldDecorator('cityId', {
                  	initialValue: tryinit('city'),
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCityList.candidates}
                    
                    
                    onSearch={this.handleCandidateCitySearch}
                    placeholder="请输入城市"
                    
                    disabled={!availableForEdit('city')}
                  >
                  {candidateCityList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.platform} {...formItemLayout}>
                  {getFieldDecorator('platformId', {
                  	initialValue: tryinit('platform'),
                    rules: [{ required: true, message: '请输入平台' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidatePlatformList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlatformSearch}
                    placeholder="请输入平台"
                    
                    disabled={!availableForEdit('platform')}
                  >
                  {candidatePlatformList.candidates.map(item=>{
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
}))(Form.create()(StoreCreateForm))




