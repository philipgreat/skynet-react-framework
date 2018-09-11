
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"平台配置", menuFor: "platformConfiguration",
  		subItems: [
  
  		],
}

const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 

}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '会员服务协议', debugtype: 'string_longtext', dataIndex: 'memberServiceAgreement', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书共享协议', debugtype: 'string_longtext', dataIndex: 'bookSharingAgreement', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '账户充值协议', debugtype: 'string_longtext', dataIndex: 'accountRechargeAgreement', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点列表页提示信息', debugtype: 'string_longtext', dataIndex: 'messageInStoreListPage', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '反馈联系信息', debugtype: 'string_longtext', dataIndex: 'feedbackContactInfo', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '我的权益的功能的显示名称', debugtype: 'string', dataIndex: 'myRightsTitle', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '我的借阅记录的功能的显示名称', debugtype: 'string', dataIndex: 'myBorrowingTitle', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '我的活动的功能的显示名称', debugtype: 'string', dataIndex: 'myCampaignTitle', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '我的余额的功能的显示名称', debugtype: 'string', dataIndex: 'myBalanceTitle', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '我的书评的功能的显示名称', debugtype: 'string', dataIndex: 'myBookReviewTitle', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '我的订单的功能的显示名称', debugtype: 'string', dataIndex: 'myOrderTitle', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  memberServiceAgreement: '会员服务协议',
  bookSharingAgreement: '图书共享协议',
  accountRechargeAgreement: '账户充值协议',
  messageInStoreListPage: '网点列表页提示信息',
  feedbackContactInfo: '反馈联系信息',
  myRightsTitle: '我的权益的功能的显示名称',
  myBorrowingTitle: '我的借阅记录的功能的显示名称',
  myCampaignTitle: '我的活动的功能的显示名称',
  myBalanceTitle: '我的余额的功能的显示名称',
  myBookReviewTitle: '我的书评的功能的显示名称',
  myOrderTitle: '我的订单的功能的显示名称',
  platform: '平台',

}


const PlatformConfigurationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PlatformConfigurationBase



