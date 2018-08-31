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
import styles from './TransactionType.app.less'
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




class TransactionTypeBizApp extends React.PureComponent {
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
      return ['/transactionType/']
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
               <Link to={`/transactionType/${this.props.transactionType.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/transactionType/${this.props.transactionType.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getPlatformAccountDetailsSearch = () => {
    const {PlatformAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.platformAccountDetailsList,
      count: state._transactionType.platformAccountDetailsCount,
      currentPage: state._transactionType.platformAccountDetailsCurrentPageNumber,
      searchFormParameters: state._transactionType.platformAccountDetailsSearchFormParameters,
      loading: state._transactionType.loading,
      partialList: state._transactionType.partialList,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'platformAccountDetailsList', ref:state._transactionType, listDisplayName: '平台账户明细列表' }, // this is for model namespace and
    }))(PlatformAccountDetailsSearch)
  }
  getPlatformAccountDetailsCreateForm = () => {
   	const {PlatformAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.platformAccountDetailsList,
      count: state._transactionType.platformAccountDetailsCount,
      currentPage: state._transactionType.platformAccountDetailsCurrentPageNumber,
      searchFormParameters: state._transactionType.platformAccountDetailsSearchFormParameters,
      loading: state._transactionType.loading,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'platformAccountDetailsList', ref:state._transactionType, listDisplayName: '平台账户明细列表'}, // this is for model namespace and
    }))(PlatformAccountDetailsCreateForm)
  }
  
  getPlatformAccountDetailsUpdateForm = () => {
  	const {PlatformAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._transactionType.selectedRows,
      currentUpdateIndex: state._transactionType.currentUpdateIndex,
      owner: { type: '_transactionType', id: state._transactionType.id, listName: 'platformAccountDetailsList', ref:state._transactionType, listDisplayName: '平台账户明细列表' }, // this is for model namespace and
    }))(PlatformAccountDetailsUpdateForm)
  }

  getFundationAccountDetailsSearch = () => {
    const {FundationAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.fundationAccountDetailsList,
      count: state._transactionType.fundationAccountDetailsCount,
      currentPage: state._transactionType.fundationAccountDetailsCurrentPageNumber,
      searchFormParameters: state._transactionType.fundationAccountDetailsSearchFormParameters,
      loading: state._transactionType.loading,
      partialList: state._transactionType.partialList,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'fundationAccountDetailsList', ref:state._transactionType, listDisplayName: '平台基金账户明细列表' }, // this is for model namespace and
    }))(FundationAccountDetailsSearch)
  }
  getFundationAccountDetailsCreateForm = () => {
   	const {FundationAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.fundationAccountDetailsList,
      count: state._transactionType.fundationAccountDetailsCount,
      currentPage: state._transactionType.fundationAccountDetailsCurrentPageNumber,
      searchFormParameters: state._transactionType.fundationAccountDetailsSearchFormParameters,
      loading: state._transactionType.loading,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'fundationAccountDetailsList', ref:state._transactionType, listDisplayName: '平台基金账户明细列表'}, // this is for model namespace and
    }))(FundationAccountDetailsCreateForm)
  }
  
  getFundationAccountDetailsUpdateForm = () => {
  	const {FundationAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._transactionType.selectedRows,
      currentUpdateIndex: state._transactionType.currentUpdateIndex,
      owner: { type: '_transactionType', id: state._transactionType.id, listName: 'fundationAccountDetailsList', ref:state._transactionType, listDisplayName: '平台基金账户明细列表' }, // this is for model namespace and
    }))(FundationAccountDetailsUpdateForm)
  }

  getStoreAccountDetailsSearch = () => {
    const {StoreAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.storeAccountDetailsList,
      count: state._transactionType.storeAccountDetailsCount,
      currentPage: state._transactionType.storeAccountDetailsCurrentPageNumber,
      searchFormParameters: state._transactionType.storeAccountDetailsSearchFormParameters,
      loading: state._transactionType.loading,
      partialList: state._transactionType.partialList,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'storeAccountDetailsList', ref:state._transactionType, listDisplayName: '网点账户明细列表' }, // this is for model namespace and
    }))(StoreAccountDetailsSearch)
  }
  getStoreAccountDetailsCreateForm = () => {
   	const {StoreAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.storeAccountDetailsList,
      count: state._transactionType.storeAccountDetailsCount,
      currentPage: state._transactionType.storeAccountDetailsCurrentPageNumber,
      searchFormParameters: state._transactionType.storeAccountDetailsSearchFormParameters,
      loading: state._transactionType.loading,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'storeAccountDetailsList', ref:state._transactionType, listDisplayName: '网点账户明细列表'}, // this is for model namespace and
    }))(StoreAccountDetailsCreateForm)
  }
  
  getStoreAccountDetailsUpdateForm = () => {
  	const {StoreAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._transactionType.selectedRows,
      currentUpdateIndex: state._transactionType.currentUpdateIndex,
      owner: { type: '_transactionType', id: state._transactionType.id, listName: 'storeAccountDetailsList', ref:state._transactionType, listDisplayName: '网点账户明细列表' }, // this is for model namespace and
    }))(StoreAccountDetailsUpdateForm)
  }

  getCustomerAccountTransactionSearch = () => {
    const {CustomerAccountTransactionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.customerAccountTransactionList,
      count: state._transactionType.customerAccountTransactionCount,
      currentPage: state._transactionType.customerAccountTransactionCurrentPageNumber,
      searchFormParameters: state._transactionType.customerAccountTransactionSearchFormParameters,
      loading: state._transactionType.loading,
      partialList: state._transactionType.partialList,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'customerAccountTransactionList', ref:state._transactionType, listDisplayName: '客户账户明细列表' }, // this is for model namespace and
    }))(CustomerAccountTransactionSearch)
  }
  getCustomerAccountTransactionCreateForm = () => {
   	const {CustomerAccountTransactionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._transactionType.customerAccountTransactionList,
      count: state._transactionType.customerAccountTransactionCount,
      currentPage: state._transactionType.customerAccountTransactionCurrentPageNumber,
      searchFormParameters: state._transactionType.customerAccountTransactionSearchFormParameters,
      loading: state._transactionType.loading,
      owner: { type: '_transactionType', id: state._transactionType.id, referenceName: 'transactionType', listName: 'customerAccountTransactionList', ref:state._transactionType, listDisplayName: '客户账户明细列表'}, // this is for model namespace and
    }))(CustomerAccountTransactionCreateForm)
  }
  
  getCustomerAccountTransactionUpdateForm = () => {
  	const {CustomerAccountTransactionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._transactionType.selectedRows,
      currentUpdateIndex: state._transactionType.currentUpdateIndex,
      owner: { type: '_transactionType', id: state._transactionType.id, listName: 'customerAccountTransactionList', ref:state._transactionType, listDisplayName: '客户账户明细列表' }, // this is for model namespace and
    }))(CustomerAccountTransactionUpdateForm)
  }


  
  buildRouters = () =>{
  	const {TransactionTypeDashboard} = GlobalComponents
  	const {TransactionTypePreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/transactionType/:id/dashboard", component: TransactionTypeDashboard},
  	{path:"/transactionType/:id/preference", component: TransactionTypePreference},
  	
  	
  	
  	{path:"/transactionType/:id/list/platformAccountDetailsList", component: this.getPlatformAccountDetailsSearch()},
  	{path:"/transactionType/:id/list/platformAccountDetailsCreateForm", component: this.getPlatformAccountDetailsCreateForm()},
  	{path:"/transactionType/:id/list/platformAccountDetailsUpdateForm", component: this.getPlatformAccountDetailsUpdateForm()},
   	
  	{path:"/transactionType/:id/list/fundationAccountDetailsList", component: this.getFundationAccountDetailsSearch()},
  	{path:"/transactionType/:id/list/fundationAccountDetailsCreateForm", component: this.getFundationAccountDetailsCreateForm()},
  	{path:"/transactionType/:id/list/fundationAccountDetailsUpdateForm", component: this.getFundationAccountDetailsUpdateForm()},
   	
  	{path:"/transactionType/:id/list/storeAccountDetailsList", component: this.getStoreAccountDetailsSearch()},
  	{path:"/transactionType/:id/list/storeAccountDetailsCreateForm", component: this.getStoreAccountDetailsCreateForm()},
  	{path:"/transactionType/:id/list/storeAccountDetailsUpdateForm", component: this.getStoreAccountDetailsUpdateForm()},
   	
  	{path:"/transactionType/:id/list/customerAccountTransactionList", component: this.getCustomerAccountTransactionSearch()},
  	{path:"/transactionType/:id/list/customerAccountTransactionCreateForm", component: this.getCustomerAccountTransactionCreateForm()},
  	{path:"/transactionType/:id/list/customerAccountTransactionUpdateForm", component: this.getCustomerAccountTransactionUpdateForm()},
     	
  	
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

     //const {TransactionTypeEditDetail} = GlobalComponents
     //const {TransactionTypeViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.transactionType.id)}
            
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
  transactionType: state._transactionType,
  ...state,
}))(TransactionTypeBizApp)



