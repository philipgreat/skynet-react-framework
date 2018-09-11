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
import styles from './Book.app.less'
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




class BookBizApp extends React.PureComponent {
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
      return ['/book/']
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
               <Link to={`/book/${this.props.book.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/book/${this.props.book.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getBookCopySearch = () => {
    const {BookCopySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书籍副本",
      role: "bookCopy",
      data: state._book.bookCopyList,
      count: state._book.bookCopyCount,
      currentPage: state._book.bookCopyCurrentPageNumber,
      searchFormParameters: state._book.bookCopySearchFormParameters,
      loading: state._book.loading,
      partialList: state._book.partialList,
      owner: { type: '_book', id: state._book.id, 
      referenceName: 'bookInfo', 
      listName: 'bookCopyList', ref:state._book, 
      listDisplayName: '书籍副本列表' }, // this is for model namespace and
    }))(BookCopySearch)
  }
  getBookCopyCreateForm = () => {
   	const {BookCopyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookCopy",
      data: state._book.bookCopyList,
      count: state._book.bookCopyCount,
      currentPage: state._book.bookCopyCurrentPageNumber,
      searchFormParameters: state._book.bookCopySearchFormParameters,
      loading: state._book.loading,
      owner: { type: '_book', id: state._book.id, referenceName: 'bookInfo', listName: 'bookCopyList', ref:state._book, listDisplayName: '书籍副本列表'}, // this is for model namespace and
    }))(BookCopyCreateForm)
  }
  
  getBookCopyUpdateForm = () => {
  	const {BookCopyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._book.selectedRows,
      role: "bookCopy",
      currentUpdateIndex: state._book.currentUpdateIndex,
      owner: { type: '_book', id: state._book.id, listName: 'bookCopyList', ref:state._book, listDisplayName: '书籍副本列表' }, // this is for model namespace and
    }))(BookCopyUpdateForm)
  }

  getBorrowingHistorySearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书借还历史",
      role: "borrowingHistory",
      data: state._book.borrowingHistoryList,
      count: state._book.borrowingHistoryCount,
      currentPage: state._book.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._book.borrowingHistorySearchFormParameters,
      loading: state._book.loading,
      partialList: state._book.partialList,
      owner: { type: '_book', id: state._book.id, 
      referenceName: 'book', 
      listName: 'borrowingHistoryList', ref:state._book, 
      listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "borrowingHistory",
      data: state._book.borrowingHistoryList,
      count: state._book.borrowingHistoryCount,
      currentPage: state._book.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._book.borrowingHistorySearchFormParameters,
      loading: state._book.loading,
      owner: { type: '_book', id: state._book.id, referenceName: 'book', listName: 'borrowingHistoryList', ref:state._book, listDisplayName: '图书借还历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._book.selectedRows,
      role: "borrowingHistory",
      currentUpdateIndex: state._book.currentUpdateIndex,
      owner: { type: '_book', id: state._book.id, listName: 'borrowingHistoryList', ref:state._book, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "借书超期费",
      role: "borrowingExpiredSku",
      data: state._book.borrowingExpiredSkuList,
      count: state._book.borrowingExpiredSkuCount,
      currentPage: state._book.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._book.borrowingExpiredSkuSearchFormParameters,
      loading: state._book.loading,
      partialList: state._book.partialList,
      owner: { type: '_book', id: state._book.id, 
      referenceName: 'book', 
      listName: 'borrowingExpiredSkuList', ref:state._book, 
      listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "borrowingExpiredSku",
      data: state._book.borrowingExpiredSkuList,
      count: state._book.borrowingExpiredSkuCount,
      currentPage: state._book.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._book.borrowingExpiredSkuSearchFormParameters,
      loading: state._book.loading,
      owner: { type: '_book', id: state._book.id, referenceName: 'book', listName: 'borrowingExpiredSkuList', ref:state._book, listDisplayName: '借书超期费列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._book.selectedRows,
      role: "borrowingExpiredSku",
      currentUpdateIndex: state._book.currentUpdateIndex,
      owner: { type: '_book', id: state._book.id, listName: 'borrowingExpiredSkuList', ref:state._book, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookReviewSearch = () => {
    const {BookReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书评",
      role: "bookReview",
      data: state._book.bookReviewList,
      count: state._book.bookReviewCount,
      currentPage: state._book.bookReviewCurrentPageNumber,
      searchFormParameters: state._book.bookReviewSearchFormParameters,
      loading: state._book.loading,
      partialList: state._book.partialList,
      owner: { type: '_book', id: state._book.id, 
      referenceName: 'bookInfo', 
      listName: 'bookReviewList', ref:state._book, 
      listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewSearch)
  }
  getBookReviewCreateForm = () => {
   	const {BookReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookReview",
      data: state._book.bookReviewList,
      count: state._book.bookReviewCount,
      currentPage: state._book.bookReviewCurrentPageNumber,
      searchFormParameters: state._book.bookReviewSearchFormParameters,
      loading: state._book.loading,
      owner: { type: '_book', id: state._book.id, referenceName: 'bookInfo', listName: 'bookReviewList', ref:state._book, listDisplayName: '书评列表'}, // this is for model namespace and
    }))(BookReviewCreateForm)
  }
  
  getBookReviewUpdateForm = () => {
  	const {BookReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._book.selectedRows,
      role: "bookReview",
      currentUpdateIndex: state._book.currentUpdateIndex,
      owner: { type: '_book', id: state._book.id, listName: 'bookReviewList', ref:state._book, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewUpdateForm)
  }

  getStoreSlideSearch = () => {
    const {StoreSlideSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "网点海报",
      role: "storeSlide",
      data: state._book.storeSlideList,
      count: state._book.storeSlideCount,
      currentPage: state._book.storeSlideCurrentPageNumber,
      searchFormParameters: state._book.storeSlideSearchFormParameters,
      loading: state._book.loading,
      partialList: state._book.partialList,
      owner: { type: '_book', id: state._book.id, 
      referenceName: 'book', 
      listName: 'storeSlideList', ref:state._book, 
      listDisplayName: '网点海报列表' }, // this is for model namespace and
    }))(StoreSlideSearch)
  }
  getStoreSlideCreateForm = () => {
   	const {StoreSlideCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "storeSlide",
      data: state._book.storeSlideList,
      count: state._book.storeSlideCount,
      currentPage: state._book.storeSlideCurrentPageNumber,
      searchFormParameters: state._book.storeSlideSearchFormParameters,
      loading: state._book.loading,
      owner: { type: '_book', id: state._book.id, referenceName: 'book', listName: 'storeSlideList', ref:state._book, listDisplayName: '网点海报列表'}, // this is for model namespace and
    }))(StoreSlideCreateForm)
  }
  
  getStoreSlideUpdateForm = () => {
  	const {StoreSlideUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._book.selectedRows,
      role: "storeSlide",
      currentUpdateIndex: state._book.currentUpdateIndex,
      owner: { type: '_book', id: state._book.id, listName: 'storeSlideList', ref:state._book, listDisplayName: '网点海报列表' }, // this is for model namespace and
    }))(StoreSlideUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookDashboard} = GlobalComponents
  	const {BookPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/book/:id/dashboard", component: BookDashboard},
  	{path:"/book/:id/preference", component: BookPreference},
  	
  	
  	
  	{path:"/book/:id/list/bookCopyList", component: this.getBookCopySearch()},
  	{path:"/book/:id/list/bookCopyCreateForm", component: this.getBookCopyCreateForm()},
  	{path:"/book/:id/list/bookCopyUpdateForm", component: this.getBookCopyUpdateForm()},
   	
  	{path:"/book/:id/list/borrowingHistoryList", component: this.getBorrowingHistorySearch()},
  	{path:"/book/:id/list/borrowingHistoryCreateForm", component: this.getBorrowingHistoryCreateForm()},
  	{path:"/book/:id/list/borrowingHistoryUpdateForm", component: this.getBorrowingHistoryUpdateForm()},
   	
  	{path:"/book/:id/list/borrowingExpiredSkuList", component: this.getBorrowingExpiredSkuSearch()},
  	{path:"/book/:id/list/borrowingExpiredSkuCreateForm", component: this.getBorrowingExpiredSkuCreateForm()},
  	{path:"/book/:id/list/borrowingExpiredSkuUpdateForm", component: this.getBorrowingExpiredSkuUpdateForm()},
   	
  	{path:"/book/:id/list/bookReviewList", component: this.getBookReviewSearch()},
  	{path:"/book/:id/list/bookReviewCreateForm", component: this.getBookReviewCreateForm()},
  	{path:"/book/:id/list/bookReviewUpdateForm", component: this.getBookReviewUpdateForm()},
   	
  	{path:"/book/:id/list/storeSlideList", component: this.getStoreSlideSearch()},
  	{path:"/book/:id/list/storeSlideCreateForm", component: this.getStoreSlideCreateForm()},
  	{path:"/book/:id/list/storeSlideUpdateForm", component: this.getStoreSlideUpdateForm()},
     	
  	
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

     //const {BookEditDetail} = GlobalComponents
     //const {BookViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.book.id)}
            
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
  book: state._book,
  ...state,
}))(BookBizApp)



