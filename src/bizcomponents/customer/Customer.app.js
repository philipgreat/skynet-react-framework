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
  



  getPrivateMessageSearch = () => {
    const {PrivateMessageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.privateMessageList,
      count: state._customer.privateMessageCount,
      currentPage: state._customer.privateMessageCurrentPageNumber,
      searchFormParameters: state._customer.privateMessageSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'deliveryTo', listName: 'privateMessageList', ref:state._customer, listDisplayName: '私信消息列表' }, // this is for model namespace and
    }))(PrivateMessageSearch)
  }
  getPrivateMessageCreateForm = () => {
   	const {PrivateMessageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.privateMessageList,
      count: state._customer.privateMessageCount,
      currentPage: state._customer.privateMessageCurrentPageNumber,
      searchFormParameters: state._customer.privateMessageSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'deliveryTo', listName: 'privateMessageList', ref:state._customer, listDisplayName: '私信消息列表'}, // this is for model namespace and
    }))(PrivateMessageCreateForm)
  }
  
  getPrivateMessageUpdateForm = () => {
  	const {PrivateMessageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'privateMessageList', ref:state._customer, listDisplayName: '私信消息列表' }, // this is for model namespace and
    }))(PrivateMessageUpdateForm)
  }

  getLossAssessmentRecordSearch = () => {
    const {LossAssessmentRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.lossAssessmentRecordList,
      count: state._customer.lossAssessmentRecordCount,
      currentPage: state._customer.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._customer.lossAssessmentRecordSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'damagePerson', listName: 'lossAssessmentRecordList', ref:state._customer, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordSearch)
  }
  getLossAssessmentRecordCreateForm = () => {
   	const {LossAssessmentRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.lossAssessmentRecordList,
      count: state._customer.lossAssessmentRecordCount,
      currentPage: state._customer.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._customer.lossAssessmentRecordSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'damagePerson', listName: 'lossAssessmentRecordList', ref:state._customer, listDisplayName: '定损记录列表'}, // this is for model namespace and
    }))(LossAssessmentRecordCreateForm)
  }
  
  getLossAssessmentRecordUpdateForm = () => {
  	const {LossAssessmentRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'lossAssessmentRecordList', ref:state._customer, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordUpdateForm)
  }

  getMainOrderSearch = () => {
    const {MainOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.mainOrderList,
      count: state._customer.mainOrderCount,
      currentPage: state._customer.mainOrderCurrentPageNumber,
      searchFormParameters: state._customer.mainOrderSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'mainOrderList', ref:state._customer, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderSearch)
  }
  getMainOrderCreateForm = () => {
   	const {MainOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.mainOrderList,
      count: state._customer.mainOrderCount,
      currentPage: state._customer.mainOrderCurrentPageNumber,
      searchFormParameters: state._customer.mainOrderSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'mainOrderList', ref:state._customer, listDisplayName: '主订单列表'}, // this is for model namespace and
    }))(MainOrderCreateForm)
  }
  
  getMainOrderUpdateForm = () => {
  	const {MainOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'mainOrderList', ref:state._customer, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderUpdateForm)
  }

  getBookCopySearch = () => {
    const {BookCopySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopyList,
      count: state._customer.bookCopyCount,
      currentPage: state._customer.bookCopyCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'bookCopyVendor', listName: 'bookCopyList', ref:state._customer, listDisplayName: '书籍副本列表' }, // this is for model namespace and
    }))(BookCopySearch)
  }
  getBookCopyCreateForm = () => {
   	const {BookCopyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopyList,
      count: state._customer.bookCopyCount,
      currentPage: state._customer.bookCopyCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'bookCopyVendor', listName: 'bookCopyList', ref:state._customer, listDisplayName: '书籍副本列表'}, // this is for model namespace and
    }))(BookCopyCreateForm)
  }
  
  getBookCopyUpdateForm = () => {
  	const {BookCopyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookCopyList', ref:state._customer, listDisplayName: '书籍副本列表' }, // this is for model namespace and
    }))(BookCopyUpdateForm)
  }

  getBorrowingHistorySearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingHistoryList,
      count: state._customer.borrowingHistoryCount,
      currentPage: state._customer.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._customer.borrowingHistorySearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingHistoryList', ref:state._customer, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingHistoryList,
      count: state._customer.borrowingHistoryCount,
      currentPage: state._customer.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._customer.borrowingHistorySearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingHistoryList', ref:state._customer, listDisplayName: '图书借还历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'borrowingHistoryList', ref:state._customer, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingExpiredSkuList,
      count: state._customer.borrowingExpiredSkuCount,
      currentPage: state._customer.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._customer.borrowingExpiredSkuSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingExpiredSkuList', ref:state._customer, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingExpiredSkuList,
      count: state._customer.borrowingExpiredSkuCount,
      currentPage: state._customer.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._customer.borrowingExpiredSkuSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingExpiredSkuList', ref:state._customer, listDisplayName: '借书超期费列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'borrowingExpiredSkuList', ref:state._customer, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookReviewSearch = () => {
    const {BookReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewList,
      count: state._customer.bookReviewCount,
      currentPage: state._customer.bookReviewCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'bookReviewList', ref:state._customer, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewSearch)
  }
  getBookReviewCreateForm = () => {
   	const {BookReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewList,
      count: state._customer.bookReviewCount,
      currentPage: state._customer.bookReviewCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'bookReviewList', ref:state._customer, listDisplayName: '书评列表'}, // this is for model namespace and
    }))(BookReviewCreateForm)
  }
  
  getBookReviewUpdateForm = () => {
  	const {BookReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookReviewList', ref:state._customer, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewUpdateForm)
  }

  getBookReviewLikeSearch = () => {
    const {BookReviewLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewLikeList,
      count: state._customer.bookReviewLikeCount,
      currentPage: state._customer.bookReviewLikeCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewLikeSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'bookReviewLikeList', ref:state._customer, listDisplayName: '书评点赞列表' }, // this is for model namespace and
    }))(BookReviewLikeSearch)
  }
  getBookReviewLikeCreateForm = () => {
   	const {BookReviewLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewLikeList,
      count: state._customer.bookReviewLikeCount,
      currentPage: state._customer.bookReviewLikeCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewLikeSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'bookReviewLikeList', ref:state._customer, listDisplayName: '书评点赞列表'}, // this is for model namespace and
    }))(BookReviewLikeCreateForm)
  }
  
  getBookReviewLikeUpdateForm = () => {
  	const {BookReviewLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookReviewLikeList', ref:state._customer, listDisplayName: '书评点赞列表' }, // this is for model namespace and
    }))(BookReviewLikeUpdateForm)
  }

  getBookCopySharingApplicationSearch = () => {
    const {BookCopySharingApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopySharingApplicationList,
      count: state._customer.bookCopySharingApplicationCount,
      currentPage: state._customer.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySharingApplicationSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'bookCopySharingApplicationList', ref:state._customer, listDisplayName: '图书共享申请列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationSearch)
  }
  getBookCopySharingApplicationCreateForm = () => {
   	const {BookCopySharingApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopySharingApplicationList,
      count: state._customer.bookCopySharingApplicationCount,
      currentPage: state._customer.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySharingApplicationSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'bookCopySharingApplicationList', ref:state._customer, listDisplayName: '图书共享申请列表'}, // this is for model namespace and
    }))(BookCopySharingApplicationCreateForm)
  }
  
  getBookCopySharingApplicationUpdateForm = () => {
  	const {BookCopySharingApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookCopySharingApplicationList', ref:state._customer, listDisplayName: '图书共享申请列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationUpdateForm)
  }

  getMemberServiceRevenueSearch = () => {
    const {MemberServiceRevenueSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.memberServiceRevenueList,
      count: state._customer.memberServiceRevenueCount,
      currentPage: state._customer.memberServiceRevenueCurrentPageNumber,
      searchFormParameters: state._customer.memberServiceRevenueSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'member', listName: 'memberServiceRevenueList', ref:state._customer, listDisplayName: '会员服务收益列表' }, // this is for model namespace and
    }))(MemberServiceRevenueSearch)
  }
  getMemberServiceRevenueCreateForm = () => {
   	const {MemberServiceRevenueCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.memberServiceRevenueList,
      count: state._customer.memberServiceRevenueCount,
      currentPage: state._customer.memberServiceRevenueCurrentPageNumber,
      searchFormParameters: state._customer.memberServiceRevenueSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'member', listName: 'memberServiceRevenueList', ref:state._customer, listDisplayName: '会员服务收益列表'}, // this is for model namespace and
    }))(MemberServiceRevenueCreateForm)
  }
  
  getMemberServiceRevenueUpdateForm = () => {
  	const {MemberServiceRevenueUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'memberServiceRevenueList', ref:state._customer, listDisplayName: '会员服务收益列表' }, // this is for model namespace and
    }))(MemberServiceRevenueUpdateForm)
  }

  getCustomerAccountTransactionSearch = () => {
    const {CustomerAccountTransactionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.customerAccountTransactionList,
      count: state._customer.customerAccountTransactionCount,
      currentPage: state._customer.customerAccountTransactionCurrentPageNumber,
      searchFormParameters: state._customer.customerAccountTransactionSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'customerAccountTransactionList', ref:state._customer, listDisplayName: '客户账户明细列表' }, // this is for model namespace and
    }))(CustomerAccountTransactionSearch)
  }
  getCustomerAccountTransactionCreateForm = () => {
   	const {CustomerAccountTransactionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.customerAccountTransactionList,
      count: state._customer.customerAccountTransactionCount,
      currentPage: state._customer.customerAccountTransactionCurrentPageNumber,
      searchFormParameters: state._customer.customerAccountTransactionSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'customerAccountTransactionList', ref:state._customer, listDisplayName: '客户账户明细列表'}, // this is for model namespace and
    }))(CustomerAccountTransactionCreateForm)
  }
  
  getCustomerAccountTransactionUpdateForm = () => {
  	const {CustomerAccountTransactionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'customerAccountTransactionList', ref:state._customer, listDisplayName: '客户账户明细列表' }, // this is for model namespace and
    }))(CustomerAccountTransactionUpdateForm)
  }

  getCampaignRegisterHistorySearch = () => {
    const {CampaignRegisterHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignRegisterHistoryList,
      count: state._customer.campaignRegisterHistoryCount,
      currentPage: state._customer.campaignRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._customer.campaignRegisterHistorySearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'registerMember', listName: 'campaignRegisterHistoryList', ref:state._customer, listDisplayName: '活动报名记录列表' }, // this is for model namespace and
    }))(CampaignRegisterHistorySearch)
  }
  getCampaignRegisterHistoryCreateForm = () => {
   	const {CampaignRegisterHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignRegisterHistoryList,
      count: state._customer.campaignRegisterHistoryCount,
      currentPage: state._customer.campaignRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._customer.campaignRegisterHistorySearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'registerMember', listName: 'campaignRegisterHistoryList', ref:state._customer, listDisplayName: '活动报名记录列表'}, // this is for model namespace and
    }))(CampaignRegisterHistoryCreateForm)
  }
  
  getCampaignRegisterHistoryUpdateForm = () => {
  	const {CampaignRegisterHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'campaignRegisterHistoryList', ref:state._customer, listDisplayName: '活动报名记录列表' }, // this is for model namespace and
    }))(CampaignRegisterHistoryUpdateForm)
  }

  getCampaignReviewSearch = () => {
    const {CampaignReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignReviewList,
      count: state._customer.campaignReviewCount,
      currentPage: state._customer.campaignReviewCurrentPageNumber,
      searchFormParameters: state._customer.campaignReviewSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'campaignReviewList', ref:state._customer, listDisplayName: '活动评论列表' }, // this is for model namespace and
    }))(CampaignReviewSearch)
  }
  getCampaignReviewCreateForm = () => {
   	const {CampaignReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignReviewList,
      count: state._customer.campaignReviewCount,
      currentPage: state._customer.campaignReviewCurrentPageNumber,
      searchFormParameters: state._customer.campaignReviewSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'campaignReviewList', ref:state._customer, listDisplayName: '活动评论列表'}, // this is for model namespace and
    }))(CampaignReviewCreateForm)
  }
  
  getCampaignReviewUpdateForm = () => {
  	const {CampaignReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'campaignReviewList', ref:state._customer, listDisplayName: '活动评论列表' }, // this is for model namespace and
    }))(CampaignReviewUpdateForm)
  }

  getCampaignLikeSearch = () => {
    const {CampaignLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignLikeList,
      count: state._customer.campaignLikeCount,
      currentPage: state._customer.campaignLikeCurrentPageNumber,
      searchFormParameters: state._customer.campaignLikeSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'campaignLikeList', ref:state._customer, listDisplayName: '活动点赞列表' }, // this is for model namespace and
    }))(CampaignLikeSearch)
  }
  getCampaignLikeCreateForm = () => {
   	const {CampaignLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignLikeList,
      count: state._customer.campaignLikeCount,
      currentPage: state._customer.campaignLikeCurrentPageNumber,
      searchFormParameters: state._customer.campaignLikeSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'campaignLikeList', ref:state._customer, listDisplayName: '活动点赞列表'}, // this is for model namespace and
    }))(CampaignLikeCreateForm)
  }
  
  getCampaignLikeUpdateForm = () => {
  	const {CampaignLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'campaignLikeList', ref:state._customer, listDisplayName: '活动点赞列表' }, // this is for model namespace and
    }))(CampaignLikeUpdateForm)
  }

  getCampaignReviewLikeSearch = () => {
    const {CampaignReviewLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignReviewLikeList,
      count: state._customer.campaignReviewLikeCount,
      currentPage: state._customer.campaignReviewLikeCurrentPageNumber,
      searchFormParameters: state._customer.campaignReviewLikeSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'campaignReviewLikeList', ref:state._customer, listDisplayName: '活动评论点赞列表' }, // this is for model namespace and
    }))(CampaignReviewLikeSearch)
  }
  getCampaignReviewLikeCreateForm = () => {
   	const {CampaignReviewLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.campaignReviewLikeList,
      count: state._customer.campaignReviewLikeCount,
      currentPage: state._customer.campaignReviewLikeCurrentPageNumber,
      searchFormParameters: state._customer.campaignReviewLikeSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'campaignReviewLikeList', ref:state._customer, listDisplayName: '活动评论点赞列表'}, // this is for model namespace and
    }))(CampaignReviewLikeCreateForm)
  }
  
  getCampaignReviewLikeUpdateForm = () => {
  	const {CampaignReviewLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'campaignReviewLikeList', ref:state._customer, listDisplayName: '活动评论点赞列表' }, // this is for model namespace and
    }))(CampaignReviewLikeUpdateForm)
  }

  getCustomerFootprintSearch = () => {
    const {CustomerFootprintSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.customerFootprintList,
      count: state._customer.customerFootprintCount,
      currentPage: state._customer.customerFootprintCurrentPageNumber,
      searchFormParameters: state._customer.customerFootprintSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'customerFootprintList', ref:state._customer, listDisplayName: '用户历程列表' }, // this is for model namespace and
    }))(CustomerFootprintSearch)
  }
  getCustomerFootprintCreateForm = () => {
   	const {CustomerFootprintCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.customerFootprintList,
      count: state._customer.customerFootprintCount,
      currentPage: state._customer.customerFootprintCurrentPageNumber,
      searchFormParameters: state._customer.customerFootprintSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'customerFootprintList', ref:state._customer, listDisplayName: '用户历程列表'}, // this is for model namespace and
    }))(CustomerFootprintCreateForm)
  }
  
  getCustomerFootprintUpdateForm = () => {
  	const {CustomerFootprintUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'customerFootprintList', ref:state._customer, listDisplayName: '用户历程列表' }, // this is for model namespace and
    }))(CustomerFootprintUpdateForm)
  }

  getShieldCustomerAsCustomerSearch = () => {
    const {ShieldCustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.shieldCustomerListAsCustomer,
      count: state._customer.shieldCustomerAsCustomerCount,
      currentPage: state._customer.shieldCustomerAsCustomerCurrentPageNumber,
      searchFormParameters: state._customer.shieldCustomerAsCustomerSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'shieldCustomerListAsCustomer', ref:state._customer, listDisplayName: '屏蔽用户列表' }, // this is for model namespace and
    }))(ShieldCustomerSearch)
  }
  getShieldCustomerAsCustomerCreateForm = () => {
   	const {ShieldCustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.shieldCustomerListAsCustomer,
      count: state._customer.shieldCustomerAsCustomerCount,
      currentPage: state._customer.shieldCustomerAsCustomerCurrentPageNumber,
      searchFormParameters: state._customer.shieldCustomerAsCustomerSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'shieldCustomerListAsCustomer', ref:state._customer, listDisplayName: '屏蔽用户列表'}, // this is for model namespace and
    }))(ShieldCustomerCreateForm)
  }
  
  getShieldCustomerAsCustomerUpdateForm = () => {
  	const {ShieldCustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'shieldCustomerListAsCustomer', ref:state._customer, listDisplayName: '屏蔽用户列表' }, // this is for model namespace and
    }))(ShieldCustomerUpdateForm)
  }

  getShieldCustomerAsShieldSearch = () => {
    const {ShieldCustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.shieldCustomerListAsShield,
      count: state._customer.shieldCustomerAsShieldCount,
      currentPage: state._customer.shieldCustomerAsShieldCurrentPageNumber,
      searchFormParameters: state._customer.shieldCustomerAsShieldSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'shield', listName: 'shieldCustomerListAsShield', ref:state._customer, listDisplayName: '屏蔽用户列表' }, // this is for model namespace and
    }))(ShieldCustomerSearch)
  }
  getShieldCustomerAsShieldCreateForm = () => {
   	const {ShieldCustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.shieldCustomerListAsShield,
      count: state._customer.shieldCustomerAsShieldCount,
      currentPage: state._customer.shieldCustomerAsShieldCurrentPageNumber,
      searchFormParameters: state._customer.shieldCustomerAsShieldSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'shield', listName: 'shieldCustomerListAsShield', ref:state._customer, listDisplayName: '屏蔽用户列表'}, // this is for model namespace and
    }))(ShieldCustomerCreateForm)
  }
  
  getShieldCustomerAsShieldUpdateForm = () => {
  	const {ShieldCustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'shieldCustomerListAsShield', ref:state._customer, listDisplayName: '屏蔽用户列表' }, // this is for model namespace and
    }))(ShieldCustomerUpdateForm)
  }

  getInformSearch = () => {
    const {InformSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.informList,
      count: state._customer.informCount,
      currentPage: state._customer.informCurrentPageNumber,
      searchFormParameters: state._customer.informSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'informer', listName: 'informList', ref:state._customer, listDisplayName: '举报列表' }, // this is for model namespace and
    }))(InformSearch)
  }
  getInformCreateForm = () => {
   	const {InformCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.informList,
      count: state._customer.informCount,
      currentPage: state._customer.informCurrentPageNumber,
      searchFormParameters: state._customer.informSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'informer', listName: 'informList', ref:state._customer, listDisplayName: '举报列表'}, // this is for model namespace and
    }))(InformCreateForm)
  }
  
  getInformUpdateForm = () => {
  	const {InformUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'informList', ref:state._customer, listDisplayName: '举报列表' }, // this is for model namespace and
    }))(InformUpdateForm)
  }

  getUndistributedProfitSearch = () => {
    const {UndistributedProfitSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.undistributedProfitList,
      count: state._customer.undistributedProfitCount,
      currentPage: state._customer.undistributedProfitCurrentPageNumber,
      searchFormParameters: state._customer.undistributedProfitSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'undistributedProfitList', ref:state._customer, listDisplayName: '未分配利润列表' }, // this is for model namespace and
    }))(UndistributedProfitSearch)
  }
  getUndistributedProfitCreateForm = () => {
   	const {UndistributedProfitCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.undistributedProfitList,
      count: state._customer.undistributedProfitCount,
      currentPage: state._customer.undistributedProfitCurrentPageNumber,
      searchFormParameters: state._customer.undistributedProfitSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'undistributedProfitList', ref:state._customer, listDisplayName: '未分配利润列表'}, // this is for model namespace and
    }))(UndistributedProfitCreateForm)
  }
  
  getUndistributedProfitUpdateForm = () => {
  	const {UndistributedProfitUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'undistributedProfitList', ref:state._customer, listDisplayName: '未分配利润列表' }, // this is for model namespace and
    }))(UndistributedProfitUpdateForm)
  }


  
  buildRouters = () =>{
  	const {CustomerDashboard} = GlobalComponents
  	const {CustomerPreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/customer/:id/dashboard", component: CustomerDashboard},
  	{path:"/customer/:id/preference", component: CustomerPreference},
  	
  	
  	
  	{path:"/customer/:id/list/privateMessageList", component: this.getPrivateMessageSearch()},
  	{path:"/customer/:id/list/privateMessageCreateForm", component: this.getPrivateMessageCreateForm()},
  	{path:"/customer/:id/list/privateMessageUpdateForm", component: this.getPrivateMessageUpdateForm()},
   	
  	{path:"/customer/:id/list/lossAssessmentRecordList", component: this.getLossAssessmentRecordSearch()},
  	{path:"/customer/:id/list/lossAssessmentRecordCreateForm", component: this.getLossAssessmentRecordCreateForm()},
  	{path:"/customer/:id/list/lossAssessmentRecordUpdateForm", component: this.getLossAssessmentRecordUpdateForm()},
   	
  	{path:"/customer/:id/list/mainOrderList", component: this.getMainOrderSearch()},
  	{path:"/customer/:id/list/mainOrderCreateForm", component: this.getMainOrderCreateForm()},
  	{path:"/customer/:id/list/mainOrderUpdateForm", component: this.getMainOrderUpdateForm()},
   	
  	{path:"/customer/:id/list/bookCopyList", component: this.getBookCopySearch()},
  	{path:"/customer/:id/list/bookCopyCreateForm", component: this.getBookCopyCreateForm()},
  	{path:"/customer/:id/list/bookCopyUpdateForm", component: this.getBookCopyUpdateForm()},
   	
  	{path:"/customer/:id/list/borrowingHistoryList", component: this.getBorrowingHistorySearch()},
  	{path:"/customer/:id/list/borrowingHistoryCreateForm", component: this.getBorrowingHistoryCreateForm()},
  	{path:"/customer/:id/list/borrowingHistoryUpdateForm", component: this.getBorrowingHistoryUpdateForm()},
   	
  	{path:"/customer/:id/list/borrowingExpiredSkuList", component: this.getBorrowingExpiredSkuSearch()},
  	{path:"/customer/:id/list/borrowingExpiredSkuCreateForm", component: this.getBorrowingExpiredSkuCreateForm()},
  	{path:"/customer/:id/list/borrowingExpiredSkuUpdateForm", component: this.getBorrowingExpiredSkuUpdateForm()},
   	
  	{path:"/customer/:id/list/bookReviewList", component: this.getBookReviewSearch()},
  	{path:"/customer/:id/list/bookReviewCreateForm", component: this.getBookReviewCreateForm()},
  	{path:"/customer/:id/list/bookReviewUpdateForm", component: this.getBookReviewUpdateForm()},
   	
  	{path:"/customer/:id/list/bookReviewLikeList", component: this.getBookReviewLikeSearch()},
  	{path:"/customer/:id/list/bookReviewLikeCreateForm", component: this.getBookReviewLikeCreateForm()},
  	{path:"/customer/:id/list/bookReviewLikeUpdateForm", component: this.getBookReviewLikeUpdateForm()},
   	
  	{path:"/customer/:id/list/bookCopySharingApplicationList", component: this.getBookCopySharingApplicationSearch()},
  	{path:"/customer/:id/list/bookCopySharingApplicationCreateForm", component: this.getBookCopySharingApplicationCreateForm()},
  	{path:"/customer/:id/list/bookCopySharingApplicationUpdateForm", component: this.getBookCopySharingApplicationUpdateForm()},
   	
  	{path:"/customer/:id/list/memberServiceRevenueList", component: this.getMemberServiceRevenueSearch()},
  	{path:"/customer/:id/list/memberServiceRevenueCreateForm", component: this.getMemberServiceRevenueCreateForm()},
  	{path:"/customer/:id/list/memberServiceRevenueUpdateForm", component: this.getMemberServiceRevenueUpdateForm()},
   	
  	{path:"/customer/:id/list/customerAccountTransactionList", component: this.getCustomerAccountTransactionSearch()},
  	{path:"/customer/:id/list/customerAccountTransactionCreateForm", component: this.getCustomerAccountTransactionCreateForm()},
  	{path:"/customer/:id/list/customerAccountTransactionUpdateForm", component: this.getCustomerAccountTransactionUpdateForm()},
   	
  	{path:"/customer/:id/list/campaignRegisterHistoryList", component: this.getCampaignRegisterHistorySearch()},
  	{path:"/customer/:id/list/campaignRegisterHistoryCreateForm", component: this.getCampaignRegisterHistoryCreateForm()},
  	{path:"/customer/:id/list/campaignRegisterHistoryUpdateForm", component: this.getCampaignRegisterHistoryUpdateForm()},
   	
  	{path:"/customer/:id/list/campaignReviewList", component: this.getCampaignReviewSearch()},
  	{path:"/customer/:id/list/campaignReviewCreateForm", component: this.getCampaignReviewCreateForm()},
  	{path:"/customer/:id/list/campaignReviewUpdateForm", component: this.getCampaignReviewUpdateForm()},
   	
  	{path:"/customer/:id/list/campaignLikeList", component: this.getCampaignLikeSearch()},
  	{path:"/customer/:id/list/campaignLikeCreateForm", component: this.getCampaignLikeCreateForm()},
  	{path:"/customer/:id/list/campaignLikeUpdateForm", component: this.getCampaignLikeUpdateForm()},
   	
  	{path:"/customer/:id/list/campaignReviewLikeList", component: this.getCampaignReviewLikeSearch()},
  	{path:"/customer/:id/list/campaignReviewLikeCreateForm", component: this.getCampaignReviewLikeCreateForm()},
  	{path:"/customer/:id/list/campaignReviewLikeUpdateForm", component: this.getCampaignReviewLikeUpdateForm()},
   	
  	{path:"/customer/:id/list/customerFootprintList", component: this.getCustomerFootprintSearch()},
  	{path:"/customer/:id/list/customerFootprintCreateForm", component: this.getCustomerFootprintCreateForm()},
  	{path:"/customer/:id/list/customerFootprintUpdateForm", component: this.getCustomerFootprintUpdateForm()},
   	
  	{path:"/customer/:id/list/shieldCustomerListAsCustomer", component: this.getShieldCustomerAsCustomerSearch()},
  	{path:"/customer/:id/list/shieldCustomerAsCustomerCreateForm", component: this.getShieldCustomerAsCustomerCreateForm()},
  	{path:"/customer/:id/list/shieldCustomerAsCustomerUpdateForm", component: this.getShieldCustomerAsCustomerUpdateForm()},
   	
  	{path:"/customer/:id/list/shieldCustomerListAsShield", component: this.getShieldCustomerAsShieldSearch()},
  	{path:"/customer/:id/list/shieldCustomerAsShieldCreateForm", component: this.getShieldCustomerAsShieldCreateForm()},
  	{path:"/customer/:id/list/shieldCustomerAsShieldUpdateForm", component: this.getShieldCustomerAsShieldUpdateForm()},
   	
  	{path:"/customer/:id/list/informList", component: this.getInformSearch()},
  	{path:"/customer/:id/list/informCreateForm", component: this.getInformCreateForm()},
  	{path:"/customer/:id/list/informUpdateForm", component: this.getInformUpdateForm()},
   	
  	{path:"/customer/:id/list/undistributedProfitList", component: this.getUndistributedProfitSearch()},
  	{path:"/customer/:id/list/undistributedProfitCreateForm", component: this.getUndistributedProfitCreateForm()},
  	{path:"/customer/:id/list/undistributedProfitUpdateForm", component: this.getUndistributedProfitUpdateForm()},
     	
  	
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



