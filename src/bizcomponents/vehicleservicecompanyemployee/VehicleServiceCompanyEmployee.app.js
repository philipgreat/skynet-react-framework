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
import styles from './VehicleServiceCompanyEmployee.app.less'
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




class VehicleServiceCompanyEmployeeBizApp extends React.PureComponent {
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
      return ['/vehicleServiceCompanyEmployee/']
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
               <Link to={`/vehicleServiceCompanyEmployee/${this.props.vehicleServiceCompanyEmployee.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
  



  getServiceOrderFilterSearch = () => {
    const {ServiceOrderFilterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceOrderFilterList,
      count: state._vehicleServiceCompanyEmployee.serviceOrderFilterCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceOrderFilterCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceOrderFilterSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'employee', listName: 'serviceOrderFilterList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '服务单状态类型列表' }, // this is for model namespace and
    }))(ServiceOrderFilterSearch)
  }
  getServiceOrderFilterCreateForm = () => {
   	const {ServiceOrderFilterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceOrderFilterList,
      count: state._vehicleServiceCompanyEmployee.serviceOrderFilterCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceOrderFilterCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceOrderFilterSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'employee', listName: 'serviceOrderFilterList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '服务单状态类型列表'}, // this is for model namespace and
    }))(ServiceOrderFilterCreateForm)
  }
  
  getServiceOrderFilterUpdateForm = () => {
  	const {ServiceOrderFilterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceOrderFilterList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '服务单状态类型列表' }, // this is for model namespace and
    }))(ServiceOrderFilterUpdateForm)
  }

  getEmployeeDrivingLicenseSearch = () => {
    const {EmployeeDrivingLicenseSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseList,
      count: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCount,
      currentPage: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'employee', listName: 'employeeDrivingLicenseList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '员工驾驶证列表' }, // this is for model namespace and
    }))(EmployeeDrivingLicenseSearch)
  }
  getEmployeeDrivingLicenseCreateForm = () => {
   	const {EmployeeDrivingLicenseCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseList,
      count: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCount,
      currentPage: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'employee', listName: 'employeeDrivingLicenseList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '员工驾驶证列表'}, // this is for model namespace and
    }))(EmployeeDrivingLicenseCreateForm)
  }
  
  getEmployeeDrivingLicenseUpdateForm = () => {
  	const {EmployeeDrivingLicenseUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'employeeDrivingLicenseList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '员工驾驶证列表' }, // this is for model namespace and
    }))(EmployeeDrivingLicenseUpdateForm)
  }

  getVehicleInspectionOrderServiceLogSearch = () => {
    const {VehicleInspectionOrderServiceLogSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogList,
      count: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'vehicleInspectionOrderServiceLogList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '年检订单执行日志列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogSearch)
  }
  getVehicleInspectionOrderServiceLogCreateForm = () => {
   	const {VehicleInspectionOrderServiceLogCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogList,
      count: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'vehicleInspectionOrderServiceLogList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '年检订单执行日志列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogCreateForm)
  }
  
  getVehicleInspectionOrderServiceLogUpdateForm = () => {
  	const {VehicleInspectionOrderServiceLogUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'vehicleInspectionOrderServiceLogList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '年检订单执行日志列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const {ServiceVehicleMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleMovementC2mList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '收车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
   	const {ServiceVehicleMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleMovementC2mList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '收车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }
  
  getServiceVehicleMovementC2mUpdateForm = () => {
  	const {ServiceVehicleMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementC2mList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '收车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2mAsResponsibleWorkerSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleMovementM2mListAsResponsibleWorker', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mAsResponsibleWorkerCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleMovementM2mListAsResponsibleWorker', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mAsResponsibleWorkerUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsResponsibleWorker', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2mAsDriverSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsDriver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'driver', listName: 'serviceVehicleMovementM2mListAsDriver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mAsDriverCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsDriver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'driver', listName: 'serviceVehicleMovementM2mListAsDriver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mAsDriverUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsDriver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2mAsReceiverSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'receiver', listName: 'serviceVehicleMovementM2mListAsReceiver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mAsReceiverCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'receiver', listName: 'serviceVehicleMovementM2mListAsReceiver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mAsReceiverUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsReceiver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const {ServiceVehicleMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleMovementM2cList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '还车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
   	const {ServiceVehicleMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleMovementM2cList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '还车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }
  
  getServiceVehicleMovementM2cUpdateForm = () => {
  	const {ServiceVehicleMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2cList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '还车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const {ServiceFileMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileMovementC2mList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '收件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
   	const {ServiceFileMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileMovementC2mList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '收件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }
  
  getServiceFileMovementC2mUpdateForm = () => {
  	const {ServiceFileMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementC2mList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '收件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2mAsResponsibleWorkerSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileMovementM2mListAsResponsibleWorker', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mAsResponsibleWorkerCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileMovementM2mListAsResponsibleWorker', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mAsResponsibleWorkerUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsResponsibleWorker', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2mAsSenderSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsSender,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'sender', listName: 'serviceFileMovementM2mListAsSender', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mAsSenderCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsSender,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'sender', listName: 'serviceFileMovementM2mListAsSender', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mAsSenderUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsSender', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2mAsReceiverSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'receiver', listName: 'serviceFileMovementM2mListAsReceiver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mAsReceiverCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'receiver', listName: 'serviceFileMovementM2mListAsReceiver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mAsReceiverUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsReceiver', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const {ServiceFileMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileMovementM2cList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '还件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
   	const {ServiceFileMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileMovementM2cList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '还件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }
  
  getServiceFileMovementM2cUpdateForm = () => {
  	const {ServiceFileMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2cList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '还件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const {ServiceInsuranceForInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceInsuranceForInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
   	const {ServiceInsuranceForInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceInsuranceForInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '保险服务列表'}, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }
  
  getServiceInsuranceForInspectionUpdateForm = () => {
  	const {ServiceInsuranceForInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceInsuranceForInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
  }

  getServiceVehicleInspectionSearch = () => {
    const {ServiceVehicleInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
   	const {ServiceVehicleInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '车辆上线检测列表'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const {ServiceFileInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceFileInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
   	const {ServiceFileInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceFileInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceFileInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '6年免检服务列表'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileInspectionList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getServiceVehicleRepairingSearch = () => {
    const {ServiceVehicleRepairingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleRepairingList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '维修服务列表' }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
   	const {ServiceVehicleRepairingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceVehicleRepairingList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '维修服务列表'}, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }
  
  getServiceVehicleRepairingUpdateForm = () => {
  	const {ServiceVehicleRepairingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleRepairingList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '维修服务列表' }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
  }

  getServiceCompanyAccountSearch = () => {
    const {ServiceCompanyAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceCompanyAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '服务商户对账单列表' }, // this is for model namespace and
    }))(ServiceCompanyAccountSearch)
  }
  getServiceCompanyAccountCreateForm = () => {
   	const {ServiceCompanyAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'serviceCompanyAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '服务商户对账单列表'}, // this is for model namespace and
    }))(ServiceCompanyAccountCreateForm)
  }
  
  getServiceCompanyAccountUpdateForm = () => {
  	const {ServiceCompanyAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceCompanyAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '服务商户对账单列表' }, // this is for model namespace and
    }))(ServiceCompanyAccountUpdateForm)
  }

  getRepairingCompanyAccountSearch = () => {
    const {RepairingCompanyAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.repairingCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'repairingCompanyAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '修理厂对账单列表' }, // this is for model namespace and
    }))(RepairingCompanyAccountSearch)
  }
  getRepairingCompanyAccountCreateForm = () => {
   	const {RepairingCompanyAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.repairingCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'repairingCompanyAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '修理厂对账单列表'}, // this is for model namespace and
    }))(RepairingCompanyAccountCreateForm)
  }
  
  getRepairingCompanyAccountUpdateForm = () => {
  	const {RepairingCompanyAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'repairingCompanyAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '修理厂对账单列表' }, // this is for model namespace and
    }))(RepairingCompanyAccountUpdateForm)
  }

  getInsuranceServiceAccountSearch = () => {
    const {InsuranceServiceAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.insuranceServiceAccountList,
      count: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'insuranceServiceAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '保险服务对账单列表' }, // this is for model namespace and
    }))(InsuranceServiceAccountSearch)
  }
  getInsuranceServiceAccountCreateForm = () => {
   	const {InsuranceServiceAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.insuranceServiceAccountList,
      count: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'insuranceServiceAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '保险服务对账单列表'}, // this is for model namespace and
    }))(InsuranceServiceAccountCreateForm)
  }
  
  getInsuranceServiceAccountUpdateForm = () => {
  	const {InsuranceServiceAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'insuranceServiceAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '保险服务对账单列表' }, // this is for model namespace and
    }))(InsuranceServiceAccountUpdateForm)
  }

  getInspectionStationAccountSearch = () => {
    const {InspectionStationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.inspectionStationAccountList,
      count: state._vehicleServiceCompanyEmployee.inspectionStationAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      partialList: state._vehicleServiceCompanyEmployee.partialList,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'inspectionStationAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '检测站对账单列表' }, // this is for model namespace and
    }))(InspectionStationAccountSearch)
  }
  getInspectionStationAccountCreateForm = () => {
   	const {InspectionStationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.inspectionStationAccountList,
      count: state._vehicleServiceCompanyEmployee.inspectionStationAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, referenceName: 'responsibleWorker', listName: 'inspectionStationAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '检测站对账单列表'}, // this is for model namespace and
    }))(InspectionStationAccountCreateForm)
  }
  
  getInspectionStationAccountUpdateForm = () => {
  	const {InspectionStationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'inspectionStationAccountList', ref:state._vehicleServiceCompanyEmployee, listDisplayName: '检测站对账单列表' }, // this is for model namespace and
    }))(InspectionStationAccountUpdateForm)
  }


  
  buildRouters = () =>{
  	const {VehicleServiceCompanyEmployeeDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/vehicleServiceCompanyEmployee/:id/dashboard", component: VehicleServiceCompanyEmployeeDashboard},
  	
  	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceOrderFilterList", component: this.getServiceOrderFilterSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceOrderFilterCreateForm", component: this.getServiceOrderFilterCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceOrderFilterUpdateForm", component: this.getServiceOrderFilterUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/employeeDrivingLicenseList", component: this.getEmployeeDrivingLicenseSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/employeeDrivingLicenseCreateForm", component: this.getEmployeeDrivingLicenseCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/employeeDrivingLicenseUpdateForm", component: this.getEmployeeDrivingLicenseUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/vehicleInspectionOrderServiceLogList", component: this.getVehicleInspectionOrderServiceLogSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/vehicleInspectionOrderServiceLogCreateForm", component: this.getVehicleInspectionOrderServiceLogCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/vehicleInspectionOrderServiceLogUpdateForm", component: this.getVehicleInspectionOrderServiceLogUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementC2mList", component: this.getServiceVehicleMovementC2mSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementC2mCreateForm", component: this.getServiceVehicleMovementC2mCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementC2mUpdateForm", component: this.getServiceVehicleMovementC2mUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mListAsResponsibleWorker", component: this.getServiceVehicleMovementM2mAsResponsibleWorkerSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsResponsibleWorkerCreateForm", component: this.getServiceVehicleMovementM2mAsResponsibleWorkerCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsResponsibleWorkerUpdateForm", component: this.getServiceVehicleMovementM2mAsResponsibleWorkerUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mListAsDriver", component: this.getServiceVehicleMovementM2mAsDriverSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsDriverCreateForm", component: this.getServiceVehicleMovementM2mAsDriverCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsDriverUpdateForm", component: this.getServiceVehicleMovementM2mAsDriverUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mListAsReceiver", component: this.getServiceVehicleMovementM2mAsReceiverSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsReceiverCreateForm", component: this.getServiceVehicleMovementM2mAsReceiverCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsReceiverUpdateForm", component: this.getServiceVehicleMovementM2mAsReceiverUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2cList", component: this.getServiceVehicleMovementM2cSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2cCreateForm", component: this.getServiceVehicleMovementM2cCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2cUpdateForm", component: this.getServiceVehicleMovementM2cUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementC2mList", component: this.getServiceFileMovementC2mSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementC2mCreateForm", component: this.getServiceFileMovementC2mCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementC2mUpdateForm", component: this.getServiceFileMovementC2mUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mListAsResponsibleWorker", component: this.getServiceFileMovementM2mAsResponsibleWorkerSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsResponsibleWorkerCreateForm", component: this.getServiceFileMovementM2mAsResponsibleWorkerCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsResponsibleWorkerUpdateForm", component: this.getServiceFileMovementM2mAsResponsibleWorkerUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mListAsSender", component: this.getServiceFileMovementM2mAsSenderSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsSenderCreateForm", component: this.getServiceFileMovementM2mAsSenderCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsSenderUpdateForm", component: this.getServiceFileMovementM2mAsSenderUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mListAsReceiver", component: this.getServiceFileMovementM2mAsReceiverSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsReceiverCreateForm", component: this.getServiceFileMovementM2mAsReceiverCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsReceiverUpdateForm", component: this.getServiceFileMovementM2mAsReceiverUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2cList", component: this.getServiceFileMovementM2cSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2cCreateForm", component: this.getServiceFileMovementM2cCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2cUpdateForm", component: this.getServiceFileMovementM2cUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceInsuranceForInspectionList", component: this.getServiceInsuranceForInspectionSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceInsuranceForInspectionCreateForm", component: this.getServiceInsuranceForInspectionCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceInsuranceForInspectionUpdateForm", component: this.getServiceInsuranceForInspectionUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleInspectionList", component: this.getServiceVehicleInspectionSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleInspectionCreateForm", component: this.getServiceVehicleInspectionCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleInspectionUpdateForm", component: this.getServiceVehicleInspectionUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileInspectionList", component: this.getServiceFileInspectionSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileInspectionCreateForm", component: this.getServiceFileInspectionCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceFileInspectionUpdateForm", component: this.getServiceFileInspectionUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleRepairingList", component: this.getServiceVehicleRepairingSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleRepairingCreateForm", component: this.getServiceVehicleRepairingCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceVehicleRepairingUpdateForm", component: this.getServiceVehicleRepairingUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceCompanyAccountList", component: this.getServiceCompanyAccountSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceCompanyAccountCreateForm", component: this.getServiceCompanyAccountCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/serviceCompanyAccountUpdateForm", component: this.getServiceCompanyAccountUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/repairingCompanyAccountList", component: this.getRepairingCompanyAccountSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/repairingCompanyAccountCreateForm", component: this.getRepairingCompanyAccountCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/repairingCompanyAccountUpdateForm", component: this.getRepairingCompanyAccountUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/insuranceServiceAccountList", component: this.getInsuranceServiceAccountSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/insuranceServiceAccountCreateForm", component: this.getInsuranceServiceAccountCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/insuranceServiceAccountUpdateForm", component: this.getInsuranceServiceAccountUpdateForm()},
   	
  	{path:"/vehicleServiceCompanyEmployee/:id/list/inspectionStationAccountList", component: this.getInspectionStationAccountSearch()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/inspectionStationAccountCreateForm", component: this.getInspectionStationAccountCreateForm()},
  	{path:"/vehicleServiceCompanyEmployee/:id/list/inspectionStationAccountUpdateForm", component: this.getInspectionStationAccountUpdateForm()},
     	
  	
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

     //const {VehicleServiceCompanyEmployeeEditDetail} = GlobalComponents
     //const {VehicleServiceCompanyEmployeeViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.vehicleServiceCompanyEmployee.id)}
            
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
  vehicleServiceCompanyEmployee: state._vehicleServiceCompanyEmployee,
  ...state,
}))(VehicleServiceCompanyEmployeeBizApp)



