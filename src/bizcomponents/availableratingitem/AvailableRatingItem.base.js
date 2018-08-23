
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"服务评分", menuFor: "availableRatingItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '评分项', debugtype: 'string', dataIndex: 'ratingName', width: '11' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  ratingName: '评分项',
  platform: '平台',

}


const AvailableRatingItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableRatingItemBase



