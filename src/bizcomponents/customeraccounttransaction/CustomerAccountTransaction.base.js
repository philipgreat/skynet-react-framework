
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"客户账户明细", menuFor: "customerAccountTransaction",
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
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '余额', dataIndex: 'balance', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '交易类型', dataIndex: 'transactionType', render: (text, record) => renderReferenceCell(text, record)},
  { title: '用户', dataIndex: 'customer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '交易时间', dataIndex: 'changeDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '相关订单', dataIndex: 'relatedMainOrder', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  amount: '账户余额',
  balance: '余额',
  transactionType: '交易类型',
  customer: '用户',
  changeDatetime: '交易时间',
  relatedMainOrder: '相关订单',

}


const CustomerAccountTransactionBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CustomerAccountTransactionBase



