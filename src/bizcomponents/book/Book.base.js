
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"书", menuFor: "book",
  		subItems: [
  {name: 'bookCopyList', displayName:'书籍副本', icon:'copy'},
  {name: 'borrowingHistoryList', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'skull'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  {name: 'storeSlideList', displayName:'网点海报', icon:'store'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'book') },
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '封面', dataIndex: 'bookCover', render: (text, record) => renderImageCell(text,record,'封面') },
  { title: '作者', debugtype: 'string', dataIndex: 'bookAuthor', width: '67',render: (text, record)=>renderTextCell(text,record) },
  { title: '出版社', debugtype: 'string', dataIndex: 'bookPublisher', width: '9',render: (text, record)=>renderTextCell(text,record) },
  { title: '出版日期', dataIndex: 'bookPubdate', render: (text, record) =>renderDateCell(text,record) },
  { title: '定价', dataIndex: 'listPrice', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: 'ISBN13', debugtype: 'string', dataIndex: 'bookIsbn13', width: '21',render: (text, record)=>renderTextCell(text,record) },
  { title: 'ISBN10', debugtype: 'string', dataIndex: 'bookIsbn10', width: '16',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书推荐', dataIndex: 'bookRecommend', render: (text, record) => renderReferenceCell(text, record)},
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => renderReferenceCell(text, record)},
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},
  { title: '本书总结', debugtype: 'string', dataIndex: 'bookSummary', width: '11',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  bookName: '书名',
  bookCover: '封面',
  bookAuthor: '作者',
  bookPublisher: '出版社',
  bookPubdate: '出版日期',
  listPrice: '定价',
  bookIsbn13: 'ISBN13',
  bookIsbn10: 'ISBN10',
  bookRecommend: '图书推荐',
  bookPlaza: '图书天地',
  platform: '平台',
  bookSummary: '本书总结',

}


const BookBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookBase



