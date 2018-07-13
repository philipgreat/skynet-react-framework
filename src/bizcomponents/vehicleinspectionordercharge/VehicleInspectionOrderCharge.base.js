
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆检验订单费用", menuFor: "vehicleInspectionOrderCharge",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '11' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '14' },
  { title: '量', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  code: '代码',
  amount: '量',
  mainOrder: '年检订单',

}


const VehicleInspectionOrderChargeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleInspectionOrderChargeBase



