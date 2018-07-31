
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"行动令牌", menuFor: "actionToken",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '支架类型', debugtype: 'string', dataIndex: 'holderType', width: '33' },
  { title: '持有人身份证', debugtype: 'string', dataIndex: 'holderId', width: '11' },
  { title: '标记代码', debugtype: 'string', dataIndex: 'tokenCode', width: '41' },
  { title: '令牌数量', debugtype: 'int', dataIndex: 'tokenQuantity', width: '10' },
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '结束日期', dataIndex: 'endDate', render: (text, record) => moment(record.endDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '用户域', dataIndex: 'userDomain', render: (text, record) => (record.userDomain ? record.userDomain.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  holderType: '支架类型',
  holderId: '持有人身份证',
  tokenCode: '标记代码',
  tokenQuantity: '令牌数量',
  startDate: '开始日期',
  endDate: '结束日期',
  userDomain: '用户域',

}


const ActionTokenBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ActionTokenBase











