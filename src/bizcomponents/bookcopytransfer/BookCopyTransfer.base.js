
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书副本迁移记录", menuFor: "bookCopyTransfer",
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
  { title: '原网点', dataIndex: 'originalStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '新网点', dataIndex: 'newStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '转移类型', dataIndex: 'transferType', render: (text, record) => renderReferenceCell(text, record)},
  { title: '操作员工', dataIndex: 'responsibleEmployee', render: (text, record) => renderReferenceCell(text, record)},
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },

]

const fieldLabels = {
  id: 'ID',
  bookName: '书名',
  bookCopy: '书籍副本',
  originalStore: '原网点',
  newStore: '新网点',
  transferType: '转移类型',
  responsibleEmployee: '操作员工',
  lastUpdateTime: '最后更新时间',

}


const BookCopyTransferBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyTransferBase


