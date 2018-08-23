
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"屏蔽用户", menuFor: "shieldCustomer",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '用户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '屏蔽', dataIndex: 'shield', render: (text, record) => (record.shield ? record.shield.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'creationTime', render: (text, record) => moment(record.creationTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '8' },

]

const fieldLabels = {
  id: 'ID',
  customer: '用户',
  shield: '屏蔽',
  creationTime: '创建时间',
  comments: '评论',

}


const ShieldCustomerBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ShieldCustomerBase



