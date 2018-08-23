
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"成员服务产品中的令牌", menuFor: "tokenInMemberServiceProduct",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '22' },
  { title: '令牌激活', dataIndex: 'tokenEnabled', render: (text, record) => (record.tokenEnabled ? '是' : '否') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的权益', dataIndex: 'availableToken', render: (text, record) => (record.availableToken ? record.availableToken.displayName : '暂无') },
  { title: '会员服务产品', dataIndex: 'memberServiceProduct', render: (text, record) => (record.memberServiceProduct ? record.memberServiceProduct.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  description: '描述',
  tokenEnabled: '令牌激活',
  createTime: '创建时间',
  availableToken: '可用的权益',
  memberServiceProduct: '会员服务产品',

}


const TokenInMemberServiceProductBase={menuData,displayColumns,fieldLabels,displayColumns}
export default TokenInMemberServiceProductBase



