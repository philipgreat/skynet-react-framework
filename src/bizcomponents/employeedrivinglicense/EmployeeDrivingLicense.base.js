
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"员工驾驶证", menuFor: "employeeDrivingLicense",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '57' },
  { title: '准驾车型', debugtype: 'string', dataIndex: 'licenseType', width: '6' },
  { title: '驾驶证号码', debugtype: 'string', dataIndex: 'licenseNumber', width: '22' },
  { title: '有效期至', dataIndex: 'expirationDate', render: (text, record) => moment(record.expirationDate).format('YYYY-MM-DD') },
  { title: '图1', dataIndex: 'image1', render: (text, record) => <ImagePreview imageTitle="图1" imageLocation={record.image1} /> },
  { title: '图2', dataIndex: 'image2', render: (text, record) => <ImagePreview imageTitle="图2" imageLocation={record.image2} /> },
  { title: '图3', dataIndex: 'image3', render: (text, record) => <ImagePreview imageTitle="图3" imageLocation={record.image3} /> },
  { title: '图4', dataIndex: 'image4', render: (text, record) => <ImagePreview imageTitle="图4" imageLocation={record.image4} /> },
  { title: '图5', dataIndex: 'image5', render: (text, record) => <ImagePreview imageTitle="图5" imageLocation={record.image5} /> },

]

const fieldLabels = {
  id: 'ID',
  employee: '员工',
  holderName: '姓名',
  licenseType: '准驾车型',
  licenseNumber: '驾驶证号码',
  expirationDate: '有效期至',
  image1: '图1',
  image2: '图2',
  image3: '图3',
  image4: '图4',
  image5: '图5',

}


const EmployeeDrivingLicenseBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EmployeeDrivingLicenseBase



