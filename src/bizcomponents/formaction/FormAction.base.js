
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"表单动作", menuFor: "formAction",
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
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '行动的关键', debugtype: 'string', dataIndex: 'actionKey', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: 'url', debugtype: 'string', dataIndex: 'url', width: '46',render: (text, record)=>renderTextCell(text,record) },
  { title: '形式', dataIndex: 'form', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  label: '标签',
  localeKey: '语言环境的关键',
  actionKey: '行动的关键',
  level: '水平',
  url: 'url',
  form: '形式',

}


const FormActionBase={menuData,displayColumns,fieldLabels,displayColumns}
export default FormActionBase











