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
  Input,
} from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './AvailableService.app.less'
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




class AvailableServiceBizApp extends React.PureComponent {
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
      return ['/availableService/']
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
               <Link to={`/availableService/${this.props.availableService.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
  



  getServicePriceSearch = () => {
    const {ServicePriceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.servicePriceList,
      count: state._availableService.servicePriceCount,
      currentPage: state._availableService.servicePriceCurrentPageNumber,
      searchFormParameters: state._availableService.servicePriceSearchFormParameters,
      loading: state._availableService.loading,
      partialList: state._availableService.partialList,
      owner: { type: '_availableService', id: state._availableService.id, referenceName: 'availableService', listName: 'servicePriceList', ref:state._availableService, listDisplayName: '合同价格列表' }, // this is for model namespace and
    }))(ServicePriceSearch)
  }
  getServicePriceCreateForm = () => {
   	const {ServicePriceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.servicePriceList,
      count: state._availableService.servicePriceCount,
      currentPage: state._availableService.servicePriceCurrentPageNumber,
      searchFormParameters: state._availableService.servicePriceSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, referenceName: 'availableService', listName: 'servicePriceList', ref:state._availableService, listDisplayName: '合同价格列表'}, // this is for model namespace and
    }))(ServicePriceCreateForm)
  }
  
  getServicePriceUpdateForm = () => {
  	const {ServicePriceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'servicePriceList', ref:state._availableService, listDisplayName: '合同价格列表' }, // this is for model namespace and
    }))(ServicePriceUpdateForm)
  }

  getVehicleRepairingAllowanceSearch = () => {
    const {VehicleRepairingAllowanceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleRepairingAllowanceList,
      count: state._availableService.vehicleRepairingAllowanceCount,
      currentPage: state._availableService.vehicleRepairingAllowanceCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleRepairingAllowanceSearchFormParameters,
      loading: state._availableService.loading,
      partialList: state._availableService.partialList,
      owner: { type: '_availableService', id: state._availableService.id, referenceName: 'service', listName: 'vehicleRepairingAllowanceList', ref:state._availableService, listDisplayName: '汽车修理平台补贴列表' }, // this is for model namespace and
    }))(VehicleRepairingAllowanceSearch)
  }
  getVehicleRepairingAllowanceCreateForm = () => {
   	const {VehicleRepairingAllowanceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleRepairingAllowanceList,
      count: state._availableService.vehicleRepairingAllowanceCount,
      currentPage: state._availableService.vehicleRepairingAllowanceCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleRepairingAllowanceSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, referenceName: 'service', listName: 'vehicleRepairingAllowanceList', ref:state._availableService, listDisplayName: '汽车修理平台补贴列表'}, // this is for model namespace and
    }))(VehicleRepairingAllowanceCreateForm)
  }
  
  getVehicleRepairingAllowanceUpdateForm = () => {
  	const {VehicleRepairingAllowanceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleRepairingAllowanceList', ref:state._availableService, listDisplayName: '汽车修理平台补贴列表' }, // this is for model namespace and
    }))(VehicleRepairingAllowanceUpdateForm)
  }

  getVehicleServiceCompanyBusinessScopeSearch = () => {
    const {VehicleServiceCompanyBusinessScopeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleServiceCompanyBusinessScopeList,
      count: state._availableService.vehicleServiceCompanyBusinessScopeCount,
      currentPage: state._availableService.vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._availableService.loading,
      partialList: state._availableService.partialList,
      owner: { type: '_availableService', id: state._availableService.id, referenceName: 'availableService', listName: 'vehicleServiceCompanyBusinessScopeList', ref:state._availableService, listDisplayName: '商户服务范围列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeSearch)
  }
  getVehicleServiceCompanyBusinessScopeCreateForm = () => {
   	const {VehicleServiceCompanyBusinessScopeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleServiceCompanyBusinessScopeList,
      count: state._availableService.vehicleServiceCompanyBusinessScopeCount,
      currentPage: state._availableService.vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, referenceName: 'availableService', listName: 'vehicleServiceCompanyBusinessScopeList', ref:state._availableService, listDisplayName: '商户服务范围列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeCreateForm)
  }
  
  getVehicleServiceCompanyBusinessScopeUpdateForm = () => {
  	const {VehicleServiceCompanyBusinessScopeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleServiceCompanyBusinessScopeList', ref:state._availableService, listDisplayName: '商户服务范围列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeUpdateForm)
  }


  
  buildRouters = () =>{
  	const {AvailableServiceDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/availableService/:id/dashboard", component: AvailableServiceDashboard},
  	
  	
  	{path:"/availableService/:id/list/servicePriceList", component: this.getServicePriceSearch()},
  	{path:"/availableService/:id/list/servicePriceCreateForm", component: this.getServicePriceCreateForm()},
  	{path:"/availableService/:id/list/servicePriceUpdateForm", component: this.getServicePriceUpdateForm()},
   	
  	{path:"/availableService/:id/list/vehicleRepairingAllowanceList", component: this.getVehicleRepairingAllowanceSearch()},
  	{path:"/availableService/:id/list/vehicleRepairingAllowanceCreateForm", component: this.getVehicleRepairingAllowanceCreateForm()},
  	{path:"/availableService/:id/list/vehicleRepairingAllowanceUpdateForm", component: this.getVehicleRepairingAllowanceUpdateForm()},
   	
  	{path:"/availableService/:id/list/vehicleServiceCompanyBusinessScopeList", component: this.getVehicleServiceCompanyBusinessScopeSearch()},
  	{path:"/availableService/:id/list/vehicleServiceCompanyBusinessScopeCreateForm", component: this.getVehicleServiceCompanyBusinessScopeCreateForm()},
  	{path:"/availableService/:id/list/vehicleServiceCompanyBusinessScopeUpdateForm", component: this.getVehicleServiceCompanyBusinessScopeUpdateForm()},
     	
  	
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
    const title = '代审车服务平台'
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

   render() {
     // const { collapsed, fetchingNotices,loading } = this.props
     const { collapsed } = this.props
     const { breadcrumb }  = this.props

     //const {AvailableServiceEditDetail} = GlobalComponents
     //const {AvailableServiceViewDetail} = GlobalComponents
     
     
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
          <div className={styles.right}>
          
          <AutoComplete
            className="certain-category-search"
            placeholder="请输入名称"
            optionLabelProp="value"
            
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
            />
          </AutoComplete> </div>
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
           




             {this.getNavMenuItems(this.props.availableService.id)}
            
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
  availableService: state._availableService,
  ...state,
}))(AvailableServiceBizApp)



