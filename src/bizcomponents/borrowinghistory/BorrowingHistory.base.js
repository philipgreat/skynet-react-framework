
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书借还历史", menuFor: "borrowingHistory",
  		subItems: [
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'skull'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'borrowingHistory') },
  { title: '借出日期', dataIndex: 'lendingDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '借书人', dataIndex: 'borrower', render: (text, record) => renderReferenceCell(text, record)},
  { title: '借书人会员等级', debugtype: 'string', dataIndex: 'borrowerMemberLevel', width: '23',render: (text, record)=>renderTextCell(text,record) },
  { title: '借书人会员服务过期日期', dataIndex: 'borrowerMemberServiceExpiredDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '书', dataIndex: 'book', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '借出网点', dataIndex: 'lendingStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '借出网点类型', debugtype: 'string', dataIndex: 'lendingStoreType', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '免费借阅天数', debugtype: 'int', dataIndex: 'freeLendingDays', width: '5',render: (text, record)=>renderTextCell(text,record) },
  { title: '免费借阅到期时间', dataIndex: 'freeLendingExpiredDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '超期天数', dataIndex: 'overduePay', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '还书日期', dataIndex: 'returnDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '还书网点', dataIndex: 'returnStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '实际借书天数', debugtype: 'int', dataIndex: 'lendingDays', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '是否超期', dataIndex: 'freeLendingExpired', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '借书状态', dataIndex: 'borrowingStatus', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  lendingDatetime: '借出日期',
  bookName: '书名',
  borrower: '借书人',
  borrowerMemberLevel: '借书人会员等级',
  borrowerMemberServiceExpiredDatetime: '借书人会员服务过期日期',
  book: '书',
  bookCopy: '书籍副本',
  bookCopySharingType: '书籍副本共享类型',
  lendingStore: '借出网点',
  lendingStoreType: '借出网点类型',
  freeLendingDays: '免费借阅天数',
  freeLendingExpiredDatetime: '免费借阅到期时间',
  overduePay: '超期天数',
  returnDatetime: '还书日期',
  returnStore: '还书网点',
  lendingDays: '实际借书天数',
  freeLendingExpired: '是否超期',
  lastUpdateTime: '最后更新时间',
  borrowingStatus: '借书状态',

}


const BorrowingHistoryBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BorrowingHistoryBase



