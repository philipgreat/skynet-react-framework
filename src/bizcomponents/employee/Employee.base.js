
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"员工", menuFor: "employee",
  		subItems: [
  {name: 'messageTemplateList', displayName:'消息模板', icon:'at'},
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'500px'},
  {name: 'bookCopyTransferList', displayName:'图书副本迁移记录', icon:'copy'},
  {name: 'bookTakeStockPlanList', displayName:'图书盘点计划', icon:'book'},
  {name: 'bookTakeStockResultList', displayName:'图书盘点结果', icon:'book'},
  {name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录', icon:'copy'},
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'copy'},
  {name: 'campaignList', displayName:'活动', icon:'500px'},
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'employee') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: '员工照片', dataIndex: 'employeeImage', render: (text, record) => renderImageCell(text,record,'员工照片') },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  employeeImage: '员工照片',
  mobileNumber: '手机号码',
  bookSharingPlatform: '图书共享平台',

}


const EmployeeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EmployeeBase



