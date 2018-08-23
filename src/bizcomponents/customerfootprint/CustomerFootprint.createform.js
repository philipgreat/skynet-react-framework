import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './CustomerFootprint.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import CustomerFootprintBase from './CustomerFootprint.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  title: '购买了图书《活着》',
  itemTitle: '《飘》',
  itemType: 'Book',
  itemId: 'B000001',
  itemDescription: '推荐3~6岁儿童阅读',
  customerId: 'C000001',
  description: '<div>\
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
  'itemImage',
]


class CustomerFootprintCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCustomerSearch("")
    
 
    
    
    
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

  
  executeCandidateCustomerSearch = (filterKey) =>{

    const {CustomerFootprintService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerFootprintService.requestCandidateCustomer("customer", id, filterKey, pageNo);
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
    const {fieldLabels} = CustomerFootprintBase
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
          type: `${owner.type}/addCustomerFootprint`,
          payload: { id: owner.id, type: 'customerFootprint', parameters },
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
          type: `${owner.type}/addCustomerFootprint`,
          payload: { id: owner.id, type: 'customerFootprint', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'customerFootprint',listName:'用户历程列表' },
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
    

    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
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
        title="新建一个用户历程"
        content="新建一个用户历程"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.title} {...formItemLayout}>
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入标题' }],
                  })(
                    <Input placeholder="请输入标题" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.itemTitle} {...formItemLayout}>
                  {getFieldDecorator('itemTitle', {
                    rules: [{ required: true, message: '请输入相关项标题' }],
                  })(
                    <Input placeholder="请输入相关项标题" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.itemType} {...formItemLayout}>
                  {getFieldDecorator('itemType', {
                    rules: [{ required: true, message: '请输入项目类型' }],
                  })(
                    <Input placeholder="请输入项目类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.itemId} {...formItemLayout}>
                  {getFieldDecorator('itemId', {
                    rules: [{ required: true, message: '请输入项Id' }],
                  })(
                    <Input placeholder="请输入项Id" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.itemDescription} {...formItemLayout}>
                  {getFieldDecorator('itemDescription', {
                    rules: [{ required: true, message: '请输入相关项描述' }],
                  })(
                    <Input placeholder="请输入相关项描述" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasRelatedItem}  {...switchFormItemLayout}>
                  {getFieldDecorator('hasRelatedItem', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是否有相关项' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否有相关项bool" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>        
        
        





        <Card title="描述" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入描述" />
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
                  buttonTitle="相关项图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'itemImage')}
                  fileList={convertedImagesValues.itemImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

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
}))(Form.create()(CustomerFootprintCreateForm))




