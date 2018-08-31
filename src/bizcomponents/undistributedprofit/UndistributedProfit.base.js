
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"未分配利润", menuFor: "undistributedProfit",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '10' },
  { title: '费用起始日期', dataIndex: 'chargeStartDate', render: (text, record) => moment(record.chargeStartDate).format('YYYY-MM-DD') },
  { title: '费用结束日期', dataIndex: 'chargeEndDate', render: (text, record) => moment(record.chargeEndDate).format('YYYY-MM-DD') },
  { title: '利润类型', dataIndex: 'profitType', render: (text, record) => (record.profitType ? record.profitType.displayName : '暂无') },
  { title: '利润分配状态', dataIndex: 'profitDistributeState', render: (text, record) => (record.profitDistributeState ? record.profitDistributeState.displayName : '暂无') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '余额', dataIndex: 'balance', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '用户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  chargeStartDate: '费用起始日期',
  chargeEndDate: '费用结束日期',
  profitType: '利润类型',
  profitDistributeState: '利润分配状态',
  mainOrder: '主订单',
  createTime: '创建时间',
  amount: '账户余额',
  balance: '余额',
  customer: '用户',
  lastUpdateTime: '最后更新时间',
  platform: '平台',

}


const UndistributedProfitBase={menuData,displayColumns,fieldLabels,displayColumns}
export default UndistributedProfitBase



