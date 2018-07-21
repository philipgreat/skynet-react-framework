
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"检测站对账单", menuFor: "inspectionStationAccount",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务单号', debugtype: 'string', dataIndex: 'serviceOrderNumber', width: '14' },
  { title: '年检类型', debugtype: 'string', dataIndex: 'inspectionType', width: '8' },
  { title: '车辆信息', debugtype: 'string', dataIndex: 'inspectionVehicleInfo', width: '11' },
  { title: '检测结果', debugtype: 'string', dataIndex: 'inspectionFinalResult', width: '7' },
  { title: '检测日期', dataIndex: 'inspectionDatetime', render: (text, record) => moment(record.inspectionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检测站', debugtype: 'string', dataIndex: 'inspectionStationName', width: '11' },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderNumber', width: '28' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '检测站', dataIndex: 'inspectionStation', render: (text, record) => (record.inspectionStation ? record.inspectionStation.displayName : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  serviceOrderNumber: '服务单号',
  inspectionType: '年检类型',
  inspectionVehicleInfo: '车辆信息',
  inspectionFinalResult: '检测结果',
  inspectionDatetime: '检测日期',
  inspectionStationName: '检测站',
  mainOrderNumber: '年检订单ID',
  merchant: '商户',
  responsibleWorker: '服务人员',
  inspectionStation: '检测站',
  account: '对账单',

}


const InspectionStationAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default InspectionStationAccountBase



