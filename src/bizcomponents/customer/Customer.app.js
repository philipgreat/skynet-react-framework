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
import styles from './Customer.app.less'
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




class CustomerBizApp extends React.PureComponent {
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
      return ['/customer/']
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
               <Link to={`/customer/${this.props.customer.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/customer/${this.props.customer.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getCompanyQrcodePromotionRecordSearch = () => {
    const {CompanyQrcodePromotionRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.companyQrcodePromotionRecordList,
      count: state._customer.companyQrcodePromotionRecordCount,
      currentPage: state._customer.companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters: state._customer.companyQrcodePromotionRecordSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'companyQrcodePromotionRecordList', ref:state._customer, listDisplayName: '公司二维码推广记录列表' }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordSearch)
  }
  getCompanyQrcodePromotionRecordCreateForm = () => {
   	const {CompanyQrcodePromotionRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.companyQrcodePromotionRecordList,
      count: state._customer.companyQrcodePromotionRecordCount,
      currentPage: state._customer.companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters: state._customer.companyQrcodePromotionRecordSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'companyQrcodePromotionRecordList', ref:state._customer, listDisplayName: '公司二维码推广记录列表'}, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordCreateForm)
  }
  
  getCompanyQrcodePromotionRecordUpdateForm = () => {
  	const {CompanyQrcodePromotionRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'companyQrcodePromotionRecordList', ref:state._customer, listDisplayName: '公司二维码推广记录列表' }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordUpdateForm)
  }

  getVehicleInfoSearch = () => {
    const {VehicleInfoSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInfoList,
      count: state._customer.vehicleInfoCount,
      currentPage: state._customer.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInfoSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'vehicleInfoList', ref:state._customer, listDisplayName: '车辆信息列表' }, // this is for model namespace and
    }))(VehicleInfoSearch)
  }
  getVehicleInfoCreateForm = () => {
   	const {VehicleInfoCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInfoList,
      count: state._customer.vehicleInfoCount,
      currentPage: state._customer.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInfoSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'vehicleInfoList', ref:state._customer, listDisplayName: '车辆信息列表'}, // this is for model namespace and
    }))(VehicleInfoCreateForm)
  }
  
  getVehicleInfoUpdateForm = () => {
  	const {VehicleInfoUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInfoList', ref:state._customer, listDisplayName: '车辆信息列表' }, // this is for model namespace and
    }))(VehicleInfoUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const {VehicleInspectionOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderList,
      count: state._customer.vehicleInspectionOrderCount,
      currentPage: state._customer.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'vehicleInspectionOrderList', ref:state._customer, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
   	const {VehicleInspectionOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderList,
      count: state._customer.vehicleInspectionOrderCount,
      currentPage: state._customer.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'vehicleInspectionOrderList', ref:state._customer, listDisplayName: '年检订单列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }
  
  getVehicleInspectionOrderUpdateForm = () => {
  	const {VehicleInspectionOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderList', ref:state._customer, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
  }

  getOrderDiscountCouponSearch = () => {
    const {OrderDiscountCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.orderDiscountCouponList,
      count: state._customer.orderDiscountCouponCount,
      currentPage: state._customer.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._customer.orderDiscountCouponSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'orderDiscountCouponList', ref:state._customer, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(OrderDiscountCouponSearch)
  }
  getOrderDiscountCouponCreateForm = () => {
   	const {OrderDiscountCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.orderDiscountCouponList,
      count: state._customer.orderDiscountCouponCount,
      currentPage: state._customer.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._customer.orderDiscountCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'orderDiscountCouponList', ref:state._customer, listDisplayName: '优惠券列表'}, // this is for model namespace and
    }))(OrderDiscountCouponCreateForm)
  }
  
  getOrderDiscountCouponUpdateForm = () => {
  	const {OrderDiscountCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'orderDiscountCouponList', ref:state._customer, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(OrderDiscountCouponUpdateForm)
  }

  getVehicleInspectionOrderCouponSearch = () => {
    const {VehicleInspectionOrderCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderCouponList,
      count: state._customer.vehicleInspectionOrderCouponCount,
      currentPage: state._customer.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'vehicleInspectionOrderCouponList', ref:state._customer, listDisplayName: '优惠券使用记录列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponSearch)
  }
  getVehicleInspectionOrderCouponCreateForm = () => {
   	const {VehicleInspectionOrderCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderCouponList,
      count: state._customer.vehicleInspectionOrderCouponCount,
      currentPage: state._customer.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'vehicleInspectionOrderCouponList', ref:state._customer, listDisplayName: '优惠券使用记录列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCouponCreateForm)
  }
  
  getVehicleInspectionOrderCouponUpdateForm = () => {
  	const {VehicleInspectionOrderCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderCouponList', ref:state._customer, listDisplayName: '优惠券使用记录列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponUpdateForm)
  }


  
  buildRouters = () =>{
  	const {CustomerDashboard} = GlobalComponents
  	const {CustomerPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/customer/:id/dashboard", component: CustomerDashboard},
  	{path:"/customer/:id/preference", component: CustomerPreference},
  	
  	
  	
  	{path:"/customer/:id/list/companyQrcodePromotionRecordList", component: this.getCompanyQrcodePromotionRecordSearch()},
  	{path:"/customer/:id/list/companyQrcodePromotionRecordCreateForm", component: this.getCompanyQrcodePromotionRecordCreateForm()},
  	{path:"/customer/:id/list/companyQrcodePromotionRecordUpdateForm", component: this.getCompanyQrcodePromotionRecordUpdateForm()},
   	
  	{path:"/customer/:id/list/vehicleInfoList", component: this.getVehicleInfoSearch()},
  	{path:"/customer/:id/list/vehicleInfoCreateForm", component: this.getVehicleInfoCreateForm()},
  	{path:"/customer/:id/list/vehicleInfoUpdateForm", component: this.getVehicleInfoUpdateForm()},
   	
  	{path:"/customer/:id/list/vehicleInspectionOrderList", component: this.getVehicleInspectionOrderSearch()},
  	{path:"/customer/:id/list/vehicleInspectionOrderCreateForm", component: this.getVehicleInspectionOrderCreateForm()},
  	{path:"/customer/:id/list/vehicleInspectionOrderUpdateForm", component: this.getVehicleInspectionOrderUpdateForm()},
   	
  	{path:"/customer/:id/list/orderDiscountCouponList", component: this.getOrderDiscountCouponSearch()},
  	{path:"/customer/:id/list/orderDiscountCouponCreateForm", component: this.getOrderDiscountCouponCreateForm()},
  	{path:"/customer/:id/list/orderDiscountCouponUpdateForm", component: this.getOrderDiscountCouponUpdateForm()},
   	
  	{path:"/customer/:id/list/vehicleInspectionOrderCouponList", component: this.getVehicleInspectionOrderCouponSearch()},
  	{path:"/customer/:id/list/vehicleInspectionOrderCouponCreateForm", component: this.getVehicleInspectionOrderCouponCreateForm()},
  	{path:"/customer/:id/list/vehicleInspectionOrderCouponUpdateForm", component: this.getVehicleInspectionOrderCouponUpdateForm()},
     	
  	
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
    logout = () => {
   
    console.log("log out called")
    this.props.dispatch({ type: 'launcher/signOut' })
  }
   render() {
     // const { collapsed, fetchingNotices,loading } = this.props
     const { collapsed } = this.props
     const { breadcrumb }  = this.props

     //const {CustomerEditDetail} = GlobalComponents
     //const {CustomerViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.customer.id)}
            
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
  customer: state._customer,
  ...state,
}))(CustomerBizApp)



