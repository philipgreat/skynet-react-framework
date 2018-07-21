
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"服务商户对账单", menuFor: "serviceCompanyAccount",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务单号', debugtype: 'string', dataIndex: 'serviceOrderNumber', width: '14' },
  { title: '服务单代码', debugtype: 'string', dataIndex: 'serviceOrderCode', width: '35' },
  { title: '服务单名称', debugtype: 'string', dataIndex: 'serviceOrderName', width: '8' },
  { title: '服务完成时间', dataIndex: 'serviceFulfilledDatetime', render: (text, record) => moment(record.serviceFulfilledDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '合同编号', debugtype: 'string', dataIndex: 'contractId', width: '13' },
  { title: '服务价格', dataIndex: 'contractPriceValue', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务类型', debugtype: 'string', dataIndex: 'contractPriceType', width: '8' },
  { title: '服务人员', debugtype: 'string', dataIndex: 'serviceWorkerName', width: '7' },
  { title: '商户名称', debugtype: 'string', dataIndex: 'serviceCompanyName', width: '27' },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '28' },
  { title: '商户优惠', dataIndex: 'merchantDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  serviceOrderNumber: '服务单号',
  serviceOrderCode: '服务单代码',
  serviceOrderName: '服务单名称',
  serviceFulfilledDatetime: '服务完成时间',
  contractId: '合同编号',
  contractPriceValue: '服务价格',
  contractPriceType: '服务类型',
  serviceWorkerName: '服务人员',
  serviceCompanyName: '商户名称',
  mainOrderId: '年检订单ID',
  merchantDiscount: '商户优惠',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',

}


const ServiceCompanyAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServiceCompanyAccountBase



