
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"书籍副本操作记录", menuFor: "bookCopyOperationRecord",
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
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本操作类型', dataIndex: 'bookCopyOperateType', render: (text, record) => renderReferenceCell(text, record)},
  { title: '执行网点', dataIndex: 'operateStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '执行日期', dataIndex: 'operationDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '执行员工', dataIndex: 'operationEmployee', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  bookName: '书名',
  bookCopy: '书籍副本',
  bookCopyOperateType: '书籍副本操作类型',
  operateStore: '执行网点',
  operationDatetime: '执行日期',
  operationEmployee: '执行员工',

}


const BookCopyOperationRecordBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyOperationRecordBase



