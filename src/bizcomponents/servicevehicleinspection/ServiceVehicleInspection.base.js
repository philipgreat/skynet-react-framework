
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆上线检测", menuFor: "serviceVehicleInspection",
  		subItems: [
  {name: 'serviceVehicleRepairingList', displayName:'维修服务', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/serviceVehicleInspection/${text}/dashboard`}>{text}</Link>) },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '23' },
  { title: '检测站', dataIndex: 'inspectionStation', render: (text, record) => (record.inspectionStation ? record.inspectionStation.displayName : '暂无') },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检测日期', dataIndex: 'inspectionDatetime', render: (text, record) => moment(record.inspectionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检报告1', dataIndex: 'inspectionReportImage1', render: (text, record) => <ImagePreview imageTitle="年检报告1" imageLocation={record.inspectionReportImage1} /> },
  { title: '年检报告2', dataIndex: 'inspectionReportImage2', render: (text, record) => <ImagePreview imageTitle="年检报告2" imageLocation={record.inspectionReportImage2} /> },
  { title: '年检报告3', dataIndex: 'inspectionReportImage3', render: (text, record) => <ImagePreview imageTitle="年检报告3" imageLocation={record.inspectionReportImage3} /> },
  { title: '年检报告4', dataIndex: 'inspectionReportImage4', render: (text, record) => <ImagePreview imageTitle="年检报告4" imageLocation={record.inspectionReportImage4} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage5', render: (text, record) => <ImagePreview imageTitle="年检报告5" imageLocation={record.inspectionReportImage5} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage6', render: (text, record) => <ImagePreview imageTitle="年检报告5" imageLocation={record.inspectionReportImage6} /> },
  { title: '年检报告6', dataIndex: 'inspectionReportImage7', render: (text, record) => <ImagePreview imageTitle="年检报告6" imageLocation={record.inspectionReportImage7} /> },
  { title: '年检报告7', dataIndex: 'inspectionReportImage8', render: (text, record) => <ImagePreview imageTitle="年检报告7" imageLocation={record.inspectionReportImage8} /> },
  { title: '内部状态', debugtype: 'string', dataIndex: 'internalStatus', width: '7' },
  { title: '初步检测结果', dataIndex: 'initialInspectionPassed', render: (text, record) => (record.initialInspectionPassed ? '是' : '否') },
  { title: '检测结果', debugtype: 'string', dataIndex: 'inspectionResult', width: '7' },
  { title: '是否要修理', debugtype: 'string', dataIndex: 'inspectionNeedRepair', width: '7' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  serviceStatus: '服务状态',
  responsibleWorker: '服务人员',
  serviceSummary: '服务概述',
  inspectionStation: '检测站',
  startTime: '开始时间',
  longitude: '经度',
  latitude: '纬度',
  lastUpdateTime: '最后更新时间',
  inspectionDatetime: '检测日期',
  inspectionReportImage1: '年检报告1',
  inspectionReportImage2: '年检报告2',
  inspectionReportImage3: '年检报告3',
  inspectionReportImage4: '年检报告4',
  inspectionReportImage5: '年检报告5',
  inspectionReportImage6: '年检报告5',
  inspectionReportImage7: '年检报告6',
  inspectionReportImage8: '年检报告7',
  internalStatus: '内部状态',
  initialInspectionPassed: '初步检测结果',
  inspectionResult: '检测结果',
  inspectionNeedRepair: '是否要修理',
  merchant: '商户',
  mainOrder: '年检订单',

}


const ServiceVehicleInspectionBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServiceVehicleInspectionBase



