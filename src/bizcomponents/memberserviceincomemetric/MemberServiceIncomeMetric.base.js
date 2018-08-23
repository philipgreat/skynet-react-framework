
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"会员服务费收入分成配置", menuFor: "memberServiceIncomeMetric",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务网点分成比', debugtype: 'double', dataIndex: 'storeRate', width: '7' },
  { title: '平台分成比', debugtype: 'double', dataIndex: 'platformRate', width: '7' },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  storeRate: '服务网点分成比',
  platformRate: '平台分成比',
  bookPlaza: '图书天地',

}


const MemberServiceIncomeMetricBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberServiceIncomeMetricBase



