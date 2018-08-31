
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"角色", menuFor: "role",
  		subItems: [
  {name: 'employeeWorkingStoreList', displayName:'员工工作的网点', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/role/${text}/dashboard`}>{text}</Link>) },
  { title: '角色名', debugtype: 'string', dataIndex: 'roleName', width: '7' },
  { title: '角色Property1', dataIndex: 'roleProperty1', render: (text, record) => (record.roleProperty1 ? '是' : '否') },
  { title: '角色Property2', dataIndex: 'roleProperty2', render: (text, record) => (record.roleProperty2 ? '是' : '否') },
  { title: '角色Property3', debugtype: 'int', dataIndex: 'roleProperty3', width: '7' },

]

const fieldLabels = {
  id: 'ID',
  roleName: '角色名',
  roleProperty1: '角色Property1',
  roleProperty2: '角色Property2',
  roleProperty3: '角色Property3',

}


const RoleBase={menuData,displayColumns,fieldLabels,displayColumns}
export default RoleBase



