
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"客户", menuFor: "customer",
  		subItems: [
  {name: 'companyQrcodePromotionRecordList', displayName:'公司二维码推广记录', icon:'qrcode'},
  {name: 'vehicleInfoList', displayName:'车辆信息', icon:'info'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单', icon:'glass'},
  {name: 'orderDiscountCouponList', displayName:'优惠券', icon:'glass'},
  {name: 'vehicleInspectionOrderCouponList', displayName:'优惠券使用记录', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/customer/${text}/dashboard`}>{text}</Link>) },
  { title: '客户昵称', debugtype: 'string', dataIndex: 'nickName', width: '24' },
  { title: '头像', dataIndex: 'logoImage', render: (text, record) => <ImagePreview imageTitle="头像" imageLocation={record.logoImage} /> },
  { title: '微信ID', debugtype: 'string', dataIndex: 'weixinOpenid', width: '29' },
  { title: '微信APP', debugtype: 'string', dataIndex: 'weixinAppid', width: '23' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: 'SecUser', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  nickName: '客户昵称',
  logoImage: '头像',
  weixinOpenid: '微信ID',
  weixinAppid: '微信APP',
  longitude: '经度',
  latitude: '纬度',
  secUser: 'SecUser',
  platform: '平台',

}


const CustomerBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CustomerBase



