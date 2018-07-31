
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"会员权利显示", menuFor: "memberRightsDisplay",
  		subItems: [
  {name: 'memberRightsDisplayItemList', displayName:'会员权利显示项', icon:'sitemap'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberRightsDisplay/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '6' },
  { title: '协议名称', debugtype: 'string', dataIndex: 'agreementName', width: '6' },
  { title: '协议类型', debugtype: 'string', dataIndex: 'agreementType', width: '6' },
  { title: '协议Id', debugtype: 'string', dataIndex: 'agreementId', width: '6' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  summary: '摘要',
  agreementName: '协议名称',
  agreementType: '协议类型',
  agreementId: '协议Id',

}


const MemberRightsDisplayBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberRightsDisplayBase



