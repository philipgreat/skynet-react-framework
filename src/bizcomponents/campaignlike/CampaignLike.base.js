
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"活动点赞", menuFor: "campaignLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '活动', dataIndex: 'campaign', render: (text, record) => (record.campaign ? record.campaign.displayName : '暂无') },
  { title: '回复人', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '点赞发布日期', dataIndex: 'likePublishDatetime', render: (text, record) => moment(record.likePublishDatetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  campaign: '活动',
  replier: '回复人',
  likePublishDatetime: '点赞发布日期',

}


const CampaignLikeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CampaignLikeBase



