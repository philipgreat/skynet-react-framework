
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './LoginHistory.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '登录时间', dataIndex: 'loginTime', render: (text, record) => moment(record.loginTime).format('YYYY-MM-DD') },
  { title: '来自IP', debugtype: 'string', dataIndex: 'fromIp', width: '15' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '8' },
  { title: 'SEC的用户', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.id : '暂无') },
]

class LoginHistoryConfirmationTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default LoginHistoryConfirmationTable

