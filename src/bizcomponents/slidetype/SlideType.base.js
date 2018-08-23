
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"海报类型", menuFor: "slideType",
  		subItems: [
  {name: 'storeSlideList', displayName:'网点海报', icon:'sliders'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/slideType/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '17' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  platform: '平台',

}


const SlideTypeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default SlideTypeBase



