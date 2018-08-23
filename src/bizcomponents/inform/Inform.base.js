
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"举报", menuFor: "inform",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '举报人', dataIndex: 'informer', render: (text, record) => (record.informer ? record.informer.displayName : '暂无') },
  { title: '活动评论', dataIndex: 'campaignReview', render: (text, record) => (record.campaignReview ? record.campaignReview.displayName : '暂无') },
  { title: '书评', dataIndex: 'bookReview', render: (text, record) => (record.bookReview ? record.bookReview.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'creationTime', render: (text, record) => moment(record.creationTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '8' },

]

const fieldLabels = {
  id: 'ID',
  informer: '举报人',
  campaignReview: '活动评论',
  bookReview: '书评',
  creationTime: '创建时间',
  comments: '评论',

}


const InformBase={menuData,displayColumns,fieldLabels,displayColumns}
export default InformBase



