
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"订单项", menuFor: "lineItem",
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
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '封面图片', dataIndex: 'coverImage', render: (text, record) => renderImageCell(text,record,'封面图片') },
  { title: '商品类型', debugtype: 'string', dataIndex: 'skuType', width: '27',render: (text, record)=>renderTextCell(text,record) },
  { title: '商品ID', debugtype: 'string', dataIndex: 'skuId', width: '14',render: (text, record)=>renderTextCell(text,record) },
  { title: '商品链接', debugtype: 'string_url', dataIndex: 'skuLink', width: '40',render: (text, record)=>renderTextCell(text,record) },
  { title: '原价', dataIndex: 'rawPrice', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '折扣', dataIndex: 'itemDiscount', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  summary: '摘要',
  coverImage: '封面图片',
  skuType: '商品类型',
  skuId: '商品ID',
  skuLink: '商品链接',
  rawPrice: '原价',
  itemDiscount: '折扣',
  mainOrder: '主订单',

}


const LineItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default LineItemBase



