
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"未分割收入", menuFor: "undistributedProfit",
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
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '费用起始日期', dataIndex: 'chargeStartDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '费用结束日期', dataIndex: 'chargeEndDate', render: (text, record) =>renderDateCell(text,record) },
  { title: '利润类型', dataIndex: 'profitType', render: (text, record) => renderReferenceCell(text, record)},
  { title: '利润分配状态', dataIndex: 'profitDistributeState', render: (text, record) => renderReferenceCell(text, record)},
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => renderReferenceCell(text, record)},
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '账户余额', dataIndex: 'amount', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '余额', dataIndex: 'balance', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '用户', dataIndex: 'customer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  chargeStartDate: '费用起始日期',
  chargeEndDate: '费用结束日期',
  profitType: '利润类型',
  profitDistributeState: '利润分配状态',
  mainOrder: '主订单',
  createTime: '创建时间',
  amount: '账户余额',
  balance: '余额',
  customer: '用户',
  lastUpdateTime: '最后更新时间',
  platform: '平台',

}


const UndistributedProfitBase={menuData,displayColumns,fieldLabels,displayColumns}
export default UndistributedProfitBase



