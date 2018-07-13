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
import styles from './VehicleInspectionOrder.app.less'
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




class VehicleInspectionOrderBizApp extends React.PureComponent {
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
      return ['/vehicleInspectionOrder/']
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
               <Link to={`/vehicleInspectionOrder/${this.props.vehicleInspectionOrder.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
  



  getVehicleInspectionInsuranceOrderSearch = () => {
    const {VehicleInspectionInsuranceOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderList,
      count: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionInsuranceOrderList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆上线检测保险订单列表' }, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderSearch)
  }
  getVehicleInspectionInsuranceOrderCreateForm = () => {
   	const {VehicleInspectionInsuranceOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderList,
      count: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionInsuranceOrderList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆上线检测保险订单列表'}, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderCreateForm)
  }
  
  getVehicleInspectionInsuranceOrderUpdateForm = () => {
  	const {VehicleInspectionInsuranceOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionInsuranceOrderList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆上线检测保险订单列表' }, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderUpdateForm)
  }

  getVehicleInspectionOrderChargeSearch = () => {
    const {VehicleInspectionOrderChargeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderChargeList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderChargeCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderChargeCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderChargeSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderChargeList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆检验订单费用列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderChargeSearch)
  }
  getVehicleInspectionOrderChargeCreateForm = () => {
   	const {VehicleInspectionOrderChargeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderChargeList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderChargeCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderChargeCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderChargeSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderChargeList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆检验订单费用列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderChargeCreateForm)
  }
  
  getVehicleInspectionOrderChargeUpdateForm = () => {
  	const {VehicleInspectionOrderChargeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderChargeList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆检验订单费用列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderChargeUpdateForm)
  }

  getVehicleInspectionOrderServiceLogSearch = () => {
    const {VehicleInspectionOrderServiceLogSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderServiceLogList', ref:state._vehicleInspectionOrder, listDisplayName: '年检订单执行日志列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogSearch)
  }
  getVehicleInspectionOrderServiceLogCreateForm = () => {
   	const {VehicleInspectionOrderServiceLogCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderServiceLogList', ref:state._vehicleInspectionOrder, listDisplayName: '年检订单执行日志列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogCreateForm)
  }
  
  getVehicleInspectionOrderServiceLogUpdateForm = () => {
  	const {VehicleInspectionOrderServiceLogUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderServiceLogList', ref:state._vehicleInspectionOrder, listDisplayName: '年检订单执行日志列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogUpdateForm)
  }

  getVehicleInspectionOrderPaymentSearch = () => {
    const {VehicleInspectionOrderPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderPaymentList', ref:state._vehicleInspectionOrder, listDisplayName: '年检订单支付列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderPaymentSearch)
  }
  getVehicleInspectionOrderPaymentCreateForm = () => {
   	const {VehicleInspectionOrderPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderPaymentList', ref:state._vehicleInspectionOrder, listDisplayName: '年检订单支付列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderPaymentCreateForm)
  }
  
  getVehicleInspectionOrderPaymentUpdateForm = () => {
  	const {VehicleInspectionOrderPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderPaymentList', ref:state._vehicleInspectionOrder, listDisplayName: '年检订单支付列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderPaymentUpdateForm)
  }

  getHandOverChecklistItemSearch = () => {
    const {HandOverChecklistItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.handOverChecklistItemList,
      count: state._vehicleInspectionOrder.handOverChecklistItemCount,
      currentPage: state._vehicleInspectionOrder.handOverChecklistItemCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.handOverChecklistItemSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'handOverChecklistItemList', ref:state._vehicleInspectionOrder, listDisplayName: '交接检查项列表' }, // this is for model namespace and
    }))(HandOverChecklistItemSearch)
  }
  getHandOverChecklistItemCreateForm = () => {
   	const {HandOverChecklistItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.handOverChecklistItemList,
      count: state._vehicleInspectionOrder.handOverChecklistItemCount,
      currentPage: state._vehicleInspectionOrder.handOverChecklistItemCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.handOverChecklistItemSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'handOverChecklistItemList', ref:state._vehicleInspectionOrder, listDisplayName: '交接检查项列表'}, // this is for model namespace and
    }))(HandOverChecklistItemCreateForm)
  }
  
  getHandOverChecklistItemUpdateForm = () => {
  	const {HandOverChecklistItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'handOverChecklistItemList', ref:state._vehicleInspectionOrder, listDisplayName: '交接检查项列表' }, // this is for model namespace and
    }))(HandOverChecklistItemUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const {ServiceVehicleMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementC2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleMovementC2mList', ref:state._vehicleInspectionOrder, listDisplayName: '收车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
   	const {ServiceVehicleMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementC2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleMovementC2mList', ref:state._vehicleInspectionOrder, listDisplayName: '收车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }
  
  getServiceVehicleMovementC2mUpdateForm = () => {
  	const {ServiceVehicleMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementC2mList', ref:state._vehicleInspectionOrder, listDisplayName: '收车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2mSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleMovementM2mList', ref:state._vehicleInspectionOrder, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleMovementM2mList', ref:state._vehicleInspectionOrder, listDisplayName: '移车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2mList', ref:state._vehicleInspectionOrder, listDisplayName: '移车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const {ServiceVehicleMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2cList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleMovementM2cList', ref:state._vehicleInspectionOrder, listDisplayName: '还车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
   	const {ServiceVehicleMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2cList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleMovementM2cList', ref:state._vehicleInspectionOrder, listDisplayName: '还车服务列表'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }
  
  getServiceVehicleMovementM2cUpdateForm = () => {
  	const {ServiceVehicleMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2cList', ref:state._vehicleInspectionOrder, listDisplayName: '还车服务列表' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const {ServiceFileMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementC2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileMovementC2mList', ref:state._vehicleInspectionOrder, listDisplayName: '收件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
   	const {ServiceFileMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementC2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileMovementC2mList', ref:state._vehicleInspectionOrder, listDisplayName: '收件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }
  
  getServiceFileMovementC2mUpdateForm = () => {
  	const {ServiceFileMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementC2mList', ref:state._vehicleInspectionOrder, listDisplayName: '收件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2mSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileMovementM2mList', ref:state._vehicleInspectionOrder, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileMovementM2mList', ref:state._vehicleInspectionOrder, listDisplayName: '移件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2mList', ref:state._vehicleInspectionOrder, listDisplayName: '移件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const {ServiceFileMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2cList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileMovementM2cList', ref:state._vehicleInspectionOrder, listDisplayName: '还件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
   	const {ServiceFileMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2cList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileMovementM2cList', ref:state._vehicleInspectionOrder, listDisplayName: '还件服务列表'}, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }
  
  getServiceFileMovementM2cUpdateForm = () => {
  	const {ServiceFileMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2cList', ref:state._vehicleInspectionOrder, listDisplayName: '还件服务列表' }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const {ServiceInsuranceForInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceInsuranceForInspectionList,
      count: state._vehicleInspectionOrder.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceInsuranceForInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
   	const {ServiceInsuranceForInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceInsuranceForInspectionList,
      count: state._vehicleInspectionOrder.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceInsuranceForInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '保险服务列表'}, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }
  
  getServiceInsuranceForInspectionUpdateForm = () => {
  	const {ServiceInsuranceForInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceInsuranceForInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
  }

  getServiceVehicleInspectionSearch = () => {
    const {ServiceVehicleInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleInspectionList,
      count: state._vehicleInspectionOrder.serviceVehicleInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
   	const {ServiceVehicleInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleInspectionList,
      count: state._vehicleInspectionOrder.serviceVehicleInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆上线检测列表'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const {ServiceFileInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileInspectionList,
      count: state._vehicleInspectionOrder.serviceFileInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
   	const {ServiceFileInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileInspectionList,
      count: state._vehicleInspectionOrder.serviceFileInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceFileInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '6年免检服务列表'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileInspectionList', ref:state._vehicleInspectionOrder, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getServiceVehicleRepairingSearch = () => {
    const {ServiceVehicleRepairingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleRepairingList,
      count: state._vehicleInspectionOrder.serviceVehicleRepairingCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleRepairingList', ref:state._vehicleInspectionOrder, listDisplayName: '维修服务列表' }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
   	const {ServiceVehicleRepairingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleRepairingList,
      count: state._vehicleInspectionOrder.serviceVehicleRepairingCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'serviceVehicleRepairingList', ref:state._vehicleInspectionOrder, listDisplayName: '维修服务列表'}, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }
  
  getServiceVehicleRepairingUpdateForm = () => {
  	const {ServiceVehicleRepairingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleRepairingList', ref:state._vehicleInspectionOrder, listDisplayName: '维修服务列表' }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
  }

  getOrderReviewResultSearch = () => {
    const {OrderReviewResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderReviewResultList,
      count: state._vehicleInspectionOrder.orderReviewResultCount,
      currentPage: state._vehicleInspectionOrder.orderReviewResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderReviewResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'orderReviewResultList', ref:state._vehicleInspectionOrder, listDisplayName: '订单评论结果列表' }, // this is for model namespace and
    }))(OrderReviewResultSearch)
  }
  getOrderReviewResultCreateForm = () => {
   	const {OrderReviewResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderReviewResultList,
      count: state._vehicleInspectionOrder.orderReviewResultCount,
      currentPage: state._vehicleInspectionOrder.orderReviewResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderReviewResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'orderReviewResultList', ref:state._vehicleInspectionOrder, listDisplayName: '订单评论结果列表'}, // this is for model namespace and
    }))(OrderReviewResultCreateForm)
  }
  
  getOrderReviewResultUpdateForm = () => {
  	const {OrderReviewResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderReviewResultList', ref:state._vehicleInspectionOrder, listDisplayName: '订单评论结果列表' }, // this is for model namespace and
    }))(OrderReviewResultUpdateForm)
  }

  getOrderRatingResultSearch = () => {
    const {OrderRatingResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderRatingResultList,
      count: state._vehicleInspectionOrder.orderRatingResultCount,
      currentPage: state._vehicleInspectionOrder.orderRatingResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderRatingResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'orderRatingResultList', ref:state._vehicleInspectionOrder, listDisplayName: '订单评分结果列表' }, // this is for model namespace and
    }))(OrderRatingResultSearch)
  }
  getOrderRatingResultCreateForm = () => {
   	const {OrderRatingResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderRatingResultList,
      count: state._vehicleInspectionOrder.orderRatingResultCount,
      currentPage: state._vehicleInspectionOrder.orderRatingResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderRatingResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'orderRatingResultList', ref:state._vehicleInspectionOrder, listDisplayName: '订单评分结果列表'}, // this is for model namespace and
    }))(OrderRatingResultCreateForm)
  }
  
  getOrderRatingResultUpdateForm = () => {
  	const {OrderRatingResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderRatingResultList', ref:state._vehicleInspectionOrder, listDisplayName: '订单评分结果列表' }, // this is for model namespace and
    }))(OrderRatingResultUpdateForm)
  }

  getOrderDiscountCouponSearch = () => {
    const {OrderDiscountCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderDiscountCouponList,
      count: state._vehicleInspectionOrder.orderDiscountCouponCount,
      currentPage: state._vehicleInspectionOrder.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderDiscountCouponSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'orderDiscountCouponList', ref:state._vehicleInspectionOrder, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(OrderDiscountCouponSearch)
  }
  getOrderDiscountCouponCreateForm = () => {
   	const {OrderDiscountCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderDiscountCouponList,
      count: state._vehicleInspectionOrder.orderDiscountCouponCount,
      currentPage: state._vehicleInspectionOrder.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderDiscountCouponSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'orderDiscountCouponList', ref:state._vehicleInspectionOrder, listDisplayName: '优惠券列表'}, // this is for model namespace and
    }))(OrderDiscountCouponCreateForm)
  }
  
  getOrderDiscountCouponUpdateForm = () => {
  	const {OrderDiscountCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderDiscountCouponList', ref:state._vehicleInspectionOrder, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(OrderDiscountCouponUpdateForm)
  }

  getVehicleInspectionOrderCouponSearch = () => {
    const {VehicleInspectionOrderCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderCouponList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      partialList: state._vehicleInspectionOrder.partialList,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderCouponList', ref:state._vehicleInspectionOrder, listDisplayName: '优惠券使用记录列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponSearch)
  }
  getVehicleInspectionOrderCouponCreateForm = () => {
   	const {VehicleInspectionOrderCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderCouponList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, referenceName: 'mainOrder', listName: 'vehicleInspectionOrderCouponList', ref:state._vehicleInspectionOrder, listDisplayName: '优惠券使用记录列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCouponCreateForm)
  }
  
  getVehicleInspectionOrderCouponUpdateForm = () => {
  	const {VehicleInspectionOrderCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderCouponList', ref:state._vehicleInspectionOrder, listDisplayName: '优惠券使用记录列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponUpdateForm)
  }


  
  buildRouters = () =>{
  	const {VehicleInspectionOrderDashboard} = GlobalComponents
  	
  	const routers=[
  	{path:"/vehicleInspectionOrder/:id/dashboard", component: VehicleInspectionOrderDashboard},
  	
  	
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionInsuranceOrderList", component: this.getVehicleInspectionInsuranceOrderSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionInsuranceOrderCreateForm", component: this.getVehicleInspectionInsuranceOrderCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionInsuranceOrderUpdateForm", component: this.getVehicleInspectionInsuranceOrderUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderChargeList", component: this.getVehicleInspectionOrderChargeSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderChargeCreateForm", component: this.getVehicleInspectionOrderChargeCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderChargeUpdateForm", component: this.getVehicleInspectionOrderChargeUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderServiceLogList", component: this.getVehicleInspectionOrderServiceLogSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderServiceLogCreateForm", component: this.getVehicleInspectionOrderServiceLogCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderServiceLogUpdateForm", component: this.getVehicleInspectionOrderServiceLogUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderPaymentList", component: this.getVehicleInspectionOrderPaymentSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderPaymentCreateForm", component: this.getVehicleInspectionOrderPaymentCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderPaymentUpdateForm", component: this.getVehicleInspectionOrderPaymentUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/handOverChecklistItemList", component: this.getHandOverChecklistItemSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/handOverChecklistItemCreateForm", component: this.getHandOverChecklistItemCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/handOverChecklistItemUpdateForm", component: this.getHandOverChecklistItemUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementC2mList", component: this.getServiceVehicleMovementC2mSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementC2mCreateForm", component: this.getServiceVehicleMovementC2mCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementC2mUpdateForm", component: this.getServiceVehicleMovementC2mUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2mList", component: this.getServiceVehicleMovementM2mSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2mCreateForm", component: this.getServiceVehicleMovementM2mCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2mUpdateForm", component: this.getServiceVehicleMovementM2mUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2cList", component: this.getServiceVehicleMovementM2cSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2cCreateForm", component: this.getServiceVehicleMovementM2cCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2cUpdateForm", component: this.getServiceVehicleMovementM2cUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementC2mList", component: this.getServiceFileMovementC2mSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementC2mCreateForm", component: this.getServiceFileMovementC2mCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementC2mUpdateForm", component: this.getServiceFileMovementC2mUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementM2mList", component: this.getServiceFileMovementM2mSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementM2mCreateForm", component: this.getServiceFileMovementM2mCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementM2mUpdateForm", component: this.getServiceFileMovementM2mUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementM2cList", component: this.getServiceFileMovementM2cSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementM2cCreateForm", component: this.getServiceFileMovementM2cCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileMovementM2cUpdateForm", component: this.getServiceFileMovementM2cUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceInsuranceForInspectionList", component: this.getServiceInsuranceForInspectionSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceInsuranceForInspectionCreateForm", component: this.getServiceInsuranceForInspectionCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceInsuranceForInspectionUpdateForm", component: this.getServiceInsuranceForInspectionUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleInspectionList", component: this.getServiceVehicleInspectionSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleInspectionCreateForm", component: this.getServiceVehicleInspectionCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleInspectionUpdateForm", component: this.getServiceVehicleInspectionUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileInspectionList", component: this.getServiceFileInspectionSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileInspectionCreateForm", component: this.getServiceFileInspectionCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceFileInspectionUpdateForm", component: this.getServiceFileInspectionUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleRepairingList", component: this.getServiceVehicleRepairingSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleRepairingCreateForm", component: this.getServiceVehicleRepairingCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/serviceVehicleRepairingUpdateForm", component: this.getServiceVehicleRepairingUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/orderReviewResultList", component: this.getOrderReviewResultSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/orderReviewResultCreateForm", component: this.getOrderReviewResultCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/orderReviewResultUpdateForm", component: this.getOrderReviewResultUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/orderRatingResultList", component: this.getOrderRatingResultSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/orderRatingResultCreateForm", component: this.getOrderRatingResultCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/orderRatingResultUpdateForm", component: this.getOrderRatingResultUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/orderDiscountCouponList", component: this.getOrderDiscountCouponSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/orderDiscountCouponCreateForm", component: this.getOrderDiscountCouponCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/orderDiscountCouponUpdateForm", component: this.getOrderDiscountCouponUpdateForm()},
   	
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderCouponList", component: this.getVehicleInspectionOrderCouponSearch()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderCouponCreateForm", component: this.getVehicleInspectionOrderCouponCreateForm()},
  	{path:"/vehicleInspectionOrder/:id/list/vehicleInspectionOrderCouponUpdateForm", component: this.getVehicleInspectionOrderCouponUpdateForm()},
     	
  	
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

     //const {VehicleInspectionOrderEditDetail} = GlobalComponents
     //const {VehicleInspectionOrderViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.vehicleInspectionOrder.id)}
            
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
  vehicleInspectionOrder: state._vehicleInspectionOrder,
  ...state,
}))(VehicleInspectionOrderBizApp)



