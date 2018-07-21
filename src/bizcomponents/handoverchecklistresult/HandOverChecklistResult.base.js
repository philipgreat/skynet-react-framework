
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
const menuData = {menuName:"交接检查结果", menuFor: "handOverChecklistResult",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '检查项名称', debugtype: 'string', dataIndex: 'handOverCheckItemName', width: '11' },
  { title: '检查项目描述', debugtype: 'string_longtext', dataIndex: 'checkItemDescription', width: '10' },
  { title: '检车项结果', debugtype: 'string', dataIndex: 'handOverCheckResult', width: '6' },
  { title: '检查项意见', debugtype: 'string_longtext', dataIndex: 'handOverCheckComment', width: '10' },
  { title: '凭证图片1', dataIndex: 'handOverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageTitle="凭证图片1" imageLocation={record.handOverCheckEvidenceImage1} /> },
  { title: '凭证图片2', dataIndex: 'handOverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageTitle="凭证图片2" imageLocation={record.handOverCheckEvidenceImage2} /> },
  { title: '凭证图片3', dataIndex: 'handOverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageTitle="凭证图片3" imageLocation={record.handOverCheckEvidenceImage3} /> },
  { title: '凭证图片4', dataIndex: 'handOverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageTitle="凭证图片4" imageLocation={record.handOverCheckEvidenceImage4} /> },
  { title: '凭证图片5', dataIndex: 'handOverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageTitle="凭证图片5" imageLocation={record.handOverCheckEvidenceImage5} /> },
  { title: '交接检查项', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? record.availableHandOverItem.displayName : '暂无') },
  { title: '收车服务', dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.displayName : '暂无') },
  { title: '移车服务', dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.displayName : '暂无') },
  { title: '还车服务', dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.displayName : '暂无') },
  { title: '收件服务', dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? record.serviceTypeFileC2m.displayName : '暂无') },
  { title: '移件服务', dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? record.serviceTypeFileM2m.displayName : '暂无') },
  { title: '还件服务', dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? record.serviceTypeFileM2c.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  handOverCheckItemName: '检查项名称',
  checkItemDescription: '检查项目描述',
  handOverCheckResult: '检车项结果',
  handOverCheckComment: '检查项意见',
  handOverCheckEvidenceImage1: '凭证图片1',
  handOverCheckEvidenceImage2: '凭证图片2',
  handOverCheckEvidenceImage3: '凭证图片3',
  handOverCheckEvidenceImage4: '凭证图片4',
  handOverCheckEvidenceImage5: '凭证图片5',
  availableHandOverItem: '交接检查项',
  serviceTypeVehicleC2m: '收车服务',
  serviceTypeVehicleM2m: '移车服务',
  serviceTypeVehicleM2c: '还车服务',
  serviceTypeFileC2m: '收件服务',
  serviceTypeFileM2m: '移件服务',
  serviceTypeFileM2c: '还件服务',

}


const HandOverChecklistResultBase={menuData,displayColumns,fieldLabels,displayColumns}
export default HandOverChecklistResultBase



