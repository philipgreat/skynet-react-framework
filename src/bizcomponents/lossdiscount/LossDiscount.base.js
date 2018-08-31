
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"损失的折扣", menuFor: "lossDiscount",
  		subItems: [
  {name: 'lossAssessmentRecordList', displayName:'定损记录', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/lossDiscount/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '9' },
  { title: '折扣比例', debugtype: 'double', dataIndex: 'discountRatio', width: '7' },
  { title: '图书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  discountRatio: '折扣比例',
  bookSharingPlatform: '图书共享平台',

}


const LossDiscountBase={menuData,displayColumns,fieldLabels,displayColumns}
export default LossDiscountBase



