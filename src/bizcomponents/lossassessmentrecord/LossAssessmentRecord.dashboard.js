

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './LossAssessmentRecord.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}


const internalImageListOf = (lossAssessmentRecord) =>{

  const imageList = [
	   {"title":'定损照片',"imageLocation":lossAssessmentRecord.lossImage},
]
  const filteredList = imageList.filter((item)=>item.imageLocation!=null)
  if(filteredList.length===0){
    return null
  }

  return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="start" align="bottom">
  {
      filteredList.map((item,index)=>(<Col span={4} key={index}><ImagePreview imageTitle ={item.title} showTitleUnderImage={true} imageLocation={item.imageLocation} >{item.title}</ImagePreview></Col>))
  }</Row></Card> )

}

const internalSettingListOf = (lossAssessmentRecord) =>{

	const optionList = [ 
	]
	
  if(optionList.length===0){
    return null
  }
  return(<Card title='状态集合' className={styles.card}>
  	
  	{
  	  optionList.map((item)=><Col key={item.parameterName} span={6} style={{"height":"60px"}}>
       <Switch  title={item.title} checked={item.value} type={item.value?"success":"error"} checkedChildren="是" unCheckedChildren="否" />
       <span style={{"margin":"10px"}}>{item.title}</span>
       </Col>)
  	}


</Card> )
	


}

const internalLargeTextOf = (lossAssessmentRecord) =>{

	return null
	

}

/////////////////////////////////////// BUILD FOR TRANSFERRING TO ANOTHER OBJECT////////////////////////////////////////////////

const handleTransferSearch =(targetComponent,filterKey,newRequest)=>{
  const {LossAssessmentRecordService} = GlobalComponents;

  const parameters = newRequest||targetComponent.state

  const {
 
    candidateServiceName,
    candidateObjectType,
    targetLocalName,
 
  } = parameters

  console.log("current state", parameters)

  const id = "";//not used for now
  const pageNo = 1;
  const candidateReferenceService = LossAssessmentRecordService[candidateServiceName] 
  if(!candidateReferenceService){
    console.log("current state", parameters)
    return;
  }
  //get a function for fetching the candidate reference list
  const future = candidateReferenceService(candidateObjectType, id, filterKey, pageNo);
  console.log(future);
  future.then(candidateReferenceList=>{
    targetComponent.setState({
     ...parameters,
      candidateReferenceList,
      transferModalVisiable:true,transferModalTitle:"重新分配<"+targetLocalName+">"
     
    })

  })

}
//  onClick={()=>showTransferModel(targetComponent,"城市","city","requestCandidateDistrict","transferToAnotherDistrict")} 

const showTransferModel = (targetComponent,targetLocalName,
  candidateObjectType,candidateServiceName, transferServiceName, transferTargetParameterName,currentValue) => {

  const filterKey = ""

  const newRequest = {targetLocalName,candidateObjectType,candidateServiceName,transferServiceName,transferTargetParameterName,currentValue}
  console.log("showTransferModel  new state", newRequest)
  //targetComponent.setState(newState);
  handleTransferSearch(targetComponent,filterKey,newRequest)
}

const hideCloseTrans = (targetComponent) =>{
  targetComponent.setState({transferModalVisiable:false})

}

const executeTrans = (lossAssessmentRecord,targetComponent) =>{
  const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = targetComponent.props.form
  const {
   
    candidateServiceName,
    candidateObjectType,
    targetLocalName,
    transferServiceName
  } = targetComponent.state

  const {dispatch} = targetComponent.props

  validateFieldsAndScroll((error, values) => {
    console.log("error", values)

    const parameters  = {...values}
    const id=lossAssessmentRecord.id;
    const serviceNameToCall = transferServiceName;

    const payload = {parameters,id,serviceNameToCall}
    
    //targetComponent.setState({transferModalVisiable:false})
    dispatch({type:"_lossAssessmentRecord/doJob",payload: payload})

    targetComponent.setState({transferModalVisiable:false})

  })
 

}


