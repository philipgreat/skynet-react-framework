
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"订单评论结果", menuFor: "orderReviewResult",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '评论内容', debugtype: 'string', dataIndex: 'reviewName', width: '8' },
  { title: '评论结果', debugtype: 'string', dataIndex: 'reviewResult', width: '9' },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  reviewName: '评论内容',
  reviewResult: '评论结果',
  mainOrder: '年检订单',

}


const OrderReviewResultBase={menuData,displayColumns,fieldLabels,displayColumns}
export default OrderReviewResultBase



