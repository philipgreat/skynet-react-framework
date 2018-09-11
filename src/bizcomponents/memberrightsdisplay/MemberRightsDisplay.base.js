
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"会员权利显示", menuFor: "memberRightsDisplay",
  		subItems: [
  {name: 'memberRightsDisplayItemList', displayName:'会员权利显示项', icon:'ember'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'memberRightsDisplay') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '协议名称', debugtype: 'string', dataIndex: 'agreementName', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '协议类型', debugtype: 'string', dataIndex: 'agreementType', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '协议Id', debugtype: 'string', dataIndex: 'agreementId', width: '6',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  summary: '摘要',
  agreementName: '协议名称',
  agreementType: '协议类型',
  agreementId: '协议Id',

}


const MemberRightsDisplayBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberRightsDisplayBase



