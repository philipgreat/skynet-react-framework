
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"主订单", menuFor: "mainOrder",
  		subItems: [
  {name: 'lineItemList', displayName:'订单项', icon:'underline'},
  {name: 'mainOrderPaymentList', displayName:'主订单支付', icon:'glass'},
  {name: 'orderLogList', displayName:'Log', icon:'glass'},
  {name: 'memberServiceRevenueList', displayName:'会员服务收益', icon:'glass'},
  {name: 'platformAccountDetailsList', displayName:'平台账户明细', icon:'at'},
  {name: 'fundationAccountDetailsList', displayName:'平台基金账户明细', icon:'at'},
  {name: 'storeAccountDetailsList', displayName:'网点账户明细', icon:'cc'},
  {name: 'customerAccountTransactionList', displayName:'客户账户明细', icon:'cc'},
  {name: 'undistributedProfitList', displayName:'未分配利润', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/mainOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '26' },
  { title: '主订单状态', debugtype: 'string', dataIndex: 'mainOrderStatus', width: '7' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '用户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },
  { title: '订单总价', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '实付款金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  mainOrderStatus: '主订单状态',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  customer: '用户',
  bookSharingPlatform: '图书共享平台',
  originalAmount: '订单总价',
  actualAmount: '实付款金额',

}


const MainOrderBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MainOrderBase



