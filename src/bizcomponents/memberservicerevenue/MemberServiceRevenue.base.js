
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"会员服务收益", menuFor: "memberServiceRevenue",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员', dataIndex: 'member', render: (text, record) => (record.member ? record.member.displayName : '暂无') },
  { title: '会员昵称', debugtype: 'string', dataIndex: 'memberName', width: '16' },
  { title: '服务开始日期', dataIndex: 'serviceStartDate', render: (text, record) => moment(record.serviceStartDate).format('YYYY-MM-DD') },
  { title: '服务结束日期', dataIndex: 'serviceEndDate', render: (text, record) => moment(record.serviceEndDate).format('YYYY-MM-DD') },
  { title: '当月会员服务费', dataIndex: 'monthlyServiceFee', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '网点名字', debugtype: 'string', dataIndex: 'storeName', width: '13' },
  { title: '网点服务次数', debugtype: 'int', dataIndex: 'storeServiceCount', width: '7' },
  { title: '本月会员服务总次数', debugtype: 'int', dataIndex: 'totalServiceCount', width: '7' },
  { title: '网点会员服务收益百分比', debugtype: 'string', dataIndex: 'storeServiceRevenueRate', width: '7' },
  { title: '网点会员收益', dataIndex: 'storeServiceRevenue', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  member: '会员',
  memberName: '会员昵称',
  serviceStartDate: '服务开始日期',
  serviceEndDate: '服务结束日期',
  monthlyServiceFee: '当月会员服务费',
  store: '服务网点',
  storeName: '网点名字',
  storeServiceCount: '网点服务次数',
  totalServiceCount: '本月会员服务总次数',
  storeServiceRevenueRate: '网点会员服务收益百分比',
  storeServiceRevenue: '网点会员收益',
  mainOrder: '主订单',

}


const MemberServiceRevenueBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberServiceRevenueBase



