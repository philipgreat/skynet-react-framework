
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"药物", menuFor: "drug",
  		subItems: [
  {name: 'drugApplicationList', displayName:'药物申请', icon:'at'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/drug/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '描述', debugtype: 'string_longtext', dataIndex: 'description', width: '10' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '更新时间', dataIndex: 'updateTime', render: (text, record) => moment(record.updateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  createTime: '创建时间',
  updateTime: '更新时间',
  platform: '平台',

}


const DrugBase={menuData,displayColumns,fieldLabels}
export default DrugBase



