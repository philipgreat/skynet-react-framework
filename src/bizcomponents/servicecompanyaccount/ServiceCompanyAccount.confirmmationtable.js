
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceCompanyAccount.table.less'
import ImagePreview from '../../components/ImagePreview'
import ServiceCompanyAccountBase from './ServiceCompanyAccount.base'


class ServiceCompanyAccountConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props
	const {displayColumns} = ServiceCompanyAccountBase

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
          columns={displayColumns}
          size="small"
          scroll={{ x: 2490 }}
        />
      </div>
    )
  }
}

export default ServiceCompanyAccountConfirmationTable

