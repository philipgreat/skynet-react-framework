
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"商户员工合同结束状态变更", menuFor: "companyEmployeeTermination",
  		subItems: [
  {name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/companyEmployeeTermination/${text}/dashboard`}>{text}</Link>) },
  { title: '审批人', debugtype: 'string', dataIndex: 'who', width: '17' },
  { title: '执行时间', dataIndex: 'eventTime', render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '批注', debugtype: 'string', dataIndex: 'comment', width: '8' },

]

const fieldLabels = {
  id: 'ID',
  who: '审批人',
  eventTime: '执行时间',
  comment: '批注',

}


const CompanyEmployeeTerminationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default CompanyEmployeeTerminationBase



