
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"修理厂对账单", menuFor: "repairingCompanyAccount",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '修理员', debugtype: 'string', dataIndex: 'repairingWorkerName', width: '36' },
  { title: '修理厂', debugtype: 'string', dataIndex: 'repairingCompanyName', width: '27' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '车辆维修服务单号', debugtype: 'string', dataIndex: 'vehicleRepairingOrderNumber', width: '14' },
  { title: '订单合计', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '补贴金额', dataIndex: 'allowanceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '应付金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '15' },
  { title: '付款日期时间', dataIndex: 'paymentDatetime', render: (text, record) => moment(record.paymentDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36' },
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  repairingWorkerName: '修理员',
  repairingCompanyName: '修理厂',
  vehicleLicensePlateNumber: '车牌号码',
  vehicleRepairingOrderNumber: '车辆维修服务单号',
  originalAmount: '订单合计',
  allowanceAmount: '补贴金额',
  actualAmount: '应付金额',
  mainOrderId: '年检订单ID',
  paymentDatetime: '付款日期时间',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',

}


const RepairingCompanyAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default RepairingCompanyAccountBase



