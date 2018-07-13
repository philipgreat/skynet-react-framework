
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆类型", menuFor: "availableVehicleType",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '8' },
  { title: '车辆类型别名', debugtype: 'string', dataIndex: 'vehicleTypeAlias', width: '18' },
  { title: '可下单', dataIndex: 'canPlaceOrder', render: (text, record) => (record.canPlaceOrder ? '是' : '否') },
  { title: '可6年免检', dataIndex: 'canDoExempt', render: (text, record) => (record.canDoExempt ? '是' : '否') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vehicleType: '车辆类型',
  vehicleTypeAlias: '车辆类型别名',
  canPlaceOrder: '可下单',
  canDoExempt: '可6年免检',
  platform: '平台',

}


const AvailableVehicleTypeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableVehicleTypeBase



