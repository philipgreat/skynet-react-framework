import StoreDashboard from '../../bizcomponents/store/Store.dashboard';

import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
  Badge,
  Switch,Avatar,List
} from 'antd';

import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Store.dashboardex.less';
import { Link, Route, Redirect } from 'dva/router';
const renderExtraHeader = store => {

  const functions=[
    {name:'借书',link:`/store/${store.id}/bookLentForm`,icon:"upload"},
    {name:'还书',link:`/store/${store.id}/bookReturnForm`,icon:"download"},
    {name:'上架',link:`/store/${store.id}/bookLaunchForm`,icon:"arrow-up"},
    {name:'下架',link:`/store/${store.id}/bookDeactiveForm`,icon:"arrow-down"},
    {name:'新书入库',link:`/store/${store.id}/bookCreateForm`,icon:"login"},
    // {name:'转入',link:`/store/${store.id}/bookLentForm`,icon:"menu-unfold"},
    //{name:'出库',link:`/store/${store.id}/bookLentForm`,icon:"logout"},
    {name:'盘点',link:`/store/${store.id}/stockTakingForm`,icon:"calculator"},
    


  ];

  return (

    <List
    grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 6, xl: 8, xxl: 12 }}
    dataSource={functions}
    renderItem={item => (
      <List.Item>
        <Card title={item.name}><Link to={item.link}>
        
        <Icon type={item.icon} style={{ fontSize: 50, color: '#08c' }}/>
        
        
       
       </Link></Card>
      </List.Item>
    )}
  />



   
  )
};

class StoreDashboardEx extends Component {
  render() {
    return <StoreDashboard renderExtraHeader={renderExtraHeader} />;
  }
}

export default connect(state => ({
  store: state._store,
}))(StoreDashboardEx);