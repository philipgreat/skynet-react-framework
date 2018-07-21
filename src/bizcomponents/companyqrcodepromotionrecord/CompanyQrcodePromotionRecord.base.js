
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"公司二维码推广记录", menuFor: "companyQrcodePromotionRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  customer: '客户',
  company: '商户',
  createTime: '创建时间',

}


const CompanyQrcodePromotionRecordBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CompanyQrcodePromotionRecordBase



