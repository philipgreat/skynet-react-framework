
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"通用的形式", menuFor: "genericForm",
  		subItems: [
  {name: 'formMessageList', displayName:'表单信息', icon:'glass'},
  {name: 'formFieldMessageList', displayName:'表单字段的信息', icon:'glass'},
  {name: 'formFieldList', displayName:'表单字段', icon:'glass'},
  {name: 'formActionList', displayName:'表单动作', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/genericForm/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '9' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16' },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  description: '描述',

}


const GenericFormBase={menuData,displayColumns,fieldLabels}
export default GenericFormBase



