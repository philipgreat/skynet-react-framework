
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"书籍副本", menuFor: "bookCopy",
  		subItems: [
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'glass'},
  {name: 'bookCopyTransferList', displayName:'图书副本迁移记录', icon:'book'},
  {name: 'bookTakeStockResultList', displayName:'图书盘点结果', icon:'book'},
  {name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录', icon:'book'},
  {name: 'borrowingHistoryList', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'glass'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookCopy/${text}/dashboard`}>{text}</Link>) },
  { title: '书籍信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.displayName : '暂无') },
  { title: '书籍副本共享人', dataIndex: 'bookCopyVendor', render: (text, record) => (record.bookCopyVendor ? record.bookCopyVendor.displayName : '暂无') },
  { title: '书籍副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6' },
  { title: '所在网点', dataIndex: 'locationStore', render: (text, record) => (record.locationStore ? record.locationStore.displayName : '暂无') },
  { title: '评估价格', dataIndex: 'evaluationPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '书籍副本状态', dataIndex: 'bookCopyStatus', render: (text, record) => (record.bookCopyStatus ? record.bookCopyStatus.displayName : '暂无') },
  { title: '小程序ID', debugtype: 'string_url', dataIndex: 'wxaId', width: '80' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },

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



