
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"网点海报", menuFor: "storeSlide",
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
  { title: '提示', debugtype: 'string', dataIndex: 'tips', width: '15',render: (text, record)=>renderTextCell(text,record) },
  { title: '横幅图像', dataIndex: 'bannerImage', render: (text, record) => renderImageCell(text,record,'横幅图像') },
  { title: '小程序链接', debugtype: 'string', dataIndex: 'wxaLinkUrl', width: '44',render: (text, record)=>renderTextCell(text,record) },
  { title: '管理界面链接', debugtype: 'string', dataIndex: 'antdLinkUrl', width: '30',render: (text, record)=>renderTextCell(text,record) },
  { title: '海报类型', dataIndex: 'slideType', render: (text, record) => renderReferenceCell(text, record)},
  { title: '书', dataIndex: 'book', render: (text, record) => renderReferenceCell(text, record)},
  { title: '活动', dataIndex: 'campaign', render: (text, record) => renderReferenceCell(text, record)},
  { title: '会员服务产品', dataIndex: 'memberServiceProduct', render: (text, record) => renderReferenceCell(text, record)},
  { title: '服务网点', dataIndex: 'store', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  tips: '提示',
  bannerImage: '横幅图像',
  wxaLinkUrl: '小程序链接',
  antdLinkUrl: '管理界面链接',
  slideType: '海报类型',
  book: '书',
  campaign: '活动',
  memberServiceProduct: '会员服务产品',
  store: '服务网点',

}


const StoreSlideBase={menuData,displayColumns,fieldLabels,displayColumns}
export default StoreSlideBase



