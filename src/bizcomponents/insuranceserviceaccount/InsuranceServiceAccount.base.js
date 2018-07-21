
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"保险服务对账单", menuFor: "insuranceServiceAccount",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '保险服务单号', debugtype: 'string', dataIndex: 'insuranceOrderNumber', width: '13' },
  { title: '员工姓名', debugtype: 'string', dataIndex: 'employeeName', width: '6' },
  { title: '保险名称', debugtype: 'string', dataIndex: 'insuranceName', width: '10' },
  { title: '承保方', debugtype: 'string', dataIndex: 'insuranceVendor', width: '11' },
  { title: '保费', dataIndex: 'insurancePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '保单号码', debugtype: 'string', dataIndex: 'insuranceNumber', width: '19' },
  { title: '保险购买日期', dataIndex: 'insuranceOrderDatetime', render: (text, record) => moment(record.insuranceOrderDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '28' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vehicleLicensePlateNumber: '车牌号码',
  insuranceOrderNumber: '保险服务单号',
  employeeName: '员工姓名',
  insuranceName: '保险名称',
  insuranceVendor: '承保方',
  insurancePrice: '保费',
  insuranceNumber: '保单号码',
  insuranceOrderDatetime: '保险购买日期',
  mainOrderId: '年检订单ID',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',

}


const InsuranceServiceAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default InsuranceServiceAccountBase



