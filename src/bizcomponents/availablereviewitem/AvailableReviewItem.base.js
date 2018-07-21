
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"评论", menuFor: "availableReviewItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '评论内容', debugtype: 'string', dataIndex: 'reviewName', width: '8' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  reviewName: '评论内容',
  platform: '平台',

}


const AvailableReviewItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableReviewItemBase



