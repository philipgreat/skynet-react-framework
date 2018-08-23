
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书共享申请", menuFor: "bookCopySharingApplication",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '共享数量', debugtype: 'string', dataIndex: 'bookCopyQuantity', width: '9' },
  { title: '共享方式', debugtype: 'string', dataIndex: 'deliverMethod', width: '8' },
  { title: '目标网点', dataIndex: 'destinationStore', render: (text, record) => (record.destinationStore ? record.destinationStore.displayName : '暂无') },
  { title: '联系地址', debugtype: 'string', dataIndex: 'contactAddress', width: '18' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '6' },
  { title: '联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7' },
  { title: '提交日期', dataIndex: 'submittedDate', render: (text, record) => moment(record.submittedDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '处理日期', dataIndex: 'processedDate', render: (text, record) => moment(record.processedDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '用户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopyQuantity: '共享数量',
  deliverMethod: '共享方式',
  destinationStore: '目标网点',
  contactAddress: '联系地址',
  contactName: '联系人姓名',
  contactMobile: '联系人手机',
  status: '状态',
  submittedDate: '提交日期',
  processedDate: '处理日期',
  customer: '用户',
  employee: '员工',

}


const BookCopySharingApplicationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopySharingApplicationBase



