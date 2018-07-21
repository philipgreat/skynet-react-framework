
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"支付维修订单", menuFor: "vehicleRepairingPayment",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '订单合计', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '应付金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '8' },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36' },
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '维修服务', dataIndex: 'serviceVehicleRepairing', render: (text, record) => (record.serviceVehicleRepairing ? record.serviceVehicleRepairing.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  originalAmount: '订单合计',
  actualAmount: '应付金额',
  status: '状态',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  serviceVehicleRepairing: '维修服务',

}


const VehicleRepairingPaymentBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleRepairingPaymentBase



