
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"城市", menuFor: "city",
  		subItems: [
  {name: 'productPriceList', displayName:'产品价格', icon:'glass'},
  {name: 'vehicleServiceCompanyList', displayName:'商户', icon:'glass'},
  {name: 'inspectionStationList', displayName:'检测站', icon:'at'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/city/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '省', dataIndex: 'province', render: (text, record) => (record.province ? record.province.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  province: '省',

}


const CityBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CityBase



