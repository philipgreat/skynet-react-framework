import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './VehicleServiceCompanyEmployee.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import VehicleServiceCompanyEmployeeBase from './VehicleServiceCompanyEmployee.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  employeeName: '冯琪惠',
  companyName: 'vehicle_service_company',
  mobileNumber: '13812345678',
  gender: '男',
  availableState: '正常',
  identityCardNumber: '510124199012010000',
  companyId: 'VSC000001',
  inspectionStationId: 'IS000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'profileImage',
  'innocentEvidenceImage',
]


class VehicleServiceCompanyEmployeeCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCompanySearch("")
    
    
    this.executeCandidateInspectionStationSearch("")
    
 
    
    
    
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

  
  executeCandidateCompanySearch = (filterKey) =>{

    const {VehicleServiceCompanyEmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleServiceCompanyEmployeeService.requestCandidateCompany("vehicleServiceCompany", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCompanyList=>{
      this.setState({
        candidateCompanyList
      })

    })

  }	 
  handleCandidateCompanySearch = (value) => {
    this.executeCandidateCompanySearch(value)
  }

  executeCandidateInspectionStationSearch = (filterKey) =>{

    const {VehicleServiceCompanyEmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleServiceCompanyEmployeeService.requestCandidateInspectionStation("inspectionStation", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateInspectionStationList=>{
      this.setState({
        candidateInspectionStationList
      })

    })

  }	 
  handleCandidateInspectionStationSearch = (value) => {
    this.executeCandidateInspectionStationSearch(value)
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
    const {fieldLabels} = VehicleServiceCompanyEmployeeBase
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
          type: `${owner.type}/addVehicleServiceCompanyEmployee`,
          payload: { id: owner.id, type: 'vehicleServiceCompanyEmployee', parameters },
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
          type: `${owner.type}/addVehicleServiceCompanyEmployee`,
          payload: { id: owner.id, type: 'vehicleServiceCompanyEmployee', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleServiceCompanyEmployee',listName:'商户员工列表' },
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
    

    
    const {candidateCompanyList} = this.state
    if(!candidateCompanyList){
      return (<div>等等</div>)
    }
    if(!candidateCompanyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateInspectionStationList} = this.state
    if(!candidateInspectionStationList){
      return (<div>等等</div>)
    }
    if(!candidateInspectionStationList.candidates){
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
        title="新建一个商户员工"
        content="新建一个商户员工"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.employeeName} {...formItemLayout}>
                  {getFieldDecorator('employeeName', {
                    rules: [{ required: true, message: '请输入员工姓名' }],
                  })(
                    <Input placeholder="请输入员工姓名" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.companyName} {...formItemLayout}>
                  {getFieldDecorator('companyName', {
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(
                    <Input placeholder="请输入商户名称" />
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
                <Form.Item label={fieldLabels.gender} {...formItemLayout}>
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: '请输入性别' }],
                  })(
                    <Input placeholder="请输入性别" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableState} {...formItemLayout}>
                  {getFieldDecorator('availableState', {
                    rules: [{ required: true, message: '请输入工作状态' }],
                  })(
                    <Input placeholder="请输入工作状态" />
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

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderDispatcher}  {...switchFormItemLayout}>
                  {getFieldDecorator('orderDispatcher', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入派单员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入派单员bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeReceiver}  {...switchFormItemLayout}>
                  {getFieldDecorator('storeReceiver', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入门店接单员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入门店接单员bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.movementAgent}  {...switchFormItemLayout}>
                  {getFieldDecorator('movementAgent', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入接车代审员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入接车代审员bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionAgent}  {...switchFormItemLayout}>
                  {getFieldDecorator('inspectionAgent', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入驻站代审员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入驻站代审员bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairman}  {...switchFormItemLayout}>
                  {getFieldDecorator('repairman', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入维修员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入维修员bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.printer}  {...switchFormItemLayout}>
                  {getFieldDecorator('printer', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入票证打印员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入票证打印员bool" />
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
                  buttonTitle="证件照片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'profileImage')}
                  fileList={convertedImagesValues.profileImage}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="无犯罪记录证明"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'innocentEvidenceImage')}
                  fileList={convertedImagesValues.innocentEvidenceImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.company} {...formItemLayout}>
                  {getFieldDecorator('companyId', {
                  	initialValue: tryinit('company'),
                    rules: [{ required: true, message: '请输入商户' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCompanyList.candidates}
                    
                    
                    onSearch={this.handleCandidateCompanySearch}
                    placeholder="请输入商户"
                    
                    disabled={!availableForEdit('company')}
                  >
                  {candidateCompanyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.companyName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionStation} {...formItemLayout}>
                  {getFieldDecorator('inspectionStationId', {
                  	initialValue: tryinit('inspectionStation'),
                    rules: [{ required: true, message: '请输入检测站' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateInspectionStationList.candidates}
                    
                    
                    onSearch={this.handleCandidateInspectionStationSearch}
                    placeholder="请输入检测站"
                    
                    disabled={!availableForEdit('inspectionStation')}
                  >
                  {candidateInspectionStationList.candidates.map(item=>{
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
}))(Form.create()(VehicleServiceCompanyEmployeeCreateForm))




