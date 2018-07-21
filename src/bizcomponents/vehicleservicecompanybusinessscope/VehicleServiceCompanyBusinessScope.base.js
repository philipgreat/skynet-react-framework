
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"商户服务范围", menuFor: "vehicleServiceCompanyBusinessScope",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '服务范围', dataIndex: 'availableService', render: (text, record) => (record.availableService ? record.availableService.displayName : '暂无') },
  { title: '可用状态', dataIndex: 'serviceAvailability', render: (text, record) => (record.serviceAvailability ? '是' : '否') },

]

const fieldLabels = {
  id: 'ID',
  company: '商户',
  availableService: '服务范围',
  serviceAvailability: '可用状态',

}


const VehicleServiceCompanyBusinessScopeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleServiceCompanyBusinessScopeBase



