
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"用户历程", menuFor: "customerFootprint",
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
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '描述', debugtype: 'string_longtext', dataIndex: 'description', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '是否有相关项', dataIndex: 'hasRelatedItem', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '相关项图片', dataIndex: 'itemImage', render: (text, record) => renderImageCell(text,record,'相关项图片') },
  { title: '相关项标题', debugtype: 'string', dataIndex: 'itemTitle', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '项目类型', debugtype: 'string', dataIndex: 'itemType', width: '12',render: (text, record)=>renderTextCell(text,record) },
  { title: '项Id', debugtype: 'string', dataIndex: 'itemId', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: '相关项描述', debugtype: 'string', dataIndex: 'itemDescription', width: '14',render: (text, record)=>renderTextCell(text,record) },
  { title: '用户', dataIndex: 'customer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  description: '描述',
  hasRelatedItem: '是否有相关项',
  itemImage: '相关项图片',
  itemTitle: '相关项标题',
  itemType: '项目类型',
  itemId: '项Id',
  itemDescription: '相关项描述',
  customer: '用户',
  createTime: '创建时间',

}


const CustomerFootprintBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CustomerFootprintBase



