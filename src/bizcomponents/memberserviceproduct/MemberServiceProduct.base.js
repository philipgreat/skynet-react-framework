
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"会员服务产品", menuFor: "memberServiceProduct",
  		subItems: [
  {name: 'memberServiceBundleSkuList', displayName:'会员服务包', icon:'glass'},
  {name: 'storeSlideList', displayName:'网点海报', icon:'sliders'},
  {name: 'customerList', displayName:'用户', icon:'glass'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberServiceProduct/${text}/dashboard`}>{text}</Link>) },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10' },
  { title: '产品描述', debugtype: 'string_longtext', dataIndex: 'productDescription', width: '10' },
  { title: '产品优先级', debugtype: 'int', dataIndex: 'productPriority', width: '6' },
  { title: '产品封面图片', dataIndex: 'productCoverImage', render: (text, record) => <ImagePreview imageTitle="产品封面图片" imageLocation={record.productCoverImage} /> },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '可借书最高总金额', dataIndex: 'bookBorrowingLimitPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '最大可借书册数', debugtype: 'int', dataIndex: 'bookBorrowingCount', width: '6' },
  { title: '购书折扣费率', debugtype: 'double', dataIndex: 'bookPurchasingDiscountRate', width: '8' },
  { title: '超期天数', dataIndex: 'overduePay', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '最长免费借阅天数', debugtype: 'int', dataIndex: 'freeBorrowingDays', width: '6' },

]

const fieldLabels = {
  id: 'ID',
  productName: '产品名称',
  productDescription: '产品描述',
  productPriority: '产品优先级',
  productCoverImage: '产品封面图片',
  platform: '平台',
  bookBorrowingLimitPrice: '可借书最高总金额',
  bookBorrowingCount: '最大可借书册数',
  bookPurchasingDiscountRate: '购书折扣费率',
  overduePay: '超期天数',
  freeBorrowingDays: '最长免费借阅天数',

}


const MemberServiceProductBase={menuData,displayColumns,fieldLabels,displayColumns}
export default MemberServiceProductBase



