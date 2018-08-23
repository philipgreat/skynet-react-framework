
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"商户派单", menuFor: "vehicleServiceCompanyDispatcher",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '18' },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  description: '描述',
  company: '商户',

}


const VehicleServiceCompanyDispatcherBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleServiceCompanyDispatcherBase



