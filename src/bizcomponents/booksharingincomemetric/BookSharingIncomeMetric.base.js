
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"共享图书收益分成配置", menuFor: "bookSharingIncomeMetric",
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
  { title: '共享者分成比', debugtype: 'double', dataIndex: 'vendorRate', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '借出网点分成比', debugtype: 'double', dataIndex: 'lendingStoreRate', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '平台分成比', debugtype: 'double', dataIndex: 'platformRate', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  vendorRate: '共享者分成比',
  lendingStoreRate: '借出网点分成比',
  platformRate: '平台分成比',
  bookPlaza: '图书天地',

}


const BookSharingIncomeMetricBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookSharingIncomeMetricBase



