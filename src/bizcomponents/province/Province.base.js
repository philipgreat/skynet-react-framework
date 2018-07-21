
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"省", menuFor: "province",
  		subItems: [
  {name: 'cityList', displayName:'城市', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/province/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  platform: '平台',

}


const ProvinceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ProvinceBase



