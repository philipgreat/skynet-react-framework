
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"主订单", menuFor: "mainOrder",
  		subItems: [
  {name: 'lineItemList', displayName:'订单项', icon:'line'},
  {name: 'mainOrderPaymentList', displayName:'主订单支付', icon:'first-order'},
  {name: 'orderLogList', displayName:'Log', icon:'blogger'},
  {name: 'memberServiceRevenueList', displayName:'会员服务收益', icon:'ember'},
  {name: 'platformAccountDetailsList', displayName:'平台账户明细', icon:'at'},
  {name: 'fundationAccountDetailsList', displayName:'平台基金账户明细', icon:'at'},
  {name: 'storeAccountDetailsList', displayName:'网点账户明细', icon:'store'},
  {name: 'customerAccountTransactionList', displayName:'客户账户明细', icon:'om'},
  {name: 'undistributedProfitList', displayName:'未分割收入', icon:'500px'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'mainOrder') },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '26',render: (text, record)=>renderTextCell(text,record) },
  { title: '主订单状态', debugtype: 'string', dataIndex: 'mainOrderStatus', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '用户', dataIndex: 'customer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => renderReferenceCell(text, record)},
  { title: '订单总价', dataIndex: 'originalAmount', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '实付款金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => renderMoneyCell(text, record) },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  mainOrderStatus: '主订单状态',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  customer: '用户',
  bookSharingPlatform: '图书共享平台',
  originalAmount: '订单总价',
  actualAmount: '实付款金额',

}


const MainOrderBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MainOrderBase



