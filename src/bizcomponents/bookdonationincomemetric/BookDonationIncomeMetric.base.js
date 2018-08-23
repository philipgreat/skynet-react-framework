
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"捐赠图书收益分成配置", menuFor: "bookDonationIncomeMetric",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '共享者分成比', debugtype: 'string', dataIndex: 'vendorRate', width: '6' },
  { title: '借出网点分成比', debugtype: 'string', dataIndex: 'lendingStoreRate', width: '7' },
  { title: '平台分成比', debugtype: 'string', dataIndex: 'platformRate', width: '7' },
  { title: '公益基金分成比', debugtype: 'string', dataIndex: 'publicServiceFundRate', width: '7' },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vendorRate: '共享者分成比',
  lendingStoreRate: '借出网点分成比',
  platformRate: '平台分成比',
  publicServiceFundRate: '公益基金分成比',
  bookPlaza: '图书天地',

}


const BookDonationIncomeMetricBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookDonationIncomeMetricBase



