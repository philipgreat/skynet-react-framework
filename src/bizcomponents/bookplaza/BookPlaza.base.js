
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书天地", menuFor: "bookPlaza",
  		subItems: [
  {name: 'bookRecommendList', displayName:'图书推荐', icon:'book'},
  {name: 'bookSharingIncomeMetricList', displayName:'共享图书收益分成配置', icon:'book'},
  {name: 'bookDonationIncomeMetricList', displayName:'捐赠图书收益分成配置', icon:'book'},
  {name: 'memberServiceIncomeMetricList', displayName:'会员服务费收入分成配置', icon:'glass'},
  {name: 'bookList', displayName:'书', icon:'book'},
  {name: 'bookReviewList', displayName:'书评', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookPlaza/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'bookPlazaName', width: '10' },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookPlazaName: '名称',
  bookSharingPlatform: '图书共享平台',

}


const BookPlazaBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookPlazaBase



