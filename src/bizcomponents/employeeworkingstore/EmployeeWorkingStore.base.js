
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"员工工作的网点", menuFor: "employeeWorkingStore",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '20' },
  { title: '角色', dataIndex: 'role', render: (text, record) => (record.role ? record.role.displayName : '暂无') },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '终止日期', dataIndex: 'terminatedDate', render: (text, record) => moment(record.terminatedDate).format('YYYY-MM-DD') },

]

const fieldLabels = {
  id: 'ID',
  description: '描述',
  role: '角色',
  employee: '员工',
  store: '服务网点',
  startDate: '开始日期',
  lastUpdateTime: '最后更新时间',
  terminatedDate: '终止日期',

}


const EmployeeWorkingStoreBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EmployeeWorkingStoreBase



