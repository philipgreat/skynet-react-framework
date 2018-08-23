
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"利润分配状态", menuFor: "profitDistributeState",
  		subItems: [
  {name: 'undistributedProfitList', displayName:'未分配利润', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/profitDistributeState/${text}/dashboard`}>{text}</Link>) },
  { title: 'ame', debugtype: 'string', dataIndex: 'ame', width: '8' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '14' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  ame: 'ame',
  code: '代码',
  platform: '平台',

}


const ProfitDistributeStateBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ProfitDistributeStateBase



