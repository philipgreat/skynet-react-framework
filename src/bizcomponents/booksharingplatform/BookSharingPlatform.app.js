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
import styles from './BookSharingPlatform.app.less'
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




class BookSharingPlatformBizApp extends React.PureComponent {
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
      return ['/bookSharingPlatform/']
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
               <Link to={`/bookSharingPlatform/${this.props.bookSharingPlatform.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/bookSharingPlatform/${this.props.bookSharingPlatform.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getLossDiscountSearch = () => {
    const {LossDiscountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "定损折扣",
      role: "lossDiscount",
      data: state._bookSharingPlatform.lossDiscountList,
      count: state._bookSharingPlatform.lossDiscountCount,
      currentPage: state._bookSharingPlatform.lossDiscountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.lossDiscountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'lossDiscountList', ref:state._bookSharingPlatform, 
      listDisplayName: '定损折扣列表' }, // this is for model namespace and
    }))(LossDiscountSearch)
  }
  getLossDiscountCreateForm = () => {
   	const {LossDiscountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "lossDiscount",
      data: state._bookSharingPlatform.lossDiscountList,
      count: state._bookSharingPlatform.lossDiscountCount,
      currentPage: state._bookSharingPlatform.lossDiscountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.lossDiscountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'lossDiscountList', ref:state._bookSharingPlatform, listDisplayName: '定损折扣列表'}, // this is for model namespace and
    }))(LossDiscountCreateForm)
  }
  
  getLossDiscountUpdateForm = () => {
  	const {LossDiscountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "lossDiscount",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'lossDiscountList', ref:state._bookSharingPlatform, listDisplayName: '定损折扣列表' }, // this is for model namespace and
    }))(LossDiscountUpdateForm)
  }

  getPlatformConfigurationSearch = () => {
    const {PlatformConfigurationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "平台配置",
      role: "platformConfiguration",
      data: state._bookSharingPlatform.platformConfigurationList,
      count: state._bookSharingPlatform.platformConfigurationCount,
      currentPage: state._bookSharingPlatform.platformConfigurationCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformConfigurationSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'platformConfigurationList', ref:state._bookSharingPlatform, 
      listDisplayName: '平台配置列表' }, // this is for model namespace and
    }))(PlatformConfigurationSearch)
  }
  getPlatformConfigurationCreateForm = () => {
   	const {PlatformConfigurationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "platformConfiguration",
      data: state._bookSharingPlatform.platformConfigurationList,
      count: state._bookSharingPlatform.platformConfigurationCount,
      currentPage: state._bookSharingPlatform.platformConfigurationCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformConfigurationSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'platformConfigurationList', ref:state._bookSharingPlatform, listDisplayName: '平台配置列表'}, // this is for model namespace and
    }))(PlatformConfigurationCreateForm)
  }
  
  getPlatformConfigurationUpdateForm = () => {
  	const {PlatformConfigurationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "platformConfiguration",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'platformConfigurationList', ref:state._bookSharingPlatform, listDisplayName: '平台配置列表' }, // this is for model namespace and
    }))(PlatformConfigurationUpdateForm)
  }

  getAccountDataSearch = () => {
    const {AccountDataSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "帐户数据",
      role: "accountData",
      data: state._bookSharingPlatform.accountDataList,
      count: state._bookSharingPlatform.accountDataCount,
      currentPage: state._bookSharingPlatform.accountDataCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.accountDataSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'accountDataList', ref:state._bookSharingPlatform, 
      listDisplayName: '帐户数据列表' }, // this is for model namespace and
    }))(AccountDataSearch)
  }
  getAccountDataCreateForm = () => {
   	const {AccountDataCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "accountData",
      data: state._bookSharingPlatform.accountDataList,
      count: state._bookSharingPlatform.accountDataCount,
      currentPage: state._bookSharingPlatform.accountDataCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.accountDataSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'accountDataList', ref:state._bookSharingPlatform, listDisplayName: '帐户数据列表'}, // this is for model namespace and
    }))(AccountDataCreateForm)
  }
  
  getAccountDataUpdateForm = () => {
  	const {AccountDataUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "accountData",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'accountDataList', ref:state._bookSharingPlatform, listDisplayName: '帐户数据列表' }, // this is for model namespace and
    }))(AccountDataUpdateForm)
  }

  getCitySearch = () => {
    const {CitySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "城市",
      role: "city",
      data: state._bookSharingPlatform.cityList,
      count: state._bookSharingPlatform.cityCount,
      currentPage: state._bookSharingPlatform.cityCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.citySearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'cityList', ref:state._bookSharingPlatform, 
      listDisplayName: '城市列表' }, // this is for model namespace and
    }))(CitySearch)
  }
  getCityCreateForm = () => {
   	const {CityCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "city",
      data: state._bookSharingPlatform.cityList,
      count: state._bookSharingPlatform.cityCount,
      currentPage: state._bookSharingPlatform.cityCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.citySearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'cityList', ref:state._bookSharingPlatform, listDisplayName: '城市列表'}, // this is for model namespace and
    }))(CityCreateForm)
  }
  
  getCityUpdateForm = () => {
  	const {CityUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "city",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'cityList', ref:state._bookSharingPlatform, listDisplayName: '城市列表' }, // this is for model namespace and
    }))(CityUpdateForm)
  }

  getBookPlazaSearch = () => {
    const {BookPlazaSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书天地",
      role: "bookPlaza",
      data: state._bookSharingPlatform.bookPlazaList,
      count: state._bookSharingPlatform.bookPlazaCount,
      currentPage: state._bookSharingPlatform.bookPlazaCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookPlazaSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'bookPlazaList', ref:state._bookSharingPlatform, 
      listDisplayName: '图书天地列表' }, // this is for model namespace and
    }))(BookPlazaSearch)
  }
  getBookPlazaCreateForm = () => {
   	const {BookPlazaCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookPlaza",
      data: state._bookSharingPlatform.bookPlazaList,
      count: state._bookSharingPlatform.bookPlazaCount,
      currentPage: state._bookSharingPlatform.bookPlazaCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookPlazaSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'bookPlazaList', ref:state._bookSharingPlatform, listDisplayName: '图书天地列表'}, // this is for model namespace and
    }))(BookPlazaCreateForm)
  }
  
  getBookPlazaUpdateForm = () => {
  	const {BookPlazaUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "bookPlaza",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookPlazaList', ref:state._bookSharingPlatform, listDisplayName: '图书天地列表' }, // this is for model namespace and
    }))(BookPlazaUpdateForm)
  }

  getMemberServiceProductSearch = () => {
    const {MemberServiceProductSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "会员服务产品",
      role: "memberServiceProduct",
      data: state._bookSharingPlatform.memberServiceProductList,
      count: state._bookSharingPlatform.memberServiceProductCount,
      currentPage: state._bookSharingPlatform.memberServiceProductCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.memberServiceProductSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'memberServiceProductList', ref:state._bookSharingPlatform, 
      listDisplayName: '会员服务产品列表' }, // this is for model namespace and
    }))(MemberServiceProductSearch)
  }
  getMemberServiceProductCreateForm = () => {
   	const {MemberServiceProductCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "memberServiceProduct",
      data: state._bookSharingPlatform.memberServiceProductList,
      count: state._bookSharingPlatform.memberServiceProductCount,
      currentPage: state._bookSharingPlatform.memberServiceProductCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.memberServiceProductSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'memberServiceProductList', ref:state._bookSharingPlatform, listDisplayName: '会员服务产品列表'}, // this is for model namespace and
    }))(MemberServiceProductCreateForm)
  }
  
  getMemberServiceProductUpdateForm = () => {
  	const {MemberServiceProductUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "memberServiceProduct",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'memberServiceProductList', ref:state._bookSharingPlatform, listDisplayName: '会员服务产品列表' }, // this is for model namespace and
    }))(MemberServiceProductUpdateForm)
  }

  getMainOrderSearch = () => {
    const {MainOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "主订单",
      role: "mainOrder",
      data: state._bookSharingPlatform.mainOrderList,
      count: state._bookSharingPlatform.mainOrderCount,
      currentPage: state._bookSharingPlatform.mainOrderCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.mainOrderSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'mainOrderList', ref:state._bookSharingPlatform, 
      listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderSearch)
  }
  getMainOrderCreateForm = () => {
   	const {MainOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "mainOrder",
      data: state._bookSharingPlatform.mainOrderList,
      count: state._bookSharingPlatform.mainOrderCount,
      currentPage: state._bookSharingPlatform.mainOrderCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.mainOrderSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表'}, // this is for model namespace and
    }))(MainOrderCreateForm)
  }
  
  getMainOrderUpdateForm = () => {
  	const {MainOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "mainOrder",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderUpdateForm)
  }

  getBookSearch = () => {
    const {BookSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书",
      role: "book",
      data: state._bookSharingPlatform.bookList,
      count: state._bookSharingPlatform.bookCount,
      currentPage: state._bookSharingPlatform.bookCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'bookList', ref:state._bookSharingPlatform, 
      listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookSearch)
  }
  getBookCreateForm = () => {
   	const {BookCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "book",
      data: state._bookSharingPlatform.bookList,
      count: state._bookSharingPlatform.bookCount,
      currentPage: state._bookSharingPlatform.bookCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表'}, // this is for model namespace and
    }))(BookCreateForm)
  }
  
  getBookUpdateForm = () => {
  	const {BookUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "book",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookUpdateForm)
  }

  getTransferTypeSearch = () => {
    const {TransferTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "转移类型",
      role: "transferType",
      data: state._bookSharingPlatform.transferTypeList,
      count: state._bookSharingPlatform.transferTypeCount,
      currentPage: state._bookSharingPlatform.transferTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.transferTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'transferTypeList', ref:state._bookSharingPlatform, 
      listDisplayName: '转移类型列表' }, // this is for model namespace and
    }))(TransferTypeSearch)
  }
  getTransferTypeCreateForm = () => {
   	const {TransferTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "transferType",
      data: state._bookSharingPlatform.transferTypeList,
      count: state._bookSharingPlatform.transferTypeCount,
      currentPage: state._bookSharingPlatform.transferTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.transferTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'transferTypeList', ref:state._bookSharingPlatform, listDisplayName: '转移类型列表'}, // this is for model namespace and
    }))(TransferTypeCreateForm)
  }
  
  getTransferTypeUpdateForm = () => {
  	const {TransferTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "transferType",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'transferTypeList', ref:state._bookSharingPlatform, listDisplayName: '转移类型列表' }, // this is for model namespace and
    }))(TransferTypeUpdateForm)
  }

  getTakeStockStatusSearch = () => {
    const {TakeStockStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "盘点状态",
      role: "takeStockStatus",
      data: state._bookSharingPlatform.takeStockStatusList,
      count: state._bookSharingPlatform.takeStockStatusCount,
      currentPage: state._bookSharingPlatform.takeStockStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.takeStockStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'takeStockStatusList', ref:state._bookSharingPlatform, 
      listDisplayName: '盘点状态列表' }, // this is for model namespace and
    }))(TakeStockStatusSearch)
  }
  getTakeStockStatusCreateForm = () => {
   	const {TakeStockStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "takeStockStatus",
      data: state._bookSharingPlatform.takeStockStatusList,
      count: state._bookSharingPlatform.takeStockStatusCount,
      currentPage: state._bookSharingPlatform.takeStockStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.takeStockStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'takeStockStatusList', ref:state._bookSharingPlatform, listDisplayName: '盘点状态列表'}, // this is for model namespace and
    }))(TakeStockStatusCreateForm)
  }
  
  getTakeStockStatusUpdateForm = () => {
  	const {TakeStockStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "takeStockStatus",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'takeStockStatusList', ref:state._bookSharingPlatform, listDisplayName: '盘点状态列表' }, // this is for model namespace and
    }))(TakeStockStatusUpdateForm)
  }

  getBookTakeStockStatusSearch = () => {
    const {BookTakeStockStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书盘点状态",
      role: "bookTakeStockStatus",
      data: state._bookSharingPlatform.bookTakeStockStatusList,
      count: state._bookSharingPlatform.bookTakeStockStatusCount,
      currentPage: state._bookSharingPlatform.bookTakeStockStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookTakeStockStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'bookTakeStockStatusList', ref:state._bookSharingPlatform, 
      listDisplayName: '图书盘点状态列表' }, // this is for model namespace and
    }))(BookTakeStockStatusSearch)
  }
  getBookTakeStockStatusCreateForm = () => {
   	const {BookTakeStockStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookTakeStockStatus",
      data: state._bookSharingPlatform.bookTakeStockStatusList,
      count: state._bookSharingPlatform.bookTakeStockStatusCount,
      currentPage: state._bookSharingPlatform.bookTakeStockStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookTakeStockStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'bookTakeStockStatusList', ref:state._bookSharingPlatform, listDisplayName: '图书盘点状态列表'}, // this is for model namespace and
    }))(BookTakeStockStatusCreateForm)
  }
  
  getBookTakeStockStatusUpdateForm = () => {
  	const {BookTakeStockStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "bookTakeStockStatus",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookTakeStockStatusList', ref:state._bookSharingPlatform, listDisplayName: '图书盘点状态列表' }, // this is for model namespace and
    }))(BookTakeStockStatusUpdateForm)
  }

  getTakeStoreResultsSearch = () => {
    const {TakeStoreResultsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "盘点结果",
      role: "takeStoreResults",
      data: state._bookSharingPlatform.takeStoreResultsList,
      count: state._bookSharingPlatform.takeStoreResultsCount,
      currentPage: state._bookSharingPlatform.takeStoreResultsCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.takeStoreResultsSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'takeStoreResultsList', ref:state._bookSharingPlatform, 
      listDisplayName: '盘点结果列表' }, // this is for model namespace and
    }))(TakeStoreResultsSearch)
  }
  getTakeStoreResultsCreateForm = () => {
   	const {TakeStoreResultsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "takeStoreResults",
      data: state._bookSharingPlatform.takeStoreResultsList,
      count: state._bookSharingPlatform.takeStoreResultsCount,
      currentPage: state._bookSharingPlatform.takeStoreResultsCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.takeStoreResultsSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'takeStoreResultsList', ref:state._bookSharingPlatform, listDisplayName: '盘点结果列表'}, // this is for model namespace and
    }))(TakeStoreResultsCreateForm)
  }
  
  getTakeStoreResultsUpdateForm = () => {
  	const {TakeStoreResultsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "takeStoreResults",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'takeStoreResultsList', ref:state._bookSharingPlatform, listDisplayName: '盘点结果列表' }, // this is for model namespace and
    }))(TakeStoreResultsUpdateForm)
  }

  getBookCopyOperateTypeSearch = () => {
    const {BookCopyOperateTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书籍副本操作类型",
      role: "bookCopyOperateType",
      data: state._bookSharingPlatform.bookCopyOperateTypeList,
      count: state._bookSharingPlatform.bookCopyOperateTypeCount,
      currentPage: state._bookSharingPlatform.bookCopyOperateTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookCopyOperateTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'bookCopyOperateTypeList', ref:state._bookSharingPlatform, 
      listDisplayName: '书籍副本操作类型列表' }, // this is for model namespace and
    }))(BookCopyOperateTypeSearch)
  }
  getBookCopyOperateTypeCreateForm = () => {
   	const {BookCopyOperateTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "bookCopyOperateType",
      data: state._bookSharingPlatform.bookCopyOperateTypeList,
      count: state._bookSharingPlatform.bookCopyOperateTypeCount,
      currentPage: state._bookSharingPlatform.bookCopyOperateTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookCopyOperateTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'bookCopyOperateTypeList', ref:state._bookSharingPlatform, listDisplayName: '书籍副本操作类型列表'}, // this is for model namespace and
    }))(BookCopyOperateTypeCreateForm)
  }
  
  getBookCopyOperateTypeUpdateForm = () => {
  	const {BookCopyOperateTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "bookCopyOperateType",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookCopyOperateTypeList', ref:state._bookSharingPlatform, listDisplayName: '书籍副本操作类型列表' }, // this is for model namespace and
    }))(BookCopyOperateTypeUpdateForm)
  }

  getBorrowingStatusSearch = () => {
    const {BorrowingStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "借书状态",
      role: "borrowingStatus",
      data: state._bookSharingPlatform.borrowingStatusList,
      count: state._bookSharingPlatform.borrowingStatusCount,
      currentPage: state._bookSharingPlatform.borrowingStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.borrowingStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'borrowingStatusList', ref:state._bookSharingPlatform, 
      listDisplayName: '借书状态列表' }, // this is for model namespace and
    }))(BorrowingStatusSearch)
  }
  getBorrowingStatusCreateForm = () => {
   	const {BorrowingStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "borrowingStatus",
      data: state._bookSharingPlatform.borrowingStatusList,
      count: state._bookSharingPlatform.borrowingStatusCount,
      currentPage: state._bookSharingPlatform.borrowingStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.borrowingStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'borrowingStatusList', ref:state._bookSharingPlatform, listDisplayName: '借书状态列表'}, // this is for model namespace and
    }))(BorrowingStatusCreateForm)
  }
  
  getBorrowingStatusUpdateForm = () => {
  	const {BorrowingStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "borrowingStatus",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'borrowingStatusList', ref:state._bookSharingPlatform, listDisplayName: '借书状态列表' }, // this is for model namespace and
    }))(BorrowingStatusUpdateForm)
  }

  getDeliverMethodSearch = () => {
    const {DeliverMethodSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "共享方式",
      role: "deliverMethod",
      data: state._bookSharingPlatform.deliverMethodList,
      count: state._bookSharingPlatform.deliverMethodCount,
      currentPage: state._bookSharingPlatform.deliverMethodCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.deliverMethodSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'deliverMethodList', ref:state._bookSharingPlatform, 
      listDisplayName: '共享方式列表' }, // this is for model namespace and
    }))(DeliverMethodSearch)
  }
  getDeliverMethodCreateForm = () => {
   	const {DeliverMethodCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "deliverMethod",
      data: state._bookSharingPlatform.deliverMethodList,
      count: state._bookSharingPlatform.deliverMethodCount,
      currentPage: state._bookSharingPlatform.deliverMethodCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.deliverMethodSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'deliverMethodList', ref:state._bookSharingPlatform, listDisplayName: '共享方式列表'}, // this is for model namespace and
    }))(DeliverMethodCreateForm)
  }
  
  getDeliverMethodUpdateForm = () => {
  	const {DeliverMethodUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "deliverMethod",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'deliverMethodList', ref:state._bookSharingPlatform, listDisplayName: '共享方式列表' }, // this is for model namespace and
    }))(DeliverMethodUpdateForm)
  }

  getApplicationStatusSearch = () => {
    const {ApplicationStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "申请状态",
      role: "applicationStatus",
      data: state._bookSharingPlatform.applicationStatusList,
      count: state._bookSharingPlatform.applicationStatusCount,
      currentPage: state._bookSharingPlatform.applicationStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.applicationStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'applicationStatusList', ref:state._bookSharingPlatform, 
      listDisplayName: '申请状态列表' }, // this is for model namespace and
    }))(ApplicationStatusSearch)
  }
  getApplicationStatusCreateForm = () => {
   	const {ApplicationStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "applicationStatus",
      data: state._bookSharingPlatform.applicationStatusList,
      count: state._bookSharingPlatform.applicationStatusCount,
      currentPage: state._bookSharingPlatform.applicationStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.applicationStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'applicationStatusList', ref:state._bookSharingPlatform, listDisplayName: '申请状态列表'}, // this is for model namespace and
    }))(ApplicationStatusCreateForm)
  }
  
  getApplicationStatusUpdateForm = () => {
  	const {ApplicationStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "applicationStatus",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'applicationStatusList', ref:state._bookSharingPlatform, listDisplayName: '申请状态列表' }, // this is for model namespace and
    }))(ApplicationStatusUpdateForm)
  }

  getPlatformAccountSearch = () => {
    const {PlatformAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "平台账户",
      role: "platformAccount",
      data: state._bookSharingPlatform.platformAccountList,
      count: state._bookSharingPlatform.platformAccountCount,
      currentPage: state._bookSharingPlatform.platformAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'platformAccountList', ref:state._bookSharingPlatform, 
      listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountSearch)
  }
  getPlatformAccountCreateForm = () => {
   	const {PlatformAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "platformAccount",
      data: state._bookSharingPlatform.platformAccountList,
      count: state._bookSharingPlatform.platformAccountCount,
      currentPage: state._bookSharingPlatform.platformAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表'}, // this is for model namespace and
    }))(PlatformAccountCreateForm)
  }
  
  getPlatformAccountUpdateForm = () => {
  	const {PlatformAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "platformAccount",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountUpdateForm)
  }

  getFundationAccountSearch = () => {
    const {FundationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "平台基金账户",
      role: "fundationAccount",
      data: state._bookSharingPlatform.fundationAccountList,
      count: state._bookSharingPlatform.fundationAccountCount,
      currentPage: state._bookSharingPlatform.fundationAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.fundationAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'fundationAccountList', ref:state._bookSharingPlatform, 
      listDisplayName: '平台基金账户列表' }, // this is for model namespace and
    }))(FundationAccountSearch)
  }
  getFundationAccountCreateForm = () => {
   	const {FundationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "fundationAccount",
      data: state._bookSharingPlatform.fundationAccountList,
      count: state._bookSharingPlatform.fundationAccountCount,
      currentPage: state._bookSharingPlatform.fundationAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.fundationAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台基金账户列表'}, // this is for model namespace and
    }))(FundationAccountCreateForm)
  }
  
  getFundationAccountUpdateForm = () => {
  	const {FundationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "fundationAccount",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台基金账户列表' }, // this is for model namespace and
    }))(FundationAccountUpdateForm)
  }

  getStoreTypeSearch = () => {
    const {StoreTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "网点类型",
      role: "storeType",
      data: state._bookSharingPlatform.storeTypeList,
      count: state._bookSharingPlatform.storeTypeCount,
      currentPage: state._bookSharingPlatform.storeTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'storeTypeList', ref:state._bookSharingPlatform, 
      listDisplayName: '网点类型列表' }, // this is for model namespace and
    }))(StoreTypeSearch)
  }
  getStoreTypeCreateForm = () => {
   	const {StoreTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "storeType",
      data: state._bookSharingPlatform.storeTypeList,
      count: state._bookSharingPlatform.storeTypeCount,
      currentPage: state._bookSharingPlatform.storeTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'storeTypeList', ref:state._bookSharingPlatform, listDisplayName: '网点类型列表'}, // this is for model namespace and
    }))(StoreTypeCreateForm)
  }
  
  getStoreTypeUpdateForm = () => {
  	const {StoreTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "storeType",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'storeTypeList', ref:state._bookSharingPlatform, listDisplayName: '网点类型列表' }, // this is for model namespace and
    }))(StoreTypeUpdateForm)
  }

  getStoreSearch = () => {
    const {StoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "服务网点",
      role: "store",
      data: state._bookSharingPlatform.storeList,
      count: state._bookSharingPlatform.storeCount,
      currentPage: state._bookSharingPlatform.storeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'storeList', ref:state._bookSharingPlatform, 
      listDisplayName: '服务网点列表' }, // this is for model namespace and
    }))(StoreSearch)
  }
  getStoreCreateForm = () => {
   	const {StoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "store",
      data: state._bookSharingPlatform.storeList,
      count: state._bookSharingPlatform.storeCount,
      currentPage: state._bookSharingPlatform.storeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '服务网点列表'}, // this is for model namespace and
    }))(StoreCreateForm)
  }
  
  getStoreUpdateForm = () => {
  	const {StoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "store",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '服务网点列表' }, // this is for model namespace and
    }))(StoreUpdateForm)
  }

  getSlideTypeSearch = () => {
    const {SlideTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "海报类型",
      role: "slideType",
      data: state._bookSharingPlatform.slideTypeList,
      count: state._bookSharingPlatform.slideTypeCount,
      currentPage: state._bookSharingPlatform.slideTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.slideTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'slideTypeList', ref:state._bookSharingPlatform, 
      listDisplayName: '海报类型列表' }, // this is for model namespace and
    }))(SlideTypeSearch)
  }
  getSlideTypeCreateForm = () => {
   	const {SlideTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "slideType",
      data: state._bookSharingPlatform.slideTypeList,
      count: state._bookSharingPlatform.slideTypeCount,
      currentPage: state._bookSharingPlatform.slideTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.slideTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'slideTypeList', ref:state._bookSharingPlatform, listDisplayName: '海报类型列表'}, // this is for model namespace and
    }))(SlideTypeCreateForm)
  }
  
  getSlideTypeUpdateForm = () => {
  	const {SlideTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "slideType",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'slideTypeList', ref:state._bookSharingPlatform, listDisplayName: '海报类型列表' }, // this is for model namespace and
    }))(SlideTypeUpdateForm)
  }

  getCampaignPlazaSearch = () => {
    const {CampaignPlazaSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "活动广场",
      role: "campaignPlaza",
      data: state._bookSharingPlatform.campaignPlazaList,
      count: state._bookSharingPlatform.campaignPlazaCount,
      currentPage: state._bookSharingPlatform.campaignPlazaCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.campaignPlazaSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'campaignPlazaList', ref:state._bookSharingPlatform, 
      listDisplayName: '活动广场列表' }, // this is for model namespace and
    }))(CampaignPlazaSearch)
  }
  getCampaignPlazaCreateForm = () => {
   	const {CampaignPlazaCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "campaignPlaza",
      data: state._bookSharingPlatform.campaignPlazaList,
      count: state._bookSharingPlatform.campaignPlazaCount,
      currentPage: state._bookSharingPlatform.campaignPlazaCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.campaignPlazaSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'campaignPlazaList', ref:state._bookSharingPlatform, listDisplayName: '活动广场列表'}, // this is for model namespace and
    }))(CampaignPlazaCreateForm)
  }
  
  getCampaignPlazaUpdateForm = () => {
  	const {CampaignPlazaUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "campaignPlaza",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'campaignPlazaList', ref:state._bookSharingPlatform, listDisplayName: '活动广场列表' }, // this is for model namespace and
    }))(CampaignPlazaUpdateForm)
  }

  getCampaignStatusSearch = () => {
    const {CampaignStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "活动状态",
      role: "campaignStatus",
      data: state._bookSharingPlatform.campaignStatusList,
      count: state._bookSharingPlatform.campaignStatusCount,
      currentPage: state._bookSharingPlatform.campaignStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.campaignStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'campaignStatusList', ref:state._bookSharingPlatform, 
      listDisplayName: '活动状态列表' }, // this is for model namespace and
    }))(CampaignStatusSearch)
  }
  getCampaignStatusCreateForm = () => {
   	const {CampaignStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "campaignStatus",
      data: state._bookSharingPlatform.campaignStatusList,
      count: state._bookSharingPlatform.campaignStatusCount,
      currentPage: state._bookSharingPlatform.campaignStatusCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.campaignStatusSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'campaignStatusList', ref:state._bookSharingPlatform, listDisplayName: '活动状态列表'}, // this is for model namespace and
    }))(CampaignStatusCreateForm)
  }
  
  getCampaignStatusUpdateForm = () => {
  	const {CampaignStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "campaignStatus",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'campaignStatusList', ref:state._bookSharingPlatform, listDisplayName: '活动状态列表' }, // this is for model namespace and
    }))(CampaignStatusUpdateForm)
  }

  getCustomerSearch = () => {
    const {CustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "用户",
      role: "customer",
      data: state._bookSharingPlatform.customerList,
      count: state._bookSharingPlatform.customerCount,
      currentPage: state._bookSharingPlatform.customerCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.customerSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'customerList', ref:state._bookSharingPlatform, 
      listDisplayName: '用户列表' }, // this is for model namespace and
    }))(CustomerSearch)
  }
  getCustomerCreateForm = () => {
   	const {CustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "customer",
      data: state._bookSharingPlatform.customerList,
      count: state._bookSharingPlatform.customerCount,
      currentPage: state._bookSharingPlatform.customerCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.customerSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '用户列表'}, // this is for model namespace and
    }))(CustomerCreateForm)
  }
  
  getCustomerUpdateForm = () => {
  	const {CustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "customer",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '用户列表' }, // this is for model namespace and
    }))(CustomerUpdateForm)
  }

  getEmployeeSearch = () => {
    const {EmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "员工",
      role: "employee",
      data: state._bookSharingPlatform.employeeList,
      count: state._bookSharingPlatform.employeeCount,
      currentPage: state._bookSharingPlatform.employeeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.employeeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'bookSharingPlatform', 
      listName: 'employeeList', ref:state._bookSharingPlatform, 
      listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeSearch)
  }
  getEmployeeCreateForm = () => {
   	const {EmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "employee",
      data: state._bookSharingPlatform.employeeList,
      count: state._bookSharingPlatform.employeeCount,
      currentPage: state._bookSharingPlatform.employeeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.employeeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'employeeList', ref:state._bookSharingPlatform, listDisplayName: '员工列表'}, // this is for model namespace and
    }))(EmployeeCreateForm)
  }
  
  getEmployeeUpdateForm = () => {
  	const {EmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "employee",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'employeeList', ref:state._bookSharingPlatform, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeUpdateForm)
  }

  getProfitTypeSearch = () => {
    const {ProfitTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "利润类型",
      role: "profitType",
      data: state._bookSharingPlatform.profitTypeList,
      count: state._bookSharingPlatform.profitTypeCount,
      currentPage: state._bookSharingPlatform.profitTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.profitTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'profitTypeList', ref:state._bookSharingPlatform, 
      listDisplayName: '利润类型列表' }, // this is for model namespace and
    }))(ProfitTypeSearch)
  }
  getProfitTypeCreateForm = () => {
   	const {ProfitTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "profitType",
      data: state._bookSharingPlatform.profitTypeList,
      count: state._bookSharingPlatform.profitTypeCount,
      currentPage: state._bookSharingPlatform.profitTypeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.profitTypeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'profitTypeList', ref:state._bookSharingPlatform, listDisplayName: '利润类型列表'}, // this is for model namespace and
    }))(ProfitTypeCreateForm)
  }
  
  getProfitTypeUpdateForm = () => {
  	const {ProfitTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "profitType",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'profitTypeList', ref:state._bookSharingPlatform, listDisplayName: '利润类型列表' }, // this is for model namespace and
    }))(ProfitTypeUpdateForm)
  }

  getProfitDistributeStateSearch = () => {
    const {ProfitDistributeStateSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "利润分配状态",
      role: "profitDistributeState",
      data: state._bookSharingPlatform.profitDistributeStateList,
      count: state._bookSharingPlatform.profitDistributeStateCount,
      currentPage: state._bookSharingPlatform.profitDistributeStateCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.profitDistributeStateSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'profitDistributeStateList', ref:state._bookSharingPlatform, 
      listDisplayName: '利润分配状态列表' }, // this is for model namespace and
    }))(ProfitDistributeStateSearch)
  }
  getProfitDistributeStateCreateForm = () => {
   	const {ProfitDistributeStateCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "profitDistributeState",
      data: state._bookSharingPlatform.profitDistributeStateList,
      count: state._bookSharingPlatform.profitDistributeStateCount,
      currentPage: state._bookSharingPlatform.profitDistributeStateCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.profitDistributeStateSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'profitDistributeStateList', ref:state._bookSharingPlatform, listDisplayName: '利润分配状态列表'}, // this is for model namespace and
    }))(ProfitDistributeStateCreateForm)
  }
  
  getProfitDistributeStateUpdateForm = () => {
  	const {ProfitDistributeStateUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "profitDistributeState",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'profitDistributeStateList', ref:state._bookSharingPlatform, listDisplayName: '利润分配状态列表' }, // this is for model namespace and
    }))(ProfitDistributeStateUpdateForm)
  }

  getUndistributedProfitSearch = () => {
    const {UndistributedProfitSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "未分割收入",
      role: "undistributedProfit",
      data: state._bookSharingPlatform.undistributedProfitList,
      count: state._bookSharingPlatform.undistributedProfitCount,
      currentPage: state._bookSharingPlatform.undistributedProfitCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.undistributedProfitSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, 
      referenceName: 'platform', 
      listName: 'undistributedProfitList', ref:state._bookSharingPlatform, 
      listDisplayName: '未分割收入列表' }, // this is for model namespace and
    }))(UndistributedProfitSearch)
  }
  getUndistributedProfitCreateForm = () => {
   	const {UndistributedProfitCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      role: "undistributedProfit",
      data: state._bookSharingPlatform.undistributedProfitList,
      count: state._bookSharingPlatform.undistributedProfitCount,
      currentPage: state._bookSharingPlatform.undistributedProfitCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.undistributedProfitSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'undistributedProfitList', ref:state._bookSharingPlatform, listDisplayName: '未分割收入列表'}, // this is for model namespace and
    }))(UndistributedProfitCreateForm)
  }
  
  getUndistributedProfitUpdateForm = () => {
  	const {UndistributedProfitUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      role: "undistributedProfit",
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'undistributedProfitList', ref:state._bookSharingPlatform, listDisplayName: '未分割收入列表' }, // this is for model namespace and
    }))(UndistributedProfitUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookSharingPlatformDashboard} = GlobalComponents
  	const {BookSharingPlatformPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/bookSharingPlatform/:id/dashboard", component: BookSharingPlatformDashboard},
  	{path:"/bookSharingPlatform/:id/preference", component: BookSharingPlatformPreference},
  	
  	
  	
  	{path:"/bookSharingPlatform/:id/list/lossDiscountList", component: this.getLossDiscountSearch()},
  	{path:"/bookSharingPlatform/:id/list/lossDiscountCreateForm", component: this.getLossDiscountCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/lossDiscountUpdateForm", component: this.getLossDiscountUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/platformConfigurationList", component: this.getPlatformConfigurationSearch()},
  	{path:"/bookSharingPlatform/:id/list/platformConfigurationCreateForm", component: this.getPlatformConfigurationCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/platformConfigurationUpdateForm", component: this.getPlatformConfigurationUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/accountDataList", component: this.getAccountDataSearch()},
  	{path:"/bookSharingPlatform/:id/list/accountDataCreateForm", component: this.getAccountDataCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/accountDataUpdateForm", component: this.getAccountDataUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/cityList", component: this.getCitySearch()},
  	{path:"/bookSharingPlatform/:id/list/cityCreateForm", component: this.getCityCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/cityUpdateForm", component: this.getCityUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/bookPlazaList", component: this.getBookPlazaSearch()},
  	{path:"/bookSharingPlatform/:id/list/bookPlazaCreateForm", component: this.getBookPlazaCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/bookPlazaUpdateForm", component: this.getBookPlazaUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/memberServiceProductList", component: this.getMemberServiceProductSearch()},
  	{path:"/bookSharingPlatform/:id/list/memberServiceProductCreateForm", component: this.getMemberServiceProductCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/memberServiceProductUpdateForm", component: this.getMemberServiceProductUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/mainOrderList", component: this.getMainOrderSearch()},
  	{path:"/bookSharingPlatform/:id/list/mainOrderCreateForm", component: this.getMainOrderCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/mainOrderUpdateForm", component: this.getMainOrderUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/bookList", component: this.getBookSearch()},
  	{path:"/bookSharingPlatform/:id/list/bookCreateForm", component: this.getBookCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/bookUpdateForm", component: this.getBookUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/transferTypeList", component: this.getTransferTypeSearch()},
  	{path:"/bookSharingPlatform/:id/list/transferTypeCreateForm", component: this.getTransferTypeCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/transferTypeUpdateForm", component: this.getTransferTypeUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/takeStockStatusList", component: this.getTakeStockStatusSearch()},
  	{path:"/bookSharingPlatform/:id/list/takeStockStatusCreateForm", component: this.getTakeStockStatusCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/takeStockStatusUpdateForm", component: this.getTakeStockStatusUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/bookTakeStockStatusList", component: this.getBookTakeStockStatusSearch()},
  	{path:"/bookSharingPlatform/:id/list/bookTakeStockStatusCreateForm", component: this.getBookTakeStockStatusCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/bookTakeStockStatusUpdateForm", component: this.getBookTakeStockStatusUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/takeStoreResultsList", component: this.getTakeStoreResultsSearch()},
  	{path:"/bookSharingPlatform/:id/list/takeStoreResultsCreateForm", component: this.getTakeStoreResultsCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/takeStoreResultsUpdateForm", component: this.getTakeStoreResultsUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/bookCopyOperateTypeList", component: this.getBookCopyOperateTypeSearch()},
  	{path:"/bookSharingPlatform/:id/list/bookCopyOperateTypeCreateForm", component: this.getBookCopyOperateTypeCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/bookCopyOperateTypeUpdateForm", component: this.getBookCopyOperateTypeUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/borrowingStatusList", component: this.getBorrowingStatusSearch()},
  	{path:"/bookSharingPlatform/:id/list/borrowingStatusCreateForm", component: this.getBorrowingStatusCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/borrowingStatusUpdateForm", component: this.getBorrowingStatusUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/deliverMethodList", component: this.getDeliverMethodSearch()},
  	{path:"/bookSharingPlatform/:id/list/deliverMethodCreateForm", component: this.getDeliverMethodCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/deliverMethodUpdateForm", component: this.getDeliverMethodUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/applicationStatusList", component: this.getApplicationStatusSearch()},
  	{path:"/bookSharingPlatform/:id/list/applicationStatusCreateForm", component: this.getApplicationStatusCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/applicationStatusUpdateForm", component: this.getApplicationStatusUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/platformAccountList", component: this.getPlatformAccountSearch()},
  	{path:"/bookSharingPlatform/:id/list/platformAccountCreateForm", component: this.getPlatformAccountCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/platformAccountUpdateForm", component: this.getPlatformAccountUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/fundationAccountList", component: this.getFundationAccountSearch()},
  	{path:"/bookSharingPlatform/:id/list/fundationAccountCreateForm", component: this.getFundationAccountCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/fundationAccountUpdateForm", component: this.getFundationAccountUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/storeTypeList", component: this.getStoreTypeSearch()},
  	{path:"/bookSharingPlatform/:id/list/storeTypeCreateForm", component: this.getStoreTypeCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/storeTypeUpdateForm", component: this.getStoreTypeUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/storeList", component: this.getStoreSearch()},
  	{path:"/bookSharingPlatform/:id/list/storeCreateForm", component: this.getStoreCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/storeUpdateForm", component: this.getStoreUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/slideTypeList", component: this.getSlideTypeSearch()},
  	{path:"/bookSharingPlatform/:id/list/slideTypeCreateForm", component: this.getSlideTypeCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/slideTypeUpdateForm", component: this.getSlideTypeUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/campaignPlazaList", component: this.getCampaignPlazaSearch()},
  	{path:"/bookSharingPlatform/:id/list/campaignPlazaCreateForm", component: this.getCampaignPlazaCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/campaignPlazaUpdateForm", component: this.getCampaignPlazaUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/campaignStatusList", component: this.getCampaignStatusSearch()},
  	{path:"/bookSharingPlatform/:id/list/campaignStatusCreateForm", component: this.getCampaignStatusCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/campaignStatusUpdateForm", component: this.getCampaignStatusUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/customerList", component: this.getCustomerSearch()},
  	{path:"/bookSharingPlatform/:id/list/customerCreateForm", component: this.getCustomerCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/customerUpdateForm", component: this.getCustomerUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/employeeList", component: this.getEmployeeSearch()},
  	{path:"/bookSharingPlatform/:id/list/employeeCreateForm", component: this.getEmployeeCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/employeeUpdateForm", component: this.getEmployeeUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/profitTypeList", component: this.getProfitTypeSearch()},
  	{path:"/bookSharingPlatform/:id/list/profitTypeCreateForm", component: this.getProfitTypeCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/profitTypeUpdateForm", component: this.getProfitTypeUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/profitDistributeStateList", component: this.getProfitDistributeStateSearch()},
  	{path:"/bookSharingPlatform/:id/list/profitDistributeStateCreateForm", component: this.getProfitDistributeStateCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/profitDistributeStateUpdateForm", component: this.getProfitDistributeStateUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/undistributedProfitList", component: this.getUndistributedProfitSearch()},
  	{path:"/bookSharingPlatform/:id/list/undistributedProfitCreateForm", component: this.getUndistributedProfitCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/undistributedProfitUpdateForm", component: this.getUndistributedProfitUpdateForm()},
     	
  	
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

     //const {BookSharingPlatformEditDetail} = GlobalComponents
     //const {BookSharingPlatformViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.bookSharingPlatform.id)}
            
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
  bookSharingPlatform: state._bookSharingPlatform,
  ...state,
}))(BookSharingPlatformBizApp)



