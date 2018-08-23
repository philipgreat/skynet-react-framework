
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书副本迁移记录", menuFor: "bookCopyTransfer",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书名', debugtype: 'string', dataIndex: 'bookName', width: '15' },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '原网点', dataIndex: 'originalStore', render: (text, record) => (record.originalStore ? record.originalStore.displayName : '暂无') },
  { title: '新网点', dataIndex: 'newStore', render: (text, record) => (record.newStore ? record.newStore.displayName : '暂无') },
  { title: '转移类型', debugtype: 'string', dataIndex: 'transferType', width: '8' },
  { title: '操作员工', dataIndex: 'responsibleEmployee', render: (text, record) => (record.responsibleEmployee ? record.responsibleEmployee.displayName : '暂无') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  bookName: '书名',
  bookCopy: '书籍副本',
  originalStore: '原网点',
  newStore: '新网点',
  transferType: '转移类型',
  responsibleEmployee: '操作员工',
  lastUpdateTime: '最后更新时间',

}


const BookCopyTransferBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyTransferBase



