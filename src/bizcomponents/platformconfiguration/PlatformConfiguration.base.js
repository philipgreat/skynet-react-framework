
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"平台配置", menuFor: "platformConfiguration",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员服务协议', debugtype: 'string_longtext', dataIndex: 'memberServiceAgreement', width: '10' },
  { title: '图书共享协议', debugtype: 'string_longtext', dataIndex: 'bookSharingAgreement', width: '10' },
  { title: '账户充值协议', debugtype: 'string_longtext', dataIndex: 'accountRechargeAgreement', width: '10' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  memberServiceAgreement: '会员服务协议',
  bookSharingAgreement: '图书共享协议',
  accountRechargeAgreement: '账户充值协议',
  platform: '平台',

}


const PlatformConfigurationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PlatformConfigurationBase



