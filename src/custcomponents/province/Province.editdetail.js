

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Province.editdetail.less'
import GlobalComponents from '../../custcomponents'



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


@connect(state => ({
  province: state._province,
}))
export default class ProvinceEditDetail extends Component {
  render() {
    const {CityEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, cityCount } = this.props.province
    const { cityList } = this.props.province
    
    const owner = { type: '_province', id }
    return (

      <PageHeaderLayout
        title="省总览"
        content="省总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="城市列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CityEditTable data={cityList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



