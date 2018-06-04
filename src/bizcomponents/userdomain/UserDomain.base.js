
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"用户域", menuFor: "userDomain",
  		subItems: [
  {name: 'secUserList', displayName:'SEC的用户', icon:'user'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/userDomain/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',

}


const UserDomainBase={menuData,displayColumns,fieldLabels}
export default UserDomainBase



