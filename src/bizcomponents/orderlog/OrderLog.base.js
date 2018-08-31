
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"Log", menuFor: "orderLog",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '11' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '30' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  description: '描述',
  lastUpdateTime: '最后更新时间',
  mainOrder: '主订单',

}


const OrderLogBase={menuData,displayColumns,fieldLabels,displayColumns}
export default OrderLogBase



