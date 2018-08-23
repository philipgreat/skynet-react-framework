
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"转移类型", menuFor: "transferType",
  		subItems: [
  {name: 'bookCopyTransferList', displayName:'图书副本迁移记录', icon:'book'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/transferType/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '22' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  platform: '平台',

}


const TransferTypeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default TransferTypeBase



