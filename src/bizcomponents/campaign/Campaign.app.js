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
import styles from './Campaign.app.less'
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




class CampaignBizApp extends React.PureComponent {
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
      return ['/campaign/']
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
               <Link to={`/campaign/${this.props.campaign.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/campaign/${this.props.campaign.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getStoreSlideSearch = () => {
    const {StoreSlideSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.storeSlideList,
      count: state._campaign.storeSlideCount,
      currentPage: state._campaign.storeSlideCurrentPageNumber,
      searchFormParameters: state._campaign.storeSlideSearchFormParameters,
      loading: state._campaign.loading,
      partialList: state._campaign.partialList,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'storeSlideList', ref:state._campaign, listDisplayName: '网点海报列表' }, // this is for model namespace and
    }))(StoreSlideSearch)
  }
  getStoreSlideCreateForm = () => {
   	const {StoreSlideCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.storeSlideList,
      count: state._campaign.storeSlideCount,
      currentPage: state._campaign.storeSlideCurrentPageNumber,
      searchFormParameters: state._campaign.storeSlideSearchFormParameters,
      loading: state._campaign.loading,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'storeSlideList', ref:state._campaign, listDisplayName: '网点海报列表'}, // this is for model namespace and
    }))(StoreSlideCreateForm)
  }
  
  getStoreSlideUpdateForm = () => {
  	const {StoreSlideUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._campaign.selectedRows,
      currentUpdateIndex: state._campaign.currentUpdateIndex,
      owner: { type: '_campaign', id: state._campaign.id, listName: 'storeSlideList', ref:state._campaign, listDisplayName: '网点海报列表' }, // this is for model namespace and
    }))(StoreSlideUpdateForm)
  }

  getCampaignRegisterHistorySearch = () => {
    const {CampaignRegisterHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.campaignRegisterHistoryList,
      count: state._campaign.campaignRegisterHistoryCount,
      currentPage: state._campaign.campaignRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._campaign.campaignRegisterHistorySearchFormParameters,
      loading: state._campaign.loading,
      partialList: state._campaign.partialList,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'campaignRegisterHistoryList', ref:state._campaign, listDisplayName: '活动报名记录列表' }, // this is for model namespace and
    }))(CampaignRegisterHistorySearch)
  }
  getCampaignRegisterHistoryCreateForm = () => {
   	const {CampaignRegisterHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.campaignRegisterHistoryList,
      count: state._campaign.campaignRegisterHistoryCount,
      currentPage: state._campaign.campaignRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._campaign.campaignRegisterHistorySearchFormParameters,
      loading: state._campaign.loading,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'campaignRegisterHistoryList', ref:state._campaign, listDisplayName: '活动报名记录列表'}, // this is for model namespace and
    }))(CampaignRegisterHistoryCreateForm)
  }
  
  getCampaignRegisterHistoryUpdateForm = () => {
  	const {CampaignRegisterHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._campaign.selectedRows,
      currentUpdateIndex: state._campaign.currentUpdateIndex,
      owner: { type: '_campaign', id: state._campaign.id, listName: 'campaignRegisterHistoryList', ref:state._campaign, listDisplayName: '活动报名记录列表' }, // this is for model namespace and
    }))(CampaignRegisterHistoryUpdateForm)
  }

  getCampaignReviewSearch = () => {
    const {CampaignReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.campaignReviewList,
      count: state._campaign.campaignReviewCount,
      currentPage: state._campaign.campaignReviewCurrentPageNumber,
      searchFormParameters: state._campaign.campaignReviewSearchFormParameters,
      loading: state._campaign.loading,
      partialList: state._campaign.partialList,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'campaignReviewList', ref:state._campaign, listDisplayName: '活动评论列表' }, // this is for model namespace and
    }))(CampaignReviewSearch)
  }
  getCampaignReviewCreateForm = () => {
   	const {CampaignReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.campaignReviewList,
      count: state._campaign.campaignReviewCount,
      currentPage: state._campaign.campaignReviewCurrentPageNumber,
      searchFormParameters: state._campaign.campaignReviewSearchFormParameters,
      loading: state._campaign.loading,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'campaignReviewList', ref:state._campaign, listDisplayName: '活动评论列表'}, // this is for model namespace and
    }))(CampaignReviewCreateForm)
  }
  
  getCampaignReviewUpdateForm = () => {
  	const {CampaignReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._campaign.selectedRows,
      currentUpdateIndex: state._campaign.currentUpdateIndex,
      owner: { type: '_campaign', id: state._campaign.id, listName: 'campaignReviewList', ref:state._campaign, listDisplayName: '活动评论列表' }, // this is for model namespace and
    }))(CampaignReviewUpdateForm)
  }

  getCampaignLikeSearch = () => {
    const {CampaignLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.campaignLikeList,
      count: state._campaign.campaignLikeCount,
      currentPage: state._campaign.campaignLikeCurrentPageNumber,
      searchFormParameters: state._campaign.campaignLikeSearchFormParameters,
      loading: state._campaign.loading,
      partialList: state._campaign.partialList,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'campaignLikeList', ref:state._campaign, listDisplayName: '活动点赞列表' }, // this is for model namespace and
    }))(CampaignLikeSearch)
  }
  getCampaignLikeCreateForm = () => {
   	const {CampaignLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._campaign.campaignLikeList,
      count: state._campaign.campaignLikeCount,
      currentPage: state._campaign.campaignLikeCurrentPageNumber,
      searchFormParameters: state._campaign.campaignLikeSearchFormParameters,
      loading: state._campaign.loading,
      owner: { type: '_campaign', id: state._campaign.id, referenceName: 'campaign', listName: 'campaignLikeList', ref:state._campaign, listDisplayName: '活动点赞列表'}, // this is for model namespace and
    }))(CampaignLikeCreateForm)
  }
  
  getCampaignLikeUpdateForm = () => {
  	const {CampaignLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._campaign.selectedRows,
      currentUpdateIndex: state._campaign.currentUpdateIndex,
      owner: { type: '_campaign', id: state._campaign.id, listName: 'campaignLikeList', ref:state._campaign, listDisplayName: '活动点赞列表' }, // this is for model namespace and
    }))(CampaignLikeUpdateForm)
  }


  
  buildRouters = () =>{
  	const {CampaignDashboard} = GlobalComponents
  	const {CampaignPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/campaign/:id/dashboard", component: CampaignDashboard},
  	{path:"/campaign/:id/preference", component: CampaignPreference},
  	
  	
  	
  	{path:"/campaign/:id/list/storeSlideList", component: this.getStoreSlideSearch()},
  	{path:"/campaign/:id/list/storeSlideCreateForm", component: this.getStoreSlideCreateForm()},
  	{path:"/campaign/:id/list/storeSlideUpdateForm", component: this.getStoreSlideUpdateForm()},
   	
  	{path:"/campaign/:id/list/campaignRegisterHistoryList", component: this.getCampaignRegisterHistorySearch()},
  	{path:"/campaign/:id/list/campaignRegisterHistoryCreateForm", component: this.getCampaignRegisterHistoryCreateForm()},
  	{path:"/campaign/:id/list/campaignRegisterHistoryUpdateForm", component: this.getCampaignRegisterHistoryUpdateForm()},
   	
  	{path:"/campaign/:id/list/campaignReviewList", component: this.getCampaignReviewSearch()},
  	{path:"/campaign/:id/list/campaignReviewCreateForm", component: this.getCampaignReviewCreateForm()},
  	{path:"/campaign/:id/list/campaignReviewUpdateForm", component: this.getCampaignReviewUpdateForm()},
   	
  	{path:"/campaign/:id/list/campaignLikeList", component: this.getCampaignLikeSearch()},
  	{path:"/campaign/:id/list/campaignLikeCreateForm", component: this.getCampaignLikeCreateForm()},
  	{path:"/campaign/:id/list/campaignLikeUpdateForm", component: this.getCampaignLikeUpdateForm()},
     	
  	
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

     //const {CampaignEditDetail} = GlobalComponents
     //const {CampaignViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.campaign.id)}
            
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
  campaign: state._campaign,
  ...state,
}))(CampaignBizApp)



