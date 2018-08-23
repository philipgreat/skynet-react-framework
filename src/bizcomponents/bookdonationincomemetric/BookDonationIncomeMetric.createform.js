import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './BookDonationIncomeMetric.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookDonationIncomeMetricBase from './BookDonationIncomeMetric.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
<<<<<<< HEAD:src/bizcomponents/availableinsurance/AvailableInsurance.createform.js
  insuranceName: '基本保险',
  insuranceVendor: '太平洋财产保险',
  insurancePrice: '4.31',
  summary: '除了基本保险，还可以购买额外保险',
  productId: 'AP000001',
=======
  vendorRate: '0%',
  lendingStoreRate: '10%',
  platformRate: '10%',
  publicServiceFundRate: '80%',
  bookPlazaId: 'BP000001',
>>>>>>> 69fce8703114b35fde9082e9f806d4b3dd160efb:src/bizcomponents/bookdonationincomemetric/BookDonationIncomeMetric.createform.js
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookDonationIncomeMetricCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookPlazaSearch("")
    
 
    
    
    
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

  
  executeCandidateBookPlazaSearch = (filterKey) =>{

    const {BookDonationIncomeMetricService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookDonationIncomeMetricService.requestCandidateBookPlaza("bookPlaza", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookPlazaList=>{
      this.setState({
        candidateBookPlazaList
      })

    })

  }	 
  handleCandidateBookPlazaSearch = (value) => {
    this.executeCandidateBookPlazaSearch(value)
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
    const {fieldLabels} = BookDonationIncomeMetricBase
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
          type: `${owner.type}/addBookDonationIncomeMetric`,
          payload: { id: owner.id, type: 'bookDonationIncomeMetric', parameters },
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
          type: `${owner.type}/addBookDonationIncomeMetric`,
          payload: { id: owner.id, type: 'bookDonationIncomeMetric', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookDonationIncomeMetric',listName:'捐赠图书收益分成配置列表' },
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
    

    
    const {candidateBookPlazaList} = this.state
    if(!candidateBookPlazaList){
      return (<div>等等</div>)
    }
    if(!candidateBookPlazaList.candidates){
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
        title="新建一个捐赠图书收益分成配置"
        content="新建一个捐赠图书收益分成配置"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vendorRate} {...formItemLayout}>
                  {getFieldDecorator('vendorRate', {
                    rules: [{ required: true, message: '请输入共享者分成比' }],
                  })(
                    <Input placeholder="请输入共享者分成比" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lendingStoreRate} {...formItemLayout}>
                  {getFieldDecorator('lendingStoreRate', {
                    rules: [{ required: true, message: '请输入借出网点分成比' }],
                  })(
                    <Input placeholder="请输入借出网点分成比" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.platformRate} {...formItemLayout}>
                  {getFieldDecorator('platformRate', {
                    rules: [{ required: true, message: '请输入平台分成比' }],
                  })(
                    <Input placeholder="请输入平台分成比" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.publicServiceFundRate} {...formItemLayout}>
                  {getFieldDecorator('publicServiceFundRate', {
                    rules: [{ required: true, message: '请输入公益基金分成比' }],
                  })(
                    <Input placeholder="请输入公益基金分成比" />
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
                <Form.Item label={fieldLabels.bookPlaza} {...formItemLayout}>
                  {getFieldDecorator('bookPlazaId', {
                  	initialValue: tryinit('bookPlaza'),
                    rules: [{ required: true, message: '请输入图书天地' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookPlazaList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookPlazaSearch}
                    placeholder="请输入图书天地"
                    
                    disabled={!availableForEdit('bookPlaza')}
                  >
                  {candidateBookPlazaList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookPlazaName}(${item.id})`}</Option>);
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
}))(Form.create()(BookDonationIncomeMetricCreateForm))




