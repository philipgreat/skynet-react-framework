
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"帐户数据", menuFor: "accountData",
  		subItems: [
  {name: 'platformAccountList', displayName:'平台账户', icon:'at'},
  {name: 'fundationAccountList', displayName:'平台基金账户', icon:'at'},
  {name: 'storeAccountList', displayName:'网点账户', icon:'cc'},
  {name: 'transactionTypeList', displayName:'交易类型', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/accountData/${text}/dashboard`}>{text}</Link>) },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '10' },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  bookSharingPlatform: '图书共享平台',

}


const AccountDataBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AccountDataBase



