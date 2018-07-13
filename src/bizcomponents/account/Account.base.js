
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"对账单", menuFor: "account",
  		subItems: [
  {name: 'serviceCompanyAccountList', displayName:'服务商户对账单', icon:'cc'},
  {name: 'repairingCompanyAccountList', displayName:'修理厂对账单', icon:'cc'},
  {name: 'insuranceServiceAccountList', displayName:'保险服务对账单', icon:'cc'},
  {name: 'mainOrderAccountList', displayName:'年检订单对账单', icon:'cc'},
  {name: 'inspectionStationAccountList', displayName:'检测站对账单', icon:'at'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/account/${text}/dashboard`}>{text}</Link>) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '22' },

]

const fieldLabels = {
  id: 'ID',
  platform: '平台',
  description: '描述',

}


const AccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AccountBase



