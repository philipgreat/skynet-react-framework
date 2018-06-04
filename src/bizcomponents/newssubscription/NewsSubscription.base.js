
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"新闻订阅", menuFor: "newsSubscription",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6' },
  { title: '电子邮件地址', debugtype: 'string_email', dataIndex: 'emailAddress', width: '22' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '备注', debugtype: 'string', dataIndex: 'remark', width: '13' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  nickName: '昵称',
  emailAddress: '电子邮件地址',
  mobile: '手机号码',
  remark: '备注',
  createTime: '创建时间',
  platform: '平台',

}


const NewsSubscriptionBase={menuData,displayColumns,fieldLabels}
export default NewsSubscriptionBase



