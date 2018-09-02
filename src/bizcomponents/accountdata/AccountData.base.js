
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"帐户数据", menuFor: "accountData",
  		subItems: [
  {name: 'platformAccountList', displayName:'平台账户', icon:'at'},
  {name: 'fundationAccountList', displayName:'平台基金账户', icon:'at'},
  {name: 'storeAccountList', displayName:'网点账户', icon:'store'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'accountData') },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  bookSharingPlatform: '图书共享平台',

}


const AccountDataBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AccountDataBase



