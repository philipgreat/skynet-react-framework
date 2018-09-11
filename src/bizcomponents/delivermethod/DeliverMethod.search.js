
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import Result from '../../components/Result'


import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message,Alert } from 'antd';

import GlobalComponents from '../../custcomponents'


import PageHeaderLayout from '../../layouts/PageHeaderLayout'

import styles from './DeliverMethod.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')



class DeliverMethodSearch extends PureComponent {
  state = {
    addInputValue: '',
    modalVisible: false,
    // expandForm: false,
    selectedRows: [],
    formValues: {},
    showDeleteResult: false,
  }

  //  componentDidMount() {
  //    const { dispatch } = this.props
  //  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props
    const { formValues } = this.state

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj }
      newObj[key] = getValue(filtersArg[key])
      return newObj
    }, {})
	const { owner } = this.props
	const {listName} = owner;
	let listParameters = {};
    listParameters[listName]=1;
    listParameters[`${listName}CurrentPage`]=pagination.current;
    listParameters[`${listName}RowsPerPage`]=pagination.pageSize;
    listParameters[`${listName}.orderBy.0`]="id";
    listParameters[`${listName}.descOrAsc.0`]="desc";
   
    
    const params = {
      ...listParameters,
      ...formValues,
      ...filters,
    }
    if (sorter.field) {
      params.sorter = '_'
    }
    
    dispatch({
      type: `${owner.type}/load`,
      payload: { id: owner.id, parameters: params },
    })
  }

  handleMenuClick = (e) => {
    const { dispatch } = this.props
    const { selectedRows } = this.state
    if (!selectedRows) return
    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'rule/remove',
          payload: {
            no: selectedRows.map(row => row.no).join(','),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            })
          },
        })
        break
      default:
        break
    }
  }

  handleSelectRows = (rows) => {
    this.setState({
      selectedRows: rows,
    })
  }

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
      showDeleteResult: false,
    })
  }

  handleDelete = () => {
    const { selectedRows } = this.state
    const { dispatch, owner, role } = this.props
    console.log('things to delete', selectedRows)
    this.setState({
      modalVisible: true,
      showDeleteResult: true,
    })
    const {listName} = owner;
    const capFirstChar = (value)=>{
    	//const upper = value.replace(/^\w/, c => c.toUpperCase());
  		const upper = value.charAt(0).toUpperCase() + value.substr(1);
  		return upper
  	}
    const deliverMethodIds = selectedRows.map((item) => { return item.id })
    console.log('deliverMethodIds', deliverMethodIds)
    const parameters = { deliverMethodIds }
    const cappedRoleName = capFirstChar(listName)
    dispatch({
      type: `${owner.type}/remove${cappedRoleName}`,
      payload: { id: owner.id, role: role, parameters },
    })
  }
  
  showModal = () => {
    // const { selectedRows } = this.state
    // const { dispatch, owner } = this.props
    this.setState({
      modalVisible: true,
      showDeleteResult: false,
    })
  }

  confirmAfterDelete = () => {
    // const { selectedRows } = this.state
    // const { dispatch, owner } = this.props
    this.setState({
      modalVisible: false,
      showDeleteResult: true,
    })
  }

  handleCreate = () => {
    const { dispatch, owner, role } = this.props
    dispatch({
      type: `${owner.type}/gotoCreateForm`,
      payload: { id: owner.id, role: role },
    })
  }

  handleUpdate = () => {
    const { dispatch, owner } = this.props
    // const { showDeleteResult, selectedRows, modalVisible, addInputValue } = this.state
    const { selectedRows } = this.state
    const currentUpdateIndex = 0
    dispatch({
      type: `${owner.type}/gotoUpdateForm`,
      payload: { id: owner.id, type: 'deliverMethod', selectedRows, currentUpdateIndex },
    })
  }
 
    
  handleCloseAlert = () => {
      const { dispatch, owner,location } = this.props;
      console.log("trying to call handleCloseAlert",owner)
      const pathname = location.pathname
      dispatch({ type: `${owner.type}/view`, payload: { id: owner.id,pathname,displayName:'共享方式列表' } })

  };  
 

  render() {
    const { data, loading, count, currentPage, owner,partialList } = this.props;
    const {displayName} = owner.ref
    const { showDeleteResult, selectedRows, modalVisible } = this.state;
    const {DeliverMethodTable} = GlobalComponents;
    const {DeliverMethodModalTable} = GlobalComponents;
    const {DeliverMethodSearchForm} = GlobalComponents;
    
 
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>


<Menu.Item key="bookSharingPlatform">关联图书共享平台</Menu.Item>
      

      </Menu>
    )

    // TODO some issue here
    const modalContent = (data, owner) => {
      if (showDeleteResult) {
        return (
        <Modal
          title="成功删除"
          visible={modalVisible}
          onOk={() => this.confirmAfterDelete()}
          onCancel={() => this.confirmAfterDelete()}
          width={920}
          style={{ top: 40 }}
        >
          <Result type="success" title="删除成功，干得漂亮" description="" style={{ marginTop: 48, marginBottom: 16 }} />
        </Modal>)
      }

      return (
        <Modal
          title="注意！你正在删除数据，执行之后不可恢复"
          visible={modalVisible}
          onOk={this.handleDelete}
          onCancel={() => this.handleModalVisible()}
          width={920}
          style={{ top: 40 }}
        >
          <DeliverMethodModalTable data={selectedRows} owner={owner} />
        </Modal>)
    }
    
    return (
      <PageHeaderLayout title={`${displayName}:${this.props.name}列表`}>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <DeliverMethodSearchForm {...this.props} />
            </div>
            <div className={styles.tableListOperator}>
            
              
               
               
              {partialList&&(
              <div className={styles.searchAlert}>
                	<Alert message="下面显示最近更新结果，关闭显示全部" type="success" closable  afterClose={this.handleCloseAlert}/>
              </div>  	
              )}
              
            </div>
            <DeliverMethodTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              count={count}
              current={currentPage}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
              owner={owner}
              {...this.props}
            />
          </div>
        </Card>
        {modalContent(data, owner)}
      </PageHeaderLayout>
    )
  }
}

export default Form.create()(DeliverMethodSearch)


