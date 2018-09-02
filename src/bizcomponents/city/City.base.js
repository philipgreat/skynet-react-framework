
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"城市", menuFor: "city",
  		subItems: [
  {name: 'storeList', displayName:'服务网点', icon:'store'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'city') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => renderReferenceCell(text, record)},
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '更新时间', dataIndex: 'updateTime', render: (text, record) =>renderDateTimeCell(text,record)  },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  bookSharingPlatform: '图书共享平台',
  createTime: '创建时间',
  updateTime: '更新时间',

}


const CityBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CityBase



