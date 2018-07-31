import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './CampaignRegisterHistory.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import CampaignRegisterHistoryBase from './CampaignRegisterHistory.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  registerDatetime: '2016-11-29 19:31:52',
  campaignId: 'C000001',
  registerMemberId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class CampaignRegisterHistoryCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCampaignSearch("")
    
    
    this.executeCandidateRegisterMemberSearch("")
    
 
    
    
    
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

  
  executeCandidateCampaignSearch = (filterKey) =>{

    const {CampaignRegisterHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CampaignRegisterHistoryService.requestCandidateCampaign("campaign", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCampaignList=>{
      this.setState({
        candidateCampaignList
      })

    })

  }	 
  handleCandidateCampaignSearch = (value) => {
    this.executeCandidateCampaignSearch(value)
  }

  executeCandidateRegisterMemberSearch = (filterKey) =>{

    const {CampaignRegisterHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CampaignRegisterHistoryService.requestCandidateRegisterMember("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateRegisterMemberList=>{
      this.setState({
        candidateRegisterMemberList
      })

    })

  }	 
  handleCandidateRegisterMemberSearch = (value) => {
    this.executeCandidateRegisterMemberSearch(value)
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
    const {fieldLabels} = CampaignRegisterHistoryBase
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
          type: `${owner.type}/addCampaignRegisterHistory`,
          payload: { id: owner.id, type: 'campaignRegisterHistory', parameters },
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
          type: `${owner.type}/addCampaignRegisterHistory`,
          payload: { id: owner.id, type: 'campaignRegisterHistory', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'campaignRegisterHistory',listName:'活动报名记录列表' },
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
    

    
    const {candidateCampaignList} = this.state
    if(!candidateCampaignList){
      return (<div>等等</div>)
    }
    if(!candidateCampaignList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateRegisterMemberList} = this.state
    if(!candidateRegisterMemberList){
      return (<div>等等</div>)
    }
    if(!candidateRegisterMemberList.candidates){
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
        title="新建一个活动报名记录"
        content="新建一个活动报名记录"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.registerDatetime} {...formItemLayout}>
                  {getFieldDecorator('registerDatetime', {
                    rules: [{ required: true, message: '请输入报名日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入报名日期" />
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
                <Form.Item label={fieldLabels.cancelled}  {...switchFormItemLayout}>
                  {getFieldDecorator('cancelled', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入报名已取消报名' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入报名已取消报名bool" />
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
                <Form.Item label={fieldLabels.campaign} {...formItemLayout}>
                  {getFieldDecorator('campaignId', {
                  	initialValue: tryinit('campaign'),
                    rules: [{ required: true, message: '请输入活动' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateCampaignList.candidates}
                    
                    
                    onSearch={this.handleCandidateCampaignSearch}
                    placeholder="请输入活动"
                    
                    disabled={!availableForEdit('campaign')}
                  >
                  {candidateCampaignList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.campaignName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.registerMember} {...formItemLayout}>
                  {getFieldDecorator('registerMemberId', {
                  	initialValue: tryinit('registerMember'),
                    rules: [{ required: true, message: '请输入报名用户' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateRegisterMemberList.candidates}
                    
                    
                    onSearch={this.handleCandidateRegisterMemberSearch}
                    placeholder="请输入报名用户"
                    
                    disabled={!availableForEdit('registerMember')}
                  >
                  {candidateRegisterMemberList.candidates.map(item=>{
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
}))(Form.create()(CampaignRegisterHistoryCreateForm))




