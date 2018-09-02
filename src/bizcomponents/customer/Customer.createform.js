import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './Customer.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import CustomerBase from './Customer.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  nickName: '张俊宝',
  mobileNumber: 'A13312345678',
  realName: '张世博',
  sexuality: '男',
  memberServiceStartDate: '2017-02-11',
  memberServiceExpireDate: '2017-01-21',
  accountBalance: '77.36',
  miniProgramOpenid: 'wx012345',
  serviceAccountOpenid: 'wx012345',
  wechatUnionId: 'wx012345',
  longitude: '104.38187690743213',
  latitude: '31.818993592701258',
  birthday: '2016-12-03',
  identityCardNumber: '510922876512348875',
  familyAddress: '四川省成都市高新区文家场兴业街19-21号',
  memberServiceDailyPay: '11.16',
  memberServiceId: 'MSP000001',
  favouriteStoreId: 'S000001',
  platformId: 'BSP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'logoImage',
]


class CustomerCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMemberServiceSearch("")
    
    
    this.executeCandidateFavouriteStoreSearch("")
    
    
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

  
  executeCandidateMemberServiceSearch = (filterKey) =>{

    const {CustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerService.requestCandidateMemberService("memberServiceProduct", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMemberServiceList=>{
      this.setState({
        candidateMemberServiceList
      })

    })

  }	 
  handleCandidateMemberServiceSearch = (value) => {
    this.executeCandidateMemberServiceSearch(value)
  }

  executeCandidateFavouriteStoreSearch = (filterKey) =>{

    const {CustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerService.requestCandidateFavouriteStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateFavouriteStoreList=>{
      this.setState({
        candidateFavouriteStoreList
      })

    })

  }	 
  handleCandidateFavouriteStoreSearch = (value) => {
    this.executeCandidateFavouriteStoreSearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {CustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
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
    const { form, dispatch, submitting, role } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const {fieldLabels} = CustomerBase
    
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
          type: `${owner.type}/addCustomer`,
          payload: { id: owner.id, type: 'customer', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'customer',listName:'用户列表' },
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
    

    
    const {candidateMemberServiceList} = this.state
    if(!candidateMemberServiceList){
      return (<div>等等</div>)
    }
    if(!candidateMemberServiceList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateFavouriteStoreList} = this.state
    if(!candidateFavouriteStoreList){
      return (<div>等等</div>)
    }
    if(!candidateFavouriteStoreList.candidates){
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
        title="新建一个用户"
        content="新建一个用户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.nickName} {...formItemLayout}>
                  {getFieldDecorator('nickName', {
                    rules: [{ required: true, message: '请输入昵称' }],
                  })(
                    <Input placeholder="请输入昵称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobileNumber} {...formItemLayout}>
                  {getFieldDecorator('mobileNumber', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(
                    <Input placeholder="请输入手机号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.realName} {...formItemLayout}>
                  {getFieldDecorator('realName', {
                    rules: [{ required: true, message: '请输入的真实姓名' }],
                  })(
                    <Input placeholder="请输入的真实姓名" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sexuality} {...formItemLayout}>
                  {getFieldDecorator('sexuality', {
                    rules: [{ required: true, message: '请输入性别' }],
                  })(
                    <Input placeholder="请输入性别" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberServiceStartDate} {...formItemLayout}>
                  {getFieldDecorator('memberServiceStartDate', {
                    rules: [{ required: true, message: '请输入会员服务开始日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入会员服务开始日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberServiceExpireDate} {...formItemLayout}>
                  {getFieldDecorator('memberServiceExpireDate', {
                    rules: [{ required: true, message: '请输入会员服务到期日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入会员服务到期日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.accountBalance} {...formItemLayout}>
                  {getFieldDecorator('accountBalance', {
                    rules: [{ required: true, message: '请输入帐户余额' }],
                  })(
                    <Input placeholder="请输入帐户余额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.miniProgramOpenid} {...formItemLayout}>
                  {getFieldDecorator('miniProgramOpenid', {
                    rules: [{ required: true, message: '请输入小程序OpenID' }],
                  })(
                    <Input placeholder="请输入小程序OpenID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceAccountOpenid} {...formItemLayout}>
                  {getFieldDecorator('serviceAccountOpenid', {
                    rules: [{ required: true, message: '请输入服务号OpenID' }],
                  })(
                    <Input placeholder="请输入服务号OpenID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatUnionId} {...formItemLayout}>
                  {getFieldDecorator('wechatUnionId', {
                    rules: [{ required: true, message: '请输入微信UnionID' }],
                  })(
                    <Input placeholder="请输入微信UnionID" />
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

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.birthday} {...formItemLayout}>
                  {getFieldDecorator('birthday', {
                    rules: [{ required: true, message: '请输入生日' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入生日" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.identityCardNumber} {...formItemLayout}>
                  {getFieldDecorator('identityCardNumber', {
                    rules: [{ required: true, message: '请输入身份证号码' }],
                  })(
                    <Input placeholder="请输入身份证号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.familyAddress} {...formItemLayout}>
                  {getFieldDecorator('familyAddress', {
                    rules: [{ required: true, message: '请输入家庭地址' }],
                  })(
                    <Input placeholder="请输入家庭地址" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberServiceDailyPay} {...formItemLayout}>
                  {getFieldDecorator('memberServiceDailyPay', {
                    rules: [{ required: true, message: '请输入日均会员费' }],
                  })(
                    <Input placeholder="请输入日均会员费" />
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
                  buttonTitle="头像"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'logoImage')}
                  fileList={convertedImagesValues.logoImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberService} {...formItemLayout}>
                  {getFieldDecorator('memberServiceId', {
                  	initialValue: tryinit('memberService'),
                    rules: [{ required: true, message: '请输入会员服务' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMemberServiceList.candidates}
                    
                    
                    onSearch={this.handleCandidateMemberServiceSearch}
                    placeholder="请输入会员服务"
                    
                    disabled={!availableForEdit('memberService')}
                  >
                  {candidateMemberServiceList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.productName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.favouriteStore} {...formItemLayout}>
                  {getFieldDecorator('favouriteStoreId', {
                  	initialValue: tryinit('favouriteStore'),
                    rules: [{ required: true, message: '请输入最喜欢的网点' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateFavouriteStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateFavouriteStoreSearch}
                    placeholder="请输入最喜欢的网点"
                    
                    disabled={!availableForEdit('favouriteStore')}
                  >
                  {candidateFavouriteStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
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
}))(Form.create()(CustomerCreateForm))




