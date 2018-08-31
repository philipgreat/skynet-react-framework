
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"书评", menuFor: "bookReview",
  		subItems: [
  {name: 'bookReviewLikeList', displayName:'书评点赞', icon:'book'},
  {name: 'informList', displayName:'举报', icon:'info'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookReview/${text}/dashboard`}>{text}</Link>) },
  { title: '书籍信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.displayName : '暂无') },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '评论人', dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.displayName : '暂无') },
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) => moment(record.reviewPublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论内容', debugtype: 'string', dataIndex: 'reviewContent', width: '13' },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },

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



