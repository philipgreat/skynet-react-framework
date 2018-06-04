
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './FormField.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '7' },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '15' },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '8' },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '13' },
  { title: '形式', dataIndex: 'form', render: (text, record) => (record.form ? record.form.id : '暂无') },
  { title: '占位符', debugtype: 'string', dataIndex: 'placeholder', width: '16' },
  { title: '默认值', debugtype: 'string', dataIndex: 'defaultValue', width: '7' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16' },
  { title: '字段组', debugtype: 'string', dataIndex: 'fieldGroup', width: '8' },
  { title: '最小值', debugtype: 'string', dataIndex: 'minValue', width: '19' },
  { title: '最大的价值', debugtype: 'string', dataIndex: 'maxValue', width: '22' },
  { title: '要求', dataIndex: 'required', render: (text, record) => (record.required ? '是' : '否') },
  { title: '禁用', dataIndex: 'disabled', render: (text, record) => (record.disabled ? '是' : '否') },
  { title: '自定义渲染', dataIndex: 'customRendering', render: (text, record) => (record.customRendering ? '是' : '否') },
  { title: '候选人的价值观', debugtype: 'string', dataIndex: 'candidateValues', width: '7' },
  { title: '建议值', debugtype: 'string', dataIndex: 'suggestValues', width: '7' },
]

class FormFieldConfirmationTable extends PureComponent {
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
          scroll={{ x: 1920 }}
        />
      </div>
    )
  }
}

export default FormFieldConfirmationTable

