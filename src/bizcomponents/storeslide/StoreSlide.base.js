
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"网点海报", menuFor: "storeSlide",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '提示', debugtype: 'string', dataIndex: 'tips', width: '15' },
  { title: '横幅图像', dataIndex: 'bannerImage', render: (text, record) => <ImagePreview imageTitle="横幅图像" imageLocation={record.bannerImage} /> },
  { title: '小程序链接', debugtype: 'string', dataIndex: 'wxaLinkUrl', width: '44' },
  { title: '管理界面链接', debugtype: 'string', dataIndex: 'antdLinkUrl', width: '30' },
  { title: '海报类型', dataIndex: 'slideType', render: (text, record) => (record.slideType ? record.slideType.displayName : '暂无') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '活动', dataIndex: 'campaign', render: (text, record) => (record.campaign ? record.campaign.displayName : '暂无') },
  { title: '会员服务产品', dataIndex: 'memberServiceProduct', render: (text, record) => (record.memberServiceProduct ? record.memberServiceProduct.displayName : '暂无') },
  { title: '服务网点', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  tips: '提示',
  bannerImage: '横幅图像',
  wxaLinkUrl: '小程序链接',
  antdLinkUrl: '管理界面链接',
  slideType: '海报类型',
  book: '书',
  campaign: '活动',
  memberServiceProduct: '会员服务产品',
  store: '服务网点',

}


const StoreSlideBase={menuData,displayColumns,fieldLabels,displayColumns}
export default StoreSlideBase



