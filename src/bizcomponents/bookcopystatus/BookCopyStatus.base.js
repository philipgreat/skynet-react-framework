
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"书籍副本状态", menuFor: "bookCopyStatus",
  		subItems: [
  {name: 'bookCopyList', displayName:'书籍副本', icon:'copy'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'bookCopyStatus') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '状态描述', debugtype: 'string', dataIndex: 'statusDescription', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => renderReferenceCell(text, record)},
  { title: '是否可借', dataIndex: 'canBorrow', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '是否可售', dataIndex: 'canSell', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '是否检查库存', dataIndex: 'needCheckStock', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '检查是是否提醒', dataIndex: 'alarmWhenCheck', render: (text, record) =>renderBooleanCell(text, record) },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  statusDescription: '状态描述',
  bookPlaza: '图书天地',
  canBorrow: '是否可借',
  canSell: '是否可售',
  needCheckStock: '是否检查库存',
  alarmWhenCheck: '检查是是否提醒',

}


const BookCopyStatusBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyStatusBase



