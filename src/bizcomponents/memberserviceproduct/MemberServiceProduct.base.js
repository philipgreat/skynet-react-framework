
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"会员服务产品", menuFor: "memberServiceProduct",
  		subItems: [
  {name: 'memberServiceBundleSkuList', displayName:'会员服务包', icon:'ember'},
  {name: 'storeSlideList', displayName:'网点海报', icon:'store'},
  {name: 'customerList', displayName:'用户', icon:'om'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'memberServiceProduct') },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '产品描述', debugtype: 'string_longtext', dataIndex: 'productDescription', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '产品优先级', debugtype: 'int', dataIndex: 'productPriority', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '产品封面图片', dataIndex: 'productCoverImage', render: (text, record) => renderImageCell(text,record,'产品封面图片') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},
  { title: '可借书最高总金额', dataIndex: 'bookBorrowingLimitPrice', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '最大可借书册数', debugtype: 'int', dataIndex: 'bookBorrowingCount', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '购书折扣费率', debugtype: 'double', dataIndex: 'bookPurchasingDiscountRate', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '超期天数', dataIndex: 'overduePay', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '最长免费借阅天数', debugtype: 'int', dataIndex: 'freeBorrowingDays', width: '6',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: 'ID',
  productName: '产品名称',
  productDescription: '产品描述',
  productPriority: '产品优先级',
  productCoverImage: '产品封面图片',
  platform: '平台',
  bookBorrowingLimitPrice: '可借书最高总金额',
  bookBorrowingCount: '最大可借书册数',
  bookPurchasingDiscountRate: '购书折扣费率',
  overduePay: '超期天数',
  freeBorrowingDays: '最长免费借阅天数',

}


const MemberServiceProductBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberServiceProductBase



