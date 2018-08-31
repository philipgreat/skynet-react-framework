
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"用户历程", menuFor: "customerFootprint",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '13' },
  { title: '描述', debugtype: 'string_longtext', dataIndex: 'description', width: '10' },
  { title: '是否有相关项', dataIndex: 'hasRelatedItem', render: (text, record) => (record.hasRelatedItem ? '是' : '否') },
  { title: '相关项图片', dataIndex: 'itemImage', render: (text, record) => <ImagePreview imageTitle="相关项图片" imageLocation={record.itemImage} /> },
  { title: '相关项标题', debugtype: 'string', dataIndex: 'itemTitle', width: '15' },
  { title: '项目类型', debugtype: 'string', dataIndex: 'itemType', width: '12' },
  { title: '项Id', debugtype: 'string', dataIndex: 'itemId', width: '11' },
  { title: '相关项描述', debugtype: 'string', dataIndex: 'itemDescription', width: '14' },
  { title: '用户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  description: '描述',
  hasRelatedItem: '是否有相关项',
  itemImage: '相关项图片',
  itemTitle: '相关项标题',
  itemType: '项目类型',
  itemId: '项Id',
  itemDescription: '相关项描述',
  customer: '用户',
  createTime: '创建时间',

}


const CustomerFootprintBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CustomerFootprintBase



