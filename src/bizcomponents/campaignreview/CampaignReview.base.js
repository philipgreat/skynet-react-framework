
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"活动评论", menuFor: "campaignReview",
  		subItems: [
  {name: 'campaignReviewLikeList', displayName:'活动评论点赞', icon:'glass'},
  {name: 'informList', displayName:'举报', icon:'info'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/campaignReview/${text}/dashboard`}>{text}</Link>) },
  { title: '评论内容', debugtype: 'string', dataIndex: 'reviewContent', width: '9' },
  { title: '活动', dataIndex: 'campaign', render: (text, record) => (record.campaign ? record.campaign.displayName : '暂无') },
  { title: '评论人', dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.displayName : '暂无') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  reviewContent: '评论内容',
  campaign: '活动',
  reviewer: '评论人',
  lastUpdateTime: '最后更新时间',

}


const CampaignReviewBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CampaignReviewBase



