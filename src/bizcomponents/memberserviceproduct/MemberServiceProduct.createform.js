import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './MemberServiceProduct.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import MemberServiceProductBase from './MemberServiceProduct.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  productName: '1级会员服务',
  productPriority: '1',
  bookBorrowingLimitPrice: '50.00',
  bookBorrowingCount: '1',
  bookPurchasingDiscountRate: '0.9',
  overduePay: '0.83',
  freeBorrowingDays: '10',
  platformId: 'BSP000001',
  productDescription: '一段图片的描述，说明了该场景的实际效果。\
\
同时说明了一些可能出现的问题。\
',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'productCoverImage',
]


class MemberServiceProductCreateForm extends Component {
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

    const {MemberServiceProductService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberServiceProductService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
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
    const {fieldLabels} = MemberServiceProductBase
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
          type: `${owner.type}/addMemberServiceProduct`,
          payload: { id: owner.id, type: 'memberServiceProduct', parameters },
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
          type: `${owner.type}/addMemberServiceProduct`,
          payload: { id: owner.id, type: 'memberServiceProduct', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'memberServiceProduct',listName:'会员服务产品列表' },
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
        title="新建一个会员服务产品"
        content="新建一个会员服务产品"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.productName} {...formItemLayout}>
                  {getFieldDecorator('productName', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <Input placeholder="请输入产品名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.productPriority} {...formItemLayout}>
                  {getFieldDecorator('productPriority', {
                    rules: [{ required: true, message: '请输入产品优先级' }],
                  })(
                    <Input placeholder="请输入产品优先级" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookBorrowingLimitPrice} {...formItemLayout}>
                  {getFieldDecorator('bookBorrowingLimitPrice', {
                    rules: [{ required: true, message: '请输入可借书最高总金额' }],
                  })(
                    <Input placeholder="请输入可借书最高总金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookBorrowingCount} {...formItemLayout}>
                  {getFieldDecorator('bookBorrowingCount', {
                    rules: [{ required: true, message: '请输入最大可借书册数' }],
                  })(
                    <Input placeholder="请输入最大可借书册数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookPurchasingDiscountRate} {...formItemLayout}>
                  {getFieldDecorator('bookPurchasingDiscountRate', {
                    rules: [{ required: true, message: '请输入购书折扣费率' }],
                  })(
                    <Input placeholder="请输入购书折扣费率" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.overduePay} {...formItemLayout}>
                  {getFieldDecorator('overduePay', {
                    rules: [{ required: true, message: '请输入超期天数' }],
                  })(
                    <Input placeholder="请输入超期天数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.freeBorrowingDays} {...formItemLayout}>
                  {getFieldDecorator('freeBorrowingDays', {
                    rules: [{ required: true, message: '请输入最长免费借阅天数' }],
                  })(
                    <Input placeholder="请输入最长免费借阅天数" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="产品描述" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('productDescription', {
                    rules: [{ required: true, message: '请输入产品描述' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入产品描述" />
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
                  buttonTitle="产品封面图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'productCoverImage')}
                  fileList={convertedImagesValues.productCoverImage}
                />
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
}))(Form.create()(MemberServiceProductCreateForm))




