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
import styles from './AvailableProduct.app.less'
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




class AvailableProductBizApp extends React.PureComponent {
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
      return ['/availableProduct/']
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
               <Link to={`/availableProduct/${this.props.availableProduct.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
      data: state._availableProduct.servicePriceList,
      count: state._availableProduct.servicePriceCount,
      currentPage: state._availableProduct.servicePriceCurrentPageNumber,
      searchFormParameters: state._availableProduct.servicePriceSearchFormParameters,
      loading: state._availableProduct.loading,
      partialList: state._availableProduct.partialList,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'servicePriceList', ref:state._availableProduct, listDisplayName: '合同价格列表' }, // this is for model namespace and
    }))(ServicePriceSearch)
  }
  getServicePriceCreateForm = () => {
   	const {ServicePriceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.servicePriceList,
      count: state._availableProduct.servicePriceCount,
      currentPage: state._availableProduct.servicePriceCurrentPageNumber,
      searchFormParameters: state._availableProduct.servicePriceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'servicePriceList', ref:state._availableProduct, listDisplayName: '合同价格列表'}, // this is for model namespace and
    }))(ServicePriceCreateForm)
  }
  
  getServicePriceUpdateForm = () => {
  	const {ServicePriceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'servicePriceList', ref:state._availableProduct, listDisplayName: '合同价格列表' }, // this is for model namespace and
    }))(ServicePriceUpdateForm)
  }

  getAvailableServiceSearch = () => {
    const {AvailableServiceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableServiceList,
      count: state._availableProduct.availableServiceCount,
      currentPage: state._availableProduct.availableServiceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableServiceSearchFormParameters,
      loading: state._availableProduct.loading,
      partialList: state._availableProduct.partialList,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'availableProduct', listName: 'availableServiceList', ref:state._availableProduct, listDisplayName: '服务范围列表' }, // this is for model namespace and
    }))(AvailableServiceSearch)
  }
  getAvailableServiceCreateForm = () => {
   	const {AvailableServiceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableServiceList,
      count: state._availableProduct.availableServiceCount,
      currentPage: state._availableProduct.availableServiceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableServiceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'availableProduct', listName: 'availableServiceList', ref:state._availableProduct, listDisplayName: '服务范围列表'}, // this is for model namespace and
    }))(AvailableServiceCreateForm)
  }
  
  getAvailableServiceUpdateForm = () => {
  	const {AvailableServiceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableServiceList', ref:state._availableProduct, listDisplayName: '服务范围列表' }, // this is for model namespace and
    }))(AvailableServiceUpdateForm)
  }

  getProductPriceSearch = () => {
    const {ProductPriceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.productPriceList,
      count: state._availableProduct.productPriceCount,
      currentPage: state._availableProduct.productPriceCurrentPageNumber,
      searchFormParameters: state._availableProduct.productPriceSearchFormParameters,
      loading: state._availableProduct.loading,
      partialList: state._availableProduct.partialList,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'productPriceList', ref:state._availableProduct, listDisplayName: '产品价格列表' }, // this is for model namespace and
    }))(ProductPriceSearch)
  }
  getProductPriceCreateForm = () => {
   	const {ProductPriceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.productPriceList,
      count: state._availableProduct.productPriceCount,
      currentPage: state._availableProduct.productPriceCurrentPageNumber,
      searchFormParameters: state._availableProduct.productPriceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'productPriceList', ref:state._availableProduct, listDisplayName: '产品价格列表'}, // this is for model namespace and
    }))(ProductPriceCreateForm)
  }
  
  getProductPriceUpdateForm = () => {
  	const {ProductPriceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'productPriceList', ref:state._availableProduct, listDisplayName: '产品价格列表' }, // this is for model namespace and
    }))(ProductPriceUpdateForm)
  }

  getAvailableInsuranceSearch = () => {
    const {AvailableInsuranceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableInsuranceList,
      count: state._availableProduct.availableInsuranceCount,
      currentPage: state._availableProduct.availableInsuranceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableInsuranceSearchFormParameters,
      loading: state._availableProduct.loading,
      partialList: state._availableProduct.partialList,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'availableInsuranceList', ref:state._availableProduct, listDisplayName: '车辆代办保险列表' }, // this is for model namespace and
    }))(AvailableInsuranceSearch)
  }
  getAvailableInsuranceCreateForm = () => {
   	const {AvailableInsuranceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableInsuranceList,
      count: state._availableProduct.availableInsuranceCount,
      currentPage: state._availableProduct.availableInsuranceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableInsuranceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'availableInsuranceList', ref:state._availableProduct, listDisplayName: '车辆代办保险列表'}, // this is for model namespace and
    }))(AvailableInsuranceCreateForm)
  }
  
  getAvailableInsuranceUpdateForm = () => {
  	const {AvailableInsuranceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableInsuranceList', ref:state._availableProduct, listDisplayName: '车辆代办保险列表' }, // this is for model namespace and
    }))(AvailableInsuranceUpdateForm)
  }

  getAvailableHandOverItemSearch = () => {
    const {AvailableHandOverItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableHandOverItemList,
      count: state._availableProduct.availableHandOverItemCount,
      currentPage: state._availableProduct.availableHandOverItemCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableHandOverItemSearchFormParameters,
      loading: state._availableProduct.loading,
      partialList: state._availableProduct.partialList,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'availableHandOverItemList', ref:state._availableProduct, listDisplayName: '交接检查项列表' }, // this is for model namespace and
    }))(AvailableHandOverItemSearch)
  }
  getAvailableHandOverItemCreateForm = () => {
   	const {AvailableHandOverItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableHandOverItemList,
      count: state._availableProduct.availableHandOverItemCount,
      currentPage: state._availableProduct.availableHandOverItemCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableHandOverItemSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'availableHandOverItemList', ref:state._availableProduct, listDisplayName: '交接检查项列表'}, // this is for model namespace and
    }))(AvailableHandOverItemCreateForm)
  }
  
  getAvailableHandOverItemUpdateForm = () => {
  	const {AvailableHandOverItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableHandOverItemList', ref:state._availableProduct, listDisplayName: '交接检查项列表' }, // this is for model namespace and
    }))(AvailableHandOverItemUpdateForm)
  }

  getPreorderPromotionSearch = () => {
    const {PreorderPromotionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.preorderPromotionList,
      count: state._availableProduct.preorderPromotionCount,
      currentPage: state._availableProduct.preorderPromotionCurrentPageNumber,
      searchFormParameters: state._availableProduct.preorderPromotionSearchFormParameters,
      loading: state._availableProduct.loading,
      partialList: state._availableProduct.partialList,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'preorderPromotionList', ref:state._availableProduct, listDisplayName: '提前下单优惠列表' }, // this is for model namespace and
    }))(PreorderPromotionSearch)
  }
  getPreorderPromotionCreateForm = () => {
   	const {PreorderPromotionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.preorderPromotionList,
      count: state._availableProduct.preorderPromotionCount,
      currentPage: state._availableProduct.preorderPromotionCurrentPageNumber,
      searchFormParameters: state._availableProduct.preorderPromotionSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, referenceName: 'product', listName: 'preorderPromotionList', ref:state._availableProduct, listDisplayName: '提前下单优惠列表'}, // this is for model namespace and
    }))(PreorderPromotionCreateForm)
  }
  
  getPreorderPromotionUpdateForm = () => {
  	const {PreorderPromotionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'preorderPromotionList', ref:state._availableProduct, listDisplayName: '提前下单优惠列表' }, // this is for model namespace and
    }))(PreorderPromotionUpdateForm)
  }


  
  buildRouters = () =>{
  	const {AvailableProductDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/availableProduct/:id/dashboard", component: AvailableProductDashboard},
  	
  	
  	{path:"/availableProduct/:id/list/servicePriceList", component: this.getServicePriceSearch()},
  	{path:"/availableProduct/:id/list/servicePriceCreateForm", component: this.getServicePriceCreateForm()},
  	{path:"/availableProduct/:id/list/servicePriceUpdateForm", component: this.getServicePriceUpdateForm()},
   	
  	{path:"/availableProduct/:id/list/availableServiceList", component: this.getAvailableServiceSearch()},
  	{path:"/availableProduct/:id/list/availableServiceCreateForm", component: this.getAvailableServiceCreateForm()},
  	{path:"/availableProduct/:id/list/availableServiceUpdateForm", component: this.getAvailableServiceUpdateForm()},
   	
  	{path:"/availableProduct/:id/list/productPriceList", component: this.getProductPriceSearch()},
  	{path:"/availableProduct/:id/list/productPriceCreateForm", component: this.getProductPriceCreateForm()},
  	{path:"/availableProduct/:id/list/productPriceUpdateForm", component: this.getProductPriceUpdateForm()},
   	
  	{path:"/availableProduct/:id/list/availableInsuranceList", component: this.getAvailableInsuranceSearch()},
  	{path:"/availableProduct/:id/list/availableInsuranceCreateForm", component: this.getAvailableInsuranceCreateForm()},
  	{path:"/availableProduct/:id/list/availableInsuranceUpdateForm", component: this.getAvailableInsuranceUpdateForm()},
   	
  	{path:"/availableProduct/:id/list/availableHandOverItemList", component: this.getAvailableHandOverItemSearch()},
  	{path:"/availableProduct/:id/list/availableHandOverItemCreateForm", component: this.getAvailableHandOverItemCreateForm()},
  	{path:"/availableProduct/:id/list/availableHandOverItemUpdateForm", component: this.getAvailableHandOverItemUpdateForm()},
   	
  	{path:"/availableProduct/:id/list/preorderPromotionList", component: this.getPreorderPromotionSearch()},
  	{path:"/availableProduct/:id/list/preorderPromotionCreateForm", component: this.getPreorderPromotionCreateForm()},
  	{path:"/availableProduct/:id/list/preorderPromotionUpdateForm", component: this.getPreorderPromotionUpdateForm()},
     	
  	
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

     //const {AvailableProductEditDetail} = GlobalComponents
     //const {AvailableProductViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.availableProduct.id)}
            
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
  availableProduct: state._availableProduct,
  ...state,
}))(AvailableProductBizApp)



