
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"服务网点", menuFor: "store",
  		subItems: [
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'500px'},
  {name: 'printerList', displayName:'打印机', icon:'print'},
  {name: 'bookCopyList', displayName:'书籍副本', icon:'copy'},
  {name: 'bookCopyTransferListAsOriginalStore', displayName:'图书副本迁移记录(原网点)', icon:'copy'},
  {name: 'bookCopyTransferListAsNewStore', displayName:'图书副本迁移记录(新网点)', icon:'copy'},
  {name: 'bookTakeStockPlanList', displayName:'图书盘点计划', icon:'book'},
  {name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录', icon:'copy'},
  {name: 'borrowingHistoryListAsLendingStore', displayName:'图书借还历史(借出网点)', icon:'history'},
  {name: 'borrowingHistoryListAsReturnStore', displayName:'图书借还历史(还书网点)', icon:'history'},
  {name: 'borrowingExpiredSkuListAsLendingStore', displayName:'借书超期费(借出网点)', icon:'skull'},
  {name: 'borrowingExpiredSkuListAsReturnStore', displayName:'借书超期费(还书网点)', icon:'skull'},
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'copy'},
  {name: 'memberServiceRevenueList', displayName:'会员服务收益', icon:'ember'},
  {name: 'storeAccountList', displayName:'网点账户', icon:'store'},
  {name: 'storeSlideList', displayName:'网点海报', icon:'store'},
  {name: 'campaignList', displayName:'活动', icon:'500px'},
  {name: 'customerList', displayName:'用户', icon:'om'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的网点', icon:'store'},
  
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
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderIdentifier(text,record,'store') },
  { title: '网点名字', debugtype: 'string', dataIndex: 'storeName', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点副标题', debugtype: 'string', dataIndex: 'storeSubname', width: '9',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点地址', debugtype: 'string', dataIndex: 'storeAddress', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点营业时间', debugtype: 'string', dataIndex: 'storeOpenTime', width: '19',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点营业时间补充说明', debugtype: 'string', dataIndex: 'storeOpenTimeSecond', width: '19',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点房间号码', debugtype: 'string', dataIndex: 'storeRoomNumber', width: '9',render: (text, record)=>renderTextCell(text,record) },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '14',render: (text, record)=>renderTextCell(text,record) },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '网点图片', dataIndex: 'storeImage', render: (text, record) => renderImageCell(text,record,'网点图片') },
  { title: '网点类型', dataIndex: 'storeType', render: (text, record) => renderReferenceCell(text, record)},
  { title: '城市', dataIndex: 'city', render: (text, record) => renderReferenceCell(text, record)},
  { title: '平台', dataIndex: 'platform', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  storeName: '网点名字',
  storeSubname: '网点副标题',
  storeAddress: '网点地址',
  storeOpenTime: '网点营业时间',
  storeOpenTimeSecond: '网点营业时间补充说明',
  storeRoomNumber: '网点房间号码',
  longitude: '经度',
  latitude: '纬度',
  storeImage: '网点图片',
  storeType: '网点类型',
  city: '城市',
  platform: '平台',

}


const StoreBase={menuData,displayColumns,fieldLabels,displayColumns}
export default StoreBase



