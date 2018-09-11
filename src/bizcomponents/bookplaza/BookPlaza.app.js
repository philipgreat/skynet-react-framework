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
import styles from './BookPlaza.app.less'
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




class BookPlazaBizApp extends React.PureComponent {
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
      return ['/bookPlaza/']
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
               <Link to={`/bookPlaza/${this.props.bookPlaza.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/bookPlaza/${this.props.bookPlaza.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getBookRecommendSearch = () => {
    const {BookRecommendSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书推荐",
      role: "bookRecommend",
      data: state._bookPlaza.bookRecommendList,
      count: state._bookPlaza.bookRecommendCount,
      currentPage: state._bookPlaza.bookRecommendCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookRecommendSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'bookRecommendList', ref:state._bookPlaza, 
      listDisplayName: '图书推荐列表' }, // this is for model namespace and
    }))(BookRecommendSearch)
  }
  getBookRecommendCreateForm = () => {
   	const {BookRecommendCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookRecommend",
      data: state._bookPlaza.bookRecommendList,
      count: state._bookPlaza.bookRecommendCount,
      currentPage: state._bookPlaza.bookRecommendCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookRecommendSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'bookRecommendList', ref:state._bookPlaza, listDisplayName: '图书推荐列表'}, // this is for model namespace and
    }))(BookRecommendCreateForm)
  }
  
  getBookRecommendUpdateForm = () => {
  	const {BookRecommendUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "bookRecommend",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'bookRecommendList', ref:state._bookPlaza, listDisplayName: '图书推荐列表' }, // this is for model namespace and
    }))(BookRecommendUpdateForm)
  }

  getBookSharingIncomeMetricSearch = () => {
    const {BookSharingIncomeMetricSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "共享图书收益分成配置",
      role: "bookSharingIncomeMetric",
      data: state._bookPlaza.bookSharingIncomeMetricList,
      count: state._bookPlaza.bookSharingIncomeMetricCount,
      currentPage: state._bookPlaza.bookSharingIncomeMetricCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookSharingIncomeMetricSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'bookSharingIncomeMetricList', ref:state._bookPlaza, 
      listDisplayName: '共享图书收益分成配置列表' }, // this is for model namespace and
    }))(BookSharingIncomeMetricSearch)
  }
  getBookSharingIncomeMetricCreateForm = () => {
   	const {BookSharingIncomeMetricCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookSharingIncomeMetric",
      data: state._bookPlaza.bookSharingIncomeMetricList,
      count: state._bookPlaza.bookSharingIncomeMetricCount,
      currentPage: state._bookPlaza.bookSharingIncomeMetricCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookSharingIncomeMetricSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'bookSharingIncomeMetricList', ref:state._bookPlaza, listDisplayName: '共享图书收益分成配置列表'}, // this is for model namespace and
    }))(BookSharingIncomeMetricCreateForm)
  }
  
  getBookSharingIncomeMetricUpdateForm = () => {
  	const {BookSharingIncomeMetricUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "bookSharingIncomeMetric",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'bookSharingIncomeMetricList', ref:state._bookPlaza, listDisplayName: '共享图书收益分成配置列表' }, // this is for model namespace and
    }))(BookSharingIncomeMetricUpdateForm)
  }

  getBookDonationIncomeMetricSearch = () => {
    const {BookDonationIncomeMetricSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "捐赠图书收益分成配置",
      role: "bookDonationIncomeMetric",
      data: state._bookPlaza.bookDonationIncomeMetricList,
      count: state._bookPlaza.bookDonationIncomeMetricCount,
      currentPage: state._bookPlaza.bookDonationIncomeMetricCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookDonationIncomeMetricSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'bookDonationIncomeMetricList', ref:state._bookPlaza, 
      listDisplayName: '捐赠图书收益分成配置列表' }, // this is for model namespace and
    }))(BookDonationIncomeMetricSearch)
  }
  getBookDonationIncomeMetricCreateForm = () => {
   	const {BookDonationIncomeMetricCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookDonationIncomeMetric",
      data: state._bookPlaza.bookDonationIncomeMetricList,
      count: state._bookPlaza.bookDonationIncomeMetricCount,
      currentPage: state._bookPlaza.bookDonationIncomeMetricCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookDonationIncomeMetricSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'bookDonationIncomeMetricList', ref:state._bookPlaza, listDisplayName: '捐赠图书收益分成配置列表'}, // this is for model namespace and
    }))(BookDonationIncomeMetricCreateForm)
  }
  
  getBookDonationIncomeMetricUpdateForm = () => {
  	const {BookDonationIncomeMetricUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "bookDonationIncomeMetric",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'bookDonationIncomeMetricList', ref:state._bookPlaza, listDisplayName: '捐赠图书收益分成配置列表' }, // this is for model namespace and
    }))(BookDonationIncomeMetricUpdateForm)
  }

  getMemberServiceIncomeMetricSearch = () => {
    const {MemberServiceIncomeMetricSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "会员服务费收入分成配置",
      role: "memberServiceIncomeMetric",
      data: state._bookPlaza.memberServiceIncomeMetricList,
      count: state._bookPlaza.memberServiceIncomeMetricCount,
      currentPage: state._bookPlaza.memberServiceIncomeMetricCurrentPageNumber,
      searchFormParameters: state._bookPlaza.memberServiceIncomeMetricSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'memberServiceIncomeMetricList', ref:state._bookPlaza, 
      listDisplayName: '会员服务费收入分成配置列表' }, // this is for model namespace and
    }))(MemberServiceIncomeMetricSearch)
  }
  getMemberServiceIncomeMetricCreateForm = () => {
   	const {MemberServiceIncomeMetricCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "memberServiceIncomeMetric",
      data: state._bookPlaza.memberServiceIncomeMetricList,
      count: state._bookPlaza.memberServiceIncomeMetricCount,
      currentPage: state._bookPlaza.memberServiceIncomeMetricCurrentPageNumber,
      searchFormParameters: state._bookPlaza.memberServiceIncomeMetricSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'memberServiceIncomeMetricList', ref:state._bookPlaza, listDisplayName: '会员服务费收入分成配置列表'}, // this is for model namespace and
    }))(MemberServiceIncomeMetricCreateForm)
  }
  
  getMemberServiceIncomeMetricUpdateForm = () => {
  	const {MemberServiceIncomeMetricUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "memberServiceIncomeMetric",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'memberServiceIncomeMetricList', ref:state._bookPlaza, listDisplayName: '会员服务费收入分成配置列表' }, // this is for model namespace and
    }))(MemberServiceIncomeMetricUpdateForm)
  }

  getBookSearch = () => {
    const {BookSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书",
      role: "book",
      data: state._bookPlaza.bookList,
      count: state._bookPlaza.bookCount,
      currentPage: state._bookPlaza.bookCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'bookList', ref:state._bookPlaza, 
      listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookSearch)
  }
  getBookCreateForm = () => {
   	const {BookCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "book",
      data: state._bookPlaza.bookList,
      count: state._bookPlaza.bookCount,
      currentPage: state._bookPlaza.bookCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'bookList', ref:state._bookPlaza, listDisplayName: '书列表'}, // this is for model namespace and
    }))(BookCreateForm)
  }
  
  getBookUpdateForm = () => {
  	const {BookUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "book",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'bookList', ref:state._bookPlaza, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookUpdateForm)
  }

  getBookCopyStatusSearch = () => {
    const {BookCopyStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书籍副本状态",
      role: "bookCopyStatus",
      data: state._bookPlaza.bookCopyStatusList,
      count: state._bookPlaza.bookCopyStatusCount,
      currentPage: state._bookPlaza.bookCopyStatusCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookCopyStatusSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'bookCopyStatusList', ref:state._bookPlaza, 
      listDisplayName: '书籍副本状态列表' }, // this is for model namespace and
    }))(BookCopyStatusSearch)
  }
  getBookCopyStatusCreateForm = () => {
   	const {BookCopyStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookCopyStatus",
      data: state._bookPlaza.bookCopyStatusList,
      count: state._bookPlaza.bookCopyStatusCount,
      currentPage: state._bookPlaza.bookCopyStatusCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookCopyStatusSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'bookCopyStatusList', ref:state._bookPlaza, listDisplayName: '书籍副本状态列表'}, // this is for model namespace and
    }))(BookCopyStatusCreateForm)
  }
  
  getBookCopyStatusUpdateForm = () => {
  	const {BookCopyStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "bookCopyStatus",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'bookCopyStatusList', ref:state._bookPlaza, listDisplayName: '书籍副本状态列表' }, // this is for model namespace and
    }))(BookCopyStatusUpdateForm)
  }

  getBookReviewSearch = () => {
    const {BookReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书评",
      role: "bookReview",
      data: state._bookPlaza.bookReviewList,
      count: state._bookPlaza.bookReviewCount,
      currentPage: state._bookPlaza.bookReviewCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookReviewSearchFormParameters,
      loading: state._bookPlaza.loading,
      partialList: state._bookPlaza.partialList,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, 
      referenceName: 'bookPlaza', 
      listName: 'bookReviewList', ref:state._bookPlaza, 
      listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewSearch)
  }
  getBookReviewCreateForm = () => {
   	const {BookReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookReview",
      data: state._bookPlaza.bookReviewList,
      count: state._bookPlaza.bookReviewCount,
      currentPage: state._bookPlaza.bookReviewCurrentPageNumber,
      searchFormParameters: state._bookPlaza.bookReviewSearchFormParameters,
      loading: state._bookPlaza.loading,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, referenceName: 'bookPlaza', listName: 'bookReviewList', ref:state._bookPlaza, listDisplayName: '书评列表'}, // this is for model namespace and
    }))(BookReviewCreateForm)
  }
  
  getBookReviewUpdateForm = () => {
  	const {BookReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookPlaza.selectedRows,
      role: "bookReview",
      currentUpdateIndex: state._bookPlaza.currentUpdateIndex,
      owner: { type: '_bookPlaza', id: state._bookPlaza.id, listName: 'bookReviewList', ref:state._bookPlaza, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookPlazaDashboard} = GlobalComponents
  	const {BookPlazaPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/bookPlaza/:id/dashboard", component: BookPlazaDashboard},
  	{path:"/bookPlaza/:id/preference", component: BookPlazaPreference},
  	
  	
  	
  	{path:"/bookPlaza/:id/list/bookRecommendList", component: this.getBookRecommendSearch()},
  	{path:"/bookPlaza/:id/list/bookRecommendCreateForm", component: this.getBookRecommendCreateForm()},
  	{path:"/bookPlaza/:id/list/bookRecommendUpdateForm", component: this.getBookRecommendUpdateForm()},
   	
  	{path:"/bookPlaza/:id/list/bookSharingIncomeMetricList", component: this.getBookSharingIncomeMetricSearch()},
  	{path:"/bookPlaza/:id/list/bookSharingIncomeMetricCreateForm", component: this.getBookSharingIncomeMetricCreateForm()},
  	{path:"/bookPlaza/:id/list/bookSharingIncomeMetricUpdateForm", component: this.getBookSharingIncomeMetricUpdateForm()},
   	
  	{path:"/bookPlaza/:id/list/bookDonationIncomeMetricList", component: this.getBookDonationIncomeMetricSearch()},
  	{path:"/bookPlaza/:id/list/bookDonationIncomeMetricCreateForm", component: this.getBookDonationIncomeMetricCreateForm()},
  	{path:"/bookPlaza/:id/list/bookDonationIncomeMetricUpdateForm", component: this.getBookDonationIncomeMetricUpdateForm()},
   	
  	{path:"/bookPlaza/:id/list/memberServiceIncomeMetricList", component: this.getMemberServiceIncomeMetricSearch()},
  	{path:"/bookPlaza/:id/list/memberServiceIncomeMetricCreateForm", component: this.getMemberServiceIncomeMetricCreateForm()},
  	{path:"/bookPlaza/:id/list/memberServiceIncomeMetricUpdateForm", component: this.getMemberServiceIncomeMetricUpdateForm()},
   	
  	{path:"/bookPlaza/:id/list/bookList", component: this.getBookSearch()},
  	{path:"/bookPlaza/:id/list/bookCreateForm", component: this.getBookCreateForm()},
  	{path:"/bookPlaza/:id/list/bookUpdateForm", component: this.getBookUpdateForm()},
   	
  	{path:"/bookPlaza/:id/list/bookCopyStatusList", component: this.getBookCopyStatusSearch()},
  	{path:"/bookPlaza/:id/list/bookCopyStatusCreateForm", component: this.getBookCopyStatusCreateForm()},
  	{path:"/bookPlaza/:id/list/bookCopyStatusUpdateForm", component: this.getBookCopyStatusUpdateForm()},
   	
  	{path:"/bookPlaza/:id/list/bookReviewList", component: this.getBookReviewSearch()},
  	{path:"/bookPlaza/:id/list/bookReviewCreateForm", component: this.getBookReviewCreateForm()},
  	{path:"/bookPlaza/:id/list/bookReviewUpdateForm", component: this.getBookReviewUpdateForm()},
     	
  	
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

     //const {BookPlazaEditDetail} = GlobalComponents
     //const {BookPlazaViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.bookPlaza.id)}
            
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
  bookPlaza: state._bookPlaza,
  ...state,
}))(BookPlazaBizApp)



