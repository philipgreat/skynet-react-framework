
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"年检订单对账单", menuFor: "mainOrderAccount",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '18' },
  { title: '年检费用', dataIndex: 'inspectionPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '代办服务费用', dataIndex: 'agentServicePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7' },
  { title: '订单总金额', dataIndex: 'orderTotalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '优惠折扣', dataIndex: 'orderPromotionDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '优惠券折扣', dataIndex: 'orderCouponDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '保单费用', dataIndex: 'orderInsuranceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '商户优惠', debugtype: 'string', dataIndex: 'orderMerchantDiscount', width: '9' },
  { title: '客户付款总金额', dataIndex: 'orderCustomerPaymentAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '商户服务费总金额', dataIndex: 'orderServiceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '平台结余总金额', dataIndex: 'orderPlatformBalance', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '下单时间', dataIndex: 'orderPlacedDatetime', render: (text, record) => moment(record.orderPlacedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '付款时间', dataIndex: 'orderPaymentDatetime', render: (text, record) => moment(record.orderPaymentDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '订单完成时间', dataIndex: 'orderFinishedDatetime', render: (text, record) => moment(record.orderFinishedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '15' },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36' },
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vehicleLicensePlateNumber: '车牌号码',
  productName: '产品名称',
  inspectionPrice: '年检费用',
  agentServicePrice: '代办服务费用',
  city: '城市',
  vehicleType: '车辆类型',
  orderTotalAmount: '订单总金额',
  orderPromotionDiscount: '优惠折扣',
  orderCouponDiscount: '优惠券折扣',
  orderInsuranceAmount: '保单费用',
  orderMerchantDiscount: '商户优惠',
  orderCustomerPaymentAmount: '客户付款总金额',
  orderServiceAmount: '商户服务费总金额',
  orderPlatformBalance: '平台结余总金额',
  orderPlacedDatetime: '下单时间',
  orderPaymentDatetime: '付款时间',
  orderFinishedDatetime: '订单完成时间',
  mainOrderId: '年检订单ID',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  account: '对账单',

}


const MainOrderAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MainOrderAccountBase



