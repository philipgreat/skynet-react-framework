
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './HandOverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'
import HandOverChecklistResultBase from './HandOverChecklistResult.base'


class HandOverChecklistResultConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props
	const {displayColumns} = HandOverChecklistResultBase

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
          scroll={{ x: 1905 }}
        />
      </div>
    )
  }
}

export default HandOverChecklistResultConfirmationTable