const buildTransferModal = (lossAssessmentRecord,targetComponent) => {


  const {transferModalVisiable,targetLocalName,transferModalTitle,
    candidateReferenceList,transferTargetParameterName,currentValue} = targetComponent.state
  const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = targetComponent.props.form


  if(!candidateReferenceList||!candidateReferenceList.candidates){
    return null;
  }


  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  return(

<Modal title={transferModalTitle}
          visible={transferModalVisiable}
          onOk={()=>executeTrans(lossAssessmentRecord,targetComponent)}
          onCancel={()=>hideCloseTrans(targetComponent)}
          
        >

  <Form >
            <Row gutter={16}>

              <Col lg={24} md={24} sm={24}>
                <Form.Item label={`请选择新的${targetLocalName}`} {...formItemLayout}>
                  {getFieldDecorator(transferTargetParameterName, {
                    rules: [{ required: true, message: '请搜索' }],
                    initialValue: currentValue
                  })(
                    <AutoComplete
                    dataSource={candidateReferenceList.candidates}
                    onSearch={(value)=>handleTransferSearch(targetComponent,value)}
                    >
                   {candidateReferenceList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.displayName}(${item.id})`}</Option>);
            })}
                    
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col></Row>
              </Form>

          
        </Modal>)


}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const internalRenderExtraHeader = (lossAssessmentRecord) =>{
	return null
}
const internalRenderExtraFooter = (lossAssessmentRecord) =>{
	return null
}
const internalSubListsOf = (cardsData) =>{
	const {id} = cardsData.cardsSource;
	return (<Row gutter={24}>

           {cardsData.subItems.sort((x,y)=>x.displayName.localeCompare(y.displayName, 'zh-CN')).map((item)=>(<Col {...topColResponsiveProps} key={item.name}>   
           <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="list"  />&nbsp;管理</Link>
              
              {item.addFunction&&(<Link to={`/${cardsData.cardsFor}/${id}/list/${item.role}CreateForm`}><span className={styles.splitLine}></span><FontAwesome name="plus"  />&nbsp;新增</Link>)}   
              
              </p>         
          </Card> </Badge>
            </Col>))}
          </Row>)
}

const internalSummaryOf = (lossAssessmentRecord,targetComponent) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{lossAssessmentRecord.id}</Description> 
<Description term="书籍副本">{lossAssessmentRecord.bookCopy==null?"未分配":lossAssessmentRecord.bookCopy.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"书籍副本","bookCopy","requestCandidateBookCopy",
	      "transferToAnotherBookCopy","anotherBookCopyId",lossAssessmentRecord.bookCopy?lossAssessmentRecord.bookCopy.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="定损日期">{ moment(lossAssessmentRecord.recordTime).format('YYYY-MM-DD')}</Description> 
<Description term="操作网点">{lossAssessmentRecord.recordStore==null?"未分配":lossAssessmentRecord.recordStore.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"操作网点","store","requestCandidateRecordStore",
	      "transferToAnotherRecordStore","anotherRecordStoreId",lossAssessmentRecord.recordStore?lossAssessmentRecord.recordStore.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="定损备注">{lossAssessmentRecord.lossComment}</Description> 
<Description term="评估价">{lossAssessmentRecord.bookCopyEvaluationPrice}</Description> 
<Description term="定损折扣">{lossAssessmentRecord.lossDiscount==null?"未分配":lossAssessmentRecord.lossDiscount.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"定损折扣","lossDiscount","requestCandidateLossDiscount",
	      "transferToAnotherLossDiscount","anotherLossDiscountId",lossAssessmentRecord.lossDiscount?lossAssessmentRecord.lossDiscount.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="定损记录人">{lossAssessmentRecord.recordPerson==null?"未分配":lossAssessmentRecord.recordPerson.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"定损记录人","employee","requestCandidateRecordPerson",
	      "transferToAnotherRecordPerson","anotherRecordPersonId",lossAssessmentRecord.recordPerson?lossAssessmentRecord.recordPerson.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="损害人">{lossAssessmentRecord.damagePerson==null?"未分配":lossAssessmentRecord.damagePerson.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"损害人","customer","requestCandidateDamagePerson",
	      "transferToAnotherDamagePerson","anotherDamagePersonId",lossAssessmentRecord.damagePerson?lossAssessmentRecord.damagePerson.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
	
        {buildTransferModal(lossAssessmentRecord,targetComponent)}
      </DescriptionList>
	)

}


class LossAssessmentRecordDashboard extends Component {

  state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"城市",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:""


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.lossAssessmentRecord
    const cardsData = {cardsName:"定损记录",cardsFor: "lossAssessmentRecord",cardsSource: this.props.lossAssessmentRecord,
  		subItems: [
    
      	],
  	};
    //下面各个渲染方法都可以定制，只要在每个模型的里面的_features="custom"就可以得到定制的例子
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
        <div>
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        {subListsOf(cardsData)} 
        {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  lossAssessmentRecord: state._lossAssessmentRecord,
}))(Form.create()(LossAssessmentRecordDashboard))
