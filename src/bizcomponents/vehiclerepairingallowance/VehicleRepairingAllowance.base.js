
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"汽车修理平台补贴", menuFor: "vehicleRepairingAllowance",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '补贴项名称', debugtype: 'string', dataIndex: 'allowanceTitle', width: '9' },
  { title: '补贴代码', debugtype: 'string', dataIndex: 'allowanceCode', width: '23' },
  { title: '补贴金额', dataIndex: 'allowanceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务', dataIndex: 'service', render: (text, record) => (record.service ? record.service.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  allowanceTitle: '补贴项名称',
  allowanceCode: '补贴代码',
  allowanceAmount: '补贴金额',
  service: '服务',

}


const VehicleRepairingAllowanceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleRepairingAllowanceBase



