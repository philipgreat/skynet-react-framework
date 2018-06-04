
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"对象访问", menuFor: "objectAccess",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '访问对象类型', debugtype: 'string', dataIndex: 'objectType', width: '32' },
  { title: '列表1', debugtype: 'string', dataIndex: 'list1', width: '24' },
  { title: '列表2', debugtype: 'string', dataIndex: 'list2', width: '24' },
  { title: '列表3', debugtype: 'string', dataIndex: 'list3', width: '24' },
  { title: '列表4', debugtype: 'string', dataIndex: 'list4', width: '24' },
  { title: '列表5', debugtype: 'string', dataIndex: 'list5', width: '24' },
  { title: '列表6', debugtype: 'string', dataIndex: 'list6', width: '24' },
  { title: '列表7', debugtype: 'string', dataIndex: 'list7', width: '24' },
  { title: '列表8', debugtype: 'string', dataIndex: 'list8', width: '24' },
  { title: '列表9', debugtype: 'string', dataIndex: 'list9', width: '24' },
  { title: '申请', dataIndex: 'app', render: (text, record) => (record.app ? record.app.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  objectType: '访问对象类型',
  list1: '列表1',
  list2: '列表2',
  list3: '列表3',
  list4: '列表4',
  list5: '列表5',
  list6: '列表6',
  list7: '列表7',
  list8: '列表8',
  list9: '列表9',
  app: '申请',

}


const ObjectAccessBase={menuData,displayColumns,fieldLabels}
export default ObjectAccessBase



