
import React, { PureComponent } from 'react'

import styles from './EmployeeWorkingStore.table.less'
import { Link } from 'dva/router'
import EmployeeWorkingStoreBase from '../../bizcomponents/employeeworkingstore/EmployeeWorkingStore.base'
import EmployeeWorkingStoreTable from '../../bizcomponents/employeeworkingstore/EmployeeWorkingStore.table'

class EmployeeWorkingStoreTableEx extends PureComponent {
  


 calcDisplayColumns=()=>{

    const {owner} =  this.props
    const {referenceName} = owner
   
    
    const {displayColumns} = EmployeeWorkingStoreBase
    if(!referenceName){
      return displayColumns
    }

    //const x=`sdfsdf`


    const remainColumns = displayColumns.filter((item,index)=> item.dataIndex!=referenceName&&index<7&&item.dataIndex!=='content')
    //fixed: 'right',
    const operationColumn={
      title:`操作`,
      render: (text, record) => (
        
        <span>
          <a key="__" onClick={()=>this.gotoEdit(text, record)}>编辑</a>
          <span className={styles.splitLine} />
          <Link to={`/store/${record.store.id}/dashboard`}>管理</Link>
          {
            record.actionList&&record.actionList.map((item)=>(<a key={item.actionId} onClick={()=>this.executeAction(item,text, record)}><span className={styles.splitLine} />{item.actionName}</a>))
          }
        </span>)
    
    }
    remainColumns.push(
      operationColumn
    )
    return remainColumns

  }

	
  render() {
    const { data, count, current, owner } = this.props
    return (
    <EmployeeWorkingStoreTable   
      className={styles.standardTable}
      owner={owner}
      selectedRows={[]}
      data={data} count={count} current={current} 
      calcDisplayColumns={this.calcDisplayColumns}     
    />
    
    )
  }
}

export default EmployeeWorkingStoreTableEx

