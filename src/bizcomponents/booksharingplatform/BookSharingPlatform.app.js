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
       
      
           </Menu>
    )
  }
  



  getPlatformConfigurationSearch = () => {
    const {PlatformConfigurationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.platformConfigurationList,
      count: state._bookSharingPlatform.platformConfigurationCount,
      currentPage: state._bookSharingPlatform.platformConfigurationCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformConfigurationSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'platformConfigurationList', ref:state._bookSharingPlatform, listDisplayName: '平台配置列表' }, // this is for model namespace and
    }))(PlatformConfigurationSearch)
  }
  getPlatformConfigurationCreateForm = () => {
   	const {PlatformConfigurationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'platformConfigurationList', ref:state._bookSharingPlatform, listDisplayName: '平台配置列表' }, // this is for model namespace and
    }))(PlatformConfigurationUpdateForm)
  }

  getAvailableTokenSearch = () => {
    const {AvailableTokenSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.availableTokenList,
      count: state._bookSharingPlatform.availableTokenCount,
      currentPage: state._bookSharingPlatform.availableTokenCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.availableTokenSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'availableTokenList', ref:state._bookSharingPlatform, listDisplayName: '可用的权益列表' }, // this is for model namespace and
    }))(AvailableTokenSearch)
  }
  getAvailableTokenCreateForm = () => {
   	const {AvailableTokenCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.availableTokenList,
      count: state._bookSharingPlatform.availableTokenCount,
      currentPage: state._bookSharingPlatform.availableTokenCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.availableTokenSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'availableTokenList', ref:state._bookSharingPlatform, listDisplayName: '可用的权益列表'}, // this is for model namespace and
    }))(AvailableTokenCreateForm)
  }
  
  getAvailableTokenUpdateForm = () => {
  	const {AvailableTokenUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'availableTokenList', ref:state._bookSharingPlatform, listDisplayName: '可用的权益列表' }, // this is for model namespace and
    }))(AvailableTokenUpdateForm)
  }

  getAccountDataSearch = () => {
    const {AccountDataSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.accountDataList,
      count: state._bookSharingPlatform.accountDataCount,
      currentPage: state._bookSharingPlatform.accountDataCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.accountDataSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'accountDataList', ref:state._bookSharingPlatform, listDisplayName: '帐户数据列表' }, // this is for model namespace and
    }))(AccountDataSearch)
  }
  getAccountDataCreateForm = () => {
   	const {AccountDataCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'accountDataList', ref:state._bookSharingPlatform, listDisplayName: '帐户数据列表' }, // this is for model namespace and
    }))(AccountDataUpdateForm)
  }

  getCitySearch = () => {
    const {CitySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.cityList,
      count: state._bookSharingPlatform.cityCount,
      currentPage: state._bookSharingPlatform.cityCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.citySearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'cityList', ref:state._bookSharingPlatform, listDisplayName: '城市列表' }, // this is for model namespace and
    }))(CitySearch)
  }
  getCityCreateForm = () => {
   	const {CityCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'cityList', ref:state._bookSharingPlatform, listDisplayName: '城市列表' }, // this is for model namespace and
    }))(CityUpdateForm)
  }

  getBookPlazaSearch = () => {
    const {BookPlazaSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.bookPlazaList,
      count: state._bookSharingPlatform.bookPlazaCount,
      currentPage: state._bookSharingPlatform.bookPlazaCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookPlazaSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'bookPlazaList', ref:state._bookSharingPlatform, listDisplayName: '图书天地列表' }, // this is for model namespace and
    }))(BookPlazaSearch)
  }
  getBookPlazaCreateForm = () => {
   	const {BookPlazaCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookPlazaList', ref:state._bookSharingPlatform, listDisplayName: '图书天地列表' }, // this is for model namespace and
    }))(BookPlazaUpdateForm)
  }

  getMemberServiceProductSearch = () => {
    const {MemberServiceProductSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.memberServiceProductList,
      count: state._bookSharingPlatform.memberServiceProductCount,
      currentPage: state._bookSharingPlatform.memberServiceProductCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.memberServiceProductSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'memberServiceProductList', ref:state._bookSharingPlatform, listDisplayName: '会员服务产品列表' }, // this is for model namespace and
    }))(MemberServiceProductSearch)
  }
  getMemberServiceProductCreateForm = () => {
   	const {MemberServiceProductCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'memberServiceProductList', ref:state._bookSharingPlatform, listDisplayName: '会员服务产品列表' }, // this is for model namespace and
    }))(MemberServiceProductUpdateForm)
  }

  getMainOrderSearch = () => {
    const {MainOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.mainOrderList,
      count: state._bookSharingPlatform.mainOrderCount,
      currentPage: state._bookSharingPlatform.mainOrderCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.mainOrderSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderSearch)
  }
  getMainOrderCreateForm = () => {
   	const {MainOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderUpdateForm)
  }

  getBookSearch = () => {
    const {BookSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.bookList,
      count: state._bookSharingPlatform.bookCount,
      currentPage: state._bookSharingPlatform.bookCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookSearch)
  }
  getBookCreateForm = () => {
   	const {BookCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookUpdateForm)
  }

  getPlatformAccountSearch = () => {
    const {PlatformAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.platformAccountList,
      count: state._bookSharingPlatform.platformAccountCount,
      currentPage: state._bookSharingPlatform.platformAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountSearch)
  }
  getPlatformAccountCreateForm = () => {
   	const {PlatformAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountUpdateForm)
  }

  getFundationAccountSearch = () => {
    const {FundationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.fundationAccountList,
      count: state._bookSharingPlatform.fundationAccountCount,
      currentPage: state._bookSharingPlatform.fundationAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.fundationAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台基金账户列表' }, // this is for model namespace and
    }))(FundationAccountSearch)
  }
  getFundationAccountCreateForm = () => {
   	const {FundationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台基金账户列表' }, // this is for model namespace and
    }))(FundationAccountUpdateForm)
  }

  getStoreSearch = () => {
    const {StoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.storeList,
      count: state._bookSharingPlatform.storeCount,
      currentPage: state._bookSharingPlatform.storeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '服务网点列表' }, // this is for model namespace and
    }))(StoreSearch)
  }
  getStoreCreateForm = () => {
   	const {StoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '服务网点列表' }, // this is for model namespace and
    }))(StoreUpdateForm)
  }

  getCampaignPlazaSearch = () => {
    const {CampaignPlazaSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.campaignPlazaList,
      count: state._bookSharingPlatform.campaignPlazaCount,
      currentPage: state._bookSharingPlatform.campaignPlazaCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.campaignPlazaSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'campaignPlazaList', ref:state._bookSharingPlatform, listDisplayName: '活动广场列表' }, // this is for model namespace and
    }))(CampaignPlazaSearch)
  }
  getCampaignPlazaCreateForm = () => {
   	const {CampaignPlazaCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'campaignPlazaList', ref:state._bookSharingPlatform, listDisplayName: '活动广场列表' }, // this is for model namespace and
    }))(CampaignPlazaUpdateForm)
  }

  getCustomerSearch = () => {
    const {CustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.customerList,
      count: state._bookSharingPlatform.customerCount,
      currentPage: state._bookSharingPlatform.customerCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.customerSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '用户列表' }, // this is for model namespace and
    }))(CustomerSearch)
  }
  getCustomerCreateForm = () => {
   	const {CustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
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
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '用户列表' }, // this is for model namespace and
    }))(CustomerUpdateForm)
  }


  
  buildRouters = () =>{
  	const {BookSharingPlatformDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/bookSharingPlatform/:id/dashboard", component: BookSharingPlatformDashboard},
  	
  	
  	{path:"/bookSharingPlatform/:id/list/platformConfigurationList", component: this.getPlatformConfigurationSearch()},
  	{path:"/bookSharingPlatform/:id/list/platformConfigurationCreateForm", component: this.getPlatformConfigurationCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/platformConfigurationUpdateForm", component: this.getPlatformConfigurationUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/availableTokenList", component: this.getAvailableTokenSearch()},
  	{path:"/bookSharingPlatform/:id/list/availableTokenCreateForm", component: this.getAvailableTokenCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/availableTokenUpdateForm", component: this.getAvailableTokenUpdateForm()},
   	
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
   	
  	{path:"/bookSharingPlatform/:id/list/platformAccountList", component: this.getPlatformAccountSearch()},
  	{path:"/bookSharingPlatform/:id/list/platformAccountCreateForm", component: this.getPlatformAccountCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/platformAccountUpdateForm", component: this.getPlatformAccountUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/fundationAccountList", component: this.getFundationAccountSearch()},
  	{path:"/bookSharingPlatform/:id/list/fundationAccountCreateForm", component: this.getFundationAccountCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/fundationAccountUpdateForm", component: this.getFundationAccountUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/storeList", component: this.getStoreSearch()},
  	{path:"/bookSharingPlatform/:id/list/storeCreateForm", component: this.getStoreCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/storeUpdateForm", component: this.getStoreUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/campaignPlazaList", component: this.getCampaignPlazaSearch()},
  	{path:"/bookSharingPlatform/:id/list/campaignPlazaCreateForm", component: this.getCampaignPlazaCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/campaignPlazaUpdateForm", component: this.getCampaignPlazaUpdateForm()},
   	
  	{path:"/bookSharingPlatform/:id/list/customerList", component: this.getCustomerSearch()},
  	{path:"/bookSharingPlatform/:id/list/customerCreateForm", component: this.getCustomerCreateForm()},
  	{path:"/bookSharingPlatform/:id/list/customerUpdateForm", component: this.getCustomerUpdateForm()},
     	
  	
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



