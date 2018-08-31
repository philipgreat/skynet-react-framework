
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"活动报名记录", menuFor: "campaignRegisterHistory",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '报名已取消报名', dataIndex: 'cancelled', render: (text, record) => (record.cancelled ? '是' : '否') },
  { title: '活动', dataIndex: 'campaign', render: (text, record) => (record.campaign ? record.campaign.displayName : '暂无') },
  { title: '报名用户', dataIndex: 'registerMember', render: (text, record) => (record.registerMember ? record.registerMember.displayName : '暂无') },
  { title: '报名日期', dataIndex: 'registerDatetime', render: (text, record) => moment(record.registerDatetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  cancelled: '报名已取消报名',
  campaign: '活动',
  registerMember: '报名用户',
  registerDatetime: '报名日期',

}


const CampaignRegisterHistoryBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CampaignRegisterHistoryBase



