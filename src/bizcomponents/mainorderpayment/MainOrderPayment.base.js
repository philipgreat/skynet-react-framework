
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"主订单支付", menuFor: "mainOrderPayment",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '7' },
  { title: '支付金额', dataIndex: 'paidAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '付款状态', debugtype: 'string', dataIndex: 'paymentStatus', width: '7' },
  { title: '微信支付交易ID', debugtype: 'string', dataIndex: 'wechatTransactionId', width: '36' },
  { title: '微信支付ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  paymentMethod: '支付方式',
  paidAmount: '支付金额',
  paymentStatus: '付款状态',
  wechatTransactionId: '微信支付交易ID',
  wechatPrepayId: '微信支付ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  mainOrder: '主订单',

}


const MainOrderPaymentBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MainOrderPaymentBase



