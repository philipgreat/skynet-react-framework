

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Steps,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Province.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { Step } = Steps

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}

const summaryOf = (province) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{province.id}</Description> 
<Description term="名称">{province.name}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  province: state._province,
}))
export default class ProvinceViewDetail extends Component {


  state = {
    tabKey: `cityList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {CityViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const province = this.props.province
    const { id, cityCount } = province
    const { cityList } = province
    
    const owner = { type: '_province', id }
    
    const tabList = [

      {key: 'cityList',tab: `城市(${cityCount})`}, 
   

   ];
   
   
    const contentList = {
       cityList:  
        <CityViewTable data={cityList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="省总览"
        content={summaryOf(this.props.province)}
        wrapperClassName={styles.advancedForm}
      >

      
      
	<Card 
  		className={styles.card} 
  		bordered={false}
  		tabList={tabList}
  		onTabChange={this.onTabChange}>
            {contentList[this.state.tabKey]}
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



