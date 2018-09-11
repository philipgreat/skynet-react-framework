
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"利润分配状态", menuFor: "profitDistributeState",
  		subItems: [
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'profitDistributeState') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '14',render: (text, record)=>renderTextCell(text,record) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  platform: '平台',

}


const ProfitDistributeStateBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ProfitDistributeStateBase


