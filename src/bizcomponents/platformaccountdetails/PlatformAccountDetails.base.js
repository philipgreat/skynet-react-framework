
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"平台账户明细", menuFor: "platformAccountDetails",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '18' },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '交易类型', dataIndex: 'transactionType', render: (text, record) => (record.transactionType ? record.transactionType.displayName : '暂无') },
  { title: '平台账户', dataIndex: 'platformAccount', render: (text, record) => (record.platformAccount ? record.platformAccount.displayName : '暂无') },
  { title: '相关订单', dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.displayName : '暂无') },
  { title: '日期时间', dataIndex: 'datetime', render: (text, record) => moment(record.datetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  amount: '账户余额',
  transactionType: '交易类型',
  platformAccount: '平台账户',
  relatedMainOrder: '相关订单',
  datetime: '日期时间',

}


const PlatformAccountDetailsBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PlatformAccountDetailsBase



