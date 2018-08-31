
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"网点类型", menuFor: "storeType",
  		subItems: [
  {name: 'storeList', displayName:'服务网点', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/storeType/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '15' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  platform: '平台',

}


const StoreTypeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default StoreTypeBase



