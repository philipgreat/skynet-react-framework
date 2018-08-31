
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"共享图书收益分成配置", menuFor: "bookSharingIncomeMetric",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '共享者分成比', debugtype: 'double', dataIndex: 'vendorRate', width: '7' },
  { title: '借出网点分成比', debugtype: 'double', dataIndex: 'lendingStoreRate', width: '7' },
  { title: '平台分成比', debugtype: 'double', dataIndex: 'platformRate', width: '7' },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vendorRate: '共享者分成比',
  lendingStoreRate: '借出网点分成比',
  platformRate: '平台分成比',
  bookPlaza: '图书天地',

}


const BookSharingIncomeMetricBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookSharingIncomeMetricBase



