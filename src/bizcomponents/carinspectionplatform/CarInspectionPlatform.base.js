
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"驾乐乐车辆代审服务平台", menuFor: "carInspectionPlatform",
  		subItems: [
  {name: 'platformConfigurationList', displayName:'平台配置', icon:'at'},
  {name: 'provinceList', displayName:'省', icon:'glass'},
  {name: 'availableProductList', displayName:'产品类型', icon:'glass'},
  {name: 'availableVehicleTypeList', displayName:'车辆类型', icon:'glass'},
  {name: 'availableVehicleUseCharacterList', displayName:'车辆使用性质', icon:'user'},
  {name: 'contractList', displayName:'合同', icon:'glass'},
  {name: 'customerList', displayName:'客户', icon:'glass'},
  {name: 'vehicleServiceCompanyList', displayName:'商户', icon:'glass'},
  {name: 'vehicleInfoList', displayName:'车辆信息', icon:'info'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单', icon:'glass'},
  {name: 'availableReviewItemList', displayName:'评论', icon:'sitemap'},
  {name: 'availableRatingItemList', displayName:'服务评分', icon:'sitemap'},
  {name: 'preorderPromotionList', displayName:'提前下单优惠', icon:'glass'},
  {name: 'orderDiscountCouponList', displayName:'优惠券', icon:'glass'},
  {name: 'accountList', displayName:'对账单', icon:'cc'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/carInspectionPlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '保险联系人姓名', debugtype: 'string', dataIndex: 'insuranceContactName', width: '8' },
  { title: '保险联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'insuranceContactMobile', width: '15' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  insuranceContactName: '保险联系人姓名',
  insuranceContactMobile: '保险联系人手机',

}


const CarInspectionPlatformBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CarInspectionPlatformBase



