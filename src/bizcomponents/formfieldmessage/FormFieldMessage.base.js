
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"表单字段的信息", menuFor: "formFieldMessage",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '8' },
  { title: '形式', dataIndex: 'form', render: (text, record) => (record.form ? record.form.displayName : '暂无') },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '11' },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  parameterName: '参数名称',
  form: '形式',
  level: '水平',

}


const FormFieldMessageBase={menuData,displayColumns,fieldLabels}
export default FormFieldMessageBase



