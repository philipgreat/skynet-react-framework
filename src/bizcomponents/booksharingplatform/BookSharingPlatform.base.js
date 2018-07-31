
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书共享平台", menuFor: "bookSharingPlatform",
  		subItems: [
  {name: 'platformConfigurationList', displayName:'平台配置', icon:'at'},
  {name: 'availableTokenList', displayName:'可用的权益', icon:'glass'},
  {name: 'accountDataList', displayName:'帐户数据', icon:'database'},
  {name: 'cityList', displayName:'城市', icon:'glass'},
  {name: 'bookPlazaList', displayName:'图书天地', icon:'book'},
  {name: 'memberServiceProductList', displayName:'会员服务产品', icon:'glass'},
  {name: 'mainOrderList', displayName:'主订单', icon:'glass'},
  {name: 'bookList', displayName:'书', icon:'book'},
  {name: 'platformAccountList', displayName:'平台账户', icon:'at'},
  {name: 'fundationAccountList', displayName:'平台基金账户', icon:'at'},
  {name: 'storeList', displayName:'服务网点', icon:'glass'},
  {name: 'campaignPlazaList', displayName:'活动广场', icon:'glass'},
  {name: 'customerList', displayName:'用户', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookSharingPlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '12' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',

}


const BookSharingPlatformBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookSharingPlatformBase



