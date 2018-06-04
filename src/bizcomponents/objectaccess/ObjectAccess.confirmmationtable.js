
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ObjectAccess.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
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
  { title: '申请', dataIndex: 'app', render: (text, record) => (record.app ? record.app.id : '暂无') },
]

class ObjectAccessConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 3405 }}
        />
      </div>
    )
  }
}

export default ObjectAccessConfirmationTable

