
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"定损记录", menuFor: "lossAssessmentRecord",
  		subItems: [
  
  		],
}

const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 

}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '书籍副本', dataIndex: 'bookCopy', render: (text, record) => renderReferenceCell(text, record)},
  { title: '定损日期', dataIndex: 'recordTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '操作网点', dataIndex: 'recordStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '定损备注', debugtype: 'string', dataIndex: 'lossComment', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '定损照片', dataIndex: 'lossImage', render: (text, record) => renderImageCell(text,record,'定损照片') },
  { title: '评估价', dataIndex: 'bookCopyEvaluationPrice', className:'money', render: (text, record) => renderMoneyCell(text, record) },
  { title: '定损折扣', dataIndex: 'lossDiscount', render: (text, record) => renderReferenceCell(text, record)},
  { title: '定损记录人', dataIndex: 'recordPerson', render: (text, record) => renderReferenceCell(text, record)},
  { title: '损害人', dataIndex: 'damagePerson', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书籍副本',
  recordTime: '定损日期',
  recordStore: '操作网点',
  lossComment: '定损备注',
  lossImage: '定损照片',
  bookCopyEvaluationPrice: '评估价',
  lossDiscount: '定损折扣',
  recordPerson: '定损记录人',
  damagePerson: '损害人',

}


const LossAssessmentRecordBase={menuData,displayColumns,fieldLabels,displayColumns}
export default LossAssessmentRecordBase



