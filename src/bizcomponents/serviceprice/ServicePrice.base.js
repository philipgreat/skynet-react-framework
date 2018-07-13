
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"合同价格", menuFor: "servicePrice",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '合同', dataIndex: 'contract', render: (text, record) => (record.contract ? record.contract.displayName : '暂无') },
  { title: '服务范围', dataIndex: 'availableService', render: (text, record) => (record.availableService ? record.availableService.displayName : '暂无') },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.displayName : '暂无') },
  { title: '服务代码', debugtype: 'string', dataIndex: 'serviceKey', width: '35' },
  { title: '服务描述', debugtype: 'string', dataIndex: 'serviceDescription', width: '35' },
  { title: '合同价格类型', debugtype: 'string', dataIndex: 'servicePriceType', width: '11' },
  { title: '服务价格', debugtype: 'double', dataIndex: 'basePriceValue', width: '9' },
  { title: '后续服务价格', debugtype: 'double', dataIndex: 'otherPriceValue', width: '9' },
  { title: '是否提供服务', dataIndex: 'serviceEnabled', render: (text, record) => (record.serviceEnabled ? '是' : '否') },

]

const fieldLabels = {
  id: 'ID',
  contract: '合同',
  availableService: '服务范围',
  product: '产品名称',
  serviceKey: '服务代码',
  serviceDescription: '服务描述',
  servicePriceType: '合同价格类型',
  basePriceValue: '服务价格',
  otherPriceValue: '后续服务价格',
  serviceEnabled: '是否提供服务',

}


const ServicePriceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServicePriceBase



