
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"书评", menuFor: "bookReview",
  		subItems: [
  {name: 'bookReviewLikeList', displayName:'书评点赞', icon:'book'},
  {name: 'informList', displayName:'举报', icon:'info'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'bookReview') },
  { title: '书籍信息', dataIndex: 'bookInfo', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => renderReferenceCell(text, record)},
  { title: '评论人', dataIndex: 'reviewer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '评论内容', debugtype: 'string', dataIndex: 'reviewContent', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  bookInfo: '书籍信息',
  bookCopy: '书籍副本',
  reviewer: '评论人',
  reviewPublishDatetime: '评论发布日期时间',
  reviewContent: '评论内容',
  bookPlaza: '图书天地',

}


const BookReviewBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookReviewBase



