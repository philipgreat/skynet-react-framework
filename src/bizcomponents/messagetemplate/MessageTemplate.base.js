
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"消息模板", menuFor: "messageTemplate",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '模板', debugtype: 'string_longtext', dataIndex: 'template', width: '10' },
  { title: '更新人', dataIndex: 'updatedBy', render: (text, record) => (record.updatedBy ? record.updatedBy.displayName : '暂无') },
  { title: '更新时间', dataIndex: 'updateTime', render: (text, record) => moment(record.updateTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  template: '模板',
  updatedBy: '更新人',
  updateTime: '更新时间',

}


const MessageTemplateBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MessageTemplateBase



