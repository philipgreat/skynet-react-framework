
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"药物申请", menuFor: "drugApplication",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '申请号', debugtype: 'string', dataIndex: 'applicationNumber', width: '15' },
  { title: '公司', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '申请类型', dataIndex: 'applicationType', render: (text, record) => (record.applicationType ? record.applicationType.displayName : '暂无') },
  { title: '药物', dataIndex: 'drug', render: (text, record) => (record.drug ? record.drug.displayName : '暂无') },
  { title: '药物类型', dataIndex: 'drugType', render: (text, record) => (record.drugType ? record.drugType.displayName : '暂无') },
  { title: '申请日', dataIndex: 'applicationDate', render: (text, record) => moment(record.applicationDate).format('YYYY-MM-DD') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '94' },

]

const fieldLabels = {
  id: 'ID',
  applicationNumber: '申请号',
  company: '公司',
  applicationType: '申请类型',
  drug: '药物',
  drugType: '药物类型',
  applicationDate: '申请日',
  createTime: '创建时间',
  platform: '平台',
  description: '描述',

}


const DrugApplicationBase={menuData,displayColumns,fieldLabels}
export default DrugApplicationBase



