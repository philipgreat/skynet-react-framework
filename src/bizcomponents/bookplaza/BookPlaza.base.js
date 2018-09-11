
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书天地", menuFor: "bookPlaza",
  		subItems: [
  {name: 'bookRecommendList', displayName:'图书推荐', icon:'book'},
  {name: 'bookSharingIncomeMetricList', displayName:'共享图书收益分成配置', icon:'book'},
  {name: 'bookDonationIncomeMetricList', displayName:'捐赠图书收益分成配置', icon:'book'},
  {name: 'memberServiceIncomeMetricList', displayName:'会员服务费收入分成配置', icon:'ember'},
  {name: 'bookList', displayName:'书', icon:'book'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'bookPlaza') },
  { title: '名称', debugtype: 'string', dataIndex: 'bookPlazaName', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  bookPlazaName: '名称',
  bookSharingPlatform: '图书共享平台',

}


const BookPlazaBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookPlazaBase



