import StoreDashboard from '../../bizcomponents/store/Store.dashboard';


import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import {Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal,List } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Store.dashboardex.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select

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


const imageListOf = (store) =>{

  return null;

}

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}

/**<Tabs tabBarExtraContent={salesExtra} size="large" tabBarStyle={{ marginBottom: 24 }}>
              <TabPane tab="销售额" key="sales"> */


const panesData =[

  {name:'图书管理',subItems:["lossAssessmentRecordList","bookCopyList",
  "bookCopyTransferListAsOriginalStore","bookCopyTransferListAsNewStore",
  "bookCopyOperationRecordList","borrowingHistoryListAsLendingStore",
  "borrowingHistoryListAsReturnStore","bookCopySharingApplicationList"]},
  {name:'活动管理',subItems:["campaignList"]},
  {name:'经营成果中心',subItems:["memberServiceRevenueList","customerList"]},
  {name:'店内设备',subItems:["printerList"]},
  {name:'店内工作人员',subItems:["employeeWorkingStoreList"]},

]
const subListWithPans = (cardsData,tabbedPaneData) => {
  const {id} = cardsData.cardsSource;
  return (<Row gutter={12}>

    <Tabs  size="large" tabBarStyle={{ marginBottom: 24 }}>

    {
      tabbedPaneData.map((paneItem)=>{return(
        <TabPane tab={paneItem.name} key={paneItem.name} >
        {
          paneItem.subItems.map(paneItemSubitem=>{
            
            return cardsData.subItems.filter(item=>item.name==paneItemSubitem).map(item=>{
             
              return(

                <Col {...topColResponsiveProps} key={item.name}>   
                <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
                 <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
                   <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
                   <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
               </Card> </Badge>
                 </Col>)

            })

          })

        }
        </TabPane>)
      })

    }
           
            </Tabs>
        </Row>)

}
const subListsOf = (cardsData) =>{

	return subListWithPans(cardsData,panesData)
}

class StoreDashboardEx extends Component {
  render() {
    return <StoreDashboard imageListOf={imageListOf} subListsOf={subListsOf} renderExtraHeader={renderExtraHeader} />;
  }
}

export default connect(state => ({
  store: state._store,
}))(StoreDashboardEx);