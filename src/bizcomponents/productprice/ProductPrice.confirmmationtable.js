
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ProductPrice.table.less'
import ImagePreview from '../../components/ImagePreview'
import ProductPriceBase from './ProductPrice.base'


class ProductPriceConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props
	const {displayColumns} = ProductPriceBase

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
          scroll={{ x: 1575 }}
        />
      </div>
    )
  }
}

export default ProductPriceConfirmationTable

