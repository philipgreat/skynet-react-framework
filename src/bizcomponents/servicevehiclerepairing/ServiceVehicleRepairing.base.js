
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"维修服务", menuFor: "serviceVehicleRepairing",
  		subItems: [
  {name: 'repairingAllowanceItemList', displayName:'车辆维修补贴项', icon:'sitemap'},
  {name: 'vehicleRepairingPaymentList', displayName:'支付维修订单', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/serviceVehicleRepairing/${text}/dashboard`}>{text}</Link>) },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '26' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检报告1', dataIndex: 'inspectionReportImage1', render: (text, record) => <ImagePreview imageTitle="年检报告1" imageLocation={record.inspectionReportImage1} /> },
  { title: '年检报告2', dataIndex: 'inspectionReportImage2', render: (text, record) => <ImagePreview imageTitle="年检报告2" imageLocation={record.inspectionReportImage2} /> },
  { title: '年检报告3', dataIndex: 'inspectionReportImage3', render: (text, record) => <ImagePreview imageTitle="年检报告3" imageLocation={record.inspectionReportImage3} /> },
  { title: '年检报告4', dataIndex: 'inspectionReportImage4', render: (text, record) => <ImagePreview imageTitle="年检报告4" imageLocation={record.inspectionReportImage4} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage5', render: (text, record) => <ImagePreview imageTitle="年检报告5" imageLocation={record.inspectionReportImage5} /> },
  { title: '车辆维修报价单1', dataIndex: 'repairingQuotationImage1', render: (text, record) => <ImagePreview imageTitle="车辆维修报价单1" imageLocation={record.repairingQuotationImage1} /> },
  { title: '车辆维修报价单2', dataIndex: 'repairingQuotationImage2', render: (text, record) => <ImagePreview imageTitle="车辆维修报价单2" imageLocation={record.repairingQuotationImage2} /> },
  { title: '车辆维修报价单3', dataIndex: 'repairingQuotationImage3', render: (text, record) => <ImagePreview imageTitle="车辆维修报价单3" imageLocation={record.repairingQuotationImage3} /> },
  { title: '车辆维修报价单4', dataIndex: 'repairingQuotationImage4', render: (text, record) => <ImagePreview imageTitle="车辆维修报价单4" imageLocation={record.repairingQuotationImage4} /> },
  { title: '车辆维修报价单5', dataIndex: 'repairingQuotationImage5', render: (text, record) => <ImagePreview imageTitle="车辆维修报价单5" imageLocation={record.repairingQuotationImage5} /> },
  { title: '车辆维修报价总金额', dataIndex: 'repairingQuotationTotalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '车辆维修部分图片1', dataIndex: 'repairingPartImg1', render: (text, record) => <ImagePreview imageTitle="车辆维修部分图片1" imageLocation={record.repairingPartImg1} /> },
  { title: '车辆维修部分图片2', dataIndex: 'repairingPartImg2', render: (text, record) => <ImagePreview imageTitle="车辆维修部分图片2" imageLocation={record.repairingPartImg2} /> },
  { title: '车辆维修部分图片3', dataIndex: 'repairingPartImg3', render: (text, record) => <ImagePreview imageTitle="车辆维修部分图片3" imageLocation={record.repairingPartImg3} /> },
  { title: '车辆维修部分图片4', dataIndex: 'repairingPartImg4', render: (text, record) => <ImagePreview imageTitle="车辆维修部分图片4" imageLocation={record.repairingPartImg4} /> },
  { title: '车辆维修部分图片5', dataIndex: 'repairingPartImg5', render: (text, record) => <ImagePreview imageTitle="车辆维修部分图片5" imageLocation={record.repairingPartImg5} /> },
  { title: '车辆维修备注', debugtype: 'string', dataIndex: 'repairingPartListComment', width: '219' },
  { title: '维修完成日期时间', dataIndex: 'repairingFinishedDatetime', render: (text, record) => moment(record.repairingFinishedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '车辆上线检测', dataIndex: 'serviceVehicleInspection', render: (text, record) => (record.serviceVehicleInspection ? record.serviceVehicleInspection.displayName : '暂无') },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  serviceStatus: '服务状态',
  responsibleWorker: '服务人员',
  serviceSummary: '服务概述',
  startTime: '开始时间',
  longitude: '经度',
  latitude: '纬度',
  lastUpdateTime: '最后更新时间',
  inspectionReportImage1: '年检报告1',
  inspectionReportImage2: '年检报告2',
  inspectionReportImage3: '年检报告3',
  inspectionReportImage4: '年检报告4',
  inspectionReportImage5: '年检报告5',
  repairingQuotationImage1: '车辆维修报价单1',
  repairingQuotationImage2: '车辆维修报价单2',
  repairingQuotationImage3: '车辆维修报价单3',
  repairingQuotationImage4: '车辆维修报价单4',
  repairingQuotationImage5: '车辆维修报价单5',
  repairingQuotationTotalAmount: '车辆维修报价总金额',
  repairingPartImg1: '车辆维修部分图片1',
  repairingPartImg2: '车辆维修部分图片2',
  repairingPartImg3: '车辆维修部分图片3',
  repairingPartImg4: '车辆维修部分图片4',
  repairingPartImg5: '车辆维修部分图片5',
  repairingPartListComment: '车辆维修备注',
  repairingFinishedDatetime: '维修完成日期时间',
  serviceVehicleInspection: '车辆上线检测',
  merchant: '商户',
  mainOrder: '年检订单',

}


const ServiceVehicleRepairingBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServiceVehicleRepairingBase



