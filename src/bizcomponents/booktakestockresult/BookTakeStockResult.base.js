
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书盘点结果", menuFor: "bookTakeStockResult",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '图书盘点状态', debugtype: 'string', dataIndex: 'bookTakeStockStatus', width: '7' },
  { title: '图书盘点执行时间', dataIndex: 'bookCopyCheckDatetime', render: (text, record) => moment(record.bookCopyCheckDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '结果', debugtype: 'string', dataIndex: 'results', width: '6' },
  { title: '盘点日期时间', dataIndex: 'takeStockDatetime', render: (text, record) => moment(record.takeStockDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '图书盘点计划', dataIndex: 'bookTakeStockPlan', render: (text, record) => (record.bookTakeStockPlan ? record.bookTakeStockPlan.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书籍副本',
  bookTakeStockStatus: '图书盘点状态',
  bookCopyCheckDatetime: '图书盘点执行时间',
  employee: '员工',
  results: '结果',
  takeStockDatetime: '盘点日期时间',
  bookTakeStockPlan: '图书盘点计划',

}


const BookTakeStockResultBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookTakeStockResultBase



