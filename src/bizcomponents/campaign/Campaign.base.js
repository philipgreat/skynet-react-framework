
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"活动", menuFor: "campaign",
  		subItems: [
  {name: 'storeSlideList', displayName:'网点海报', icon:'store'},
  {name: 'campaignRegisterHistoryList', displayName:'活动报名记录', icon:'history'},
  {name: 'campaignReviewList', displayName:'活动评论', icon:'rev'},
  {name: 'campaignLikeList', displayName:'活动点赞', icon:'500px'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'campaign') },
  { title: '活动名称', debugtype: 'string', dataIndex: 'campaignName', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '活动内容', debugtype: 'string_longtext', dataIndex: 'campaignContent', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '活动图片', dataIndex: 'campaignImage', render: (text, record) => renderImageCell(text,record,'活动图片') },
  { title: '活动状态', dataIndex: 'campaignStatus', render: (text, record) => renderReferenceCell(text, record)},
  { title: '开始时间', dataIndex: 'campaignStartTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '结束时间', dataIndex: 'campaignFinishTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '活动地址', debugtype: 'string', dataIndex: 'campaignHoldAddress', width: '23',render: (text, record)=>renderTextCell(text,record) },
  { title: '开始前几小时停止注册', debugtype: 'int', dataIndex: 'registerDeadlineLeadHours', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '最低注册数量', debugtype: 'int', dataIndex: 'minimumRegisterQuantity', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '报名人数限制', debugtype: 'int', dataIndex: 'availableRegisterQuantity', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '发布日期时间', dataIndex: 'publishDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '发布网点', dataIndex: 'publishStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '发布员工', dataIndex: 'publishEmployee', render: (text, record) => renderReferenceCell(text, record)},
  { title: '活动广场', dataIndex: 'campaignPlaza', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  campaignName: '活动名称',
  campaignContent: '活动内容',
  campaignImage: '活动图片',
  campaignStatus: '活动状态',
  campaignStartTime: '开始时间',
  campaignFinishTime: '结束时间',
  campaignHoldAddress: '活动地址',
  registerDeadlineLeadHours: '开始前几小时停止注册',
  minimumRegisterQuantity: '最低注册数量',
  availableRegisterQuantity: '报名人数限制',
  publishDatetime: '发布日期时间',
  publishStore: '发布网点',
  publishEmployee: '发布员工',
  campaignPlaza: '活动广场',

}


const CampaignBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CampaignBase



