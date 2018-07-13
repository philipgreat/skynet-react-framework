
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆上线检测保险订单", menuFor: "vehicleInspectionInsuranceOrder",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '保险产品', dataIndex: 'insurance', render: (text, record) => (record.insurance ? record.insurance.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  insurance: '保险产品',
  mainOrder: '年检订单',

}


const VehicleInspectionInsuranceOrderBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleInspectionInsuranceOrderBase



