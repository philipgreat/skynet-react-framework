
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"表单字段", menuFor: "formField",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '7' },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '15' },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '8' },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '13' },
  { title: '形式', dataIndex: 'form', render: (text, record) => (record.form ? record.form.displayName : '暂无') },
  { title: '占位符', debugtype: 'string', dataIndex: 'placeholder', width: '16' },
  { title: '默认值', debugtype: 'string', dataIndex: 'defaultValue', width: '7' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16' },
  { title: '字段组', debugtype: 'string', dataIndex: 'fieldGroup', width: '8' },
  { title: '最小值', debugtype: 'string', dataIndex: 'minValue', width: '19' },
  { title: '最大的价值', debugtype: 'string', dataIndex: 'maxValue', width: '22' },
  { title: '要求', dataIndex: 'required', render: (text, record) => (record.required ? '是' : '否') },
  { title: '禁用', dataIndex: 'disabled', render: (text, record) => (record.disabled ? '是' : '否') },
  { title: '自定义渲染', dataIndex: 'customRendering', render: (text, record) => (record.customRendering ? '是' : '否') },
  { title: '候选人的价值观', debugtype: 'string', dataIndex: 'candidateValues', width: '7' },
  { title: '建议值', debugtype: 'string', dataIndex: 'suggestValues', width: '7' },

]

const fieldLabels = {
  id: 'ID',
  label: '标签',
  localeKey: '语言环境的关键',
  parameterName: '参数名称',
  type: '类型',
  form: '形式',
  placeholder: '占位符',
  defaultValue: '默认值',
  description: '描述',
  fieldGroup: '字段组',
  minValue: '最小值',
  maxValue: '最大的价值',
  required: '要求',
  disabled: '禁用',
  customRendering: '自定义渲染',
  candidateValues: '候选人的价值观',
  suggestValues: '建议值',

}


const FormFieldBase={menuData,displayColumns,fieldLabels}
export default FormFieldBase



