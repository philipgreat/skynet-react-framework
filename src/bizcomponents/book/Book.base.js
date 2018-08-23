
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"书", menuFor: "book",
  		subItems: [
  {name: 'bookCopyList', displayName:'书籍副本', icon:'book'},
  {name: 'borrowingHistoryList', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'glass'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  {name: 'storeSlideList', displayName:'网点海报', icon:'sliders'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/book/${text}/dashboard`}>{text}</Link>) },
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15' },
  { title: '封面', dataIndex: 'bookCover', render: (text, record) => <ImagePreview imageTitle="封面" imageLocation={record.bookCover} /> },
  { title: '作者', debugtype: 'string', dataIndex: 'bookAuthor', width: '67' },
  { title: '出版社', debugtype: 'string', dataIndex: 'bookPublisher', width: '9' },
  { title: '出版日期', dataIndex: 'bookPubdate', render: (text, record) => moment(record.bookPubdate).format('YYYY-MM-DD') },
  { title: '定价', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: 'ISBN13', debugtype: 'string', dataIndex: 'bookIsbn13', width: '21' },
  { title: 'ISBN10', debugtype: 'string', dataIndex: 'bookIsbn10', width: '16' },
  { title: '图书推荐', dataIndex: 'bookRecommend', render: (text, record) => (record.bookRecommend ? record.bookRecommend.displayName : '暂无') },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '本书总结', debugtype: 'string', dataIndex: 'bookSummary', width: '11' },

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



