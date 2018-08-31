
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"共享方式", menuFor: "deliverMethod",
  		subItems: [
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/deliverMethod/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '11' },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  bookSharingPlatform: '图书共享平台',

}


const DeliverMethodBase={menuData,displayColumns,fieldLabels,displayColumns}
export default DeliverMethodBase



