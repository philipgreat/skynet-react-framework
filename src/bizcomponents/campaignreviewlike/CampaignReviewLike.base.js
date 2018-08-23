
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"活动评论点赞", menuFor: "campaignReviewLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '评论', dataIndex: 'review', render: (text, record) => (record.review ? record.review.displayName : '暂无') },
  { title: '回复人', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '点赞类型', debugtype: 'string', dataIndex: 'likeType', width: '6' },

]

const fieldLabels = {
  id: 'ID',
  review: '评论',
  replier: '回复人',
  createTime: '创建时间',
  likeType: '点赞类型',

}


const CampaignReviewLikeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CampaignReviewLikeBase



