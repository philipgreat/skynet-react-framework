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
import styles from './BookCopyOperateType.app.less'
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




class BookCopyOperateTypeBizApp extends React.PureComponent {
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
      return ['/bookCopyOperateType/']
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
               <Link to={`/bookCopyOperateType/${this.props.bookCopyOperateType.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/bookCopyOperateType/${this.props.bookCopyOperateType.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书籍副本操作记录",
      role: "bookCopyOperationRecord",
      data: state._bookCopyOperateType.bookCopyOperationRecordList,
      count: state._bookCopyOperateType.bookCopyOperationRecordCount,
      currentPage: state._bookCopyOperateType.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._bookCopyOperateType.bookCopyOperationRecordSearchFormParameters,
      loading: state._bookCopyOperateType.loading,
      partialList: state._bookCopyOperateType.partialList,
      owner: { type: '_bookCopyOperateType', id: state._bookCopyOperateType.id, 
      referenceName: 'bookCopyOperateType', 
      listName: 'bookCopyOperationRecordList', ref:state._bookCopyOperateType, 
      listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookCopyOperationRecord",
      data: state._bookCopyOperateType.bookCopyOperationRecordList,
      count: state._bookCopyOperateType.bookCopyOperationRecordCount,
      currentPage: state._bookCopyOperateType.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._bookCopyOperateType.bookCopyOperationRecordSearchFormParameters,
      loading: state._bookCopyOperateType.loading,
      owner: { type: '_bookCopyOperateType', id: state._bookCopyOperateType.id, referenceName: 'bookCopyOperateType', listName: 'bookCopyOperationRecordList', ref:state._bookCopyOperateType, listDisplayName: '书籍副本操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopyOperateType.selectedRows,
      role: "bookCopyOperationRecord",
      currentUpdateIndex: state._bookCopyOperateType.currentUpdateIndex,
      owner: { type: '_bookCopyOperateType', id: state._bookCopyOperateType.id, listName: 'bookCopyOperationRecordList', ref:state._bookCopyOperateType, listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookCopyOperateTypeDashboard} = GlobalComponents
  	const {BookCopyOperateTypePreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/bookCopyOperateType/:id/dashboard", component: BookCopyOperateTypeDashboard},
  	{path:"/bookCopyOperateType/:id/preference", component: BookCopyOperateTypePreference},
  	
  	
  	
  	{path:"/bookCopyOperateType/:id/list/bookCopyOperationRecordList", component: this.getBookCopyOperationRecordSearch()},
  	{path:"/bookCopyOperateType/:id/list/bookCopyOperationRecordCreateForm", component: this.getBookCopyOperationRecordCreateForm()},
  	{path:"/bookCopyOperateType/:id/list/bookCopyOperationRecordUpdateForm", component: this.getBookCopyOperationRecordUpdateForm()},
     	
  	
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

     //const {BookCopyOperateTypeEditDetail} = GlobalComponents
     //const {BookCopyOperateTypeViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.bookCopyOperateType.id)}
            
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
  bookCopyOperateType: state._bookCopyOperateType,
  ...state,
}))(BookCopyOperateTypeBizApp)



