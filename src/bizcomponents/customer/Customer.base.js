
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"用户", menuFor: "customer",
  		subItems: [
  {name: 'privateMessageList', displayName:'私信消息', icon:'at'},
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'glass'},
  {name: 'mainOrderList', displayName:'主订单', icon:'glass'},
  {name: 'bookCopyList', displayName:'书籍副本', icon:'book'},
  {name: 'borrowingHistoryList', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'glass'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  {name: 'bookReviewLikeList', displayName:'书评点赞', icon:'book'},
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'book'},
  {name: 'memberServiceRevenueList', displayName:'会员服务收益', icon:'glass'},
  {name: 'customerAccountTransactionList', displayName:'客户账户明细', icon:'cc'},
  {name: 'campaignRegisterHistoryList', displayName:'活动报名记录', icon:'history'},
  {name: 'campaignReviewList', displayName:'活动评论', icon:'glass'},
  {name: 'campaignLikeList', displayName:'活动点赞', icon:'glass'},
  {name: 'campaignReviewLikeList', displayName:'活动评论点赞', icon:'glass'},
  {name: 'customerFootprintList', displayName:'用户历程', icon:'print'},
  {name: 'shieldCustomerListAsCustomer', displayName:'屏蔽用户', icon:'shield'},
  {name: 'shieldCustomerListAsShield', displayName:'屏蔽用户', icon:'shield'},
  {name: 'informList', displayName:'举报', icon:'info'},
  {name: 'undistributedProfitList', displayName:'未分配利润', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/customer/${text}/dashboard`}>{text}</Link>) },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '20' },
  { title: '头像', dataIndex: 'logoImage', render: (text, record) => <ImagePreview imageTitle="头像" imageLocation={record.logoImage} /> },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '的真实姓名', debugtype: 'string', dataIndex: 'realName', width: '7' },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'sexuality', width: '5' },
  { title: '会员服务', dataIndex: 'memberService', render: (text, record) => (record.memberService ? record.memberService.displayName : '暂无') },
  { title: '会员服务开始日期', dataIndex: 'memberServiceStartDate', render: (text, record) => moment(record.memberServiceStartDate).format('YYYY-MM-DD') },
  { title: '会员服务到期日期', dataIndex: 'memberServiceExpireDate', render: (text, record) => moment(record.memberServiceExpireDate).format('YYYY-MM-DD') },
  { title: '帐户余额', dataIndex: 'accountBalance', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '小程序OpenID', debugtype: 'string', dataIndex: 'miniProgramOpenid', width: '33' },
  { title: '服务号OpenID', debugtype: 'string', dataIndex: 'serviceAccountOpenid', width: '29' },
  { title: '微信UnionID', debugtype: 'string', dataIndex: 'wechatUnionId', width: '32' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '身份证号码', debugtype: 'string', dataIndex: 'identityCardNumber', width: '22' },
  { title: '家庭地址', debugtype: 'string', dataIndex: 'familyAddress', width: '25' },
  { title: '日均会员费', dataIndex: 'memberServiceDailyPay', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '最喜欢的网点', dataIndex: 'favouriteStore', render: (text, record) => (record.favouriteStore ? record.favouriteStore.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  nickName: '昵称',
  logoImage: '头像',
  mobileNumber: '手机号码',
  realName: '的真实姓名',
  sexuality: '性别',
  memberService: '会员服务',
  memberServiceStartDate: '会员服务开始日期',
  memberServiceExpireDate: '会员服务到期日期',
  accountBalance: '帐户余额',
  miniProgramOpenid: '小程序OpenID',
  serviceAccountOpenid: '服务号OpenID',
  wechatUnionId: '微信UnionID',
  longitude: '经度',
  latitude: '纬度',
  birthday: '生日',
  identityCardNumber: '身份证号码',
  familyAddress: '家庭地址',
  memberServiceDailyPay: '日均会员费',
  favouriteStore: '最喜欢的网点',
  platform: '平台',

}


const CustomerBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CustomerBase



