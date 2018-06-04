
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"数据平台", menuFor: "dataPlatform",
  		subItems: [
  {name: 'companyList', displayName:'公司', icon:'glass'},
  {name: 'applicationTypeList', displayName:'申请类型', icon:'at'},
  {name: 'drugList', displayName:'药物', icon:'glass'},
  {name: 'drugTypeList', displayName:'药物类型', icon:'glass'},
  {name: 'drugApplicationList', displayName:'药物申请', icon:'at'},
  {name: 'newsSubscriptionList', displayName:'新闻订阅', icon:'subscript'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/dataPlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '19' },
  { title: '创始人', debugtype: 'string', dataIndex: 'founder', width: '7' },
  { title: '成立', dataIndex: 'founded', render: (text, record) => moment(record.founded).format('YYYY-MM-DD HH:mm:ss') },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '19' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  founder: '创始人',
  founded: '成立',
  description: '描述',

}


const DataPlatformBase={menuData,displayColumns,fieldLabels}
export default DataPlatformBase



