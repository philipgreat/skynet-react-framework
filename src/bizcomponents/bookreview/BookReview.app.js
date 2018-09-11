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
import styles from './BookReview.app.less'
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




class BookReviewBizApp extends React.PureComponent {
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
      return ['/bookReview/']
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
               <Link to={`/bookReview/${this.props.bookReview.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/bookReview/${this.props.bookReview.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getBookReviewLikeSearch = () => {
    const {BookReviewLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书评点赞",
      role: "bookReviewLike",
      data: state._bookReview.bookReviewLikeList,
      count: state._bookReview.bookReviewLikeCount,
      currentPage: state._bookReview.bookReviewLikeCurrentPageNumber,
      searchFormParameters: state._bookReview.bookReviewLikeSearchFormParameters,
      loading: state._bookReview.loading,
      partialList: state._bookReview.partialList,
      owner: { type: '_bookReview', id: state._bookReview.id, 
      referenceName: 'bookReview', 
      listName: 'bookReviewLikeList', ref:state._bookReview, 
      listDisplayName: '书评点赞列表' }, // this is for model namespace and
    }))(BookReviewLikeSearch)
  }
  getBookReviewLikeCreateForm = () => {
   	const {BookReviewLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookReviewLike",
      data: state._bookReview.bookReviewLikeList,
      count: state._bookReview.bookReviewLikeCount,
      currentPage: state._bookReview.bookReviewLikeCurrentPageNumber,
      searchFormParameters: state._bookReview.bookReviewLikeSearchFormParameters,
      loading: state._bookReview.loading,
      owner: { type: '_bookReview', id: state._bookReview.id, referenceName: 'bookReview', listName: 'bookReviewLikeList', ref:state._bookReview, listDisplayName: '书评点赞列表'}, // this is for model namespace and
    }))(BookReviewLikeCreateForm)
  }
  
  getBookReviewLikeUpdateForm = () => {
  	const {BookReviewLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookReview.selectedRows,
      role: "bookReviewLike",
      currentUpdateIndex: state._bookReview.currentUpdateIndex,
      owner: { type: '_bookReview', id: state._bookReview.id, listName: 'bookReviewLikeList', ref:state._bookReview, listDisplayName: '书评点赞列表' }, // this is for model namespace and
    }))(BookReviewLikeUpdateForm)
  }

  getInformSearch = () => {
    const {InformSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "举报",
      role: "inform",
      data: state._bookReview.informList,
      count: state._bookReview.informCount,
      currentPage: state._bookReview.informCurrentPageNumber,
      searchFormParameters: state._bookReview.informSearchFormParameters,
      loading: state._bookReview.loading,
      partialList: state._bookReview.partialList,
      owner: { type: '_bookReview', id: state._bookReview.id, 
      referenceName: 'bookReview', 
      listName: 'informList', ref:state._bookReview, 
      listDisplayName: '举报列表' }, // this is for model namespace and
    }))(InformSearch)
  }
  getInformCreateForm = () => {
   	const {InformCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "inform",
      data: state._bookReview.informList,
      count: state._bookReview.informCount,
      currentPage: state._bookReview.informCurrentPageNumber,
      searchFormParameters: state._bookReview.informSearchFormParameters,
      loading: state._bookReview.loading,
      owner: { type: '_bookReview', id: state._bookReview.id, referenceName: 'bookReview', listName: 'informList', ref:state._bookReview, listDisplayName: '举报列表'}, // this is for model namespace and
    }))(InformCreateForm)
  }
  
  getInformUpdateForm = () => {
  	const {InformUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookReview.selectedRows,
      role: "inform",
      currentUpdateIndex: state._bookReview.currentUpdateIndex,
      owner: { type: '_bookReview', id: state._bookReview.id, listName: 'informList', ref:state._bookReview, listDisplayName: '举报列表' }, // this is for model namespace and
    }))(InformUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookReviewDashboard} = GlobalComponents
  	const {BookReviewPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/bookReview/:id/dashboard", component: BookReviewDashboard},
  	{path:"/bookReview/:id/preference", component: BookReviewPreference},
  	
  	
  	
  	{path:"/bookReview/:id/list/bookReviewLikeList", component: this.getBookReviewLikeSearch()},
  	{path:"/bookReview/:id/list/bookReviewLikeCreateForm", component: this.getBookReviewLikeCreateForm()},
  	{path:"/bookReview/:id/list/bookReviewLikeUpdateForm", component: this.getBookReviewLikeUpdateForm()},
   	
  	{path:"/bookReview/:id/list/informList", component: this.getInformSearch()},
  	{path:"/bookReview/:id/list/informCreateForm", component: this.getInformCreateForm()},
  	{path:"/bookReview/:id/list/informUpdateForm", component: this.getInformUpdateForm()},
     	
  	
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

     //const {BookReviewEditDetail} = GlobalComponents
     //const {BookReviewViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.bookReview.id)}
            
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
  bookReview: state._bookReview,
  ...state,
}))(BookReviewBizApp)



