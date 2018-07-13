
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"上线检测支持的车牌号码类别", menuFor: "vehicleInspectionPlateNumberPattern",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车牌号类别', debugtype: 'string', dataIndex: 'plateNumberPattern', width: '6' },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  plateNumberPattern: '车牌号类别',
  company: '商户',

}


const VehicleInspectionPlateNumberPatternBase={menuData,displayColumns,fieldLabels,displayColumns}
export default VehicleInspectionPlateNumberPatternBase



