import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './MemberServiceBundleSku.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import MemberServiceBundleSkuBase from './MemberServiceBundleSku.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  memberServiceName: '1个月1级会员服务',
  description: 'SKU描述信息',
  listPrice: '19.12',
  salePrice: '13.57',
  servicePeriodMonths: '1',
  memberProductId: 'MSP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class MemberServiceBundleSkuCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMemberProductSearch("")
    
 
    
    
    
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

  
  executeCandidateMemberProductSearch = (filterKey) =>{

    const {MemberServiceBundleSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberServiceBundleSkuService.requestCandidateMemberProduct("memberServiceProduct", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMemberProductList=>{
      this.setState({
        candidateMemberProductList
      })

    })

  }	 
  handleCandidateMemberProductSearch = (value) => {
    this.executeCandidateMemberProductSearch(value)
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
    const {fieldLabels} = MemberServiceBundleSkuBase
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
          type: `${owner.type}/addMemberServiceBundleSku`,
          payload: { id: owner.id, type: 'memberServiceBundleSku', parameters },
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
          type: `${owner.type}/addMemberServiceBundleSku`,
          payload: { id: owner.id, type: 'memberServiceBundleSku', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'memberServiceBundleSku',listName:'会员服务包列表' },
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
    

    
    const {candidateMemberProductList} = this.state
    if(!candidateMemberProductList){
      return (<div>等等</div>)
    }
    if(!candidateMemberProductList.candidates){
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
        title="新建一个会员服务包"
        content="新建一个会员服务包"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberServiceName} {...formItemLayout}>
                  {getFieldDecorator('memberServiceName', {
                    rules: [{ required: true, message: '请输入会员服务名称' }],
                  })(
                    <Input placeholder="请输入会员服务名称" />
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

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.listPrice} {...formItemLayout}>
                  {getFieldDecorator('listPrice', {
                    rules: [{ required: true, message: '请输入定价' }],
                  })(
                    <Input placeholder="请输入定价" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.salePrice} {...formItemLayout}>
                  {getFieldDecorator('salePrice', {
                    rules: [{ required: true, message: '请输入售价' }],
                  })(
                    <Input placeholder="请输入售价" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.servicePeriodMonths} {...formItemLayout}>
                  {getFieldDecorator('servicePeriodMonths', {
                    rules: [{ required: true, message: '请输入服务周期(月)' }],
                  })(
                    <Input placeholder="请输入服务周期(月)" />
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
                <Form.Item label={fieldLabels.memberProduct} {...formItemLayout}>
                  {getFieldDecorator('memberProductId', {
                  	initialValue: tryinit('memberProduct'),
                    rules: [{ required: true, message: '请输入会员产品' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateMemberProductList.candidates}
                    
                    
                    onSearch={this.handleCandidateMemberProductSearch}
                    placeholder="请输入会员产品"
                    
                    disabled={!availableForEdit('memberProduct')}
                  >
                  {candidateMemberProductList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.productName}(${item.id})`}</Option>);
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
}))(Form.create()(MemberServiceBundleSkuCreateForm))




