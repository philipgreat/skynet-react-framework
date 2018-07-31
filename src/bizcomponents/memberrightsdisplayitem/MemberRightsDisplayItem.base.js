
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"会员权利显示项", menuFor: "memberRightsDisplayItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '图像', debugtype: 'string', dataIndex: 'image', width: '6' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '6' },
  { title: '会员的权利', dataIndex: 'memberRights', render: (text, record) => (record.memberRights ? record.memberRights.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  image: '图像',
  summary: '摘要',
  memberRights: '会员的权利',

}


const MemberRightsDisplayItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberRightsDisplayItemBase



