
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"药物类型", menuFor: "drugType",
  		subItems: [
  {name: 'drugApplicationList', displayName:'药物申请', icon:'at'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/drugType/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '更新时间', dataIndex: 'updateTime', render: (text, record) => moment(record.updateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '描述', debugtype: 'string_longtext', dataIndex: 'description', width: '10' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  createTime: '创建时间',
  updateTime: '更新时间',
  platform: '平台',
  description: '描述',

}


const DrugTypeBase={menuData,displayColumns,fieldLabels}
export default DrugTypeBase



