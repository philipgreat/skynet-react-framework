
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"网点账户", menuFor: "storeAccount",
  		subItems: [
  {name: 'storeAccountDetailsList', displayName:'网点账户明细', icon:'cc'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/storeAccount/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15' },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '帐户数据', dataIndex: 'accountData', render: (text, record) => (record.accountData ? record.accountData.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  amount: '账户余额',
  store: '服务网点',
  accountData: '帐户数据',

}


const StoreAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default StoreAccountBase



