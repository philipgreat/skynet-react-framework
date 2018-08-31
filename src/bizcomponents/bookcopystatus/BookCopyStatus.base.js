
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"书籍副本状态", menuFor: "bookCopyStatus",
  		subItems: [
  {name: 'bookCopyList', displayName:'书籍副本', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookCopyStatus/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '13' },
  { title: '状态描述', debugtype: 'string', dataIndex: 'statusDescription', width: '15' },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },
  { title: '是否可借', dataIndex: 'canBorrow', render: (text, record) => (record.canBorrow ? '是' : '否') },
  { title: '是否可售', dataIndex: 'canSell', render: (text, record) => (record.canSell ? '是' : '否') },
  { title: '是否检查库存', dataIndex: 'needCheckStock', render: (text, record) => (record.needCheckStock ? '是' : '否') },
  { title: '检查是是否提醒', dataIndex: 'alarmWhenCheck', render: (text, record) => (record.alarmWhenCheck ? '是' : '否') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  statusDescription: '状态描述',
  bookPlaza: '图书天地',
  canBorrow: '是否可借',
  canSell: '是否可售',
  needCheckStock: '是否检查库存',
  alarmWhenCheck: '检查是是否提醒',

}


const BookCopyStatusBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopyStatusBase



