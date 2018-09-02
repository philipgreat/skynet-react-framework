import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Menu,
  Icon,
  Avatar,
  Dropdown,
  Tag,
  message,
  Spin,
  Breadcrumb,
  AutoComplete,
  Input,Button
} from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './MainOrder.app.less'
import {sessionObject} from '../../utils/utils'

import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';


import GlobalComponents from '../../custcomponents';

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
}




class MainOrderBizApp extends React.PureComponent {
  constructor(props) {
    super(props)
    // 把一级 Layout 的 children 作为菜单项
    // this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), [])
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    }
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearTimeout(this.resizeTimeout)
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus = (props) => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['/mainOrder/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = (props) => {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }
  
  getNavMenuItems = () => {
  

    const menuData = sessionObject('menuData')
    const targetApp = sessionObject('targetApp')
	const {objectId}=targetApp;
  
    return (
      
		  <Menu
             theme="dark"
             mode="inline"
            
             
             onOpenChange={this.handleOpenChange}
            
             defaultOpenKeys={['firstOne']}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item key="dashboard">
               <Link to={`/mainOrder/${this.props.mainOrder.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             
		 <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
             
             
        {menuData.subItems.map((item)=>(<Menu.Item key={item.name}>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}/${item.displayName}列表`}>
          <Icon type="bars" /><span>{item.displayName}</span>
          </Link>
        </Menu.Item>))}
       
       <Menu.Item key="preference">
               <Link to={`/mainOrder/${this.props.mainOrder.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getLineItemSearch = () => {
    const {LineItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "订单项",
      role: "lineItem",
      data: state._mainOrder.lineItemList,
      count: state._mainOrder.lineItemCount,
      currentPage: state._mainOrder.lineItemCurrentPageNumber,
      searchFormParameters: state._mainOrder.lineItemSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'mainOrder', 
      listName: 'lineItemList', ref:state._mainOrder, 
      listDisplayName: '订单项列表' }, // this is for model namespace and
    }))(LineItemSearch)
  }
  getLineItemCreateForm = () => {
   	const {LineItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.lineItemList,
      count: state._mainOrder.lineItemCount,
      currentPage: state._mainOrder.lineItemCurrentPageNumber,
      searchFormParameters: state._mainOrder.lineItemSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'lineItemList', ref:state._mainOrder, listDisplayName: '订单项列表'}, // this is for model namespace and
    }))(LineItemCreateForm)
  }
  
  getLineItemUpdateForm = () => {
  	const {LineItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'lineItemList', ref:state._mainOrder, listDisplayName: '订单项列表' }, // this is for model namespace and
    }))(LineItemUpdateForm)
  }

  getMainOrderPaymentSearch = () => {
    const {MainOrderPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "主订单支付",
      role: "mainOrderPayment",
      data: state._mainOrder.mainOrderPaymentList,
      count: state._mainOrder.mainOrderPaymentCount,
      currentPage: state._mainOrder.mainOrderPaymentCurrentPageNumber,
      searchFormParameters: state._mainOrder.mainOrderPaymentSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'mainOrder', 
      listName: 'mainOrderPaymentList', ref:state._mainOrder, 
      listDisplayName: '主订单支付列表' }, // this is for model namespace and
    }))(MainOrderPaymentSearch)
  }
  getMainOrderPaymentCreateForm = () => {
   	const {MainOrderPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.mainOrderPaymentList,
      count: state._mainOrder.mainOrderPaymentCount,
      currentPage: state._mainOrder.mainOrderPaymentCurrentPageNumber,
      searchFormParameters: state._mainOrder.mainOrderPaymentSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'mainOrderPaymentList', ref:state._mainOrder, listDisplayName: '主订单支付列表'}, // this is for model namespace and
    }))(MainOrderPaymentCreateForm)
  }
  
  getMainOrderPaymentUpdateForm = () => {
  	const {MainOrderPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'mainOrderPaymentList', ref:state._mainOrder, listDisplayName: '主订单支付列表' }, // this is for model namespace and
    }))(MainOrderPaymentUpdateForm)
  }

  getOrderLogSearch = () => {
    const {OrderLogSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "Log",
      role: "orderLog",
      data: state._mainOrder.orderLogList,
      count: state._mainOrder.orderLogCount,
      currentPage: state._mainOrder.orderLogCurrentPageNumber,
      searchFormParameters: state._mainOrder.orderLogSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'mainOrder', 
      listName: 'orderLogList', ref:state._mainOrder, 
      listDisplayName: 'Log列表' }, // this is for model namespace and
    }))(OrderLogSearch)
  }
  getOrderLogCreateForm = () => {
   	const {OrderLogCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.orderLogList,
      count: state._mainOrder.orderLogCount,
      currentPage: state._mainOrder.orderLogCurrentPageNumber,
      searchFormParameters: state._mainOrder.orderLogSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'orderLogList', ref:state._mainOrder, listDisplayName: 'Log列表'}, // this is for model namespace and
    }))(OrderLogCreateForm)
  }
  
  getOrderLogUpdateForm = () => {
  	const {OrderLogUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'orderLogList', ref:state._mainOrder, listDisplayName: 'Log列表' }, // this is for model namespace and
    }))(OrderLogUpdateForm)
  }

  getMemberServiceRevenueSearch = () => {
    const {MemberServiceRevenueSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "会员服务收益",
      role: "memberServiceRevenue",
      data: state._mainOrder.memberServiceRevenueList,
      count: state._mainOrder.memberServiceRevenueCount,
      currentPage: state._mainOrder.memberServiceRevenueCurrentPageNumber,
      searchFormParameters: state._mainOrder.memberServiceRevenueSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'mainOrder', 
      listName: 'memberServiceRevenueList', ref:state._mainOrder, 
      listDisplayName: '会员服务收益列表' }, // this is for model namespace and
    }))(MemberServiceRevenueSearch)
  }
  getMemberServiceRevenueCreateForm = () => {
   	const {MemberServiceRevenueCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.memberServiceRevenueList,
      count: state._mainOrder.memberServiceRevenueCount,
      currentPage: state._mainOrder.memberServiceRevenueCurrentPageNumber,
      searchFormParameters: state._mainOrder.memberServiceRevenueSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'memberServiceRevenueList', ref:state._mainOrder, listDisplayName: '会员服务收益列表'}, // this is for model namespace and
    }))(MemberServiceRevenueCreateForm)
  }
  
  getMemberServiceRevenueUpdateForm = () => {
  	const {MemberServiceRevenueUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'memberServiceRevenueList', ref:state._mainOrder, listDisplayName: '会员服务收益列表' }, // this is for model namespace and
    }))(MemberServiceRevenueUpdateForm)
  }

  getPlatformAccountDetailsSearch = () => {
    const {PlatformAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "平台账户明细",
      role: "platformAccountDetails",
      data: state._mainOrder.platformAccountDetailsList,
      count: state._mainOrder.platformAccountDetailsCount,
      currentPage: state._mainOrder.platformAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.platformAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'relatedMainOrder', 
      listName: 'platformAccountDetailsList', ref:state._mainOrder, 
      listDisplayName: '平台账户明细列表' }, // this is for model namespace and
    }))(PlatformAccountDetailsSearch)
  }
  getPlatformAccountDetailsCreateForm = () => {
   	const {PlatformAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.platformAccountDetailsList,
      count: state._mainOrder.platformAccountDetailsCount,
      currentPage: state._mainOrder.platformAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.platformAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'platformAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台账户明细列表'}, // this is for model namespace and
    }))(PlatformAccountDetailsCreateForm)
  }
  
  getPlatformAccountDetailsUpdateForm = () => {
  	const {PlatformAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'platformAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台账户明细列表' }, // this is for model namespace and
    }))(PlatformAccountDetailsUpdateForm)
  }

  getFundationAccountDetailsSearch = () => {
    const {FundationAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "平台基金账户明细",
      role: "fundationAccountDetails",
      data: state._mainOrder.fundationAccountDetailsList,
      count: state._mainOrder.fundationAccountDetailsCount,
      currentPage: state._mainOrder.fundationAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.fundationAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'relatedMainOrder', 
      listName: 'fundationAccountDetailsList', ref:state._mainOrder, 
      listDisplayName: '平台基金账户明细列表' }, // this is for model namespace and
    }))(FundationAccountDetailsSearch)
  }
  getFundationAccountDetailsCreateForm = () => {
   	const {FundationAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.fundationAccountDetailsList,
      count: state._mainOrder.fundationAccountDetailsCount,
      currentPage: state._mainOrder.fundationAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.fundationAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'fundationAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台基金账户明细列表'}, // this is for model namespace and
    }))(FundationAccountDetailsCreateForm)
  }
  
  getFundationAccountDetailsUpdateForm = () => {
  	const {FundationAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'fundationAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台基金账户明细列表' }, // this is for model namespace and
    }))(FundationAccountDetailsUpdateForm)
  }

  getStoreAccountDetailsSearch = () => {
    const {StoreAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "网点账户明细",
      role: "storeAccountDetails",
      data: state._mainOrder.storeAccountDetailsList,
      count: state._mainOrder.storeAccountDetailsCount,
      currentPage: state._mainOrder.storeAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.storeAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'relatedMainOrder', 
      listName: 'storeAccountDetailsList', ref:state._mainOrder, 
      listDisplayName: '网点账户明细列表' }, // this is for model namespace and
    }))(StoreAccountDetailsSearch)
  }
  getStoreAccountDetailsCreateForm = () => {
   	const {StoreAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.storeAccountDetailsList,
      count: state._mainOrder.storeAccountDetailsCount,
      currentPage: state._mainOrder.storeAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.storeAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'storeAccountDetailsList', ref:state._mainOrder, listDisplayName: '网点账户明细列表'}, // this is for model namespace and
    }))(StoreAccountDetailsCreateForm)
  }
  
  getStoreAccountDetailsUpdateForm = () => {
  	const {StoreAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'storeAccountDetailsList', ref:state._mainOrder, listDisplayName: '网点账户明细列表' }, // this is for model namespace and
    }))(StoreAccountDetailsUpdateForm)
  }

  getCustomerAccountTransactionSearch = () => {
    const {CustomerAccountTransactionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "客户账户明细",
      role: "customerAccountTransaction",
      data: state._mainOrder.customerAccountTransactionList,
      count: state._mainOrder.customerAccountTransactionCount,
      currentPage: state._mainOrder.customerAccountTransactionCurrentPageNumber,
      searchFormParameters: state._mainOrder.customerAccountTransactionSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'relatedMainOrder', 
      listName: 'customerAccountTransactionList', ref:state._mainOrder, 
      listDisplayName: '客户账户明细列表' }, // this is for model namespace and
    }))(CustomerAccountTransactionSearch)
  }
  getCustomerAccountTransactionCreateForm = () => {
   	const {CustomerAccountTransactionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.customerAccountTransactionList,
      count: state._mainOrder.customerAccountTransactionCount,
      currentPage: state._mainOrder.customerAccountTransactionCurrentPageNumber,
      searchFormParameters: state._mainOrder.customerAccountTransactionSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'customerAccountTransactionList', ref:state._mainOrder, listDisplayName: '客户账户明细列表'}, // this is for model namespace and
    }))(CustomerAccountTransactionCreateForm)
  }
  
  getCustomerAccountTransactionUpdateForm = () => {
  	const {CustomerAccountTransactionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'customerAccountTransactionList', ref:state._mainOrder, listDisplayName: '客户账户明细列表' }, // this is for model namespace and
    }))(CustomerAccountTransactionUpdateForm)
  }

  getUndistributedProfitSearch = () => {
    const {UndistributedProfitSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "未分割收入",
      role: "undistributedProfit",
      data: state._mainOrder.undistributedProfitList,
      count: state._mainOrder.undistributedProfitCount,
      currentPage: state._mainOrder.undistributedProfitCurrentPageNumber,
      searchFormParameters: state._mainOrder.undistributedProfitSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, 
      referenceName: 'mainOrder', 
      listName: 'undistributedProfitList', ref:state._mainOrder, 
      listDisplayName: '未分割收入列表' }, // this is for model namespace and
    }))(UndistributedProfitSearch)
  }
  getUndistributedProfitCreateForm = () => {
   	const {UndistributedProfitCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.undistributedProfitList,
      count: state._mainOrder.undistributedProfitCount,
      currentPage: state._mainOrder.undistributedProfitCurrentPageNumber,
      searchFormParameters: state._mainOrder.undistributedProfitSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'undistributedProfitList', ref:state._mainOrder, listDisplayName: '未分割收入列表'}, // this is for model namespace and
    }))(UndistributedProfitCreateForm)
  }
  
  getUndistributedProfitUpdateForm = () => {
  	const {UndistributedProfitUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'undistributedProfitList', ref:state._mainOrder, listDisplayName: '未分割收入列表' }, // this is for model namespace and
    }))(UndistributedProfitUpdateForm)
  }


  
  buildRouters = () =>{
  	const {MainOrderDashboard} = GlobalComponents
  	const {MainOrderPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/mainOrder/:id/dashboard", component: MainOrderDashboard},
  	{path:"/mainOrder/:id/preference", component: MainOrderPreference},
  	
  	
  	
  	{path:"/mainOrder/:id/list/lineItemList", component: this.getLineItemSearch()},
  	{path:"/mainOrder/:id/list/lineItemCreateForm", component: this.getLineItemCreateForm()},
  	{path:"/mainOrder/:id/list/lineItemUpdateForm", component: this.getLineItemUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/mainOrderPaymentList", component: this.getMainOrderPaymentSearch()},
  	{path:"/mainOrder/:id/list/mainOrderPaymentCreateForm", component: this.getMainOrderPaymentCreateForm()},
  	{path:"/mainOrder/:id/list/mainOrderPaymentUpdateForm", component: this.getMainOrderPaymentUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/orderLogList", component: this.getOrderLogSearch()},
  	{path:"/mainOrder/:id/list/orderLogCreateForm", component: this.getOrderLogCreateForm()},
  	{path:"/mainOrder/:id/list/orderLogUpdateForm", component: this.getOrderLogUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/memberServiceRevenueList", component: this.getMemberServiceRevenueSearch()},
  	{path:"/mainOrder/:id/list/memberServiceRevenueCreateForm", component: this.getMemberServiceRevenueCreateForm()},
  	{path:"/mainOrder/:id/list/memberServiceRevenueUpdateForm", component: this.getMemberServiceRevenueUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/platformAccountDetailsList", component: this.getPlatformAccountDetailsSearch()},
  	{path:"/mainOrder/:id/list/platformAccountDetailsCreateForm", component: this.getPlatformAccountDetailsCreateForm()},
  	{path:"/mainOrder/:id/list/platformAccountDetailsUpdateForm", component: this.getPlatformAccountDetailsUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/fundationAccountDetailsList", component: this.getFundationAccountDetailsSearch()},
  	{path:"/mainOrder/:id/list/fundationAccountDetailsCreateForm", component: this.getFundationAccountDetailsCreateForm()},
  	{path:"/mainOrder/:id/list/fundationAccountDetailsUpdateForm", component: this.getFundationAccountDetailsUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/storeAccountDetailsList", component: this.getStoreAccountDetailsSearch()},
  	{path:"/mainOrder/:id/list/storeAccountDetailsCreateForm", component: this.getStoreAccountDetailsCreateForm()},
  	{path:"/mainOrder/:id/list/storeAccountDetailsUpdateForm", component: this.getStoreAccountDetailsUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/customerAccountTransactionList", component: this.getCustomerAccountTransactionSearch()},
  	{path:"/mainOrder/:id/list/customerAccountTransactionCreateForm", component: this.getCustomerAccountTransactionCreateForm()},
  	{path:"/mainOrder/:id/list/customerAccountTransactionUpdateForm", component: this.getCustomerAccountTransactionUpdateForm()},
   	
  	{path:"/mainOrder/:id/list/undistributedProfitList", component: this.getUndistributedProfitSearch()},
  	{path:"/mainOrder/:id/list/undistributedProfitCreateForm", component: this.getUndistributedProfitCreateForm()},
  	{path:"/mainOrder/:id/list/undistributedProfitUpdateForm", component: this.getUndistributedProfitUpdateForm()},
     	
  	
  	]
  	
  	const {extraRoutesFunc} = this.props;
	const extraRoutes = extraRoutesFunc?extraRoutesFunc():[]
    const finalRoutes = routers.concat(extraRoutes)
    
  	return (<Switch>
             {finalRoutes.map((item)=>(<Route key={item.path} path={item.path} component={item.component} />))}    
  	  	</Switch>)
  	
  
  }
 

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '书香社区'
    return title
  }
 
  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    })
  }
   toggle = () => {
     const { collapsed } = this.props
     this.props.dispatch({
       type: 'global/changeLayoutCollapsed',
       payload: !collapsed,
     })
   }
    logout = () => {
   
    console.log("log out called")
    this.props.dispatch({ type: 'launcher/signOut' })
  }
   render() {
     // const { collapsed, fetchingNotices,loading } = this.props
     const { collapsed } = this.props
     const { breadcrumb }  = this.props

     //const {MainOrderEditDetail} = GlobalComponents
     //const {MainOrderViewDetail} = GlobalComponents
     
     
     const targetApp = sessionObject('targetApp')
     const currentBreadcrumb =sessionObject(targetApp.id)
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
       openKeys: this.state.openKeys,
     }
     const layout = (
     <Layout>
        <Header>
          
          <div className={styles.left}>
          <img
            src="./favicon.png"
            alt="logo"
            onClick={this.toggle}
            className={styles.logo}
          />
          {currentBreadcrumb.map((item)=>{
            return (<Link  key={item.link} to={`${item.link}`} className={styles.breadcrumbLink}> &gt;{item.name}</Link>)

          })}
         </div>
          <div className={styles.right}  >
          <Button type="primary"  icon="logout" onClick={()=>this.logout()}>
          退出</Button>
          </div>
          
        </Header>
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
           collapsedWidth={56}
           className={styles.sider}
         >
           




             {this.getNavMenuItems(this.props.mainOrder.id)}
            
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
           
           {this.buildRouters()}
 
             
             
           </Content>
          </Layout>
        </Layout>
      </Layout>
     )
     return (
       <DocumentTitle title={this.getPageTitle()}>
         <ContainerQuery query={query}>
           {params => <div className={classNames(params)}>{layout}</div>}
         </ContainerQuery>
       </DocumentTitle>
     )
   }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  mainOrder: state._mainOrder,
  ...state,
}))(MainOrderBizApp)



