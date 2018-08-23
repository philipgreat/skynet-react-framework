
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"书籍副本操作记录", menuFor: "bookCopyOperationRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书籍副本操作类型', debugtype: 'string', dataIndex: 'bookCopyOperateType', width: '6' },
  { title: '执行网点', dataIndex: 'operateStore', render: (text, record) => (record.operateStore ? record.operateStore.displayName : '暂无') },
  { title: '执行日期', dataIndex: 'operationDatetime', render: (text, record) => moment(record.operationDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '执行员工', dataIndex: 'operationEmployee', render: (text, record) => (record.operationEmployee ? record.operationEmployee.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书籍副本',
  bookCopyOperateType: '书籍副本操作类型',
  operateStore: '执行网点',
  operationDatetime: '执行日期',
  operationEmployee: '执行员工',

}


const BookCopyOperationRecordBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyOperationRecordBase



