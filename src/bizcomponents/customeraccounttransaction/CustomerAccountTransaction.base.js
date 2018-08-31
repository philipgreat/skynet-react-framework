
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"客户账户明细", menuFor: "customerAccountTransaction",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '8' },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '余额', dataIndex: 'balance', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '交易类型', dataIndex: 'transactionType', render: (text, record) => (record.transactionType ? record.transactionType.displayName : '暂无') },
  { title: '用户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '交易时间', dataIndex: 'changeDatetime', render: (text, record) => moment(record.changeDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '相关订单', dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  amount: '账户余额',
  balance: '余额',
  transactionType: '交易类型',
  customer: '用户',
  changeDatetime: '交易时间',
  relatedMainOrder: '相关订单',

}


const CustomerAccountTransactionBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CustomerAccountTransactionBase



