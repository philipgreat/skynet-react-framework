
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"车辆使用性质", menuFor: "availableVehicleUseCharacter",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '别名', debugtype: 'string', dataIndex: 'aliasName', width: '38' },
  { title: '可6年免检', dataIndex: 'canDoExempt', render: (text, record) => (record.canDoExempt ? '是' : '否') },
  { title: '商用车辆', dataIndex: 'commercialVehicle', render: (text, record) => (record.commercialVehicle ? '是' : '否') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  aliasName: '别名',
  canDoExempt: '可6年免检',
  commercialVehicle: '商用车辆',
  platform: '平台',

}


const AvailableVehicleUseCharacterBase={menuData,displayColumns,fieldLabels,displayColumns}
export default AvailableVehicleUseCharacterBase



