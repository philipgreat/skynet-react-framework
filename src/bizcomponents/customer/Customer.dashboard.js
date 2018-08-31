

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
import styles from './Customer.dashboard.less'
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


const internalImageListOf = (customer) =>{

  const imageList = [
	   {"title":'头像',"imageLocation":customer.logoImage},
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

const internalSettingListOf = (customer) =>{

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

const internalLargeTextOf = (customer) =>{

	return null
	

}

/////////////////////////////////////// BUILD FOR TRANSFERRING TO ANOTHER OBJECT////////////////////////////////////////////////

const handleTransferSearch =(targetComponent,filterKey,newRequest)=>{
  const {CustomerService} = GlobalComponents;

  const parameters = newRequest||targetComponent.state

  const {
 
    candidateServiceName,
    candidateObjectType,
    targetLocalName,
 
  } = parameters

  console.log("current state", parameters)

  const id = "";//not used for now
  const pageNo = 1;
  const candidateReferenceService = CustomerService[candidateServiceName] 
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

const executeTrans = (customer,targetComponent) =>{
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
    const id=customer.id;
    const serviceNameToCall = transferServiceName;

    const payload = {parameters,id,serviceNameToCall}
    
    //targetComponent.setState({transferModalVisiable:false})
    dispatch({type:"_customer/doJob",payload: payload})

    targetComponent.setState({transferModalVisiable:false})

  })
 

}


const buildTransferModal = (customer,targetComponent) => {


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
          onOk={()=>executeTrans(customer,targetComponent)}
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



const internalRenderExtraHeader = (customer) =>{
	return null
}
const internalRenderExtraFooter = (customer) =>{
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

const internalSummaryOf = (customer,targetComponent) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customer.id}</Description> 
<Description term="昵称">{customer.nickName}</Description> 
<Description term="手机号码">{customer.mobileNumber}</Description> 
<Description term="的真实姓名">{customer.realName}</Description> 
<Description term="性别">{customer.sexuality}</Description> 
<Description term="会员服务">{customer.memberService==null?"未分配":customer.memberService.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"会员服务","memberServiceProduct","requestCandidateMemberService",
	      "transferToAnotherMemberService","anotherMemberServiceId",customer.memberService?customer.memberService.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="会员服务开始日期">{ moment(customer.memberServiceStartDate).format('YYYY-MM-DD')}</Description> 
<Description term="会员服务到期日期">{ moment(customer.memberServiceExpireDate).format('YYYY-MM-DD')}</Description> 
<Description term="帐户余额">{customer.accountBalance}</Description> 
<Description term="小程序OpenID">{customer.miniProgramOpenid}</Description> 
<Description term="服务号OpenID">{customer.serviceAccountOpenid}</Description> 
<Description term="微信UnionID">{customer.wechatUnionId}</Description> 
<Description term="经度">{customer.longitude}</Description> 
<Description term="纬度">{customer.latitude}</Description> 
<Description term="生日">{ moment(customer.birthday).format('YYYY-MM-DD')}</Description> 
<Description term="身份证号码">{customer.identityCardNumber}</Description> 
<Description term="家庭地址">{customer.familyAddress}</Description> 
<Description term="日均会员费">{customer.memberServiceDailyPay}</Description> 
<Description term="最喜欢的网点">{customer.favouriteStore==null?"未分配":customer.favouriteStore.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"最喜欢的网点","store","requestCandidateFavouriteStore",
	      "transferToAnotherFavouriteStore","anotherFavouriteStoreId",customer.favouriteStore?customer.favouriteStore.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
	
        {buildTransferModal(customer,targetComponent)}
      </DescriptionList>
	)

}


class CustomerDashboard extends Component {

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
    const { id,displayName, privateMessageCount, lossAssessmentRecordCount, mainOrderCount, bookCopyCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount, bookReviewLikeCount, bookCopySharingApplicationCount, memberServiceRevenueCount, customerAccountTransactionCount, campaignRegisterHistoryCount, campaignReviewCount, campaignLikeCount, campaignReviewLikeCount, customerFootprintCount, shieldCustomerAsCustomerCount, shieldCustomerAsShieldCount, informCount, undistributedProfitCount } = this.props.customer
    const cardsData = {cardsName:"用户",cardsFor: "customer",cardsSource: this.props.customer,
  		subItems: [
{name: 'privateMessageList', displayName:'私信消息',type:'privateMessage',count:privateMessageCount},
{name: 'lossAssessmentRecordList', displayName:'定损记录',type:'lossAssessmentRecord',count:lossAssessmentRecordCount},
{name: 'mainOrderList', displayName:'主订单',type:'mainOrder',count:mainOrderCount},
{name: 'bookCopyList', displayName:'书籍副本',type:'bookCopy',count:bookCopyCount},
{name: 'borrowingHistoryList', displayName:'图书借还历史',type:'borrowingHistory',count:borrowingHistoryCount},
{name: 'borrowingExpiredSkuList', displayName:'借书超期费',type:'borrowingExpiredSku',count:borrowingExpiredSkuCount},
{name: 'bookReviewList', displayName:'书评',type:'bookReview',count:bookReviewCount},
{name: 'bookReviewLikeList', displayName:'书评点赞',type:'bookReviewLike',count:bookReviewLikeCount},
{name: 'bookCopySharingApplicationList', displayName:'图书共享申请',type:'bookCopySharingApplication',count:bookCopySharingApplicationCount},
{name: 'memberServiceRevenueList', displayName:'会员服务收益',type:'memberServiceRevenue',count:memberServiceRevenueCount},
{name: 'customerAccountTransactionList', displayName:'客户账户明细',type:'customerAccountTransaction',count:customerAccountTransactionCount},
{name: 'campaignRegisterHistoryList', displayName:'活动报名记录',type:'campaignRegisterHistory',count:campaignRegisterHistoryCount},
{name: 'campaignReviewList', displayName:'活动评论',type:'campaignReview',count:campaignReviewCount},
{name: 'campaignLikeList', displayName:'活动点赞',type:'campaignLike',count:campaignLikeCount},
{name: 'campaignReviewLikeList', displayName:'活动评论点赞',type:'campaignReviewLike',count:campaignReviewLikeCount},
{name: 'customerFootprintList', displayName:'用户历程',type:'customerFootprint',count:customerFootprintCount},
{name: 'shieldCustomerListAsCustomer', displayName:'屏蔽用户',type:'shieldCustomer',count:shieldCustomerAsCustomerCount},
{name: 'shieldCustomerListAsShield', displayName:'屏蔽用户',type:'shieldCustomer',count:shieldCustomerAsShieldCount},
{name: 'informList', displayName:'举报',type:'inform',count:informCount},
{name: 'undistributedProfitList', displayName:'未分配利润',type:'undistributedProfit',count:undistributedProfitCount},
    
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
  customer: state._customer,
}))(Form.create()(CustomerDashboard))

