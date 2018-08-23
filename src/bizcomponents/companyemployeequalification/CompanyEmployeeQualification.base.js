
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"商户员工资格审查", menuFor: "companyEmployeeQualification",
  		subItems: [
  {name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/companyEmployeeQualification/${text}/dashboard`}>{text}</Link>) },
  { title: '执行时间', dataIndex: 'eventTime', render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '审批人', debugtype: 'string', dataIndex: 'who', width: '17' },
  { title: '批注', debugtype: 'string', dataIndex: 'comment', width: '13' },

]

const fieldLabels = {
  id: 'ID',
  eventTime: '执行时间',
  who: '审批人',
  comment: '批注',

}


const CompanyEmployeeQualificationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CompanyEmployeeQualificationBase



