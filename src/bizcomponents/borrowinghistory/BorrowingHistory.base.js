
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书借还历史", menuFor: "borrowingHistory",
  		subItems: [
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/borrowingHistory/${text}/dashboard`}>{text}</Link>) },
  { title: '借出日期', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15' },
  { title: '借书人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.displayName : '暂无') },
  { title: '借书人会员等级', debugtype: 'string', dataIndex: 'borrowerMemberLevel', width: '23' },
  { title: '借书人会员服务过期日期', dataIndex: 'borrowerMemberServiceExpiredDatetime', render: (text, record) => moment(record.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书籍副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6' },
  { title: '借出网点', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.displayName : '暂无') },
  { title: '借出网点类型', debugtype: 'string', dataIndex: 'lendingStoreType', width: '6' },
  { title: '免费借阅天数', debugtype: 'int', dataIndex: 'freeLendingDays', width: '5' },
  { title: '免费借阅到期时间', dataIndex: 'freeLendingExpiredDatetime', render: (text, record) => moment(record.freeLendingExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '超期天数', dataIndex: 'overduePay', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '还书日期', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '还书网点', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.displayName : '暂无') },
  { title: '实际借书天数', debugtype: 'int', dataIndex: 'lendingDays', width: '6' },
  { title: '是否超期', dataIndex: 'freeLendingExpired', render: (text, record) => (record.freeLendingExpired ? '是' : '否') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '借书状态', dataIndex: 'borrowingStatus', render: (text, record) => (record.borrowingStatus ? record.borrowingStatus.displayName : '暂无') },

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



