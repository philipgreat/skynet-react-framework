
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"表单字段", menuFor: "formField",
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
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '形式', dataIndex: 'form', render: (text, record) => renderReferenceCell(text, record)},
  { title: '占位符', debugtype: 'string', dataIndex: 'placeholder', width: '16',render: (text, record)=>renderTextCell(text,record) },
  { title: '默认值', debugtype: 'string', dataIndex: 'defaultValue', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16',render: (text, record)=>renderTextCell(text,record) },
  { title: '字段组', debugtype: 'string', dataIndex: 'fieldGroup', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '最小值', debugtype: 'string', dataIndex: 'minimumValue', width: '19',render: (text, record)=>renderTextCell(text,record) },
  { title: '最大值', debugtype: 'string', dataIndex: 'maximumValue', width: '22',render: (text, record)=>renderTextCell(text,record) },
  { title: '要求', dataIndex: 'required', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '禁用', dataIndex: 'disabled', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '自定义渲染', dataIndex: 'customRendering', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '候选人的价值观', debugtype: 'string', dataIndex: 'candidateValues', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '建议值', debugtype: 'string', dataIndex: 'suggestValues', width: '7',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  label: '标签',
  localeKey: '语言环境的关键',
  parameterName: '参数名称',
  type: '类型',
  form: '形式',
  placeholder: '占位符',
  defaultValue: '默认值',
  description: '描述',
  fieldGroup: '字段组',
  minimumValue: '最小值',
  maximumValue: '最大值',
  required: '要求',
  disabled: '禁用',
  customRendering: '自定义渲染',
  candidateValues: '候选人的价值观',
  suggestValues: '建议值',

}


const FormFieldBase={menuData,displayColumns,fieldLabels,displayColumns}
export default FormFieldBase



