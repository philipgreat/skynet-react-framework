
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"表单动作", menuFor: "formAction",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '6' },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '8' },
  { title: '行动的关键', debugtype: 'string', dataIndex: 'actionKey', width: '10' },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '11' },
  { title: 'url', debugtype: 'string', dataIndex: 'url', width: '46' },
  { title: '形式', dataIndex: 'form', render: (text, record) => (record.form ? record.form.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  label: '标签',
  localeKey: '语言环境的关键',
  actionKey: '行动的关键',
  level: '水平',
  url: 'url',
  form: '形式',

}


const FormActionBase={menuData,displayColumns,fieldLabels}
export default FormActionBase











