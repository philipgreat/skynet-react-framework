
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"员工", menuFor: "employee",
  		subItems: [
  {name: 'messageTemplateList', displayName:'消息模板', icon:'at'},
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'glass'},
  {name: 'bookCopyTransferList', displayName:'图书副本迁移记录', icon:'book'},
  {name: 'bookTakeStockPlanList', displayName:'图书盘点计划', icon:'book'},
  {name: 'bookTakeStockResultList', displayName:'图书盘点结果', icon:'book'},
  {name: 'bookCopyOperationRecordList', displayName:'书籍副本操作记录', icon:'book'},
  {name: 'bookCopySharingApplicationList', displayName:'图书共享申请', icon:'book'},
  {name: 'campaignList', displayName:'活动', icon:'glass'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的网点', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/employee/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '员工照片', dataIndex: 'employeeImage', render: (text, record) => <ImagePreview imageTitle="员工照片" imageLocation={record.employeeImage} /> },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '角色', dataIndex: 'role', render: (text, record) => (record.role ? record.role.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  employeeImage: '员工照片',
  mobileNumber: '手机号码',
  role: '角色',

}


const EmployeeBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EmployeeBase



