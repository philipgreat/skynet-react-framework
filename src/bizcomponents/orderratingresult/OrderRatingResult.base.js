
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"订单评分结果", menuFor: "orderRatingResult",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '评分项', debugtype: 'string', dataIndex: 'ratingName', width: '11' },
  { title: '评分结果', debugtype: 'double', dataIndex: 'ratingResult', width: '7' },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  ratingName: '评分项',
  ratingResult: '评分结果',
  mainOrder: '年检订单',

}


const OrderRatingResultBase={menuData,displayColumns,fieldLabels,displayColumns}
export default OrderRatingResultBase



