
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"提前下单优惠", menuFor: "preorderPromotion",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '优惠信息', debugtype: 'string', dataIndex: 'promotionMessage', width: '15' },
  { title: '提前天数', debugtype: 'int', dataIndex: 'preorderDays', width: '6' },
  { title: '优惠金额', dataIndex: 'discountAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '结束日期', dataIndex: 'endDate', render: (text, record) => moment(record.endDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  promotionMessage: '优惠信息',
  preorderDays: '提前天数',
  discountAmount: '优惠金额',
  startDate: '开始日期',
  endDate: '结束日期',
  product: '产品名称',
  platform: '平台',

}


const PreorderPromotionBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PreorderPromotionBase



