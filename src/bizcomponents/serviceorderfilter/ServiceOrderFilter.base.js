
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"服务单状态类型", menuFor: "serviceOrderFilter",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务单状态名称', debugtype: 'string', dataIndex: 'filterName', width: '8' },
  { title: '服务单数量', debugtype: 'int', dataIndex: 'orderCount', width: '6' },
  { title: '选中', dataIndex: 'selected', render: (text, record) => (record.selected ? '是' : '否') },
  { title: '服务单状态接口', debugtype: 'string', dataIndex: 'linkUrl', width: '56' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  filterName: '服务单状态名称',
  orderCount: '服务单数量',
  selected: '选中',
  linkUrl: '服务单状态接口',
  employee: '员工',

}


const ServiceOrderFilterBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServiceOrderFilterBase



