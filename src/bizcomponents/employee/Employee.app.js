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
import styles from './Employee.app.less'
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




class EmployeeBizApp extends React.PureComponent {
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
      return ['/employee/']
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
               <Link to={`/employee/${this.props.employee.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
  



  getMessageTemplateSearch = () => {
    const {MessageTemplateSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.messageTemplateList,
      count: state._employee.messageTemplateCount,
      currentPage: state._employee.messageTemplateCurrentPageNumber,
      searchFormParameters: state._employee.messageTemplateSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'updatedBy', listName: 'messageTemplateList', ref:state._employee, listDisplayName: '消息模板列表' }, // this is for model namespace and
    }))(MessageTemplateSearch)
  }
  getMessageTemplateCreateForm = () => {
   	const {MessageTemplateCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.messageTemplateList,
      count: state._employee.messageTemplateCount,
      currentPage: state._employee.messageTemplateCurrentPageNumber,
      searchFormParameters: state._employee.messageTemplateSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'updatedBy', listName: 'messageTemplateList', ref:state._employee, listDisplayName: '消息模板列表'}, // this is for model namespace and
    }))(MessageTemplateCreateForm)
  }
  
  getMessageTemplateUpdateForm = () => {
  	const {MessageTemplateUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'messageTemplateList', ref:state._employee, listDisplayName: '消息模板列表' }, // this is for model namespace and
    }))(MessageTemplateUpdateForm)
  }

  getLossAssessmentRecordSearch = () => {
    const {LossAssessmentRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.lossAssessmentRecordList,
      count: state._employee.lossAssessmentRecordCount,
      currentPage: state._employee.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._employee.lossAssessmentRecordSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'recordPerson', listName: 'lossAssessmentRecordList', ref:state._employee, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordSearch)
  }
  getLossAssessmentRecordCreateForm = () => {
   	const {LossAssessmentRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.lossAssessmentRecordList,
      count: state._employee.lossAssessmentRecordCount,
      currentPage: state._employee.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._employee.lossAssessmentRecordSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'recordPerson', listName: 'lossAssessmentRecordList', ref:state._employee, listDisplayName: '定损记录列表'}, // this is for model namespace and
    }))(LossAssessmentRecordCreateForm)
  }
  
  getLossAssessmentRecordUpdateForm = () => {
  	const {LossAssessmentRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'lossAssessmentRecordList', ref:state._employee, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordUpdateForm)
  }

  getBookCopyTransferSearch = () => {
    const {BookCopyTransferSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyTransferList,
      count: state._employee.bookCopyTransferCount,
      currentPage: state._employee.bookCopyTransferCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyTransferSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'responsibleEmployee', listName: 'bookCopyTransferList', ref:state._employee, listDisplayName: '图书副本迁移记录列表' }, // this is for model namespace and
    }))(BookCopyTransferSearch)
  }
  getBookCopyTransferCreateForm = () => {
   	const {BookCopyTransferCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyTransferList,
      count: state._employee.bookCopyTransferCount,
      currentPage: state._employee.bookCopyTransferCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyTransferSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'responsibleEmployee', listName: 'bookCopyTransferList', ref:state._employee, listDisplayName: '图书副本迁移记录列表'}, // this is for model namespace and
    }))(BookCopyTransferCreateForm)
  }
  
  getBookCopyTransferUpdateForm = () => {
  	const {BookCopyTransferUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopyTransferList', ref:state._employee, listDisplayName: '图书副本迁移记录列表' }, // this is for model namespace and
    }))(BookCopyTransferUpdateForm)
  }

  getBookTakeStockPlanSearch = () => {
    const {BookTakeStockPlanSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookTakeStockPlanList,
      count: state._employee.bookTakeStockPlanCount,
      currentPage: state._employee.bookTakeStockPlanCurrentPageNumber,
      searchFormParameters: state._employee.bookTakeStockPlanSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'planCreator', listName: 'bookTakeStockPlanList', ref:state._employee, listDisplayName: '图书盘点计划列表' }, // this is for model namespace and
    }))(BookTakeStockPlanSearch)
  }
  getBookTakeStockPlanCreateForm = () => {
   	const {BookTakeStockPlanCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookTakeStockPlanList,
      count: state._employee.bookTakeStockPlanCount,
      currentPage: state._employee.bookTakeStockPlanCurrentPageNumber,
      searchFormParameters: state._employee.bookTakeStockPlanSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'planCreator', listName: 'bookTakeStockPlanList', ref:state._employee, listDisplayName: '图书盘点计划列表'}, // this is for model namespace and
    }))(BookTakeStockPlanCreateForm)
  }
  
  getBookTakeStockPlanUpdateForm = () => {
  	const {BookTakeStockPlanUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookTakeStockPlanList', ref:state._employee, listDisplayName: '图书盘点计划列表' }, // this is for model namespace and
    }))(BookTakeStockPlanUpdateForm)
  }

  getBookTakeStockResultSearch = () => {
    const {BookTakeStockResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookTakeStockResultList,
      count: state._employee.bookTakeStockResultCount,
      currentPage: state._employee.bookTakeStockResultCurrentPageNumber,
      searchFormParameters: state._employee.bookTakeStockResultSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'bookTakeStockResultList', ref:state._employee, listDisplayName: '图书盘点结果列表' }, // this is for model namespace and
    }))(BookTakeStockResultSearch)
  }
  getBookTakeStockResultCreateForm = () => {
   	const {BookTakeStockResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookTakeStockResultList,
      count: state._employee.bookTakeStockResultCount,
      currentPage: state._employee.bookTakeStockResultCurrentPageNumber,
      searchFormParameters: state._employee.bookTakeStockResultSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'bookTakeStockResultList', ref:state._employee, listDisplayName: '图书盘点结果列表'}, // this is for model namespace and
    }))(BookTakeStockResultCreateForm)
  }
  
  getBookTakeStockResultUpdateForm = () => {
  	const {BookTakeStockResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookTakeStockResultList', ref:state._employee, listDisplayName: '图书盘点结果列表' }, // this is for model namespace and
    }))(BookTakeStockResultUpdateForm)
  }

  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyOperationRecordList,
      count: state._employee.bookCopyOperationRecordCount,
      currentPage: state._employee.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyOperationRecordSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'operationEmployee', listName: 'bookCopyOperationRecordList', ref:state._employee, listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyOperationRecordList,
      count: state._employee.bookCopyOperationRecordCount,
      currentPage: state._employee.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyOperationRecordSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'operationEmployee', listName: 'bookCopyOperationRecordList', ref:state._employee, listDisplayName: '书籍副本操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopyOperationRecordList', ref:state._employee, listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }

  getBookCopySharingApplicationSearch = () => {
    const {BookCopySharingApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopySharingApplicationList,
      count: state._employee.bookCopySharingApplicationCount,
      currentPage: state._employee.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._employee.bookCopySharingApplicationSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'bookCopySharingApplicationList', ref:state._employee, listDisplayName: '图书共享申请列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationSearch)
  }
  getBookCopySharingApplicationCreateForm = () => {
   	const {BookCopySharingApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopySharingApplicationList,
      count: state._employee.bookCopySharingApplicationCount,
      currentPage: state._employee.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._employee.bookCopySharingApplicationSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'bookCopySharingApplicationList', ref:state._employee, listDisplayName: '图书共享申请列表'}, // this is for model namespace and
    }))(BookCopySharingApplicationCreateForm)
  }
  
  getBookCopySharingApplicationUpdateForm = () => {
  	const {BookCopySharingApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopySharingApplicationList', ref:state._employee, listDisplayName: '图书共享申请列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationUpdateForm)
  }

  getCampaignSearch = () => {
    const {CampaignSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.campaignList,
      count: state._employee.campaignCount,
      currentPage: state._employee.campaignCurrentPageNumber,
      searchFormParameters: state._employee.campaignSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'publishEmployee', listName: 'campaignList', ref:state._employee, listDisplayName: '活动列表' }, // this is for model namespace and
    }))(CampaignSearch)
  }
  getCampaignCreateForm = () => {
   	const {CampaignCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.campaignList,
      count: state._employee.campaignCount,
      currentPage: state._employee.campaignCurrentPageNumber,
      searchFormParameters: state._employee.campaignSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'publishEmployee', listName: 'campaignList', ref:state._employee, listDisplayName: '活动列表'}, // this is for model namespace and
    }))(CampaignCreateForm)
  }
  
  getCampaignUpdateForm = () => {
  	const {CampaignUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'campaignList', ref:state._employee, listDisplayName: '活动列表' }, // this is for model namespace and
    }))(CampaignUpdateForm)
  }

  getEmployeeWorkingStoreSearch = () => {
    const {EmployeeWorkingStoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeWorkingStoreList,
      count: state._employee.employeeWorkingStoreCount,
      currentPage: state._employee.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._employee.employeeWorkingStoreSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'employeeWorkingStoreList', ref:state._employee, listDisplayName: '员工工作的网点列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreSearch)
  }
  getEmployeeWorkingStoreCreateForm = () => {
   	const {EmployeeWorkingStoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeWorkingStoreList,
      count: state._employee.employeeWorkingStoreCount,
      currentPage: state._employee.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._employee.employeeWorkingStoreSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'employeeWorkingStoreList', ref:state._employee, listDisplayName: '员工工作的网点列表'}, // this is for model namespace and
    }))(EmployeeWorkingStoreCreateForm)
  }
  
  getEmployeeWorkingStoreUpdateForm = () => {
  	const {EmployeeWorkingStoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeWorkingStoreList', ref:state._employee, listDisplayName: '员工工作的网点列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreUpdateForm)
  }


  
  buildRouters = () =>{
  	const {EmployeeDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/employee/:id/dashboard", component: EmployeeDashboard},
  	
  	
  	{path:"/employee/:id/list/messageTemplateList", component: this.getMessageTemplateSearch()},
  	{path:"/employee/:id/list/messageTemplateCreateForm", component: this.getMessageTemplateCreateForm()},
  	{path:"/employee/:id/list/messageTemplateUpdateForm", component: this.getMessageTemplateUpdateForm()},
   	
  	{path:"/employee/:id/list/lossAssessmentRecordList", component: this.getLossAssessmentRecordSearch()},
  	{path:"/employee/:id/list/lossAssessmentRecordCreateForm", component: this.getLossAssessmentRecordCreateForm()},
  	{path:"/employee/:id/list/lossAssessmentRecordUpdateForm", component: this.getLossAssessmentRecordUpdateForm()},
   	
  	{path:"/employee/:id/list/bookCopyTransferList", component: this.getBookCopyTransferSearch()},
  	{path:"/employee/:id/list/bookCopyTransferCreateForm", component: this.getBookCopyTransferCreateForm()},
  	{path:"/employee/:id/list/bookCopyTransferUpdateForm", component: this.getBookCopyTransferUpdateForm()},
   	
  	{path:"/employee/:id/list/bookTakeStockPlanList", component: this.getBookTakeStockPlanSearch()},
  	{path:"/employee/:id/list/bookTakeStockPlanCreateForm", component: this.getBookTakeStockPlanCreateForm()},
  	{path:"/employee/:id/list/bookTakeStockPlanUpdateForm", component: this.getBookTakeStockPlanUpdateForm()},
   	
  	{path:"/employee/:id/list/bookTakeStockResultList", component: this.getBookTakeStockResultSearch()},
  	{path:"/employee/:id/list/bookTakeStockResultCreateForm", component: this.getBookTakeStockResultCreateForm()},
  	{path:"/employee/:id/list/bookTakeStockResultUpdateForm", component: this.getBookTakeStockResultUpdateForm()},
   	
  	{path:"/employee/:id/list/bookCopyOperationRecordList", component: this.getBookCopyOperationRecordSearch()},
  	{path:"/employee/:id/list/bookCopyOperationRecordCreateForm", component: this.getBookCopyOperationRecordCreateForm()},
  	{path:"/employee/:id/list/bookCopyOperationRecordUpdateForm", component: this.getBookCopyOperationRecordUpdateForm()},
   	
  	{path:"/employee/:id/list/bookCopySharingApplicationList", component: this.getBookCopySharingApplicationSearch()},
  	{path:"/employee/:id/list/bookCopySharingApplicationCreateForm", component: this.getBookCopySharingApplicationCreateForm()},
  	{path:"/employee/:id/list/bookCopySharingApplicationUpdateForm", component: this.getBookCopySharingApplicationUpdateForm()},
   	
  	{path:"/employee/:id/list/campaignList", component: this.getCampaignSearch()},
  	{path:"/employee/:id/list/campaignCreateForm", component: this.getCampaignCreateForm()},
  	{path:"/employee/:id/list/campaignUpdateForm", component: this.getCampaignUpdateForm()},
   	
  	{path:"/employee/:id/list/employeeWorkingStoreList", component: this.getEmployeeWorkingStoreSearch()},
  	{path:"/employee/:id/list/employeeWorkingStoreCreateForm", component: this.getEmployeeWorkingStoreCreateForm()},
  	{path:"/employee/:id/list/employeeWorkingStoreUpdateForm", component: this.getEmployeeWorkingStoreUpdateForm()},
     	
  	
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

     //const {EmployeeEditDetail} = GlobalComponents
     //const {EmployeeViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.employee.id)}
            
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
  employee: state._employee,
  ...state,
}))(EmployeeBizApp)



