
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"订单项", menuFor: "lineItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '20' },
  { title: '封面图片', dataIndex: 'coverImage', render: (text, record) => <ImagePreview imageTitle="封面图片" imageLocation={record.coverImage} /> },
  { title: '商品类型', debugtype: 'string', dataIndex: 'skuType', width: '27' },
  { title: '商品ID', debugtype: 'string', dataIndex: 'skuId', width: '14' },
  { title: '商品链接', debugtype: 'string_url', dataIndex: 'skuLink', width: '40' },
  { title: '原价', dataIndex: 'rawPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '折扣', dataIndex: 'itemDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  summary: '摘要',
  coverImage: '封面图片',
  skuType: '商品类型',
  skuId: '商品ID',
  skuLink: '商品链接',
  rawPrice: '原价',
  itemDiscount: '折扣',
  mainOrder: '主订单',

}


const LineItemBase={menuData,displayColumns,fieldLabels,displayColumns}
export default LineItemBase



