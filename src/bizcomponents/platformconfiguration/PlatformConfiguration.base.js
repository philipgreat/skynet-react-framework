
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"平台配置", menuFor: "platformConfiguration",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '用户协议', debugtype: 'string_longtext', dataIndex: 'userAgreement', width: '10' },
  { title: '发票说明', debugtype: 'string_longtext', dataIndex: 'invoiceInstruction', width: '10' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  userAgreement: '用户协议',
  invoiceInstruction: '发票说明',
  platform: '平台',

}


const PlatformConfigurationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PlatformConfigurationBase



