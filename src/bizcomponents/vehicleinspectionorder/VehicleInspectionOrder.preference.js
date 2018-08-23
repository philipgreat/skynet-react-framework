

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
import styles from './VehicleInspectionOrder.preference.less'
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


const internalImageListOf = (vehicleInspectionOrder) =>{

  const imageList = [
	   {"title":'行驶证图1',"imageLocation":vehicleInspectionOrder.vehiclePermitImage1},
  {"title":'行驶证图2',"imageLocation":vehicleInspectionOrder.vehiclePermitImage2},
  {"title":'行驶证图3',"imageLocation":vehicleInspectionOrder.vehiclePermitImage3},
  {"title":'行驶证图4',"imageLocation":vehicleInspectionOrder.vehiclePermitImage4},
  {"title":'行驶证图5',"imageLocation":vehicleInspectionOrder.vehiclePermitImage5},
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

const internalSettingListOf = (vehicleInspectionOrder) =>{

	const optionList = [ 
	  {"title":'6年免检',"value":vehicleInspectionOrder.hasSixYearExemption,"parameterName":"hasSixYearExemption"},
  {"title":'上线检测',"value":vehicleInspectionOrder.hasInspection,"parameterName":"hasInspection"},
  {"title":'二级维护',"value":vehicleInspectionOrder.hasSecondLevelMaintenance,"parameterName":"hasSecondLevelMaintenance"},
  {"title":'等级评定',"value":vehicleInspectionOrder.hasGradeEstimation,"parameterName":"hasGradeEstimation"},
  {"title":'商户优惠',"value":vehicleInspectionOrder.merchantDiscount,"parameterName":"merchantDiscount"},
  {"title":'同意',"value":vehicleInspectionOrder.agreed,"parameterName":"agreed"},
  {"title":'无伤人交通事故',"value":vehicleInspectionOrder.trafficAccidentAnnouncement,"parameterName":"trafficAccidentAnnouncement"},
  {"title":'提供委托书',"value":vehicleInspectionOrder.engagementLetterProvided,"parameterName":"engagementLetterProvided"},
  {"title":'上门取车',"value":vehicleInspectionOrder.homePickUp,"parameterName":"homePickUp"},
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

const internalLargeTextOf = (vehicleInspectionOrder) =>{

	return(<div> 
   <Card title={`服务公司信息`} ><pre>{vehicleInspectionOrder.serviceCompanyInfo}</pre></Card>
</div>)

	

}

/////////////////////////////////////// BUILD FOR TRANSFERRING TO ANOTHER OBJECT////////////////////////////////////////////////

const handleTransferSearch =(targetComponent,filterKey,newRequest)=>{
  const {VehicleInspectionOrderService} = GlobalComponents;

  const parameters = newRequest||targetComponent.state

  const {
 
    candidateServiceName,
    candidateObjectType,
    targetLocalName,
 
  } = parameters

  console.log("current state", parameters)

  const id = "";//not used for now
  const pageNo = 1;
  const candidateReferenceService = VehicleInspectionOrderService[candidateServiceName] 
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

const executeTrans = (vehicleInspectionOrder,targetComponent) =>{
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
    const id=vehicleInspectionOrder.id;
    const serviceNameToCall = transferServiceName;

    const payload = {parameters,id,serviceNameToCall}
    
    //targetComponent.setState({transferModalVisiable:false})
    dispatch({type:"_vehicleInspectionOrder/doJob",payload: payload})

    targetComponent.setState({transferModalVisiable:false})

  })
 

}


const buildTransferModal = (vehicleInspectionOrder,targetComponent) => {


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
          onOk={()=>executeTrans(vehicleInspectionOrder,targetComponent)}
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



const internalRenderExtraHeader = (vehicleInspectionOrder) =>{
	return null
}
const internalRenderExtraFooter = (vehicleInspectionOrder) =>{
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

const internalSummaryOf = (vehicleInspectionOrder,targetComponent) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrder.id}</Description> 
<Description term="订单状态">{vehicleInspectionOrder.orderStatus}</Description> 
<Description term="车牌号码">{vehicleInspectionOrder.vehicleLicensePlateNumber}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrder.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="联系人姓名">{vehicleInspectionOrder.contactName}</Description> 
<Description term="联系人手机">{vehicleInspectionOrder.contactMobileNumber}</Description> 
<Description term="产品类型">{vehicleInspectionOrder.productType}</Description> 
<Description term="最后更新时间">{ moment(vehicleInspectionOrder.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="商户">{vehicleInspectionOrder.serviceCompany==null?"未分配":vehicleInspectionOrder.serviceCompany.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"商户","vehicleServiceCompany","requestCandidateServiceCompany",
	      "transferToAnotherServiceCompany","anotherServiceCompanyId",vehicleInspectionOrder.serviceCompany?vehicleInspectionOrder.serviceCompany.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="地址">{vehicleInspectionOrder.contactAddressDetail}</Description> 
<Description term="城市">{vehicleInspectionOrder.contactAddressCity==null?"未分配":vehicleInspectionOrder.contactAddressCity.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"城市","city","requestCandidateContactAddressCity",
	      "transferToAnotherContactAddressCity","anotherContactAddressCityId",vehicleInspectionOrder.contactAddressCity?vehicleInspectionOrder.contactAddressCity.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="客户">{vehicleInspectionOrder.customer==null?"未分配":vehicleInspectionOrder.customer.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"客户","customer","requestCandidateCustomer",
	      "transferToAnotherCustomer","anotherCustomerId",vehicleInspectionOrder.customer?vehicleInspectionOrder.customer.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="计划年检日期">{ moment(vehicleInspectionOrder.planInspectionDate).format('YYYY-MM-DD')}</Description> 
<Description term="车辆类型">{vehicleInspectionOrder.vehicleType}</Description> 
<Description term="使用性质">{vehicleInspectionOrder.vehicleUseCharacter}</Description> 
<Description term="核准座位数">{vehicleInspectionOrder.vehicleSeatsQuantity}</Description> 
<Description term="注册日期">{ moment(vehicleInspectionOrder.vehicleRegistrationDate).format('YYYY-MM-DD')}</Description> 
<Description term="检测有效期">{ moment(vehicleInspectionOrder.inspectionValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="保险有效期">{ moment(vehicleInspectionOrder.insuranceValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="发动机号">{vehicleInspectionOrder.engineNumber}</Description> 
<Description term="车架号">{vehicleInspectionOrder.vehicleIdentificationNumber}</Description> 
<Description term="发证日期">{ moment(vehicleInspectionOrder.vehiclePermitIssueDate).format('YYYY-MM-DD')}</Description> 
<Description term="所有人">{vehicleInspectionOrder.vehiclePermitHolderName}</Description> 
<Description term="经度">{vehicleInspectionOrder.longitude}</Description> 
<Description term="纬度">{vehicleInspectionOrder.latitude}</Description> 
	
        {buildTransferModal(vehicleInspectionOrder,targetComponent)}
      </DescriptionList>
	)

}


class VehicleInspectionOrderPreference extends Component {

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
    const { id,displayName, vehicleInspectionInsuranceOrderCount, vehicleInspectionOrderChargeCount, vehicleInspectionOrderServiceLogCount, vehicleInspectionOrderPaymentCount, handOverChecklistItemCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, orderReviewResultCount, orderRatingResultCount, orderDiscountCouponCount, vehicleInspectionOrderCouponCount } = this.props.vehicleInspectionOrder
    const cardsData = {cardsName:"年检订单",cardsFor: "vehicleInspectionOrder",cardsSource: this.props.vehicleInspectionOrder,
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
  vehicleInspectionOrder: state._vehicleInspectionOrder,
}))(Form.create()(VehicleInspectionOrderPreference))

