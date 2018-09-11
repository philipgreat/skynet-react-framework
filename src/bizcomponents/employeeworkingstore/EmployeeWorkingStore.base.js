
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"员工工作的网点", menuFor: "employeeWorkingStore",
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
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '角色', dataIndex: 'role', render: (text, record) => renderReferenceCell(text, record)},
  { title: '员工', dataIndex: 'employee', render: (text, record) => renderReferenceCell(text, record)},
  { title: '服务网点', dataIndex: 'store', render: (text, record) => renderReferenceCell(text, record)},
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '终止日期', dataIndex: 'terminatedDate', render: (text, record) =>renderDateCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  description: '描述',
  role: '角色',
  employee: '员工',
  store: '服务网点',
  startDate: '开始日期',
  lastUpdateTime: '最后更新时间',
  terminatedDate: '终止日期',

}


const EmployeeWorkingStoreBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EmployeeWorkingStoreBase



