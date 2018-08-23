
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆信息", menuFor: "vehicleInfo",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'licensePlateNumber', width: '11' },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7' },
  { title: '使用性质', debugtype: 'string', dataIndex: 'useCharacter', width: '7' },
  { title: '核准座位数', debugtype: 'int', dataIndex: 'seatsQuantity', width: '7' },
  { title: '注册日期', dataIndex: 'registrationDate', render: (text, record) => moment(record.registrationDate).format('YYYY-MM-DD') },
  { title: '检测有效期', dataIndex: 'inspectionValidationDate', render: (text, record) => moment(record.inspectionValidationDate).format('YYYY-MM-DD') },
  { title: '保险有效期', dataIndex: 'insuranceValidationDate', render: (text, record) => moment(record.insuranceValidationDate).format('YYYY-MM-DD') },
  { title: '发动机号', debugtype: 'string', dataIndex: 'engineNumber', width: '11' },
  { title: '车架号', debugtype: 'string', dataIndex: 'vehicleIdentificationNumber', width: '21' },
  { title: '发证日期', dataIndex: 'vehiclePermitIssueDate', render: (text, record) => moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD') },
  { title: '所有人', debugtype: 'string', dataIndex: 'vehiclePermitHolderName', width: '57' },
  { title: '行驶证图1', dataIndex: 'vehiclePermitImage1', render: (text, record) => <ImagePreview imageTitle="行驶证图1" imageLocation={record.vehiclePermitImage1} /> },
  { title: '行驶证图2', dataIndex: 'vehiclePermitImage2', render: (text, record) => <ImagePreview imageTitle="行驶证图2" imageLocation={record.vehiclePermitImage2} /> },
  { title: '行驶证图3', dataIndex: 'vehiclePermitImage3', render: (text, record) => <ImagePreview imageTitle="行驶证图3" imageLocation={record.vehiclePermitImage3} /> },
  { title: '行驶证图4', dataIndex: 'vehiclePermitImage4', render: (text, record) => <ImagePreview imageTitle="行驶证图4" imageLocation={record.vehiclePermitImage4} /> },
  { title: '行驶证图5', dataIndex: 'vehiclePermitImage5', render: (text, record) => <ImagePreview imageTitle="行驶证图5" imageLocation={record.vehiclePermitImage5} /> },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  licensePlateNumber: '车牌号码',
  vehicleType: '车辆类型',
  useCharacter: '使用性质',
  seatsQuantity: '核准座位数',
  registrationDate: '注册日期',
  inspectionValidationDate: '检测有效期',
  insuranceValidationDate: '保险有效期',
  engineNumber: '发动机号',
  vehicleIdentificationNumber: '车架号',
  vehiclePermitIssueDate: '发证日期',
  vehiclePermitHolderName: '所有人',
  vehiclePermitImage1: '行驶证图1',
  vehiclePermitImage2: '行驶证图2',
  vehiclePermitImage3: '行驶证图3',
  vehiclePermitImage4: '行驶证图4',
  vehiclePermitImage5: '行驶证图5',
  lastUpdateTime: '最后更新时间',
  customer: '客户',
  platform: '平台',

}


const VehicleInfoBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleInfoBase



