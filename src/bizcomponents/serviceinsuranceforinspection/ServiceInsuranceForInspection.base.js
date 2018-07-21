
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"保险服务", menuFor: "serviceInsuranceForInspection",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '选定保险', dataIndex: 'orderedInsurance', render: (text, record) => (record.orderedInsurance ? record.orderedInsurance.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '24' },
  { title: '服务的评论', debugtype: 'string', dataIndex: 'serviceComments', width: '15' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '保险名称', debugtype: 'string', dataIndex: 'insuranceName', width: '10' },
  { title: '承保方', debugtype: 'string', dataIndex: 'insuranceVendor', width: '11' },
  { title: '保费', dataIndex: 'insurancePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '20' },
  { title: '保单号码', debugtype: 'string', dataIndex: 'insuranceNumber', width: '19' },
  { title: '保单凭证1', dataIndex: 'insuranceImage1', render: (text, record) => <ImagePreview imageTitle="保单凭证1" imageLocation={record.insuranceImage1} /> },
  { title: '保单凭证2', dataIndex: 'insuranceImage2', render: (text, record) => <ImagePreview imageTitle="保单凭证2" imageLocation={record.insuranceImage2} /> },
  { title: '保单凭证3', dataIndex: 'insuranceImage3', render: (text, record) => <ImagePreview imageTitle="保单凭证3" imageLocation={record.insuranceImage3} /> },
  { title: '保单凭证4', dataIndex: 'insuranceImage4', render: (text, record) => <ImagePreview imageTitle="保单凭证4" imageLocation={record.insuranceImage4} /> },
  { title: '保单凭证5', dataIndex: 'insuranceImage5', render: (text, record) => <ImagePreview imageTitle="保单凭证5" imageLocation={record.insuranceImage5} /> },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  serviceStatus: '服务状态',
  orderedInsurance: '选定保险',
  responsibleWorker: '服务人员',
  serviceSummary: '服务概述',
  serviceComments: '服务的评论',
  startTime: '开始时间',
  lastUpdateTime: '最后更新时间',
  insuranceName: '保险名称',
  insuranceVendor: '承保方',
  insurancePrice: '保费',
  summary: '摘要',
  insuranceNumber: '保单号码',
  insuranceImage1: '保单凭证1',
  insuranceImage2: '保单凭证2',
  insuranceImage3: '保单凭证3',
  insuranceImage4: '保单凭证4',
  insuranceImage5: '保单凭证5',
  merchant: '商户',
  mainOrder: '年检订单',

}


const ServiceInsuranceForInspectionBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServiceInsuranceForInspectionBase



