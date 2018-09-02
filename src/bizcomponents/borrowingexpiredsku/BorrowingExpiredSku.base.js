
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"借书超期费", menuFor: "borrowingExpiredSku",
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
  { title: '借书人', dataIndex: 'borrower', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书', dataIndex: 'book', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '借出网点', dataIndex: 'lendingStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '借出日期', dataIndex: 'lendingDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '还书网点', dataIndex: 'returnStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '还书日期', dataIndex: 'returnDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '过期天数', debugtype: 'int', dataIndex: 'expiredDays', width: '5',render: (text, record)=>renderTextCell(text,record) },
  { title: '过期费用', dataIndex: 'expiredFee', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '图书借还历史', dataIndex: 'borrowingHistory', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  borrower: '借书人',
  bookCopy: '书籍副本',
  book: '书',
  bookName: '书名',
  lendingStore: '借出网点',
  lendingDatetime: '借出日期',
  returnStore: '还书网点',
  returnDatetime: '还书日期',
  expiredDays: '过期天数',
  expiredFee: '过期费用',
  borrowingHistory: '图书借还历史',

}


const BorrowingExpiredSkuBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BorrowingExpiredSkuBase



