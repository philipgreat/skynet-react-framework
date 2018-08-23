
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"交易类型", menuFor: "transactionType",
  		subItems: [
  {name: 'platformAccountDetailsList', displayName:'平台账户明细', icon:'at'},
  {name: 'fundationAccountDetailsList', displayName:'平台基金账户明细', icon:'at'},
  {name: 'storeAccountDetailsList', displayName:'网点账户明细', icon:'cc'},
  {name: 'customerAccountTransactionList', displayName:'客户账户明细', icon:'cc'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/transactionType/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '交易代码', debugtype: 'string', dataIndex: 'transactionCode', width: '24' },
  { title: '帐户数据', dataIndex: 'accountData', render: (text, record) => (record.accountData ? record.accountData.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  transactionCode: '交易代码',
  accountData: '帐户数据',

}


const TransactionTypeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default TransactionTypeBase



