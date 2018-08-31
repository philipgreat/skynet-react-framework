
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"用户块", menuFor: "secUserBlocking",
  		subItems: [
  {name: 'secUserList', displayName:'SEC的用户', icon:'user'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/secUserBlocking/${text}/dashboard`}>{text}</Link>) },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '17' },
  { title: '块时间', dataIndex: 'blockTime', render: (text, record) => moment(record.blockTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '28' },

]

const fieldLabels = {
  id: 'ID',
  who: '谁',
  blockTime: '块时间',
  comments: '评论',

}


const SecUserBlockingBase={menuData,displayColumns,fieldLabels,displayColumns}
export default SecUserBlockingBase



