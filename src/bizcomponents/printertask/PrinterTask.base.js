
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"打印机任务", menuFor: "printerTask",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '33' },
  { title: '提交者', debugtype: 'string', dataIndex: 'submitter', width: '32' },
  { title: '打印机', dataIndex: 'printer', render: (text, record) => (record.printer ? record.printer.displayName : '暂无') },
  { title: '打印份数', debugtype: 'int', dataIndex: 'copyCount', width: '6' },
  { title: '内容1', debugtype: 'string', dataIndex: 'content1', width: '69' },
  { title: '内容2', debugtype: 'string', dataIndex: 'content2', width: '69' },
  { title: '内容3', debugtype: 'string', dataIndex: 'content3', width: '69' },
  { title: '内容4', debugtype: 'string', dataIndex: 'content4', width: '69' },
  { title: '内容5', debugtype: 'string', dataIndex: 'content5', width: '69' },
  { title: '内容6', debugtype: 'string', dataIndex: 'content6', width: '69' },
  { title: '打印任务状态', debugtype: 'string', dataIndex: 'printTaskStatus', width: '7' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  submitter: '提交者',
  printer: '打印机',
  copyCount: '打印份数',
  content1: '内容1',
  content2: '内容2',
  content3: '内容3',
  content4: '内容4',
  content5: '内容5',
  content6: '内容6',
  printTaskStatus: '打印任务状态',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',

}


const PrinterTaskBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PrinterTaskBase



