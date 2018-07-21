
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆代办保险", menuFor: "availableInsurance",
  		subItems: [
  {name: 'vehicleInspectionInsuranceOrderList', displayName:'车辆上线检测保险订单', icon:'glass'},
  {name: 'serviceInsuranceForInspectionList', displayName:'保险服务', icon:'code-fork'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/availableInsurance/${text}/dashboard`}>{text}</Link>) },
  { title: '保险名称', debugtype: 'string', dataIndex: 'insuranceName', width: '10' },
  { title: '承保方', debugtype: 'string', dataIndex: 'insuranceVendor', width: '11' },
  { title: '保费', dataIndex: 'insurancePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '20' },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  insuranceName: '保险名称',
  insuranceVendor: '承保方',
  insurancePrice: '保费',
  summary: '摘要',
  product: '产品名称',

}


const AvailableInsuranceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableInsuranceBase



