
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"交接检查项", menuFor: "handOverChecklistItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '检查问题', dataIndex: 'question', render: (text, record) => (record.question ? record.question.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  question: '检查问题',
  mainOrder: '年检订单',

}


const HandOverChecklistItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default HandOverChecklistItemBase



