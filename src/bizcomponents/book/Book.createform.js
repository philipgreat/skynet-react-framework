import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './Book.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import BookBase from './Book.base'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  bookName: '飘',
  bookAuthor: '吕之华',
  bookPublisher: '中信出版社',
  bookPubdate: '2015-10-16',
  listPrice: '74.52',
  bookIsbn13: '978-7-505-71566-0',
  bookIsbn10: '',
  bookSummary: '这个简介有点短',
  bookRecommendId: 'BR000001',
  bookPlazaId: 'BP000001',
  platformId: 'BSP000001',
  bookCover: 'http://luxuryreading.com/wp-content/uploads/2013/07/war-and-peace.jpg',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'bookCover',
]


class BookCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookRecommendSearch("")
    
    
    this.executeCandidateBookPlazaSearch("")
    
    
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

  
  executeCandidateBookRecommendSearch = (filterKey) =>{

    const {BookService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookService.requestCandidateBookRecommend("bookRecommend", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookRecommendList=>{
      this.setState({
        candidateBookRecommendList
      })

    })

  }	 
  handleCandidateBookRecommendSearch = (value) => {
    this.executeCandidateBookRecommendSearch(value)
  }

  executeCandidateBookPlazaSearch = (filterKey) =>{

    const {BookService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookService.requestCandidateBookPlaza("bookPlaza", id, filterKey, pageNo);
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

  executeCandidatePlatformSearch = (filterKey) =>{

    const {BookService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
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
    const {fieldLabels} = BookBase
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
          type: `${owner.type}/addBook`,
          payload: { id: owner.id, type: 'book', parameters },
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
          type: `${owner.type}/addBook`,
          payload: { id: owner.id, type: 'book', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'book',listName:'书列表' },
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
    

    
    const {candidateBookRecommendList} = this.state
    if(!candidateBookRecommendList){
      return (<div>等等</div>)
    }
    if(!candidateBookRecommendList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookPlazaList} = this.state
    if(!candidateBookPlazaList){
      return (<div>等等</div>)
    }
    if(!candidateBookPlazaList.candidates){
      return (<div>等等</div>)
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
        title="新建一个书"
        content="新建一个书"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookName} {...formItemLayout}>
                  {getFieldDecorator('bookName', {
                    rules: [{ required: true, message: '请输入书名' }],
                  })(
                    <Input placeholder="请输入书名" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookAuthor} {...formItemLayout}>
                  {getFieldDecorator('bookAuthor', {
                    rules: [{ required: true, message: '请输入作者' }],
                  })(
                    <Input placeholder="请输入作者" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookPublisher} {...formItemLayout}>
                  {getFieldDecorator('bookPublisher', {
                    rules: [{ required: true, message: '请输入出版社' }],
                  })(
                    <Input placeholder="请输入出版社" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookPubdate} {...formItemLayout}>
                  {getFieldDecorator('bookPubdate', {
                    rules: [{ required: true, message: '请输入出版日期' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入出版日期" />
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
                <Form.Item label={fieldLabels.bookIsbn13} {...formItemLayout}>
                  {getFieldDecorator('bookIsbn13', {
                    rules: [{ required: true, message: '请输入ISBN13' }],
                  })(
                    <Input placeholder="请输入ISBN13" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookIsbn10} {...formItemLayout}>
                  {getFieldDecorator('bookIsbn10', {
                    rules: [{ required: false, message: '请输入ISBN10' }],
                  })(
                    <Input placeholder="请输入ISBN10" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookSummary} {...formItemLayout}>
                  {getFieldDecorator('bookSummary', {
                    rules: [{ required: true, message: '请输入本书总结' }],
                  })(
                    <Input placeholder="请输入本书总结" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="封面" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('bookCover', {
                    rules: [{ required: true, message: '请输入封面' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入封面" />
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
                  buttonTitle="封面"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCover')}
                  fileList={convertedImagesValues.bookCover}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookRecommend} {...formItemLayout}>
                  {getFieldDecorator('bookRecommendId', {
                  	initialValue: tryinit('bookRecommend'),
                    rules: [{ required: true, message: '请输入图书推荐' }],
                  })(
                  
                  <AutoComplete
                    dataSource={candidateBookRecommendList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookRecommendSearch}
                    placeholder="请输入图书推荐"
                    
                    disabled={!availableForEdit('bookRecommend')}
                  >
                  {candidateBookRecommendList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

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
}))(Form.create()(BookCreateForm))




