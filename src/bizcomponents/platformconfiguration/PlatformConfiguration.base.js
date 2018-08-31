
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
  { title: '存储列表页中的消息', debugtype: 'string_longtext', dataIndex: 'messageInStoreListPage', width: '10' },
  { title: '反馈联系信息', debugtype: 'string_longtext', dataIndex: 'feedbackContactInfo', width: '10' },
  { title: '我的权益的功能的显示名称', debugtype: 'string', dataIndex: 'myRightsTitle', width: '8' },
  { title: '我的借阅记录的功能的显示名称', debugtype: 'string', dataIndex: 'myBorrowingTitle', width: '8' },
  { title: '我的活动的功能的显示名称', debugtype: 'string', dataIndex: 'myCampaignTitle', width: '8' },
  { title: '我的余额的功能的显示名称', debugtype: 'string', dataIndex: 'myBalanceTitle', width: '8' },
  { title: '我的书评的功能的显示名称', debugtype: 'string', dataIndex: 'myBookReviewTitle', width: '8' },
  { title: '我的订单的功能的显示名称', debugtype: 'string', dataIndex: 'myOrderTitle', width: '8' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  memberServiceAgreement: '会员服务协议',
  bookSharingAgreement: '图书共享协议',
  accountRechargeAgreement: '账户充值协议',
  messageInStoreListPage: '存储列表页中的消息',
  feedbackContactInfo: '反馈联系信息',
  myRightsTitle: '我的权益的功能的显示名称',
  myBorrowingTitle: '我的借阅记录的功能的显示名称',
  myCampaignTitle: '我的活动的功能的显示名称',
  myBalanceTitle: '我的余额的功能的显示名称',
  myBookReviewTitle: '我的书评的功能的显示名称',
  myOrderTitle: '我的订单的功能的显示名称',
  platform: '平台',

}


const PlatformConfigurationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PlatformConfigurationBase



