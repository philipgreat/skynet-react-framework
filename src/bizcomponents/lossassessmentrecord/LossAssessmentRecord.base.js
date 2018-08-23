
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"定损记录", menuFor: "lossAssessmentRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '定损日期', dataIndex: 'recordTime', render: (text, record) => moment(record.recordTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '操作网点', dataIndex: 'recordStore', render: (text, record) => (record.recordStore ? record.recordStore.displayName : '暂无') },
  { title: '定损备注', debugtype: 'string', dataIndex: 'lossComment', width: '13' },
  { title: '定损记录人', dataIndex: 'recordPerson', render: (text, record) => (record.recordPerson ? record.recordPerson.displayName : '暂无') },
  { title: '损害人', dataIndex: 'damagePerson', render: (text, record) => (record.damagePerson ? record.damagePerson.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书籍副本',
  recordTime: '定损日期',
  recordStore: '操作网点',
  lossComment: '定损备注',
  recordPerson: '定损记录人',
  damagePerson: '损害人',

}


const LossAssessmentRecordBase={menuData,displayColumns,fieldLabels,displayColumns}
export default LossAssessmentRecordBase



