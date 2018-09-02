
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"主订单支付", menuFor: "mainOrderPayment",
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
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '支付金额', dataIndex: 'paidAmount', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '付款状态', debugtype: 'string', dataIndex: 'paymentStatus', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '微信支付交易ID', debugtype: 'string', dataIndex: 'wechatTransactionId', width: '36',render: (text, record)=>renderTextCell(text,record) },
  { title: '微信支付ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25',render: (text, record)=>renderTextCell(text,record) },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  paymentMethod: '支付方式',
  paidAmount: '支付金额',
  paymentStatus: '付款状态',
  wechatTransactionId: '微信支付交易ID',
  wechatPrepayId: '微信支付ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  mainOrder: '主订单',

}


const MainOrderPaymentBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MainOrderPaymentBase



