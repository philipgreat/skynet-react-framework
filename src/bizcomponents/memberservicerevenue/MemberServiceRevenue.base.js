
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"会员服务收益", menuFor: "memberServiceRevenue",
  		subItems: [
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '会员', dataIndex: 'member', render: (text, record) => renderReferenceCell(text, record)},
  { title: '会员昵称', debugtype: 'string', dataIndex: 'memberName', width: '16',render: (text, record)=>renderTextCell(text,record) },
  { title: '服务开始日期', dataIndex: 'serviceStartDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '服务结束日期', dataIndex: 'serviceEndDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '当月会员服务费', dataIndex: 'monthlyServiceFee', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => renderReferenceCell(text, record)},
  { title: '网点名字', debugtype: 'string', dataIndex: 'storeName', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点服务次数', debugtype: 'int', dataIndex: 'storeServiceCount', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '本月会员服务总次数', debugtype: 'int', dataIndex: 'totalServiceCount', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点会员服务收益百分比', debugtype: 'string', dataIndex: 'storeServiceRevenueRate', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点会员收益', dataIndex: 'storeServiceRevenue', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  member: '会员',
  memberName: '会员昵称',
  serviceStartDate: '服务开始日期',
  serviceEndDate: '服务结束日期',
  monthlyServiceFee: '当月会员服务费',
  store: '服务网点',
  storeName: '网点名字',
  storeServiceCount: '网点服务次数',
  totalServiceCount: '本月会员服务总次数',
  storeServiceRevenueRate: '网点会员服务收益百分比',
  storeServiceRevenue: '网点会员收益',
  mainOrder: '主订单',

}


const MemberServiceRevenueBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberServiceRevenueBase



