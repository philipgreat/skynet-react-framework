
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"图书盘点计划", menuFor: "bookTakeStockPlan",
  		subItems: [
  {name: 'bookTakeStockResultList', displayName:'图书盘点结果', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookTakeStockPlan/${text}/dashboard`}>{text}</Link>) },
  { title: '计划名称', debugtype: 'string', dataIndex: 'planName', width: '10' },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '计划日期时间', dataIndex: 'planDatetime', render: (text, record) => moment(record.planDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '计划创建人', dataIndex: 'planCreator', render: (text, record) => (record.planCreator ? record.planCreator.displayName : '暂无') },
  { title: '盘点状态', dataIndex: 'takeStockStatus', render: (text, record) => (record.takeStockStatus ? record.takeStockStatus.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  planName: '计划名称',
  store: '服务网点',
  planDatetime: '计划日期时间',
  planCreator: '计划创建人',
  takeStockStatus: '盘点状态',

}


const BookTakeStockPlanBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookTakeStockPlanBase



