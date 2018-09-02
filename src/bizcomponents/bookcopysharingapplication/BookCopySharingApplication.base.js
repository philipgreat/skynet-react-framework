
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"图书共享申请", menuFor: "bookCopySharingApplication",
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
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '联系人手机', debugtype: 'string', dataIndex: 'contactMobile', width: '16',render: (text, record)=>renderTextCell(text,record) },
  { title: '申请状态', dataIndex: 'applicationStatus', render: (text, record) => renderReferenceCell(text, record)},
  { title: '共享方式', dataIndex: 'deliverMethod', render: (text, record) => renderReferenceCell(text, record)},
  { title: '处理日期', dataIndex: 'processedDate', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '联系地址', debugtype: 'string', dataIndex: 'contactAddress', width: '18',render: (text, record)=>renderTextCell(text,record) },
  { title: '共享数量', debugtype: 'string', dataIndex: 'bookCopyQuantity', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '提交日期', dataIndex: 'submittedDate', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '用户', dataIndex: 'customer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '员工', dataIndex: 'employee', render: (text, record) => renderReferenceCell(text, record)},
  { title: '目标网点', dataIndex: 'destinationStore', render: (text, record) => renderReferenceCell(text, record)},

]

const fieldLabels = {
  id: 'ID',
  contactName: '联系人姓名',
  contactMobile: '联系人手机',
  applicationStatus: '申请状态',
  deliverMethod: '共享方式',
  processedDate: '处理日期',
  contactAddress: '联系地址',
  bookCopyQuantity: '共享数量',
  submittedDate: '提交日期',
  customer: '用户',
  employee: '员工',
  destinationStore: '目标网点',

}


const BookCopySharingApplicationBase={menuData,displayColumns,fieldLabels,displayColumns}
export default BookCopySharingApplicationBase



