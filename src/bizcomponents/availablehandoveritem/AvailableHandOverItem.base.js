
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"交接检查项", menuFor: "availableHandOverItem",
  		subItems: [
  {name: 'handOverChecklistItemList', displayName:'交接检查项', icon:'check'},
  {name: 'handOverChecklistResultList', displayName:'交接检查结果', icon:'check'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/availableHandOverItem/${text}/dashboard`}>{text}</Link>) },
  { title: '检查项目名称', debugtype: 'string', dataIndex: 'checkItemName', width: '11' },
  { title: '检查项目描述', debugtype: 'string_longtext', dataIndex: 'checkItemDescription', width: '10' },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  checkItemName: '检查项目名称',
  checkItemDescription: '检查项目描述',
  product: '产品名称',

}


const AvailableHandOverItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableHandOverItemBase



