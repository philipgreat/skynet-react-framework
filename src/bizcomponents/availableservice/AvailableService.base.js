
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"服务范围", menuFor: "availableService",
  		subItems: [
  {name: 'servicePriceList', displayName:'合同价格', icon:'glass'},
  {name: 'vehicleRepairingAllowanceList', displayName:'汽车修理平台补贴', icon:'glass'},
  {name: 'vehicleServiceCompanyBusinessScopeList', displayName:'商户服务范围', icon:'stethoscope'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/availableService/${text}/dashboard`}>{text}</Link>) },
  { title: '服务名称', debugtype: 'string', dataIndex: 'serviceName', width: '8' },
  { title: '服务代码', debugtype: 'string', dataIndex: 'serviceKey', width: '35' },
  { title: '服务描述', debugtype: 'string', dataIndex: 'serviceDescription', width: '41' },
  { title: '产品类型', dataIndex: 'availableProduct', render: (text, record) => (record.availableProduct ? record.availableProduct.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  serviceName: '服务名称',
  serviceKey: '服务代码',
  serviceDescription: '服务描述',
  availableProduct: '产品类型',

}


const AvailableServiceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableServiceBase



