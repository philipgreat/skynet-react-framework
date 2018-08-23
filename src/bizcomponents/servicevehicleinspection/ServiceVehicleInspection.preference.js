

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
import styles from './ServiceVehicleInspection.preference.less'
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


const internalImageListOf = (serviceVehicleInspection) =>{

  const imageList = [
	   {"title":'年检报告1',"imageLocation":serviceVehicleInspection.inspectionReportImage1},
  {"title":'年检报告2',"imageLocation":serviceVehicleInspection.inspectionReportImage2},
  {"title":'年检报告3',"imageLocation":serviceVehicleInspection.inspectionReportImage3},
  {"title":'年检报告4',"imageLocation":serviceVehicleInspection.inspectionReportImage4},
  {"title":'年检报告5',"imageLocation":serviceVehicleInspection.inspectionReportImage5},
  {"title":'年检报告5',"imageLocation":serviceVehicleInspection.inspectionReportImage6},
  {"title":'年检报告6',"imageLocation":serviceVehicleInspection.inspectionReportImage7},
  {"title":'年检报告7',"imageLocation":serviceVehicleInspection.inspectionReportImage8},
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

const internalSettingListOf = (serviceVehicleInspection) =>{

	const optionList = [ 
	  {"title":'初步检测结果',"value":serviceVehicleInspection.initialInspectionPassed,"parameterName":"initialInspectionPassed"},
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

const internalLargeTextOf = (serviceVehicleInspection) =>{

	return null
	

}

/////////////////////////////////////// BUILD FOR TRANSFERRING TO ANOTHER OBJECT////////////////////////////////////////////////

const handleTransferSearch =(targetComponent,filterKey,newRequest)=>{
  const {ServiceVehicleInspectionService} = GlobalComponents;

  const parameters = newRequest||targetComponent.state

  const {
 
    candidateServiceName,
    candidateObjectType,
    targetLocalName,
 
  } = parameters

  console.log("current state", parameters)

  const id = "";//not used for now
  const pageNo = 1;
  const candidateReferenceService = ServiceVehicleInspectionService[candidateServiceName] 
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

const executeTrans = (serviceVehicleInspection,targetComponent) =>{
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
    const id=serviceVehicleInspection.id;
    const serviceNameToCall = transferServiceName;

    const payload = {parameters,id,serviceNameToCall}
    
    //targetComponent.setState({transferModalVisiable:false})
    dispatch({type:"_serviceVehicleInspection/doJob",payload: payload})

    targetComponent.setState({transferModalVisiable:false})

  })
 

}


const buildTransferModal = (serviceVehicleInspection,targetComponent) => {


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
          onOk={()=>executeTrans(serviceVehicleInspection,targetComponent)}
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



const internalRenderExtraHeader = (serviceVehicleInspection) =>{
	return null
}
const internalRenderExtraFooter = (serviceVehicleInspection) =>{
	return null
}
const internalSubListsOf = (cardsData) =>{
	const {id} = cardsData.cardsSource;
	return (<Row gutter={24}>

           {cardsData.subItems.sort((x,y)=>x.displayName.localeCompare(y.displayName, 'zh-CN')).map((item)=>(<Col {...topColResponsiveProps} key={item.name}>   
           <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> </Badge>
            </Col>))}
          </Row>)
}

const internalSummaryOf = (serviceVehicleInspection,targetComponent) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleInspection.id}</Description> 
<Description term="服务状态">{serviceVehicleInspection.serviceStatus}</Description> 
<Description term="服务人员">{serviceVehicleInspection.responsibleWorker==null?"未分配":serviceVehicleInspection.responsibleWorker.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"服务人员","vehicleServiceCompanyEmployee","requestCandidateResponsibleWorker",
	      "transferToAnotherResponsibleWorker","anotherResponsibleWorkerId",serviceVehicleInspection.responsibleWorker?serviceVehicleInspection.responsibleWorker.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="服务概述">{serviceVehicleInspection.serviceSummary}</Description> 
<Description term="检测站">{serviceVehicleInspection.inspectionStation==null?"未分配":serviceVehicleInspection.inspectionStation.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"检测站","inspectionStation","requestCandidateInspectionStation",
	      "transferToAnotherInspectionStation","anotherInspectionStationId",serviceVehicleInspection.inspectionStation?serviceVehicleInspection.inspectionStation.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="开始时间">{ moment(serviceVehicleInspection.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceVehicleInspection.longitude}</Description> 
<Description term="纬度">{serviceVehicleInspection.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleInspection.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="检测日期">{ moment(serviceVehicleInspection.inspectionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="内部状态">{serviceVehicleInspection.internalStatus}</Description> 
<Description term="检测结果">{serviceVehicleInspection.inspectionResult}</Description> 
<Description term="是否要修理">{serviceVehicleInspection.inspectionNeedRepair}</Description> 
<Description term="商户">{serviceVehicleInspection.merchant==null?"未分配":serviceVehicleInspection.merchant.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"商户","vehicleServiceCompany","requestCandidateMerchant",
	      "transferToAnotherMerchant","anotherMerchantId",serviceVehicleInspection.merchant?serviceVehicleInspection.merchant.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="年检订单">{serviceVehicleInspection.mainOrder==null?"未分配":serviceVehicleInspection.mainOrder.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"年检订单","vehicleInspectionOrder","requestCandidateMainOrder",
	      "transferToAnotherMainOrder","anotherMainOrderId",serviceVehicleInspection.mainOrder?serviceVehicleInspection.mainOrder.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
	
        {buildTransferModal(serviceVehicleInspection,targetComponent)}
      </DescriptionList>
	)

}


class ServiceVehicleInspectionPreference extends Component {

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
    const { id,displayName, serviceVehicleRepairingCount } = this.props.serviceVehicleInspection
    const cardsData = {cardsName:"车辆上线检测",cardsFor: "serviceVehicleInspection",cardsSource: this.props.serviceVehicleInspection,
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
  serviceVehicleInspection: state._serviceVehicleInspection,
}))(Form.create()(ServiceVehicleInspectionPreference))

