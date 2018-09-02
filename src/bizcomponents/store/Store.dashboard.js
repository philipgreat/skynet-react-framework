

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
import styles from './Store.dashboard.less'
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


const internalImageListOf = (store) =>{

  const imageList = [
	   {"title":'网点图片',"imageLocation":store.storeImage},
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

const internalSettingListOf = (store) =>{

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

const internalLargeTextOf = (store) =>{

	return null
	

}

/////////////////////////////////////// BUILD FOR TRANSFERRING TO ANOTHER OBJECT////////////////////////////////////////////////

const handleTransferSearch =(targetComponent,filterKey,newRequest)=>{
  const {StoreService} = GlobalComponents;

  const parameters = newRequest||targetComponent.state

  const {
 
    candidateServiceName,
    candidateObjectType,
    targetLocalName,
 
  } = parameters

  console.log("current state", parameters)

  const id = "";//not used for now
  const pageNo = 1;
  const candidateReferenceService = StoreService[candidateServiceName] 
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

const executeTrans = (store,targetComponent) =>{
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
    const id=store.id;
    const serviceNameToCall = transferServiceName;

    const payload = {parameters,id,serviceNameToCall}
    
    //targetComponent.setState({transferModalVisiable:false})
    dispatch({type:"_store/doJob",payload: payload})

    targetComponent.setState({transferModalVisiable:false})

  })
 

}


const buildTransferModal = (store,targetComponent) => {


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
          onOk={()=>executeTrans(store,targetComponent)}
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



const internalRenderExtraHeader = (store) =>{
	return null
}
const internalRenderExtraFooter = (store) =>{
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

const internalSummaryOf = (store,targetComponent) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{store.id}</Description> 
<Description term="网点名字">{store.storeName}</Description> 
<Description term="网点副标题">{store.storeSubname}</Description> 
<Description term="网点地址">{store.storeAddress}</Description> 
<Description term="网点营业时间">{store.storeOpenTime}</Description> 
<Description term="网点营业时间补充说明">{store.storeOpenTimeSecond}</Description> 
<Description term="网点房间号码">{store.storeRoomNumber}</Description> 
<Description term="经度">{store.longitude}</Description> 
<Description term="纬度">{store.latitude}</Description> 
<Description term="网点类型">{store.storeType==null?"未分配":store.storeType.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"网点类型","storeType","requestCandidateStoreType",
	      "transferToAnotherStoreType","anotherStoreTypeId",store.storeType?store.storeType.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="城市">{store.city==null?"未分配":store.city.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"城市","city","requestCandidateCity",
	      "transferToAnotherCity","anotherCityId",store.city?store.city.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
	
        {buildTransferModal(store,targetComponent)}
      </DescriptionList>
	)

}


class StoreDashboard extends Component {

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
    const { id,displayName, lossAssessmentRecordCount, printerCount, bookCopyCount, bookCopyTransferAsOriginalStoreCount, bookCopyTransferAsNewStoreCount, bookTakeStockPlanCount, bookCopyOperationRecordCount, borrowingHistoryAsLendingStoreCount, borrowingHistoryAsReturnStoreCount, borrowingExpiredSkuAsLendingStoreCount, borrowingExpiredSkuAsReturnStoreCount, bookCopySharingApplicationCount, memberServiceRevenueCount, storeAccountCount, storeSlideCount, campaignCount, customerCount, employeeWorkingStoreCount } = this.props.store
    const cardsData = {cardsName:"服务网点",cardsFor: "store",cardsSource: this.props.store,
  		subItems: [
{name: 'lossAssessmentRecordList', displayName:'定损记录',type:'lossAssessmentRecord',count:lossAssessmentRecordCount,addFunction: true, role: 'lossAssessmentRecord'},
{name: 'printerList', displayName:'打印机',type:'printer',count:printerCount,addFunction: true, role: 'printer'},
{name: 'bookCopyList', displayName:'书籍副本',type:'bookCopy',count:bookCopyCount,addFunction: true, role: 'bookCopy'},
{name: 'bookCopyTransferListAsOriginalStore', displayName:'图书副本迁移记录(原网点)',type:'bookCopyTransfer',count:bookCopyTransferAsOriginalStoreCount,addFunction: true, role: 'bookCopyTransferAsOriginalStore'},
{name: 'bookCopyTransferListAsNewStore', displayName:'图书副本迁移记录(新网点)',type:'bookCopyTransfer',count:bookCopyTransferAsNewStoreCount,addFunction: true, role: 'bookCopyTransferAsNewStore'},
{name: 'bookTakeStockPlanList', displayName:'图书盘点计划',type:'bookTakeStockPlan',count:bookTakeStockPlanCount,addFunction: true, role: 'bookTakeStockPlan'},
{name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录',type:'bookCopyOperationRecord',count:bookCopyOperationRecordCount,addFunction: false, role: 'bookCopyOperationRecord'},
{name: 'borrowingHistoryListAsLendingStore', displayName:'图书借还历史(借出网点)',type:'borrowingHistory',count:borrowingHistoryAsLendingStoreCount,addFunction: false, role: 'borrowingHistoryAsLendingStore'},
{name: 'borrowingHistoryListAsReturnStore', displayName:'图书借还历史(还书网点)',type:'borrowingHistory',count:borrowingHistoryAsReturnStoreCount,addFunction: false, role: 'borrowingHistoryAsReturnStore'},
{name: 'borrowingExpiredSkuListAsLendingStore', displayName:'借书超期费(借出网点)',type:'borrowingExpiredSku',count:borrowingExpiredSkuAsLendingStoreCount,addFunction: true, role: 'borrowingExpiredSkuAsLendingStore'},
{name: 'borrowingExpiredSkuListAsReturnStore', displayName:'借书超期费(还书网点)',type:'borrowingExpiredSku',count:borrowingExpiredSkuAsReturnStoreCount,addFunction: true, role: 'borrowingExpiredSkuAsReturnStore'},
{name: 'bookCopySharingApplicationList', displayName:'图书共享申请',type:'bookCopySharingApplication',count:bookCopySharingApplicationCount,addFunction: true, role: 'bookCopySharingApplication'},
{name: 'memberServiceRevenueList', displayName:'会员服务收益',type:'memberServiceRevenue',count:memberServiceRevenueCount,addFunction: false, role: 'memberServiceRevenue'},
{name: 'storeAccountList', displayName:'网点账户',type:'storeAccount',count:storeAccountCount,addFunction: false, role: 'storeAccount'},
{name: 'storeSlideList', displayName:'网点海报',type:'storeSlide',count:storeSlideCount,addFunction: true, role: 'storeSlide'},
{name: 'campaignList', displayName:'活动',type:'campaign',count:campaignCount,addFunction: true, role: 'campaign'},
{name: 'customerList', displayName:'用户',type:'customer',count:customerCount,addFunction: false, role: 'customer'},
{name: 'employeeWorkingStoreList', displayName:'员工工作的网点',type:'employeeWorkingStore',count:employeeWorkingStoreCount,addFunction: true, role: 'employeeWorkingStore'},
    
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
  store: state._store,
}))(Form.create()(StoreDashboard))

