
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"借书超期费", menuFor: "borrowingExpiredSku",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '借书人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.displayName : '暂无') },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15' },
  { title: '借出网点', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.displayName : '暂无') },
  { title: '借出日期', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '还书网点', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.displayName : '暂无') },
  { title: '还书日期', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '过期天数', debugtype: 'int', dataIndex: 'expiredDays', width: '5' },
  { title: '过期费用', dataIndex: 'expiredFee', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '图书借还历史', dataIndex: 'borrowingHistory', render: (text, record) => (record.borrowingHistory ? record.borrowingHistory.displayName : '暂无') },

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



