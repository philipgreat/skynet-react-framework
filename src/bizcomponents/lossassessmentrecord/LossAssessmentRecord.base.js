
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
  { title: '损失图像', dataIndex: 'lossImage', render: (text, record) => <ImagePreview imageTitle="损失图像" imageLocation={record.lossImage} /> },
  { title: '书副本评估价格', dataIndex: 'bookCopyEvaluationPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '损失的折扣', dataIndex: 'lossDiscount', render: (text, record) => (record.lossDiscount ? record.lossDiscount.displayName : '暂无') },
  { title: '定损记录人', dataIndex: 'recordPerson', render: (text, record) => (record.recordPerson ? record.recordPerson.displayName : '暂无') },
  { title: '损害人', dataIndex: 'damagePerson', render: (text, record) => (record.damagePerson ? record.damagePerson.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书籍副本',
  recordTime: '定损日期',
  recordStore: '操作网点',
  lossComment: '定损备注',
  lossImage: '损失图像',
  bookCopyEvaluationPrice: '书副本评估价格',
  lossDiscount: '损失的折扣',
  recordPerson: '定损记录人',
  damagePerson: '损害人',

}


const LossAssessmentRecordBase={menuData,displayColumns,fieldLabels,displayColumns}
export default LossAssessmentRecordBase



