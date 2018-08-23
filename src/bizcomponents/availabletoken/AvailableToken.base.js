
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"可用的权益", menuFor: "availableToken",
  		subItems: [
  {name: 'tokenInMemberServiceProductList', displayName:'成员服务产品中的令牌', icon:'search-minus'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/availableToken/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '标记代码', debugtype: 'string', dataIndex: 'tokenCode', width: '28' },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  tokenCode: '标记代码',
  bookSharingPlatform: '图书共享平台',

}


const AvailableTokenBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableTokenBase



