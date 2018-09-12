
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"用户", menuFor: "customer",
  		subItems: [
  {name: 'privateMessageList', displayName:'私信消息', icon:'at'},
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'500px'},
  {name: 'mainOrderList', displayName:'主订单', icon:'first-order'},
  {name: 'bookCopyList', displayName:'书籍副本', icon:'copy'},
  {name: 'borrowingHistoryList', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuList', displayName:'借书超期费', icon:'skull'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  {name: 'bookReviewLikeList', displayName:'书评点赞', icon:'book'},
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'copy'},
  {name: 'memberServiceRevenueList', displayName:'会员服务收益', icon:'ember'},
  {name: 'customerAccountTransactionList', displayName:'客户账户明细', icon:'om'},
  {name: 'campaignRegisterHistoryList', displayName:'活动报名记录', icon:'history'},
  {name: 'campaignReviewList', displayName:'活动评论', icon:'rev'},
  {name: 'campaignLikeList', displayName:'活动点赞', icon:'500px'},
  {name: 'campaignReviewLikeList', displayName:'活动评论点赞', icon:'rev'},
  {name: 'customerFootprintList', displayName:'用户历程', icon:'om'},
  {name: 'shieldCustomerListAsCustomer', displayName:'屏蔽用户(用户)', icon:'om'},
  {name: 'shieldCustomerListAsShield', displayName:'屏蔽用户(屏蔽)', icon:'om'},
  {name: 'informList', displayName:'举报', icon:'info'},
  {name: 'undistributedProfitList', displayName:'未分割收入', icon:'500px'},
  
  		],
}

const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 

}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'customer') },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '头像', dataIndex: 'logoImage', render: (text, record) => renderImageCell(text,record,'头像') },
  { title: '手机号码', debugtype: 'string', dataIndex: 'mobileNumber', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: '的真实姓名', debugtype: 'string', dataIndex: 'realName', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'sexuality', width: '5',render: (text, record)=>renderTextCell(text,record) },
  { title: '会员服务', dataIndex: 'memberService', render: (text, record) => renderReferenceCell(text, record)},
  { title: '会员服务开始日期', dataIndex: 'memberServiceStartDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '会员服务到期日期', dataIndex: 'memberServiceExpireDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '帐户余额', dataIndex: 'accountBalance', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '小程序OpenID', debugtype: 'string', dataIndex: 'miniProgramOpenid', width: '33',render: (text, record)=>renderTextCell(text,record) },
  { title: '服务号OpenID', debugtype: 'string', dataIndex: 'serviceAccountOpenid', width: '29',render: (text, record)=>renderTextCell(text,record) },
  { title: '微信UnionID', debugtype: 'string', dataIndex: 'wechatUnionId', width: '32',render: (text, record)=>renderTextCell(text,record) },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12',render: (text, record)=>renderTextCell(text,record) },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: '生日', dataIndex: 'birthday', render: (text, record) =>renderDateCell(text,record) },
  { title: '身份证号码', debugtype: 'string', dataIndex: 'identityCardNumber', width: '22',render: (text, record)=>renderTextCell(text,record) },
  { title: '家庭地址', debugtype: 'string', dataIndex: 'familyAddress', width: '25',render: (text, record)=>renderTextCell(text,record) },
  { title: '日均会员费', dataIndex: 'memberServiceDailyPay', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '最喜欢的网点', dataIndex: 'favouriteStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},

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



