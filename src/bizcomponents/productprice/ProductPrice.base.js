
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"产品价格", menuFor: "productPrice",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.displayName : '暂无') },
  { title: '城市', dataIndex: 'city', render: (text, record) => (record.city ? record.city.displayName : '暂无') },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '6' },
  { title: '新能源车', dataIndex: 'greenVehicle', render: (text, record) => (record.greenVehicle ? '是' : '否') },
  { title: '年检费用', dataIndex: 'inspectionPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '尾气检测费', dataIndex: 'exhaustDetectionPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '二级维护价格', dataIndex: 'secondLevelMaintenancePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '等级评定价格', dataIndex: 'gradeEstimationPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '代办服务费用', dataIndex: 'agentServicePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '到店服务代办价格', dataIndex: 'toStoreServicePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '优惠代办价格', dataIndex: 'discountAgentServicePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '36' },

]

const fieldLabels = {
  id: 'ID',
  product: '产品名称',
  city: '城市',
  vehicleType: '车辆类型',
  greenVehicle: '新能源车',
  inspectionPrice: '年检费用',
  exhaustDetectionPrice: '尾气检测费',
  secondLevelMaintenancePrice: '二级维护价格',
  gradeEstimationPrice: '等级评定价格',
  agentServicePrice: '代办服务费用',
  toStoreServicePrice: '到店服务代办价格',
  discountAgentServicePrice: '优惠代办价格',
  description: '描述',

}


const ProductPriceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ProductPriceBase



