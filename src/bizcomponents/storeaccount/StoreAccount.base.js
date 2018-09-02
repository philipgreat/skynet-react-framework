
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"网点账户", menuFor: "storeAccount",
  		subItems: [
  {name: 'storeAccountDetailsList', displayName:'网点账户明细', icon:'store'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'storeAccount') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => renderReferenceCell(text, record)},
  { title: '帐户数据', dataIndex: 'accountData', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  amount: '账户余额',
  store: '服务网点',
  accountData: '帐户数据',

}


const StoreAccountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default StoreAccountBase



