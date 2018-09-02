import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './PlatformConfiguration.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import PlatformConfigurationBase from './PlatformConfiguration.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  myRightsTitle: '会员权益',
  myBorrowingTitle: '借阅记录',
  myCampaignTitle: '活动记录',
  myBalanceTitle: '账户余额',
  myBookReviewTitle: '札记记录',
  myOrderTitle: '订单记录',
  platformId: 'BSP000001',
  memberServiceAgreement: '一段图片的描述，说明了该场景的实际效果。\
\
同时说明了一些可能出现的问题。\
',
  bookSharingAgreement: '一段图片的描述，说明了该场景的实际效果。\
\
同时说明了一些可能出现的问题。\
',
  accountRechargeAgreement: '一段图片的描述，说明了该场景的实际效果。\
\
同时说明了一些可能出现的问题。\
',
  messageInStoreListPage: '一段图片的描述，说明了该场景的实际效果。\
\
同时说明了一些可能出现的问题。\
',
  feedbackContactInfo: '一段图片的描述，说明了该场景的实际效果。\
\
同时说明了一些可能出现的问题。\
',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class PlatformConfigurationCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
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

  
  executeCandidatePlatformSearch = (filterKey) =>{

    const {PlatformConfigurationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = PlatformConfigurationService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
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
    const {fieldLabels} = PlatformConfigurationBase
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
          type: `${owner.type}/addPlatformConfiguration`,
          payload: { id: owner.id, type: 'platformConfiguration', parameters },
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
          type: `${owner.type}/addPlatformConfiguration`,
          payload: { id: owner.id, type: 'platformConfiguration', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'platformConfiguration',listName:'平台配置列表' },
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
        title="新建一个平台配置"
        content="新建一个平台配置"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.myRightsTitle} {...formItemLayout}>
                  {getFieldDecorator('myRightsTitle', {
                    rules: [{ required: true, message: '请输入我的权益的功能的显示名称' }],
                  })(
                    <Input placeholder="请输入我的权益的功能的显示名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.myBorrowingTitle} {...formItemLayout}>
                  {getFieldDecorator('myBorrowingTitle', {
                    rules: [{ required: true, message: '请输入我的借阅记录的功能的显示名称' }],
                  })(
                    <Input placeholder="请输入我的借阅记录的功能的显示名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.myCampaignTitle} {...formItemLayout}>
                  {getFieldDecorator('myCampaignTitle', {
                    rules: [{ required: true, message: '请输入我的活动的功能的显示名称' }],
                  })(
                    <Input placeholder="请输入我的活动的功能的显示名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.myBalanceTitle} {...formItemLayout}>
                  {getFieldDecorator('myBalanceTitle', {
                    rules: [{ required: true, message: '请输入我的余额的功能的显示名称' }],
                  })(
                    <Input placeholder="请输入我的余额的功能的显示名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.myBookReviewTitle} {...formItemLayout}>
                  {getFieldDecorator('myBookReviewTitle', {
                    rules: [{ required: true, message: '请输入我的书评的功能的显示名称' }],
                  })(
                    <Input placeholder="请输入我的书评的功能的显示名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.myOrderTitle} {...formItemLayout}>
                  {getFieldDecorator('myOrderTitle', {
                    rules: [{ required: true, message: '请输入我的订单的功能的显示名称' }],
                  })(
                    <Input placeholder="请输入我的订单的功能的显示名称" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="会员服务协议" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('memberServiceAgreement', {
                    rules: [{ required: true, message: '请输入会员服务协议' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入会员服务协议" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>

        <Card title="图书共享协议" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('bookSharingAgreement', {
                    rules: [{ required: true, message: '请输入图书共享协议' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入图书共享协议" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>

        <Card title="账户充值协议" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('accountRechargeAgreement', {
                    rules: [{ required: true, message: '请输入账户充值协议' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入账户充值协议" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>

        <Card title="网点列表页提示信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('messageInStoreListPage', {
                    rules: [{ required: true, message: '请输入网点列表页提示信息' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入网点列表页提示信息" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>

        <Card title="反馈联系信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('feedbackContactInfo', {
                    rules: [{ required: true, message: '请输入反馈联系信息' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入反馈联系信息" />
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
}))(Form.create()(PlatformConfigurationCreateForm))




