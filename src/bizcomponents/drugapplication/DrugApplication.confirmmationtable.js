
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './DrugApplication.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '申请号', debugtype: 'string', dataIndex: 'applicationNumber', width: '15' },
  { title: '公司', dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '申请类型', dataIndex: 'applicationType', render: (text, record) => (record.applicationType ? record.applicationType.id : '暂无') },
  { title: '药物', dataIndex: 'drug', render: (text, record) => (record.drug ? record.drug.id : '暂无') },
  { title: '药物类型', dataIndex: 'drugType', render: (text, record) => (record.drugType ? record.drugType.id : '暂无') },
  { title: '申请日', dataIndex: 'applicationDate', render: (text, record) => moment(record.applicationDate).format('YYYY-MM-DD') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '94' },
]

class DrugApplicationConfirmationTable extends PureComponent {
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
          scroll={{ x: 2400 }}
        />
      </div>
    )
  }
}

export default DrugApplicationConfirmationTable

