
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"服务网点", menuFor: "store",
  		subItems: [
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'glass'},
  {name: 'printerList', displayName:'打印机', icon:'print'},
  {name: 'bookCopyList', displayName:'书籍副本', icon:'book'},
  {name: 'bookCopyTransferListAsOriginalStore', displayName:'图书副本迁移记录', icon:'book'},
  {name: 'bookCopyTransferListAsNewStore', displayName:'图书副本迁移记录', icon:'book'},
  {name: 'bookTakeStockPlanList', displayName:'图书盘点计划', icon:'book'},
  {name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录', icon:'book'},
  {name: 'borrowingHistoryListAsLendingStore', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingHistoryListAsReturnStore', displayName:'图书借还历史', icon:'history'},
  {name: 'borrowingExpiredSkuListAsLendingStore', displayName:'借书超期费', icon:'glass'},
  {name: 'borrowingExpiredSkuListAsReturnStore', displayName:'借书超期费', icon:'glass'},
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'book'},
  {name: 'memberServiceRevenueList', displayName:'会员服务收益', icon:'glass'},
  {name: 'storeAccountList', displayName:'网点账户', icon:'cc'},
  {name: 'storeSlideList', displayName:'网点海报', icon:'sliders'},
  {name: 'campaignList', displayName:'活动', icon:'glass'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的网点', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/store/${text}/dashboard`}>{text}</Link>) },
  { title: '网点名字', debugtype: 'string', dataIndex: 'storeName', width: '11' },
  { title: '网点地址', debugtype: 'string', dataIndex: 'storeAddress', width: '8' },
  { title: '网点营业时间', debugtype: 'string', dataIndex: 'storeOpenTime', width: '19' },
  { title: '网点房间号码', debugtype: 'string', dataIndex: 'storeRoomNumber', width: '9' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '11' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '10' },
  { title: '网点图片', dataIndex: 'storeImage', render: (text, record) => <ImagePreview imageTitle="网点图片" imageLocation={record.storeImage} /> },
  { title: '网点类型', debugtype: 'string', dataIndex: 'storeType', width: '6' },
  { title: '城市', dataIndex: 'city', render: (text, record) => (record.city ? record.city.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  storeName: '网点名字',
  storeAddress: '网点地址',
  storeOpenTime: '网点营业时间',
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



