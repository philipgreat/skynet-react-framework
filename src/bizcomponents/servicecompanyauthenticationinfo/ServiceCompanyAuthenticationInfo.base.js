
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"商户认证信息", menuFor: "serviceCompanyAuthenticationInfo",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '营业执照照片', dataIndex: 'businessLicenseImg', render: (text, record) => <ImagePreview imageTitle="营业执照照片" imageLocation={record.businessLicenseImg} /> },
  { title: '营业执照代码', debugtype: 'string', dataIndex: 'businessLicenseCode', width: '20' },
  { title: '商户', dataIndex: 'serviceCompany', render: (text, record) => (record.serviceCompany ? record.serviceCompany.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  businessLicenseImg: '营业执照照片',
  businessLicenseCode: '营业执照代码',
  serviceCompany: '商户',

}


const ServiceCompanyAuthenticationInfoBase={menuData,displayColumns,fieldLabels,displayColumns}
export default ServiceCompanyAuthenticationInfoBase



