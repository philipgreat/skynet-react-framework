
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"表单信息", menuFor: "formMessage",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '10' },
  { title: '形式', dataIndex: 'form', render: (text, record) => (record.form ? record.form.displayName : '暂无') },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '11' },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  form: '形式',
  level: '水平',

}


const FormMessageBase={menuData,displayColumns,fieldLabels}
export default FormMessageBase



