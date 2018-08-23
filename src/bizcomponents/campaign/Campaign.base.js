
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"活动", menuFor: "campaign",
  		subItems: [
  {name: 'storeSlideList', displayName:'网点海报', icon:'sliders'},
  {name: 'campaignRegisterHistoryList', displayName:'活动报名记录', icon:'history'},
  {name: 'campaignReviewList', displayName:'活动评论', icon:'glass'},
  {name: 'campaignLikeList', displayName:'活动点赞', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/campaign/${text}/dashboard`}>{text}</Link>) },
  { title: '活动名称', debugtype: 'string', dataIndex: 'campaignName', width: '13' },
  { title: '活动内容', debugtype: 'string_longtext', dataIndex: 'campaignContent', width: '10' },
  { title: '活动图片', dataIndex: 'campaignImage', render: (text, record) => <ImagePreview imageTitle="活动图片" imageLocation={record.campaignImage} /> },
  { title: '活动状态', debugtype: 'string', dataIndex: 'campaignStatus', width: '7' },
  { title: '开始时间', dataIndex: 'campaignStartTime', render: (text, record) => moment(record.campaignStartTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '结束时间', dataIndex: 'campaignFinishTime', render: (text, record) => moment(record.campaignFinishTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '活动地址', debugtype: 'string', dataIndex: 'campaignHoldAddress', width: '23' },
  { title: '报名截止日期', dataIndex: 'availableRegisterDeadline', render: (text, record) => moment(record.availableRegisterDeadline).format('YYYY-MM-DD HH:mm:ss') },
  { title: '报名人数限制', debugtype: 'int', dataIndex: 'availableRegisterQuantity', width: '9' },
  { title: '发布日期时间', dataIndex: 'publishDatetime', render: (text, record) => moment(record.publishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '发布网点', dataIndex: 'publishStore', render: (text, record) => (record.publishStore ? record.publishStore.displayName : '暂无') },
  { title: '发布员工', dataIndex: 'publishEmployee', render: (text, record) => (record.publishEmployee ? record.publishEmployee.displayName : '暂无') },
  { title: '活动广场', dataIndex: 'campaignPlaza', render: (text, record) => (record.campaignPlaza ? record.campaignPlaza.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  campaignName: '活动名称',
  campaignContent: '活动内容',
  campaignImage: '活动图片',
  campaignStatus: '活动状态',
  campaignStartTime: '开始时间',
  campaignFinishTime: '结束时间',
  campaignHoldAddress: '活动地址',
  availableRegisterDeadline: '报名截止日期',
  availableRegisterQuantity: '报名人数限制',
  publishDatetime: '发布日期时间',
  publishStore: '发布网点',
  publishEmployee: '发布员工',
  campaignPlaza: '活动广场',

}


const CampaignBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CampaignBase



