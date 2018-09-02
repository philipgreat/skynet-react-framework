
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"私信消息", menuFor: "privateMessage",
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
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '接收人', dataIndex: 'deliveryTo', render: (text, record) => renderReferenceCell(text, record)},
  { title: '内容', debugtype: 'string_longtext', dataIndex: 'content', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '发送时间', dataIndex: 'deliveryTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '项目类型', debugtype: 'string', dataIndex: 'itemType', width: '30',render: (text, record)=>renderTextCell(text,record) },
  { title: '项Id', debugtype: 'string', dataIndex: 'itemId', width: '14',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  deliveryTo: '接收人',
  content: '内容',
  deliveryTime: '发送时间',
  itemType: '项目类型',
  itemId: '项Id',

}


const PrivateMessageBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PrivateMessageBase



