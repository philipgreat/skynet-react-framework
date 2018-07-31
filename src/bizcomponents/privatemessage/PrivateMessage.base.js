
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"私信消息", menuFor: "privateMessage",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '接收人', dataIndex: 'deliveryTo', render: (text, record) => (record.deliveryTo ? record.deliveryTo.displayName : '暂无') },
  { title: '内容', debugtype: 'string_longtext', dataIndex: 'content', width: '10' },
  { title: '发送时间', dataIndex: 'deliveryTime', render: (text, record) => moment(record.deliveryTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '链接', debugtype: 'string_url', dataIndex: 'link', width: '24' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  deliveryTo: '接收人',
  content: '内容',
  deliveryTime: '发送时间',
  link: '链接',

}


const PrivateMessageBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PrivateMessageBase



