
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"公司折扣", menuFor: "companyDiscount",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '代理费全免', dataIndex: 'allFreeDiscount', render: (text, record) => (record.allFreeDiscount ? '是' : '否') },
  { title: '优惠金额', debugtype: 'string', dataIndex: 'directDiscountValue', width: '9' },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  allFreeDiscount: '代理费全免',
  directDiscountValue: '优惠金额',
  company: '商户',
  createTime: '创建时间',

}


const CompanyDiscountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CompanyDiscountBase



