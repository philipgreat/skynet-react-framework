
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书推荐", menuFor: "bookRecommend",
  		subItems: [
  {name: 'bookList', displayName:'书', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookRecommend/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '图书天地', dataIndex: 'bookPlaza', render: (text, record) => (record.bookPlaza ? record.bookPlaza.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  bookPlaza: '图书天地',

}


const BookRecommendBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookRecommendBase



