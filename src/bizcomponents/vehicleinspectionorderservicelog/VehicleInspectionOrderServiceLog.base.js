
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"年检订单执行日志", menuFor: "vehicleInspectionOrderServiceLog",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '53' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '服务类型', debugtype: 'string', dataIndex: 'serviceType', width: '38' },
  { title: '服务单号', debugtype: 'string', dataIndex: 'serviceTicket', width: '19' },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  createTime: '创建时间',
  responsibleWorker: '服务人员',
  longitude: '经度',
  latitude: '纬度',
  serviceType: '服务类型',
  serviceTicket: '服务单号',
  mainOrder: '年检订单',

}


const VehicleInspectionOrderServiceLogBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleInspectionOrderServiceLogBase



