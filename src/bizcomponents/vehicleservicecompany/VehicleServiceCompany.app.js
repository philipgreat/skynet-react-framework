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
import styles from './VehicleServiceCompany.app.less'
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




class VehicleServiceCompanyBizApp extends React.PureComponent {
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
      return ['/vehicleServiceCompany/']
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
               <Link to={`/vehicleServiceCompany/${this.props.vehicleServiceCompany.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/vehicleServiceCompany/${this.props.vehicleServiceCompany.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getContractSearch = () => {
    const {ContractSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.contractList,
      count: state._vehicleServiceCompany.contractCount,
      currentPage: state._vehicleServiceCompany.contractCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.contractSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'contractList', ref:state._vehicleServiceCompany, listDisplayName: '合同列表' }, // this is for model namespace and
    }))(ContractSearch)
  }
  getContractCreateForm = () => {
   	const {ContractCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.contractList,
      count: state._vehicleServiceCompany.contractCount,
      currentPage: state._vehicleServiceCompany.contractCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.contractSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'contractList', ref:state._vehicleServiceCompany, listDisplayName: '合同列表'}, // this is for model namespace and
    }))(ContractCreateForm)
  }
  
  getContractUpdateForm = () => {
  	const {ContractUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'contractList', ref:state._vehicleServiceCompany, listDisplayName: '合同列表' }, // this is for model namespace and
    }))(ContractUpdateForm)
  }

  getServiceCompanyAuthenticationInfoSearch = () => {
    const {ServiceCompanyAuthenticationInfoSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoList,
      count: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoCount,
      currentPage: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'serviceCompany', listName: 'serviceCompanyAuthenticationInfoList', ref:state._vehicleServiceCompany, listDisplayName: '商户认证信息列表' }, // this is for model namespace and
    }))(ServiceCompanyAuthenticationInfoSearch)
  }
  getServiceCompanyAuthenticationInfoCreateForm = () => {
   	const {ServiceCompanyAuthenticationInfoCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoList,
      count: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoCount,
      currentPage: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'serviceCompany', listName: 'serviceCompanyAuthenticationInfoList', ref:state._vehicleServiceCompany, listDisplayName: '商户认证信息列表'}, // this is for model namespace and
    }))(ServiceCompanyAuthenticationInfoCreateForm)
  }
  
  getServiceCompanyAuthenticationInfoUpdateForm = () => {
  	const {ServiceCompanyAuthenticationInfoUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceCompanyAuthenticationInfoList', ref:state._vehicleServiceCompany, listDisplayName: '商户认证信息列表' }, // this is for model namespace and
    }))(ServiceCompanyAuthenticationInfoUpdateForm)
  }

  getVehicleInspectionPlateNumberPatternSearch = () => {
    const {VehicleInspectionPlateNumberPatternSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternList,
      count: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternCount,
      currentPage: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleInspectionPlateNumberPatternList', ref:state._vehicleServiceCompany, listDisplayName: '上线检测支持的车牌号码类别列表' }, // this is for model namespace and
    }))(VehicleInspectionPlateNumberPatternSearch)
  }
  getVehicleInspectionPlateNumberPatternCreateForm = () => {
   	const {VehicleInspectionPlateNumberPatternCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternList,
      count: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternCount,
      currentPage: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleInspectionPlateNumberPatternList', ref:state._vehicleServiceCompany, listDisplayName: '上线检测支持的车牌号码类别列表'}, // this is for model namespace and
    }))(VehicleInspectionPlateNumberPatternCreateForm)
  }
  
  getVehicleInspectionPlateNumberPatternUpdateForm = () => {
  	const {VehicleInspectionPlateNumberPatternUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'vehicleInspectionPlateNumberPatternList', ref:state._vehicleServiceCompany, listDisplayName: '上线检测支持的车牌号码类别列表' }, // this is for model namespace and
    }))(VehicleInspectionPlateNumberPatternUpdateForm)
  }

  getFileInspectionPlateNumberPatternSearch = () => {
    const {FileInspectionPlateNumberPatternSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.fileInspectionPlateNumberPatternList,
      count: state._vehicleServiceCompany.fileInspectionPlateNumberPatternCount,
      currentPage: state._vehicleServiceCompany.fileInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.fileInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'fileInspectionPlateNumberPatternList', ref:state._vehicleServiceCompany, listDisplayName: '6年免检检测支持的车牌号码类别列表' }, // this is for model namespace and
    }))(FileInspectionPlateNumberPatternSearch)
  }
  getFileInspectionPlateNumberPatternCreateForm = () => {
   	const {FileInspectionPlateNumberPatternCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.fileInspectionPlateNumberPatternList,
      count: state._vehicleServiceCompany.fileInspectionPlateNumberPatternCount,
      currentPage: state._vehicleServiceCompany.fileInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.fileInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'fileInspectionPlateNumberPatternList', ref:state._vehicleServiceCompany, listDisplayName: '6年免检检测支持的车牌号码类别列表'}, // this is for model namespace and
    }))(FileInspectionPlateNumberPatternCreateForm)
  }
  
  getFileInspectionPlateNumberPatternUpdateForm = () => {
  	const {FileInspectionPlateNumberPatternUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'fileInspectionPlateNumberPatternList', ref:state._vehicleServiceCompany, listDisplayName: '6年免检检测支持的车牌号码类别列表' }, // this is for model namespace and
    }))(FileInspectionPlateNumberPatternUpdateForm)
  }

  getVehicleServiceCompanyBusinessScopeSearch = () => {
    const {VehicleServiceCompanyBusinessScopeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCount,
      currentPage: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleServiceCompanyBusinessScopeList', ref:state._vehicleServiceCompany, listDisplayName: '商户服务范围列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeSearch)
  }
  getVehicleServiceCompanyBusinessScopeCreateForm = () => {
   	const {VehicleServiceCompanyBusinessScopeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCount,
      currentPage: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleServiceCompanyBusinessScopeList', ref:state._vehicleServiceCompany, listDisplayName: '商户服务范围列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeCreateForm)
  }
  
  getVehicleServiceCompanyBusinessScopeUpdateForm = () => {
  	const {VehicleServiceCompanyBusinessScopeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'vehicleServiceCompanyBusinessScopeList', ref:state._vehicleServiceCompany, listDisplayName: '商户服务范围列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeUpdateForm)
  }

  getCompanyQrcodePromotionRecordSearch = () => {
    const {CompanyQrcodePromotionRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.companyQrcodePromotionRecordList,
      count: state._vehicleServiceCompany.companyQrcodePromotionRecordCount,
      currentPage: state._vehicleServiceCompany.companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.companyQrcodePromotionRecordSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'companyQrcodePromotionRecordList', ref:state._vehicleServiceCompany, listDisplayName: '公司二维码推广记录列表' }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordSearch)
  }
  getCompanyQrcodePromotionRecordCreateForm = () => {
   	const {CompanyQrcodePromotionRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.companyQrcodePromotionRecordList,
      count: state._vehicleServiceCompany.companyQrcodePromotionRecordCount,
      currentPage: state._vehicleServiceCompany.companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.companyQrcodePromotionRecordSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'companyQrcodePromotionRecordList', ref:state._vehicleServiceCompany, listDisplayName: '公司二维码推广记录列表'}, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordCreateForm)
  }
  
  getCompanyQrcodePromotionRecordUpdateForm = () => {
  	const {CompanyQrcodePromotionRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'companyQrcodePromotionRecordList', ref:state._vehicleServiceCompany, listDisplayName: '公司二维码推广记录列表' }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordUpdateForm)
  }

  getVehicleServiceCompanyDispatcherSearch = () => {
    const {VehicleServiceCompanyDispatcherSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCount,
      currentPage: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleServiceCompanyDispatcherList', ref:state._vehicleServiceCompany, listDisplayName: '商户派单列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherSearch)
  }
  getVehicleServiceCompanyDispatcherCreateForm = () => {
   	const {VehicleServiceCompanyDispatcherCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCount,
      currentPage: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleServiceCompanyDispatcherList', ref:state._vehicleServiceCompany, listDisplayName: '商户派单列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherCreateForm)
  }
  
  getVehicleServiceCompanyDispatcherUpdateForm = () => {
  	const {VehicleServiceCompanyDispatcherUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'vehicleServiceCompanyDispatcherList', ref:state._vehicleServiceCompany, listDisplayName: '商户派单列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherUpdateForm)
  }

  getCompanyDiscountSearch = () => {
    const {CompanyDiscountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.companyDiscountList,
      count: state._vehicleServiceCompany.companyDiscountCount,
      currentPage: state._vehicleServiceCompany.companyDiscountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.companyDiscountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'companyDiscountList', ref:state._vehicleServiceCompany, listDisplayName: '公司折扣列表' }, // this is for model namespace and
    }))(CompanyDiscountSearch)
  }
  getCompanyDiscountCreateForm = () => {
   	const {CompanyDiscountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.companyDiscountList,
      count: state._vehicleServiceCompany.companyDiscountCount,
      currentPage: state._vehicleServiceCompany.companyDiscountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.companyDiscountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'companyDiscountList', ref:state._vehicleServiceCompany, listDisplayName: '公司折扣列表'}, // this is for model namespace and
    }))(CompanyDiscountCreateForm)
  }
  
  getCompanyDiscountUpdateForm = () => {
  	const {CompanyDiscountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'companyDiscountList', ref:state._vehicleServiceCompany, listDisplayName: '公司折扣列表' }, // this is for model namespace and
    }))(CompanyDiscountUpdateForm)
  }

  getVehicleServiceCompanyEmployeeSearch = () => {
    const {VehicleServiceCompanyEmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCount,
      currentPage: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleServiceCompanyEmployeeList', ref:state._vehicleServiceCompany, listDisplayName: '商户员工列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeSearch)
  }
  getVehicleServiceCompanyEmployeeCreateForm = () => {
   	const {VehicleServiceCompanyEmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCount,
      currentPage: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'company', listName: 'vehicleServiceCompanyEmployeeList', ref:state._vehicleServiceCompany, listDisplayName: '商户员工列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeCreateForm)
  }
  
  getVehicleServiceCompanyEmployeeUpdateForm = () => {
  	const {VehicleServiceCompanyEmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'vehicleServiceCompanyEmployeeList', ref:state._vehicleServiceCompany, listDisplayName: '商户员工列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const {VehicleInspectionOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleInspectionOrderList,
      count: state._vehicleServiceCompany.vehicleInspectionOrderCount,
      currentPage: state._vehicleServiceCompany.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleInspectionOrderSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'serviceCompany', listName: 'vehicleInspectionOrderList', ref:state._vehicleServiceCompany, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
   	const {VehicleInspectionOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleInspectionOrderList,
      count: state._vehicleServiceCompany.vehicleInspectionOrderCount,
      currentPage: state._vehicleServiceCompany.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.vehicleInspectionOrderSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'serviceCompany', listName: 'vehicleInspectionOrderList', ref:state._vehicleServiceCompany, listDisplayName: '年检订单列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }
  
  getVehicleInspectionOrderUpdateForm = () => {
  	const {VehicleInspectionOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'vehicleInspectionOrderList', ref:state._vehicleServiceCompany, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const {ServiceVehicleMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleMovementC2mList', ref:state._vehicleServiceCompany, listDisplayName: '收车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
   	const {ServiceVehicleMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleMovementC2mList', ref:state._vehicleServiceCompany, listDisplayName: '收车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }
  
  getServiceVehicleMovementC2mUpdateForm = () => {
  	const {ServiceVehicleMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceVehicleMovementC2mList', ref:state._vehicleServiceCompany, listDisplayName: '收车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2mSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2mCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleMovementM2mList', ref:state._vehicleServiceCompany, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2mCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleMovementM2mList', ref:state._vehicleServiceCompany, listDisplayName: '移车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceVehicleMovementM2mList', ref:state._vehicleServiceCompany, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const {ServiceVehicleMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleMovementM2cList', ref:state._vehicleServiceCompany, listDisplayName: '还车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
   	const {ServiceVehicleMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleMovementM2cList', ref:state._vehicleServiceCompany, listDisplayName: '还车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }
  
  getServiceVehicleMovementM2cUpdateForm = () => {
  	const {ServiceVehicleMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceVehicleMovementM2cList', ref:state._vehicleServiceCompany, listDisplayName: '还车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const {ServiceFileMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementC2mList,
      count: state._vehicleServiceCompany.serviceFileMovementC2mCount,
      currentPage: state._vehicleServiceCompany.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileMovementC2mList', ref:state._vehicleServiceCompany, listDisplayName: '收件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
   	const {ServiceFileMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementC2mList,
      count: state._vehicleServiceCompany.serviceFileMovementC2mCount,
      currentPage: state._vehicleServiceCompany.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileMovementC2mList', ref:state._vehicleServiceCompany, listDisplayName: '收件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }
  
  getServiceFileMovementC2mUpdateForm = () => {
  	const {ServiceFileMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceFileMovementC2mList', ref:state._vehicleServiceCompany, listDisplayName: '收件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2mSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2mList,
      count: state._vehicleServiceCompany.serviceFileMovementM2mCount,
      currentPage: state._vehicleServiceCompany.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileMovementM2mList', ref:state._vehicleServiceCompany, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2mList,
      count: state._vehicleServiceCompany.serviceFileMovementM2mCount,
      currentPage: state._vehicleServiceCompany.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileMovementM2mList', ref:state._vehicleServiceCompany, listDisplayName: '移件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceFileMovementM2mList', ref:state._vehicleServiceCompany, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const {ServiceFileMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2cList,
      count: state._vehicleServiceCompany.serviceFileMovementM2cCount,
      currentPage: state._vehicleServiceCompany.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileMovementM2cList', ref:state._vehicleServiceCompany, listDisplayName: '还件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
   	const {ServiceFileMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2cList,
      count: state._vehicleServiceCompany.serviceFileMovementM2cCount,
      currentPage: state._vehicleServiceCompany.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileMovementM2cList', ref:state._vehicleServiceCompany, listDisplayName: '还件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }
  
  getServiceFileMovementM2cUpdateForm = () => {
  	const {ServiceFileMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceFileMovementM2cList', ref:state._vehicleServiceCompany, listDisplayName: '还件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const {ServiceInsuranceForInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompany.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleServiceCompany.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceInsuranceForInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
   	const {ServiceInsuranceForInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompany.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleServiceCompany.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceInsuranceForInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '保险服务列表'}, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }
  
  getServiceInsuranceForInspectionUpdateForm = () => {
  	const {ServiceInsuranceForInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceInsuranceForInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
  }

  getServiceVehicleInspectionSearch = () => {
    const {ServiceVehicleInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleInspectionList,
      count: state._vehicleServiceCompany.serviceVehicleInspectionCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
   	const {ServiceVehicleInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleInspectionList,
      count: state._vehicleServiceCompany.serviceVehicleInspectionCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '车辆上线检测列表'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceVehicleInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const {ServiceFileInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileInspectionList,
      count: state._vehicleServiceCompany.serviceFileInspectionCount,
      currentPage: state._vehicleServiceCompany.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
   	const {ServiceFileInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileInspectionList,
      count: state._vehicleServiceCompany.serviceFileInspectionCount,
      currentPage: state._vehicleServiceCompany.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceFileInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '6年免检服务列表'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceFileInspectionList', ref:state._vehicleServiceCompany, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getServiceVehicleRepairingSearch = () => {
    const {ServiceVehicleRepairingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleRepairingList,
      count: state._vehicleServiceCompany.serviceVehicleRepairingCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleRepairingList', ref:state._vehicleServiceCompany, listDisplayName: '维修服务列表' }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
   	const {ServiceVehicleRepairingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleRepairingList,
      count: state._vehicleServiceCompany.serviceVehicleRepairingCount,
      currentPage: state._vehicleServiceCompany.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceVehicleRepairingList', ref:state._vehicleServiceCompany, listDisplayName: '维修服务列表'}, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }
  
  getServiceVehicleRepairingUpdateForm = () => {
  	const {ServiceVehicleRepairingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceVehicleRepairingList', ref:state._vehicleServiceCompany, listDisplayName: '维修服务列表' }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
  }

  getServiceCompanyAccountSearch = () => {
    const {ServiceCompanyAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAccountList,
      count: state._vehicleServiceCompany.serviceCompanyAccountCount,
      currentPage: state._vehicleServiceCompany.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceCompanyAccountList', ref:state._vehicleServiceCompany, listDisplayName: '服务商户对账单列表' }, // this is for model namespace and
    }))(ServiceCompanyAccountSearch)
  }
  getServiceCompanyAccountCreateForm = () => {
   	const {ServiceCompanyAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAccountList,
      count: state._vehicleServiceCompany.serviceCompanyAccountCount,
      currentPage: state._vehicleServiceCompany.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'serviceCompanyAccountList', ref:state._vehicleServiceCompany, listDisplayName: '服务商户对账单列表'}, // this is for model namespace and
    }))(ServiceCompanyAccountCreateForm)
  }
  
  getServiceCompanyAccountUpdateForm = () => {
  	const {ServiceCompanyAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'serviceCompanyAccountList', ref:state._vehicleServiceCompany, listDisplayName: '服务商户对账单列表' }, // this is for model namespace and
    }))(ServiceCompanyAccountUpdateForm)
  }

  getRepairingCompanyAccountSearch = () => {
    const {RepairingCompanyAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.repairingCompanyAccountList,
      count: state._vehicleServiceCompany.repairingCompanyAccountCount,
      currentPage: state._vehicleServiceCompany.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'repairingCompanyAccountList', ref:state._vehicleServiceCompany, listDisplayName: '修理厂对账单列表' }, // this is for model namespace and
    }))(RepairingCompanyAccountSearch)
  }
  getRepairingCompanyAccountCreateForm = () => {
   	const {RepairingCompanyAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.repairingCompanyAccountList,
      count: state._vehicleServiceCompany.repairingCompanyAccountCount,
      currentPage: state._vehicleServiceCompany.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'repairingCompanyAccountList', ref:state._vehicleServiceCompany, listDisplayName: '修理厂对账单列表'}, // this is for model namespace and
    }))(RepairingCompanyAccountCreateForm)
  }
  
  getRepairingCompanyAccountUpdateForm = () => {
  	const {RepairingCompanyAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'repairingCompanyAccountList', ref:state._vehicleServiceCompany, listDisplayName: '修理厂对账单列表' }, // this is for model namespace and
    }))(RepairingCompanyAccountUpdateForm)
  }

  getInsuranceServiceAccountSearch = () => {
    const {InsuranceServiceAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.insuranceServiceAccountList,
      count: state._vehicleServiceCompany.insuranceServiceAccountCount,
      currentPage: state._vehicleServiceCompany.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'insuranceServiceAccountList', ref:state._vehicleServiceCompany, listDisplayName: '保险服务对账单列表' }, // this is for model namespace and
    }))(InsuranceServiceAccountSearch)
  }
  getInsuranceServiceAccountCreateForm = () => {
   	const {InsuranceServiceAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.insuranceServiceAccountList,
      count: state._vehicleServiceCompany.insuranceServiceAccountCount,
      currentPage: state._vehicleServiceCompany.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'insuranceServiceAccountList', ref:state._vehicleServiceCompany, listDisplayName: '保险服务对账单列表'}, // this is for model namespace and
    }))(InsuranceServiceAccountCreateForm)
  }
  
  getInsuranceServiceAccountUpdateForm = () => {
  	const {InsuranceServiceAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'insuranceServiceAccountList', ref:state._vehicleServiceCompany, listDisplayName: '保险服务对账单列表' }, // this is for model namespace and
    }))(InsuranceServiceAccountUpdateForm)
  }

  getInspectionStationAccountSearch = () => {
    const {InspectionStationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.inspectionStationAccountList,
      count: state._vehicleServiceCompany.inspectionStationAccountCount,
      currentPage: state._vehicleServiceCompany.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      partialList: state._vehicleServiceCompany.partialList,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'inspectionStationAccountList', ref:state._vehicleServiceCompany, listDisplayName: '检测站对账单列表' }, // this is for model namespace and
    }))(InspectionStationAccountSearch)
  }
  getInspectionStationAccountCreateForm = () => {
   	const {InspectionStationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.inspectionStationAccountList,
      count: state._vehicleServiceCompany.inspectionStationAccountCount,
      currentPage: state._vehicleServiceCompany.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompany.inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, referenceName: 'merchant', listName: 'inspectionStationAccountList', ref:state._vehicleServiceCompany, listDisplayName: '检测站对账单列表'}, // this is for model namespace and
    }))(InspectionStationAccountCreateForm)
  }
  
  getInspectionStationAccountUpdateForm = () => {
  	const {InspectionStationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompany', id: state._vehicleServiceCompany.id, listName: 'inspectionStationAccountList', ref:state._vehicleServiceCompany, listDisplayName: '检测站对账单列表' }, // this is for model namespace and
    }))(InspectionStationAccountUpdateForm)
  }


  
  buildRouters = () =>{
  	const {VehicleServiceCompanyDashboard} = GlobalComponents
  	const {VehicleServiceCompanyPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/vehicleServiceCompany/:id/dashboard", component: VehicleServiceCompanyDashboard},
  	{path:"/vehicleServiceCompany/:id/preference", component: VehicleServiceCompanyPreference},
  	
  	
  	
  	{path:"/vehicleServiceCompany/:id/list/contractList", component: this.getContractSearch()},
  	{path:"/vehicleServiceCompany/:id/list/contractCreateForm", component: this.getContractCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/contractUpdateForm", component: this.getContractUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceCompanyAuthenticationInfoList", component: this.getServiceCompanyAuthenticationInfoSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceCompanyAuthenticationInfoCreateForm", component: this.getServiceCompanyAuthenticationInfoCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceCompanyAuthenticationInfoUpdateForm", component: this.getServiceCompanyAuthenticationInfoUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/vehicleInspectionPlateNumberPatternList", component: this.getVehicleInspectionPlateNumberPatternSearch()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleInspectionPlateNumberPatternCreateForm", component: this.getVehicleInspectionPlateNumberPatternCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleInspectionPlateNumberPatternUpdateForm", component: this.getVehicleInspectionPlateNumberPatternUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/fileInspectionPlateNumberPatternList", component: this.getFileInspectionPlateNumberPatternSearch()},
  	{path:"/vehicleServiceCompany/:id/list/fileInspectionPlateNumberPatternCreateForm", component: this.getFileInspectionPlateNumberPatternCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/fileInspectionPlateNumberPatternUpdateForm", component: this.getFileInspectionPlateNumberPatternUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeList", component: this.getVehicleServiceCompanyBusinessScopeSearch()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeCreateForm", component: this.getVehicleServiceCompanyBusinessScopeCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeUpdateForm", component: this.getVehicleServiceCompanyBusinessScopeUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/companyQrcodePromotionRecordList", component: this.getCompanyQrcodePromotionRecordSearch()},
  	{path:"/vehicleServiceCompany/:id/list/companyQrcodePromotionRecordCreateForm", component: this.getCompanyQrcodePromotionRecordCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/companyQrcodePromotionRecordUpdateForm", component: this.getCompanyQrcodePromotionRecordUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherList", component: this.getVehicleServiceCompanyDispatcherSearch()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherCreateForm", component: this.getVehicleServiceCompanyDispatcherCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherUpdateForm", component: this.getVehicleServiceCompanyDispatcherUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/companyDiscountList", component: this.getCompanyDiscountSearch()},
  	{path:"/vehicleServiceCompany/:id/list/companyDiscountCreateForm", component: this.getCompanyDiscountCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/companyDiscountUpdateForm", component: this.getCompanyDiscountUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeList", component: this.getVehicleServiceCompanyEmployeeSearch()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeCreateForm", component: this.getVehicleServiceCompanyEmployeeCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeUpdateForm", component: this.getVehicleServiceCompanyEmployeeUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/vehicleInspectionOrderList", component: this.getVehicleInspectionOrderSearch()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleInspectionOrderCreateForm", component: this.getVehicleInspectionOrderCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/vehicleInspectionOrderUpdateForm", component: this.getVehicleInspectionOrderUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mList", component: this.getServiceVehicleMovementC2mSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mCreateForm", component: this.getServiceVehicleMovementC2mCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mUpdateForm", component: this.getServiceVehicleMovementC2mUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementM2mList", component: this.getServiceVehicleMovementM2mSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementM2mCreateForm", component: this.getServiceVehicleMovementM2mCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementM2mUpdateForm", component: this.getServiceVehicleMovementM2mUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cList", component: this.getServiceVehicleMovementM2cSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cCreateForm", component: this.getServiceVehicleMovementM2cCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cUpdateForm", component: this.getServiceVehicleMovementM2cUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementC2mList", component: this.getServiceFileMovementC2mSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementC2mCreateForm", component: this.getServiceFileMovementC2mCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementC2mUpdateForm", component: this.getServiceFileMovementC2mUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementM2mList", component: this.getServiceFileMovementM2mSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementM2mCreateForm", component: this.getServiceFileMovementM2mCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementM2mUpdateForm", component: this.getServiceFileMovementM2mUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementM2cList", component: this.getServiceFileMovementM2cSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementM2cCreateForm", component: this.getServiceFileMovementM2cCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileMovementM2cUpdateForm", component: this.getServiceFileMovementM2cUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceInsuranceForInspectionList", component: this.getServiceInsuranceForInspectionSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceInsuranceForInspectionCreateForm", component: this.getServiceInsuranceForInspectionCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceInsuranceForInspectionUpdateForm", component: this.getServiceInsuranceForInspectionUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleInspectionList", component: this.getServiceVehicleInspectionSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleInspectionCreateForm", component: this.getServiceVehicleInspectionCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleInspectionUpdateForm", component: this.getServiceVehicleInspectionUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceFileInspectionList", component: this.getServiceFileInspectionSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileInspectionCreateForm", component: this.getServiceFileInspectionCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceFileInspectionUpdateForm", component: this.getServiceFileInspectionUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleRepairingList", component: this.getServiceVehicleRepairingSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleRepairingCreateForm", component: this.getServiceVehicleRepairingCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceVehicleRepairingUpdateForm", component: this.getServiceVehicleRepairingUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/serviceCompanyAccountList", component: this.getServiceCompanyAccountSearch()},
  	{path:"/vehicleServiceCompany/:id/list/serviceCompanyAccountCreateForm", component: this.getServiceCompanyAccountCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/serviceCompanyAccountUpdateForm", component: this.getServiceCompanyAccountUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/repairingCompanyAccountList", component: this.getRepairingCompanyAccountSearch()},
  	{path:"/vehicleServiceCompany/:id/list/repairingCompanyAccountCreateForm", component: this.getRepairingCompanyAccountCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/repairingCompanyAccountUpdateForm", component: this.getRepairingCompanyAccountUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/insuranceServiceAccountList", component: this.getInsuranceServiceAccountSearch()},
  	{path:"/vehicleServiceCompany/:id/list/insuranceServiceAccountCreateForm", component: this.getInsuranceServiceAccountCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/insuranceServiceAccountUpdateForm", component: this.getInsuranceServiceAccountUpdateForm()},
   	
  	{path:"/vehicleServiceCompany/:id/list/inspectionStationAccountList", component: this.getInspectionStationAccountSearch()},
  	{path:"/vehicleServiceCompany/:id/list/inspectionStationAccountCreateForm", component: this.getInspectionStationAccountCreateForm()},
  	{path:"/vehicleServiceCompany/:id/list/inspectionStationAccountUpdateForm", component: this.getInspectionStationAccountUpdateForm()},
     	
  	
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

     //const {VehicleServiceCompanyEditDetail} = GlobalComponents
     //const {VehicleServiceCompanyViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.vehicleServiceCompany.id)}
            
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
  vehicleServiceCompany: state._vehicleServiceCompany,
  ...state,
}))(VehicleServiceCompanyBizApp)



