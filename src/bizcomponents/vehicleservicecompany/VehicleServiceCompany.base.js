
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"商户", menuFor: "vehicleServiceCompany",
  		subItems: [
  {name: 'contractList', displayName:'合同', icon:'glass'},
  {name: 'serviceCompanyAuthenticationInfoList', displayName:'商户认证信息', icon:'info'},
  {name: 'vehicleInspectionPlateNumberPatternList', displayName:'上线检测支持的车牌号码类别', icon:'at'},
  {name: 'fileInspectionPlateNumberPatternList', displayName:'6年免检检测支持的车牌号码类别', icon:'file'},
  {name: 'vehicleServiceCompanyBusinessScopeList', displayName:'商户服务范围', icon:'stethoscope'},
  {name: 'companyQrcodePromotionRecordList', displayName:'公司二维码推广记录', icon:'qrcode'},
  {name: 'vehicleServiceCompanyDispatcherList', displayName:'商户派单', icon:'at'},
  {name: 'companyDiscountList', displayName:'公司折扣', icon:'glass'},
  {name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工', icon:'glass'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单', icon:'glass'},
  {name: 'serviceVehicleMovementC2mList', displayName:'收车服务', icon:'glass'},
  {name: 'serviceVehicleMovementM2mList', displayName:'移车服务', icon:'glass'},
  {name: 'serviceVehicleMovementM2cList', displayName:'还车服务', icon:'glass'},
  {name: 'serviceFileMovementC2mList', displayName:'收件服务', icon:'file'},
  {name: 'serviceFileMovementM2mList', displayName:'移件服务', icon:'file'},
  {name: 'serviceFileMovementM2cList', displayName:'还件服务', icon:'file'},
  {name: 'serviceInsuranceForInspectionList', displayName:'保险服务', icon:'code-fork'},
  {name: 'serviceVehicleInspectionList', displayName:'车辆上线检测', icon:'glass'},
  {name: 'serviceFileInspectionList', displayName:'6年免检服务', icon:'file'},
  {name: 'serviceVehicleRepairingList', displayName:'维修服务', icon:'glass'},
  {name: 'serviceCompanyAccountList', displayName:'服务商户对账单', icon:'cc'},
  {name: 'repairingCompanyAccountList', displayName:'修理厂对账单', icon:'cc'},
  {name: 'insuranceServiceAccountList', displayName:'保险服务对账单', icon:'cc'},
  {name: 'inspectionStationAccountList', displayName:'检测站对账单', icon:'at'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/vehicleServiceCompany/${text}/dashboard`}>{text}</Link>) },
  { title: '商户名称', debugtype: 'string', dataIndex: 'companyName', width: '12' },
  { title: '描述', debugtype: 'string_longtext', dataIndex: 'description', width: '10' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'operatingStatus', width: '6' },
  { title: '所在城市', dataIndex: 'addressCity', render: (text, record) => (record.addressCity ? record.addressCity.displayName : '暂无') },
  { title: '所在地址', debugtype: 'string', dataIndex: 'addressDetail', width: '17' },
  { title: '是否提供门店收车(件)服务', dataIndex: 'availableStoreService', render: (text, record) => (record.availableStoreService ? '是' : '否') },
  { title: '是否提供上门取车(件)服务', dataIndex: 'availableHomeService', render: (text, record) => (record.availableHomeService ? '是' : '否') },
  { title: '营业时间', debugtype: 'string', dataIndex: 'openingTime', width: '26' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '可以免除代理费用', dataIndex: 'canExemptProxyFee', render: (text, record) => (record.canExemptProxyFee ? '是' : '否') },
  { title: '联系电话', debugtype: 'string', dataIndex: 'contactPhone', width: '16' },
  { title: '公司照片1', dataIndex: 'companyImage1', render: (text, record) => <ImagePreview imageTitle="公司照片1" imageLocation={record.companyImage1} /> },
  { title: '公司照片2', dataIndex: 'companyImage2', render: (text, record) => <ImagePreview imageTitle="公司照片2" imageLocation={record.companyImage2} /> },
  { title: '公司照片3', dataIndex: 'companyImage3', render: (text, record) => <ImagePreview imageTitle="公司照片3" imageLocation={record.companyImage3} /> },
  { title: '公司照片4', dataIndex: 'companyImage4', render: (text, record) => <ImagePreview imageTitle="公司照片4" imageLocation={record.companyImage4} /> },
  { title: '公司照片5', dataIndex: 'companyImage5', render: (text, record) => <ImagePreview imageTitle="公司照片5" imageLocation={record.companyImage5} /> },
  { title: '推广二维码', dataIndex: 'promoteQrcodeImage', render: (text, record) => <ImagePreview imageTitle="推广二维码" imageLocation={record.promoteQrcodeImage} /> },
  { title: '订单默认联系人', debugtype: 'string', dataIndex: 'orderContact', width: '7' },
  { title: '订单默认联系人电话', debugtype: 'string_china_mobile_phone', dataIndex: 'orderContactPhone', width: '15' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  companyName: '商户名称',
  description: '描述',
  operatingStatus: '服务状态',
  addressCity: '所在城市',
  addressDetail: '所在地址',
  availableStoreService: '是否提供门店收车(件)服务',
  availableHomeService: '是否提供上门取车(件)服务',
  openingTime: '营业时间',
  longitude: '经度',
  latitude: '纬度',
  canExemptProxyFee: '可以免除代理费用',
  contactPhone: '联系电话',
  companyImage1: '公司照片1',
  companyImage2: '公司照片2',
  companyImage3: '公司照片3',
  companyImage4: '公司照片4',
  companyImage5: '公司照片5',
  promoteQrcodeImage: '推广二维码',
  orderContact: '订单默认联系人',
  orderContactPhone: '订单默认联系人电话',
  platform: '平台',

}


const VehicleServiceCompanyBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleServiceCompanyBase



