
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"检测站", menuFor: "inspectionStation",
  		subItems: [
  {name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工', icon:'glass'},
  {name: 'serviceVehicleInspectionList', displayName:'车辆上线检测', icon:'glass'},
  {name: 'serviceFileInspectionList', displayName:'6年免检服务', icon:'file'},
  {name: 'inspectionStationAccountList', displayName:'检测站对账单', icon:'at'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/inspectionStation/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'operatingStatus', width: '6' },
  { title: '所在城市', dataIndex: 'addressCity', render: (text, record) => (record.addressCity ? record.addressCity.displayName : '暂无') },
  { title: '所在地址', debugtype: 'string', dataIndex: 'addressDetail', width: '17' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7' },
  { title: '联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15' },
  { title: '计量资格认证', dataIndex: 'metrologyAccreditationImage', render: (text, record) => <ImagePreview imageTitle="计量资格认证" imageLocation={record.metrologyAccreditationImage} /> },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  operatingStatus: '服务状态',
  addressCity: '所在城市',
  addressDetail: '所在地址',
  longitude: '经度',
  latitude: '纬度',
  contactName: '联系人姓名',
  contactMobile: '联系人手机',
  metrologyAccreditationImage: '计量资格认证',

}


const InspectionStationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default InspectionStationBase



