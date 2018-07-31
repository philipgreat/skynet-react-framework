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
import styles from './AccountData.app.less'
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




class AccountDataBizApp extends React.PureComponent {
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
      return ['/accountData/']
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
               <Link to={`/accountData/${this.props.accountData.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
		 <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
             
             
        {menuData.subItems.map((item)=>(<Menu.Item key={item.name}>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}/${item.displayName}列表`}>
          <Icon type="bars" /><span>{item.displayName}</span>
          </Link>
        </Menu.Item>))}
       
      
           </Menu>
    )
  }
  



  getPlatformAccountSearch = () => {
    const {PlatformAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.platformAccountList,
      count: state._accountData.platformAccountCount,
      currentPage: state._accountData.platformAccountCurrentPageNumber,
      searchFormParameters: state._accountData.platformAccountSearchFormParameters,
      loading: state._accountData.loading,
      partialList: state._accountData.partialList,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'platformAccountList', ref:state._accountData, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountSearch)
  }
  getPlatformAccountCreateForm = () => {
   	const {PlatformAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.platformAccountList,
      count: state._accountData.platformAccountCount,
      currentPage: state._accountData.platformAccountCurrentPageNumber,
      searchFormParameters: state._accountData.platformAccountSearchFormParameters,
      loading: state._accountData.loading,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'platformAccountList', ref:state._accountData, listDisplayName: '平台账户列表'}, // this is for model namespace and
    }))(PlatformAccountCreateForm)
  }
  
  getPlatformAccountUpdateForm = () => {
  	const {PlatformAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountData.selectedRows,
      currentUpdateIndex: state._accountData.currentUpdateIndex,
      owner: { type: '_accountData', id: state._accountData.id, listName: 'platformAccountList', ref:state._accountData, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountUpdateForm)
  }

  getFundationAccountSearch = () => {
    const {FundationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.fundationAccountList,
      count: state._accountData.fundationAccountCount,
      currentPage: state._accountData.fundationAccountCurrentPageNumber,
      searchFormParameters: state._accountData.fundationAccountSearchFormParameters,
      loading: state._accountData.loading,
      partialList: state._accountData.partialList,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'fundationAccountList', ref:state._accountData, listDisplayName: '平台基金账户列表' }, // this is for model namespace and
    }))(FundationAccountSearch)
  }
  getFundationAccountCreateForm = () => {
   	const {FundationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.fundationAccountList,
      count: state._accountData.fundationAccountCount,
      currentPage: state._accountData.fundationAccountCurrentPageNumber,
      searchFormParameters: state._accountData.fundationAccountSearchFormParameters,
      loading: state._accountData.loading,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'fundationAccountList', ref:state._accountData, listDisplayName: '平台基金账户列表'}, // this is for model namespace and
    }))(FundationAccountCreateForm)
  }
  
  getFundationAccountUpdateForm = () => {
  	const {FundationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountData.selectedRows,
      currentUpdateIndex: state._accountData.currentUpdateIndex,
      owner: { type: '_accountData', id: state._accountData.id, listName: 'fundationAccountList', ref:state._accountData, listDisplayName: '平台基金账户列表' }, // this is for model namespace and
    }))(FundationAccountUpdateForm)
  }

  getStoreAccountSearch = () => {
    const {StoreAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.storeAccountList,
      count: state._accountData.storeAccountCount,
      currentPage: state._accountData.storeAccountCurrentPageNumber,
      searchFormParameters: state._accountData.storeAccountSearchFormParameters,
      loading: state._accountData.loading,
      partialList: state._accountData.partialList,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'storeAccountList', ref:state._accountData, listDisplayName: '网点账户列表' }, // this is for model namespace and
    }))(StoreAccountSearch)
  }
  getStoreAccountCreateForm = () => {
   	const {StoreAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.storeAccountList,
      count: state._accountData.storeAccountCount,
      currentPage: state._accountData.storeAccountCurrentPageNumber,
      searchFormParameters: state._accountData.storeAccountSearchFormParameters,
      loading: state._accountData.loading,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'storeAccountList', ref:state._accountData, listDisplayName: '网点账户列表'}, // this is for model namespace and
    }))(StoreAccountCreateForm)
  }
  
  getStoreAccountUpdateForm = () => {
  	const {StoreAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountData.selectedRows,
      currentUpdateIndex: state._accountData.currentUpdateIndex,
      owner: { type: '_accountData', id: state._accountData.id, listName: 'storeAccountList', ref:state._accountData, listDisplayName: '网点账户列表' }, // this is for model namespace and
    }))(StoreAccountUpdateForm)
  }

  getTransactionTypeSearch = () => {
    const {TransactionTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.transactionTypeList,
      count: state._accountData.transactionTypeCount,
      currentPage: state._accountData.transactionTypeCurrentPageNumber,
      searchFormParameters: state._accountData.transactionTypeSearchFormParameters,
      loading: state._accountData.loading,
      partialList: state._accountData.partialList,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'transactionTypeList', ref:state._accountData, listDisplayName: '交易类型列表' }, // this is for model namespace and
    }))(TransactionTypeSearch)
  }
  getTransactionTypeCreateForm = () => {
   	const {TransactionTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountData.transactionTypeList,
      count: state._accountData.transactionTypeCount,
      currentPage: state._accountData.transactionTypeCurrentPageNumber,
      searchFormParameters: state._accountData.transactionTypeSearchFormParameters,
      loading: state._accountData.loading,
      owner: { type: '_accountData', id: state._accountData.id, referenceName: 'accountData', listName: 'transactionTypeList', ref:state._accountData, listDisplayName: '交易类型列表'}, // this is for model namespace and
    }))(TransactionTypeCreateForm)
  }
  
  getTransactionTypeUpdateForm = () => {
  	const {TransactionTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountData.selectedRows,
      currentUpdateIndex: state._accountData.currentUpdateIndex,
      owner: { type: '_accountData', id: state._accountData.id, listName: 'transactionTypeList', ref:state._accountData, listDisplayName: '交易类型列表' }, // this is for model namespace and
    }))(TransactionTypeUpdateForm)
  }


  
  buildRouters = () =>{
  	const {AccountDataDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/accountData/:id/dashboard", component: AccountDataDashboard},
  	
  	
  	{path:"/accountData/:id/list/platformAccountList", component: this.getPlatformAccountSearch()},
  	{path:"/accountData/:id/list/platformAccountCreateForm", component: this.getPlatformAccountCreateForm()},
  	{path:"/accountData/:id/list/platformAccountUpdateForm", component: this.getPlatformAccountUpdateForm()},
   	
  	{path:"/accountData/:id/list/fundationAccountList", component: this.getFundationAccountSearch()},
  	{path:"/accountData/:id/list/fundationAccountCreateForm", component: this.getFundationAccountCreateForm()},
  	{path:"/accountData/:id/list/fundationAccountUpdateForm", component: this.getFundationAccountUpdateForm()},
   	
  	{path:"/accountData/:id/list/storeAccountList", component: this.getStoreAccountSearch()},
  	{path:"/accountData/:id/list/storeAccountCreateForm", component: this.getStoreAccountCreateForm()},
  	{path:"/accountData/:id/list/storeAccountUpdateForm", component: this.getStoreAccountUpdateForm()},
   	
  	{path:"/accountData/:id/list/transactionTypeList", component: this.getTransactionTypeSearch()},
  	{path:"/accountData/:id/list/transactionTypeCreateForm", component: this.getTransactionTypeCreateForm()},
  	{path:"/accountData/:id/list/transactionTypeUpdateForm", component: this.getTransactionTypeUpdateForm()},
     	
  	
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

     //const {AccountDataEditDetail} = GlobalComponents
     //const {AccountDataViewDetail} = GlobalComponents
     
     
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
            src="./scm.svg"
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
           




             {this.getNavMenuItems(this.props.accountData.id)}
            
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
  accountData: state._accountData,
  ...state,
}))(AccountDataBizApp)



