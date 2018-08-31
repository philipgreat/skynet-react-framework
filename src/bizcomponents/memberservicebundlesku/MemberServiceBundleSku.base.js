
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"会员服务包", menuFor: "memberServiceBundleSku",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员服务名称', debugtype: 'string', dataIndex: 'memberServiceName', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '23' },
  { title: '定价', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '售价', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务周期(月)', debugtype: 'int', dataIndex: 'servicePeriodMonths', width: '6' },
  { title: '会员产品', dataIndex: 'memberProduct', render: (text, record) => (record.memberProduct ? record.memberProduct.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  memberServiceName: '会员服务名称',
  description: '描述',
  listPrice: '定价',
  salePrice: '售价',
  servicePeriodMonths: '服务周期(月)',
  memberProduct: '会员产品',

}


const MemberServiceBundleSkuBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberServiceBundleSkuBase



