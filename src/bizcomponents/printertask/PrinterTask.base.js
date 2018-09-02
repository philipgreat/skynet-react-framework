
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"打印机任务", menuFor: "printerTask",
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
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '33',render: (text, record)=>renderTextCell(text,record) },
  { title: '提交者', debugtype: 'string', dataIndex: 'submitter', width: '32',render: (text, record)=>renderTextCell(text,record) },
  { title: '打印机', dataIndex: 'printer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '打印份数', debugtype: 'int', dataIndex: 'copyCount', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '内容1', debugtype: 'string', dataIndex: 'content1', width: '69',render: (text, record)=>renderTextCell(text,record) },
  { title: '内容2', debugtype: 'string', dataIndex: 'content2', width: '69',render: (text, record)=>renderTextCell(text,record) },
  { title: '内容3', debugtype: 'string', dataIndex: 'content3', width: '69',render: (text, record)=>renderTextCell(text,record) },
  { title: '内容4', debugtype: 'string', dataIndex: 'content4', width: '69',render: (text, record)=>renderTextCell(text,record) },
  { title: '内容5', debugtype: 'string', dataIndex: 'content5', width: '69',render: (text, record)=>renderTextCell(text,record) },
  { title: '内容6', debugtype: 'string', dataIndex: 'content6', width: '69',render: (text, record)=>renderTextCell(text,record) },
  { title: '打印任务状态', debugtype: 'string', dataIndex: 'printTaskStatus', width: '7',render: (text, record)=>renderTextCell(text,record) },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) =>renderDateTimeCell(text,record)  },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record)  },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  submitter: '提交者',
  printer: '打印机',
  copyCount: '打印份数',
  content1: '内容1',
  content2: '内容2',
  content3: '内容3',
  content4: '内容4',
  content5: '内容5',
  content6: '内容6',
  printTaskStatus: '打印任务状态',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',

}


const PrinterTaskBase={menuData,displayColumns,fieldLabels,displayColumns}
export default PrinterTaskBase



