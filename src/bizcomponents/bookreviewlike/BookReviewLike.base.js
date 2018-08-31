
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"书评点赞", menuFor: "bookReviewLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书评', dataIndex: 'bookReview', render: (text, record) => (record.bookReview ? record.bookReview.displayName : '暂无') },
  { title: '回复人', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '点赞发布日期', dataIndex: 'likePublishDatetime', render: (text, record) => moment(record.likePublishDatetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  bookReview: '书评',
  replier: '回复人',
  likePublishDatetime: '点赞发布日期',

}


const BookReviewLikeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookReviewLikeBase



