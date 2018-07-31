
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"平台账户", menuFor: "platformAccount",
  		subItems: [
  {name: 'platformAccountDetailsList', displayName:'平台账户明细', icon:'at'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/platformAccount/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '帐户数据', dataIndex: 'accountData', render: (text, record) => (record.accountData ? record.accountData.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  amount: '账户余额',
  platform: '平台',
  accountData: '帐户数据',

}


const PlatformAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PlatformAccountBase



