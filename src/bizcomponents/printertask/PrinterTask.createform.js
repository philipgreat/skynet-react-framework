import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './PrinterTask.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import PrinterTaskBase from './PrinterTask.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  title: '图书上架-BC001234',
  submitter: 'Store:S000001',
  copyCount: '1',
  content1: 'BC001234',
  content2: '',
  content3: '',
  content4: '',
  content5: '',
  content6: '',
  printTaskStatus: '等待中',
  createTime: '2015-11-14 14:04:14',
  printerId: 'P000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class PrinterTaskCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidatePrinterSearch("")
    
 
    
    
    
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

  
  executeCandidatePrinterSearch = (filterKey) =>{

    const {PrinterTaskService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = PrinterTaskService.requestCandidatePrinter("printer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePrinterList=>{
      this.setState({
        candidatePrinterList
      })

    })

  }	 
  handleCandidatePrinterSearch = (value) => {
    this.executeCandidatePrinterSearch(value)
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
    const {fieldLabels} = PrinterTaskBase
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
          type: `${owner.type}/addPrinterTask`,
          payload: { id: owner.id, type: 'printerTask', parameters },
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
          type: `${owner.type}/addPrinterTask`,
          payload: { id: owner.id, type: 'printerTask', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'printerTask',listName:'打印机任务列表' },
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
    

    
    const {candidatePrinterList} = this.state
    if(!candidatePrinterList){
      return (<div>等等</div>)
    }
    if(!candidatePrinterList.candidates){
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
        title="新建一个打印机任务"
        content="新建一个打印机任务"
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
                <Form.Item label={fieldLabels.submitter} {...formItemLayout}>
                  {getFieldDecorator('submitter', {
                    rules: [{ required: true, message: '请输入提交者' }],
                  })(
                    <Input placeholder="请输入提交者" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.copyCount} {...formItemLayout}>
                  {getFieldDecorator('copyCount', {
                    rules: [{ required: true, message: '请输入打印份数' }],
                  })(
                    <Input placeholder="请输入打印份数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.content1} {...formItemLayout}>
                  {getFieldDecorator('content1', {
                    rules: [{ required: true, message: '请输入内容1' }],
                  })(
                    <Input placeholder="请输入内容1" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.content2} {...formItemLayout}>
                  {getFieldDecorator('content2', {
                    rules: [{ required: false, message: '请输入内容2' }],
                  })(
                    <Input placeholder="请输入内容2" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.content3} {...formItemLayout}>
                  {getFieldDecorator('content3', {
                    rules: [{ required: false, message: '请输入内容3' }],
                  })(
                    <Input placeholder="请输入内容3" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.content4} {...formItemLayout}>
                  {getFieldDecorator('content4', {
                    rules: [{ required: false, message: '请输入内容4' }],
                  })(
                    <Input placeholder="请输入内容4" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.content5} {...formItemLayout}>
                  {getFieldDecorator('content5', {
                    rules: [{ required: false, message: '请输入内容5' }],
                  })(
                    <Input placeholder="请输入内容5" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.content6} {...formItemLayout}>
                  {getFieldDecorator('content6', {
                    rules: [{ required: false, message: '请输入内容6' }],
                  })(
                    <Input placeholder="请输入内容6" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.printTaskStatus} {...formItemLayout}>
                  {getFieldDecorator('printTaskStatus', {
                    rules: [{ required: true, message: '请输入打印任务状态' }],
                  })(
                    <Input placeholder="请输入打印任务状态" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime} {...formItemLayout}>
                  {getFieldDecorator('createTime', {
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入创建时间" />
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
                <Form.Item label={fieldLabels.printer} {...formItemLayout}>
                  {getFieldDecorator('printerId', {
                  	initialValue: tryinit('printer'),
                    rules: [{ required: true, message: '请输入打印机' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidatePrinterList.candidates}
                    
                    
                    onSearch={this.handleCandidatePrinterSearch}
                    placeholder="请输入打印机"
                    
                    disabled={!availableForEdit('printer')}
                  >
                  {candidatePrinterList.candidates.map(item=>{
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
}))(Form.create()(PrinterTaskCreateForm))




