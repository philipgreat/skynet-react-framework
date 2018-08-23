
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './VehicleRepairingPayment.table.less'
import ImagePreview from '../../components/ImagePreview'
import VehicleRepairingPaymentBase from './VehicleRepairingPayment.base'


class VehicleRepairingPaymentModalTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props
	const {displayColumns} = VehicleRepairingPaymentBase

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
          scroll={{ x: 1605 }}
        />
      </div>
    )
  }
}

export default VehicleRepairingPaymentModalTable

