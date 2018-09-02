
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"书籍副本", menuFor: "bookCopy",
  		subItems: [
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'500px'},
  {name: 'bookCopyTransferList', displayName:'图书副本迁移记录', icon:'copy'},
  {name: 'bookTakeStockResultList', displayName:'图书盘点结果', icon:'book'},
  {name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录', icon:'copy'},
  {name: 'borrowingHistoryList', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'skull'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'bookCopy') },
  { title: '书籍信息', dataIndex: 'bookInfo', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本共享人', dataIndex: 'bookCopyVendor', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '所在网点', dataIndex: 'locationStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '评估价格', dataIndex: 'evaluationPrice', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '书籍副本状态', dataIndex: 'bookCopyStatus', render: (text, record) => renderReferenceCell(text, record)},
  { title: '小程序ID', debugtype: 'string_url', dataIndex: 'wxaId', width: '80',render: (text, record)=>renderTextCell(text,record) },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },

]

const fieldLabels = {
  id: 'ID',
  bookInfo: '书籍信息',
  bookCopyVendor: '书籍副本共享人',
  bookCopySharingType: '书籍副本共享类型',
  locationStore: '所在网点',
  evaluationPrice: '评估价格',
  bookCopyStatus: '书籍副本状态',
  wxaId: '小程序ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',

}


const BookCopyBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyBase



