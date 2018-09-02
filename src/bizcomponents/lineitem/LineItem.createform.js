import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './LineItem.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import LineItemBase from './LineItem.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  name: '加到购物车中的商品名称',
  summary: '借阅图书《皮皮鲁的故事》',
  skuType: 'BookCopy',
  skuId: 'BC000001',
  skuLink: 'http://douban.com.cn/book/1298uausad',
  rawPrice: '88.40',
  itemDiscount: '4.96',
  mainOrderId: 'MO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'coverImage',
]


class LineItemCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMainOrderSearch("")
    
 
    
    
    
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

  
  executeCandidateMainOrderSearch = (filterKey) =>{

    const {LineItemService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = LineItemService.requestCandidateMainOrder("mainOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMainOrderList=>{
      this.setState({
        candidateMainOrderList
      })

    })

  }	 
  handleCandidateMainOrderSearch = (value) => {
    this.executeCandidateMainOrderSearch(value)
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
    const {fieldLabels} = LineItemBase
    
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
          type: `${owner.type}/addLineItem`,
          payload: { id: owner.id, type: 'lineItem', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'lineItem',listName:'订单项列表' },
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
    

    
    const {candidateMainOrderList} = this.state
    if(!candidateMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateMainOrderList.candidates){
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
        title="新建一个订单项"
        content="新建一个订单项"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.name} {...formItemLayout}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.summary} {...formItemLayout}>
                  {getFieldDecorator('summary', {
                    rules: [{ required: true, message: '请输入摘要' }],
                  })(
                    <Input placeholder="请输入摘要" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.skuType} {...formItemLayout}>
                  {getFieldDecorator('skuType', {
                    rules: [{ required: true, message: '请输入商品类型' }],
                  })(
                    <Input placeholder="请输入商品类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.skuId} {...formItemLayout}>
                  {getFieldDecorator('skuId', {
                    rules: [{ required: true, message: '请输入商品ID' }],
                  })(
                    <Input placeholder="请输入商品ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.skuLink} {...formItemLayout}>
                  {getFieldDecorator('skuLink', {
                    rules: [{ required: true, message: '请输入商品链接' }],
                  })(
                    <Input placeholder="请输入商品链接" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.rawPrice} {...formItemLayout}>
                  {getFieldDecorator('rawPrice', {
                    rules: [{ required: true, message: '请输入原价' }],
                  })(
                    <Input placeholder="请输入原价" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.itemDiscount} {...formItemLayout}>
                  {getFieldDecorator('itemDiscount', {
                    rules: [{ required: true, message: '请输入折扣' }],
                  })(
                    <Input placeholder="请输入折扣" />
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
                  buttonTitle="封面图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImage')}
                  fileList={convertedImagesValues.coverImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                  	initialValue: tryinit('mainOrder'),
                    rules: [{ required: true, message: '请输入主订单' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateMainOrderSearch}
                    placeholder="请输入主订单"
                    
                    disabled={!availableForEdit('mainOrder')}
                  >
                  {candidateMainOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.title}(${item.id})`}</Option>);
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
}))(Form.create()(LineItemCreateForm))




