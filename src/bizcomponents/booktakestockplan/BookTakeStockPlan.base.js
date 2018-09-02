
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书盘点计划", menuFor: "bookTakeStockPlan",
  		subItems: [
  {name: 'bookTakeStockResultList', displayName:'图书盘点结果', icon:'book'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'bookTakeStockPlan') },
  { title: '计划名称', debugtype: 'string', dataIndex: 'planName', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => renderReferenceCell(text, record)},
  { title: '计划日期时间', dataIndex: 'planDatetime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '计划创建人', dataIndex: 'planCreator', render: (text, record) => renderReferenceCell(text, record)},
  { title: '盘点状态', dataIndex: 'takeStockStatus', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  planName: '计划名称',
  store: '服务网点',
  planDatetime: '计划日期时间',
  planCreator: '计划创建人',
  takeStockStatus: '盘点状态',

}


const BookTakeStockPlanBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookTakeStockPlanBase



