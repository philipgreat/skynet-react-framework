
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"角色", menuFor: "role",
  		subItems: [
  {name: 'employeeWorkingStoreList', displayName:'员工工作的网点', icon:'store'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'role') },
  { title: '角色名', debugtype: 'string', dataIndex: 'roleName', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '角色Property1', dataIndex: 'roleProperty1', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '角色Property2', dataIndex: 'roleProperty2', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '角色Property3', debugtype: 'int', dataIndex: 'roleProperty3', width: '7',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  roleName: '角色名',
  roleProperty1: '角色Property1',
  roleProperty2: '角色Property2',
  roleProperty3: '角色Property3',

}


const RoleBase={menuData,displayColumns,fieldLabels,displayColumns}
export default RoleBase



