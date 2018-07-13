
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"合同", menuFor: "contract",
  		subItems: [
  {name: 'servicePriceList', displayName:'合同价格', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/contract/${text}/dashboard`}>{text}</Link>) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD') },
  { title: '结束日期', dataIndex: 'endDate', render: (text, record) => moment(record.endDate).format('YYYY-MM-DD') },

]

const fieldLabels = {
  id: 'ID',
  platform: '平台',
  company: '商户',
  startDate: '开始日期',
  endDate: '结束日期',

}


const ContractBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ContractBase



