
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书盘点结果", menuFor: "bookTakeStockResult",
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
  { title: '图书盘点状态', dataIndex: 'bookTakeStockStatus', render: (text, record) => renderReferenceCell(text, record)},
  { title: '图书盘点执行时间', dataIndex: 'bookCopyCheckDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '员工', dataIndex: 'employee', render: (text, record) => renderReferenceCell(text, record)},
  { title: '盘点结果', dataIndex: 'takeStoreResults', render: (text, record) => renderReferenceCell(text, record)},
  { title: '盘点日期时间', dataIndex: 'takeStockDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '图书盘点计划', dataIndex: 'bookTakeStockPlan', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  bookName: '书名',
  bookCopy: '书籍副本',
  bookTakeStockStatus: '图书盘点状态',
  bookCopyCheckDatetime: '图书盘点执行时间',
  employee: '员工',
  takeStoreResults: '盘点结果',
  takeStockDatetime: '盘点日期时间',
  bookTakeStockPlan: '图书盘点计划',

}


const BookTakeStockResultBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookTakeStockResultBase



