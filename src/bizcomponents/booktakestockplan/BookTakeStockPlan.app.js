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
import styles from './BookTakeStockPlan.app.less'
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




class BookTakeStockPlanBizApp extends React.PureComponent {
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
      return ['/bookTakeStockPlan/']
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
               <Link to={`/bookTakeStockPlan/${this.props.bookTakeStockPlan.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
  



  getBookTakeStockResultSearch = () => {
    const {BookTakeStockResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookTakeStockPlan.bookTakeStockResultList,
      count: state._bookTakeStockPlan.bookTakeStockResultCount,
      currentPage: state._bookTakeStockPlan.bookTakeStockResultCurrentPageNumber,
      searchFormParameters: state._bookTakeStockPlan.bookTakeStockResultSearchFormParameters,
      loading: state._bookTakeStockPlan.loading,
      partialList: state._bookTakeStockPlan.partialList,
      owner: { type: '_bookTakeStockPlan', id: state._bookTakeStockPlan.id, referenceName: 'bookTakeStockPlan', listName: 'bookTakeStockResultList', ref:state._bookTakeStockPlan, listDisplayName: '图书盘点结果列表' }, // this is for model namespace and
    }))(BookTakeStockResultSearch)
  }
  getBookTakeStockResultCreateForm = () => {
   	const {BookTakeStockResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookTakeStockPlan.bookTakeStockResultList,
      count: state._bookTakeStockPlan.bookTakeStockResultCount,
      currentPage: state._bookTakeStockPlan.bookTakeStockResultCurrentPageNumber,
      searchFormParameters: state._bookTakeStockPlan.bookTakeStockResultSearchFormParameters,
      loading: state._bookTakeStockPlan.loading,
      owner: { type: '_bookTakeStockPlan', id: state._bookTakeStockPlan.id, referenceName: 'bookTakeStockPlan', listName: 'bookTakeStockResultList', ref:state._bookTakeStockPlan, listDisplayName: '图书盘点结果列表'}, // this is for model namespace and
    }))(BookTakeStockResultCreateForm)
  }
  
  getBookTakeStockResultUpdateForm = () => {
  	const {BookTakeStockResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookTakeStockPlan.selectedRows,
      currentUpdateIndex: state._bookTakeStockPlan.currentUpdateIndex,
      owner: { type: '_bookTakeStockPlan', id: state._bookTakeStockPlan.id, listName: 'bookTakeStockResultList', ref:state._bookTakeStockPlan, listDisplayName: '图书盘点结果列表' }, // this is for model namespace and
    }))(BookTakeStockResultUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookTakeStockPlanDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/bookTakeStockPlan/:id/dashboard", component: BookTakeStockPlanDashboard},
  	
  	
  	{path:"/bookTakeStockPlan/:id/list/bookTakeStockResultList", component: this.getBookTakeStockResultSearch()},
  	{path:"/bookTakeStockPlan/:id/list/bookTakeStockResultCreateForm", component: this.getBookTakeStockResultCreateForm()},
  	{path:"/bookTakeStockPlan/:id/list/bookTakeStockResultUpdateForm", component: this.getBookTakeStockResultUpdateForm()},
     	
  	
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

     //const {BookTakeStockPlanEditDetail} = GlobalComponents
     //const {BookTakeStockPlanViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.bookTakeStockPlan.id)}
            
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
  bookTakeStockPlan: state._bookTakeStockPlan,
  ...state,
}))(BookTakeStockPlanBizApp)



