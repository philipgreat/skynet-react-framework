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
import styles from './BookCopy.app.less'
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




class BookCopyBizApp extends React.PureComponent {
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
      return ['/bookCopy/']
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
               <Link to={`/bookCopy/${this.props.bookCopy.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/bookCopy/${this.props.bookCopy.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getLossAssessmentRecordSearch = () => {
    const {LossAssessmentRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.lossAssessmentRecordList,
      count: state._bookCopy.lossAssessmentRecordCount,
      currentPage: state._bookCopy.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.lossAssessmentRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'lossAssessmentRecordList', ref:state._bookCopy, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordSearch)
  }
  getLossAssessmentRecordCreateForm = () => {
   	const {LossAssessmentRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.lossAssessmentRecordList,
      count: state._bookCopy.lossAssessmentRecordCount,
      currentPage: state._bookCopy.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.lossAssessmentRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'lossAssessmentRecordList', ref:state._bookCopy, listDisplayName: '定损记录列表'}, // this is for model namespace and
    }))(LossAssessmentRecordCreateForm)
  }
  
  getLossAssessmentRecordUpdateForm = () => {
  	const {LossAssessmentRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'lossAssessmentRecordList', ref:state._bookCopy, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordUpdateForm)
  }

  getBookCopyTransferSearch = () => {
    const {BookCopyTransferSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyTransferList,
      count: state._bookCopy.bookCopyTransferCount,
      currentPage: state._bookCopy.bookCopyTransferCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyTransferSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyTransferList', ref:state._bookCopy, listDisplayName: '图书副本迁移记录列表' }, // this is for model namespace and
    }))(BookCopyTransferSearch)
  }
  getBookCopyTransferCreateForm = () => {
   	const {BookCopyTransferCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyTransferList,
      count: state._bookCopy.bookCopyTransferCount,
      currentPage: state._bookCopy.bookCopyTransferCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyTransferSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyTransferList', ref:state._bookCopy, listDisplayName: '图书副本迁移记录列表'}, // this is for model namespace and
    }))(BookCopyTransferCreateForm)
  }
  
  getBookCopyTransferUpdateForm = () => {
  	const {BookCopyTransferUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookCopyTransferList', ref:state._bookCopy, listDisplayName: '图书副本迁移记录列表' }, // this is for model namespace and
    }))(BookCopyTransferUpdateForm)
  }

  getBookTakeStockResultSearch = () => {
    const {BookTakeStockResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookTakeStockResultList,
      count: state._bookCopy.bookTakeStockResultCount,
      currentPage: state._bookCopy.bookTakeStockResultCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookTakeStockResultSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookTakeStockResultList', ref:state._bookCopy, listDisplayName: '图书盘点结果列表' }, // this is for model namespace and
    }))(BookTakeStockResultSearch)
  }
  getBookTakeStockResultCreateForm = () => {
   	const {BookTakeStockResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookTakeStockResultList,
      count: state._bookCopy.bookTakeStockResultCount,
      currentPage: state._bookCopy.bookTakeStockResultCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookTakeStockResultSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookTakeStockResultList', ref:state._bookCopy, listDisplayName: '图书盘点结果列表'}, // this is for model namespace and
    }))(BookTakeStockResultCreateForm)
  }
  
  getBookTakeStockResultUpdateForm = () => {
  	const {BookTakeStockResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookTakeStockResultList', ref:state._bookCopy, listDisplayName: '图书盘点结果列表' }, // this is for model namespace and
    }))(BookTakeStockResultUpdateForm)
  }

  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyOperationRecordList,
      count: state._bookCopy.bookCopyOperationRecordCount,
      currentPage: state._bookCopy.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyOperationRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyOperationRecordList', ref:state._bookCopy, listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyOperationRecordList,
      count: state._bookCopy.bookCopyOperationRecordCount,
      currentPage: state._bookCopy.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyOperationRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyOperationRecordList', ref:state._bookCopy, listDisplayName: '书籍副本操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookCopyOperationRecordList', ref:state._bookCopy, listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }

  getBorrowingHistorySearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingHistoryList,
      count: state._bookCopy.borrowingHistoryCount,
      currentPage: state._bookCopy.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingHistorySearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingHistoryList', ref:state._bookCopy, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingHistoryList,
      count: state._bookCopy.borrowingHistoryCount,
      currentPage: state._bookCopy.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingHistorySearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingHistoryList', ref:state._bookCopy, listDisplayName: '图书借还历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'borrowingHistoryList', ref:state._bookCopy, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingExpiredSkuList,
      count: state._bookCopy.borrowingExpiredSkuCount,
      currentPage: state._bookCopy.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingExpiredSkuSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingExpiredSkuList', ref:state._bookCopy, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingExpiredSkuList,
      count: state._bookCopy.borrowingExpiredSkuCount,
      currentPage: state._bookCopy.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingExpiredSkuSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingExpiredSkuList', ref:state._bookCopy, listDisplayName: '借书超期费列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'borrowingExpiredSkuList', ref:state._bookCopy, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookReviewSearch = () => {
    const {BookReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookReviewList,
      count: state._bookCopy.bookReviewCount,
      currentPage: state._bookCopy.bookReviewCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookReviewSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookReviewList', ref:state._bookCopy, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewSearch)
  }
  getBookReviewCreateForm = () => {
   	const {BookReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookReviewList,
      count: state._bookCopy.bookReviewCount,
      currentPage: state._bookCopy.bookReviewCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookReviewSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookReviewList', ref:state._bookCopy, listDisplayName: '书评列表'}, // this is for model namespace and
    }))(BookReviewCreateForm)
  }
  
  getBookReviewUpdateForm = () => {
  	const {BookReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookReviewList', ref:state._bookCopy, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookCopyDashboard} = GlobalComponents
  	const {BookCopyPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/bookCopy/:id/dashboard", component: BookCopyDashboard},
  	{path:"/bookCopy/:id/preference", component: BookCopyPreference},
  	
  	
  	
  	{path:"/bookCopy/:id/list/lossAssessmentRecordList", component: this.getLossAssessmentRecordSearch()},
  	{path:"/bookCopy/:id/list/lossAssessmentRecordCreateForm", component: this.getLossAssessmentRecordCreateForm()},
  	{path:"/bookCopy/:id/list/lossAssessmentRecordUpdateForm", component: this.getLossAssessmentRecordUpdateForm()},
   	
  	{path:"/bookCopy/:id/list/bookCopyTransferList", component: this.getBookCopyTransferSearch()},
  	{path:"/bookCopy/:id/list/bookCopyTransferCreateForm", component: this.getBookCopyTransferCreateForm()},
  	{path:"/bookCopy/:id/list/bookCopyTransferUpdateForm", component: this.getBookCopyTransferUpdateForm()},
   	
  	{path:"/bookCopy/:id/list/bookTakeStockResultList", component: this.getBookTakeStockResultSearch()},
  	{path:"/bookCopy/:id/list/bookTakeStockResultCreateForm", component: this.getBookTakeStockResultCreateForm()},
  	{path:"/bookCopy/:id/list/bookTakeStockResultUpdateForm", component: this.getBookTakeStockResultUpdateForm()},
   	
  	{path:"/bookCopy/:id/list/bookCopyOperationRecordList", component: this.getBookCopyOperationRecordSearch()},
  	{path:"/bookCopy/:id/list/bookCopyOperationRecordCreateForm", component: this.getBookCopyOperationRecordCreateForm()},
  	{path:"/bookCopy/:id/list/bookCopyOperationRecordUpdateForm", component: this.getBookCopyOperationRecordUpdateForm()},
   	
  	{path:"/bookCopy/:id/list/borrowingHistoryList", component: this.getBorrowingHistorySearch()},
  	{path:"/bookCopy/:id/list/borrowingHistoryCreateForm", component: this.getBorrowingHistoryCreateForm()},
  	{path:"/bookCopy/:id/list/borrowingHistoryUpdateForm", component: this.getBorrowingHistoryUpdateForm()},
   	
  	{path:"/bookCopy/:id/list/borrowingExpiredSkuList", component: this.getBorrowingExpiredSkuSearch()},
  	{path:"/bookCopy/:id/list/borrowingExpiredSkuCreateForm", component: this.getBorrowingExpiredSkuCreateForm()},
  	{path:"/bookCopy/:id/list/borrowingExpiredSkuUpdateForm", component: this.getBorrowingExpiredSkuUpdateForm()},
   	
  	{path:"/bookCopy/:id/list/bookReviewList", component: this.getBookReviewSearch()},
  	{path:"/bookCopy/:id/list/bookReviewCreateForm", component: this.getBookReviewCreateForm()},
  	{path:"/bookCopy/:id/list/bookReviewUpdateForm", component: this.getBookReviewUpdateForm()},
     	
  	
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

     //const {BookCopyEditDetail} = GlobalComponents
     //const {BookCopyViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.bookCopy.id)}
            
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
  bookCopy: state._bookCopy,
  ...state,
}))(BookCopyBizApp)



