import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './ProductPrice.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import ProductPriceBase from './ProductPrice.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  vehicleType: '小车',
  inspectionPrice: '158.56',
  exhaustDetectionPrice: '34.34',
  secondLevelMaintenancePrice: '146.08',
  gradeEstimationPrice: '116.75',
  agentServicePrice: '159.44',
  toStoreServicePrice: '117.67',
  discountAgentServicePrice: '14.26',
  description: '含车辆检测费$200.00元和车辆检测待办服务费$168.00元',
  productId: 'AP000001',
  cityId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class ProductPriceCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateProductSearch("")
    
    
    this.executeCandidateCitySearch("")
    
 
    
    
    
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

  
  executeCandidateProductSearch = (filterKey) =>{

    const {ProductPriceService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ProductPriceService.requestCandidateProduct("availableProduct", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateProductList=>{
      this.setState({
        candidateProductList
      })

    })

  }	 
  handleCandidateProductSearch = (value) => {
    this.executeCandidateProductSearch(value)
  }

  executeCandidateCitySearch = (filterKey) =>{

    const {ProductPriceService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ProductPriceService.requestCandidateCity("city", id, filterKey, pageNo);
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
    const {fieldLabels} = ProductPriceBase
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
          type: `${owner.type}/addProductPrice`,
          payload: { id: owner.id, type: 'productPrice', parameters },
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
          type: `${owner.type}/addProductPrice`,
          payload: { id: owner.id, type: 'productPrice', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'productPrice',listName:'产品价格列表' },
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
    

    
    const {candidateProductList} = this.state
    if(!candidateProductList){
      return (<div>等等</div>)
    }
    if(!candidateProductList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCityList} = this.state
    if(!candidateCityList){
      return (<div>等等</div>)
    }
    if(!candidateCityList.candidates){
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
        title="新建一个产品价格"
        content="新建一个产品价格"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType} {...formItemLayout}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(
                    <Input placeholder="请输入车辆类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionPrice} {...formItemLayout}>
                  {getFieldDecorator('inspectionPrice', {
                    rules: [{ required: true, message: '请输入年检费用' }],
                  })(
                    <Input placeholder="请输入年检费用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.exhaustDetectionPrice} {...formItemLayout}>
                  {getFieldDecorator('exhaustDetectionPrice', {
                    rules: [{ required: true, message: '请输入尾气检测费' }],
                  })(
                    <Input placeholder="请输入尾气检测费" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.secondLevelMaintenancePrice} {...formItemLayout}>
                  {getFieldDecorator('secondLevelMaintenancePrice', {
                    rules: [{ required: true, message: '请输入二级维护价格' }],
                  })(
                    <Input placeholder="请输入二级维护价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gradeEstimationPrice} {...formItemLayout}>
                  {getFieldDecorator('gradeEstimationPrice', {
                    rules: [{ required: true, message: '请输入等级评定价格' }],
                  })(
                    <Input placeholder="请输入等级评定价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.agentServicePrice} {...formItemLayout}>
                  {getFieldDecorator('agentServicePrice', {
                    rules: [{ required: true, message: '请输入代办服务费用' }],
                  })(
                    <Input placeholder="请输入代办服务费用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.toStoreServicePrice} {...formItemLayout}>
                  {getFieldDecorator('toStoreServicePrice', {
                    rules: [{ required: true, message: '请输入到店服务代办价格' }],
                  })(
                    <Input placeholder="请输入到店服务代办价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.discountAgentServicePrice} {...formItemLayout}>
                  {getFieldDecorator('discountAgentServicePrice', {
                    rules: [{ required: true, message: '请输入优惠代办价格' }],
                  })(
                    <Input placeholder="请输入优惠代办价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.description} {...formItemLayout}>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <Input placeholder="请输入描述" />
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
                <Form.Item label={fieldLabels.greenVehicle}  {...switchFormItemLayout}>
                  {getFieldDecorator('greenVehicle', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入新能源车' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入新能源车bool" />
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
                <Form.Item label={fieldLabels.product} {...formItemLayout}>
                  {getFieldDecorator('productId', {
                  	initialValue: tryinit('product'),
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateProductList.candidates}
                    
                    
                    onSearch={this.handleCandidateProductSearch}
                    placeholder="请输入产品名称"
                    
                    disabled={!availableForEdit('product')}
                  >
                  {candidateProductList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.productName}(${item.id})`}</Option>);
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
}))(Form.create()(ProductPriceCreateForm))




