
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书共享平台", menuFor: "bookSharingPlatform",
  		subItems: [
  {name: 'platformConfigurationList', displayName:'平台配置', icon:'at'},
  {name: 'accountDataList', displayName:'帐户数据', icon:'at'},
  {name: 'cityList', displayName:'城市', icon:'city'},
  {name: 'bookPlazaList', displayName:'图书天地', icon:'book'},
  {name: 'memberServiceProductList', displayName:'会员服务产品', icon:'ember'},
  {name: 'mainOrderList', displayName:'主订单', icon:'first-order'},
  {name: 'bookList', displayName:'书', icon:'book'},
  {name: 'platformAccountList', displayName:'平台账户', icon:'at'},
  {name: 'fundationAccountList', displayName:'平台基金账户', icon:'at'},
  {name: 'storeList', displayName:'服务网点', icon:'store'},
  {name: 'campaignPlazaList', displayName:'活动广场', icon:'500px'},
  {name: 'customerList', displayName:'用户', icon:'om'},
  {name: 'employeeList', displayName:'员工', icon:'500px'},
  {name: 'undistributedProfitList', displayName:'未分割收入', icon:'500px'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'bookSharingPlatform') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '12',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',

}


const BookSharingPlatformBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookSharingPlatformBase



