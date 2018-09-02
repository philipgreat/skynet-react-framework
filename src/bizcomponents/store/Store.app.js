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
import styles from './Store.app.less'
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




class StoreBizApp extends React.PureComponent {
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
      return ['/store/']
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
               <Link to={`/store/${this.props.store.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               <Link to={`/store/${this.props.store.id}/preference`}><Icon type="setting" /><span>设置</span></Link>
             </Menu.Item>
      
           </Menu>
    )
  }
  



  getLossAssessmentRecordSearch = () => {
    const {LossAssessmentRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "定损记录",
      role: "lossAssessmentRecord",
      data: state._store.lossAssessmentRecordList,
      count: state._store.lossAssessmentRecordCount,
      currentPage: state._store.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._store.lossAssessmentRecordSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'recordStore', 
      listName: 'lossAssessmentRecordList', ref:state._store, 
      listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordSearch)
  }
  getLossAssessmentRecordCreateForm = () => {
   	const {LossAssessmentRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.lossAssessmentRecordList,
      count: state._store.lossAssessmentRecordCount,
      currentPage: state._store.lossAssessmentRecordCurrentPageNumber,
      searchFormParameters: state._store.lossAssessmentRecordSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'recordStore', listName: 'lossAssessmentRecordList', ref:state._store, listDisplayName: '定损记录列表'}, // this is for model namespace and
    }))(LossAssessmentRecordCreateForm)
  }
  
  getLossAssessmentRecordUpdateForm = () => {
  	const {LossAssessmentRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'lossAssessmentRecordList', ref:state._store, listDisplayName: '定损记录列表' }, // this is for model namespace and
    }))(LossAssessmentRecordUpdateForm)
  }

  getPrinterSearch = () => {
    const {PrinterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "打印机",
      role: "printer",
      data: state._store.printerList,
      count: state._store.printerCount,
      currentPage: state._store.printerCurrentPageNumber,
      searchFormParameters: state._store.printerSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'store', 
      listName: 'printerList', ref:state._store, 
      listDisplayName: '打印机列表' }, // this is for model namespace and
    }))(PrinterSearch)
  }
  getPrinterCreateForm = () => {
   	const {PrinterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.printerList,
      count: state._store.printerCount,
      currentPage: state._store.printerCurrentPageNumber,
      searchFormParameters: state._store.printerSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'printerList', ref:state._store, listDisplayName: '打印机列表'}, // this is for model namespace and
    }))(PrinterCreateForm)
  }
  
  getPrinterUpdateForm = () => {
  	const {PrinterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'printerList', ref:state._store, listDisplayName: '打印机列表' }, // this is for model namespace and
    }))(PrinterUpdateForm)
  }

  getBookCopySearch = () => {
    const {BookCopySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书籍副本",
      role: "bookCopy",
      data: state._store.bookCopyList,
      count: state._store.bookCopyCount,
      currentPage: state._store.bookCopyCurrentPageNumber,
      searchFormParameters: state._store.bookCopySearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'locationStore', 
      listName: 'bookCopyList', ref:state._store, 
      listDisplayName: '书籍副本列表' }, // this is for model namespace and
    }))(BookCopySearch)
  }
  getBookCopyCreateForm = () => {
   	const {BookCopyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyList,
      count: state._store.bookCopyCount,
      currentPage: state._store.bookCopyCurrentPageNumber,
      searchFormParameters: state._store.bookCopySearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'locationStore', listName: 'bookCopyList', ref:state._store, listDisplayName: '书籍副本列表'}, // this is for model namespace and
    }))(BookCopyCreateForm)
  }
  
  getBookCopyUpdateForm = () => {
  	const {BookCopyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyList', ref:state._store, listDisplayName: '书籍副本列表' }, // this is for model namespace and
    }))(BookCopyUpdateForm)
  }

  getBookCopyTransferAsOriginalStoreSearch = () => {
    const {BookCopyTransferSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书副本迁移记录(原网点)",
      role: "bookCopyTransferAsOriginalStore",
      data: state._store.bookCopyTransferListAsOriginalStore,
      count: state._store.bookCopyTransferAsOriginalStoreCount,
      currentPage: state._store.bookCopyTransferAsOriginalStoreCurrentPageNumber,
      searchFormParameters: state._store.bookCopyTransferAsOriginalStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'originalStore', 
      listName: 'bookCopyTransferListAsOriginalStore', ref:state._store, 
      listDisplayName: '图书副本迁移记录(原网点)列表' }, // this is for model namespace and
    }))(BookCopyTransferSearch)
  }
  getBookCopyTransferAsOriginalStoreCreateForm = () => {
   	const {BookCopyTransferCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyTransferListAsOriginalStore,
      count: state._store.bookCopyTransferAsOriginalStoreCount,
      currentPage: state._store.bookCopyTransferAsOriginalStoreCurrentPageNumber,
      searchFormParameters: state._store.bookCopyTransferAsOriginalStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'originalStore', listName: 'bookCopyTransferListAsOriginalStore', ref:state._store, listDisplayName: '图书副本迁移记录列表'}, // this is for model namespace and
    }))(BookCopyTransferCreateForm)
  }
  
  getBookCopyTransferAsOriginalStoreUpdateForm = () => {
  	const {BookCopyTransferUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyTransferListAsOriginalStore', ref:state._store, listDisplayName: '图书副本迁移记录列表' }, // this is for model namespace and
    }))(BookCopyTransferUpdateForm)
  }

  getBookCopyTransferAsNewStoreSearch = () => {
    const {BookCopyTransferSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书副本迁移记录(新网点)",
      role: "bookCopyTransferAsNewStore",
      data: state._store.bookCopyTransferListAsNewStore,
      count: state._store.bookCopyTransferAsNewStoreCount,
      currentPage: state._store.bookCopyTransferAsNewStoreCurrentPageNumber,
      searchFormParameters: state._store.bookCopyTransferAsNewStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'newStore', 
      listName: 'bookCopyTransferListAsNewStore', ref:state._store, 
      listDisplayName: '图书副本迁移记录(新网点)列表' }, // this is for model namespace and
    }))(BookCopyTransferSearch)
  }
  getBookCopyTransferAsNewStoreCreateForm = () => {
   	const {BookCopyTransferCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyTransferListAsNewStore,
      count: state._store.bookCopyTransferAsNewStoreCount,
      currentPage: state._store.bookCopyTransferAsNewStoreCurrentPageNumber,
      searchFormParameters: state._store.bookCopyTransferAsNewStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'newStore', listName: 'bookCopyTransferListAsNewStore', ref:state._store, listDisplayName: '图书副本迁移记录列表'}, // this is for model namespace and
    }))(BookCopyTransferCreateForm)
  }
  
  getBookCopyTransferAsNewStoreUpdateForm = () => {
  	const {BookCopyTransferUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyTransferListAsNewStore', ref:state._store, listDisplayName: '图书副本迁移记录列表' }, // this is for model namespace and
    }))(BookCopyTransferUpdateForm)
  }

  getBookTakeStockPlanSearch = () => {
    const {BookTakeStockPlanSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书盘点计划",
      role: "bookTakeStockPlan",
      data: state._store.bookTakeStockPlanList,
      count: state._store.bookTakeStockPlanCount,
      currentPage: state._store.bookTakeStockPlanCurrentPageNumber,
      searchFormParameters: state._store.bookTakeStockPlanSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'store', 
      listName: 'bookTakeStockPlanList', ref:state._store, 
      listDisplayName: '图书盘点计划列表' }, // this is for model namespace and
    }))(BookTakeStockPlanSearch)
  }
  getBookTakeStockPlanCreateForm = () => {
   	const {BookTakeStockPlanCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookTakeStockPlanList,
      count: state._store.bookTakeStockPlanCount,
      currentPage: state._store.bookTakeStockPlanCurrentPageNumber,
      searchFormParameters: state._store.bookTakeStockPlanSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'bookTakeStockPlanList', ref:state._store, listDisplayName: '图书盘点计划列表'}, // this is for model namespace and
    }))(BookTakeStockPlanCreateForm)
  }
  
  getBookTakeStockPlanUpdateForm = () => {
  	const {BookTakeStockPlanUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookTakeStockPlanList', ref:state._store, listDisplayName: '图书盘点计划列表' }, // this is for model namespace and
    }))(BookTakeStockPlanUpdateForm)
  }

  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "书籍副本操作记录",
      role: "bookCopyOperationRecord",
      data: state._store.bookCopyOperationRecordList,
      count: state._store.bookCopyOperationRecordCount,
      currentPage: state._store.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._store.bookCopyOperationRecordSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'operateStore', 
      listName: 'bookCopyOperationRecordList', ref:state._store, 
      listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyOperationRecordList,
      count: state._store.bookCopyOperationRecordCount,
      currentPage: state._store.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._store.bookCopyOperationRecordSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'operateStore', listName: 'bookCopyOperationRecordList', ref:state._store, listDisplayName: '书籍副本操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyOperationRecordList', ref:state._store, listDisplayName: '书籍副本操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }

  getBorrowingHistoryAsLendingStoreSearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书借还历史(借出网点)",
      role: "borrowingHistoryAsLendingStore",
      data: state._store.borrowingHistoryListAsLendingStore,
      count: state._store.borrowingHistoryAsLendingStoreCount,
      currentPage: state._store.borrowingHistoryAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'lendingStore', 
      listName: 'borrowingHistoryListAsLendingStore', ref:state._store, 
      listDisplayName: '图书借还历史(借出网点)列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryAsLendingStoreCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingHistoryListAsLendingStore,
      count: state._store.borrowingHistoryAsLendingStoreCount,
      currentPage: state._store.borrowingHistoryAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'lendingStore', listName: 'borrowingHistoryListAsLendingStore', ref:state._store, listDisplayName: '图书借还历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryAsLendingStoreUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingHistoryListAsLendingStore', ref:state._store, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingHistoryAsReturnStoreSearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书借还历史(还书网点)",
      role: "borrowingHistoryAsReturnStore",
      data: state._store.borrowingHistoryListAsReturnStore,
      count: state._store.borrowingHistoryAsReturnStoreCount,
      currentPage: state._store.borrowingHistoryAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'returnStore', 
      listName: 'borrowingHistoryListAsReturnStore', ref:state._store, 
      listDisplayName: '图书借还历史(还书网点)列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryAsReturnStoreCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingHistoryListAsReturnStore,
      count: state._store.borrowingHistoryAsReturnStoreCount,
      currentPage: state._store.borrowingHistoryAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'returnStore', listName: 'borrowingHistoryListAsReturnStore', ref:state._store, listDisplayName: '图书借还历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryAsReturnStoreUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingHistoryListAsReturnStore', ref:state._store, listDisplayName: '图书借还历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuAsLendingStoreSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "借书超期费(借出网点)",
      role: "borrowingExpiredSkuAsLendingStore",
      data: state._store.borrowingExpiredSkuListAsLendingStore,
      count: state._store.borrowingExpiredSkuAsLendingStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'lendingStore', 
      listName: 'borrowingExpiredSkuListAsLendingStore', ref:state._store, 
      listDisplayName: '借书超期费(借出网点)列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuAsLendingStoreCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingExpiredSkuListAsLendingStore,
      count: state._store.borrowingExpiredSkuAsLendingStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'lendingStore', listName: 'borrowingExpiredSkuListAsLendingStore', ref:state._store, listDisplayName: '借书超期费列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuAsLendingStoreUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingExpiredSkuListAsLendingStore', ref:state._store, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBorrowingExpiredSkuAsReturnStoreSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "借书超期费(还书网点)",
      role: "borrowingExpiredSkuAsReturnStore",
      data: state._store.borrowingExpiredSkuListAsReturnStore,
      count: state._store.borrowingExpiredSkuAsReturnStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'returnStore', 
      listName: 'borrowingExpiredSkuListAsReturnStore', ref:state._store, 
      listDisplayName: '借书超期费(还书网点)列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuAsReturnStoreCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingExpiredSkuListAsReturnStore,
      count: state._store.borrowingExpiredSkuAsReturnStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'returnStore', listName: 'borrowingExpiredSkuListAsReturnStore', ref:state._store, listDisplayName: '借书超期费列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuAsReturnStoreUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingExpiredSkuListAsReturnStore', ref:state._store, listDisplayName: '借书超期费列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookCopySharingApplicationSearch = () => {
    const {BookCopySharingApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "图书共享申请",
      role: "bookCopySharingApplication",
      data: state._store.bookCopySharingApplicationList,
      count: state._store.bookCopySharingApplicationCount,
      currentPage: state._store.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._store.bookCopySharingApplicationSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'destinationStore', 
      listName: 'bookCopySharingApplicationList', ref:state._store, 
      listDisplayName: '图书共享申请列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationSearch)
  }
  getBookCopySharingApplicationCreateForm = () => {
   	const {BookCopySharingApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopySharingApplicationList,
      count: state._store.bookCopySharingApplicationCount,
      currentPage: state._store.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._store.bookCopySharingApplicationSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'destinationStore', listName: 'bookCopySharingApplicationList', ref:state._store, listDisplayName: '图书共享申请列表'}, // this is for model namespace and
    }))(BookCopySharingApplicationCreateForm)
  }
  
  getBookCopySharingApplicationUpdateForm = () => {
  	const {BookCopySharingApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopySharingApplicationList', ref:state._store, listDisplayName: '图书共享申请列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationUpdateForm)
  }

  getMemberServiceRevenueSearch = () => {
    const {MemberServiceRevenueSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "会员服务收益",
      role: "memberServiceRevenue",
      data: state._store.memberServiceRevenueList,
      count: state._store.memberServiceRevenueCount,
      currentPage: state._store.memberServiceRevenueCurrentPageNumber,
      searchFormParameters: state._store.memberServiceRevenueSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'store', 
      listName: 'memberServiceRevenueList', ref:state._store, 
      listDisplayName: '会员服务收益列表' }, // this is for model namespace and
    }))(MemberServiceRevenueSearch)
  }
  getMemberServiceRevenueCreateForm = () => {
   	const {MemberServiceRevenueCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.memberServiceRevenueList,
      count: state._store.memberServiceRevenueCount,
      currentPage: state._store.memberServiceRevenueCurrentPageNumber,
      searchFormParameters: state._store.memberServiceRevenueSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'memberServiceRevenueList', ref:state._store, listDisplayName: '会员服务收益列表'}, // this is for model namespace and
    }))(MemberServiceRevenueCreateForm)
  }
  
  getMemberServiceRevenueUpdateForm = () => {
  	const {MemberServiceRevenueUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'memberServiceRevenueList', ref:state._store, listDisplayName: '会员服务收益列表' }, // this is for model namespace and
    }))(MemberServiceRevenueUpdateForm)
  }

  getStoreAccountSearch = () => {
    const {StoreAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "网点账户",
      role: "storeAccount",
      data: state._store.storeAccountList,
      count: state._store.storeAccountCount,
      currentPage: state._store.storeAccountCurrentPageNumber,
      searchFormParameters: state._store.storeAccountSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'store', 
      listName: 'storeAccountList', ref:state._store, 
      listDisplayName: '网点账户列表' }, // this is for model namespace and
    }))(StoreAccountSearch)
  }
  getStoreAccountCreateForm = () => {
   	const {StoreAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.storeAccountList,
      count: state._store.storeAccountCount,
      currentPage: state._store.storeAccountCurrentPageNumber,
      searchFormParameters: state._store.storeAccountSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'storeAccountList', ref:state._store, listDisplayName: '网点账户列表'}, // this is for model namespace and
    }))(StoreAccountCreateForm)
  }
  
  getStoreAccountUpdateForm = () => {
  	const {StoreAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'storeAccountList', ref:state._store, listDisplayName: '网点账户列表' }, // this is for model namespace and
    }))(StoreAccountUpdateForm)
  }

  getStoreSlideSearch = () => {
    const {StoreSlideSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "网点海报",
      role: "storeSlide",
      data: state._store.storeSlideList,
      count: state._store.storeSlideCount,
      currentPage: state._store.storeSlideCurrentPageNumber,
      searchFormParameters: state._store.storeSlideSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'store', 
      listName: 'storeSlideList', ref:state._store, 
      listDisplayName: '网点海报列表' }, // this is for model namespace and
    }))(StoreSlideSearch)
  }
  getStoreSlideCreateForm = () => {
   	const {StoreSlideCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.storeSlideList,
      count: state._store.storeSlideCount,
      currentPage: state._store.storeSlideCurrentPageNumber,
      searchFormParameters: state._store.storeSlideSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'storeSlideList', ref:state._store, listDisplayName: '网点海报列表'}, // this is for model namespace and
    }))(StoreSlideCreateForm)
  }
  
  getStoreSlideUpdateForm = () => {
  	const {StoreSlideUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'storeSlideList', ref:state._store, listDisplayName: '网点海报列表' }, // this is for model namespace and
    }))(StoreSlideUpdateForm)
  }

  getCampaignSearch = () => {
    const {CampaignSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "活动",
      role: "campaign",
      data: state._store.campaignList,
      count: state._store.campaignCount,
      currentPage: state._store.campaignCurrentPageNumber,
      searchFormParameters: state._store.campaignSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'publishStore', 
      listName: 'campaignList', ref:state._store, 
      listDisplayName: '活动列表' }, // this is for model namespace and
    }))(CampaignSearch)
  }
  getCampaignCreateForm = () => {
   	const {CampaignCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.campaignList,
      count: state._store.campaignCount,
      currentPage: state._store.campaignCurrentPageNumber,
      searchFormParameters: state._store.campaignSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'publishStore', listName: 'campaignList', ref:state._store, listDisplayName: '活动列表'}, // this is for model namespace and
    }))(CampaignCreateForm)
  }
  
  getCampaignUpdateForm = () => {
  	const {CampaignUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'campaignList', ref:state._store, listDisplayName: '活动列表' }, // this is for model namespace and
    }))(CampaignUpdateForm)
  }

  getCustomerSearch = () => {
    const {CustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "用户",
      role: "customer",
      data: state._store.customerList,
      count: state._store.customerCount,
      currentPage: state._store.customerCurrentPageNumber,
      searchFormParameters: state._store.customerSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'favouriteStore', 
      listName: 'customerList', ref:state._store, 
      listDisplayName: '用户列表' }, // this is for model namespace and
    }))(CustomerSearch)
  }
  getCustomerCreateForm = () => {
   	const {CustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.customerList,
      count: state._store.customerCount,
      currentPage: state._store.customerCurrentPageNumber,
      searchFormParameters: state._store.customerSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'favouriteStore', listName: 'customerList', ref:state._store, listDisplayName: '用户列表'}, // this is for model namespace and
    }))(CustomerCreateForm)
  }
  
  getCustomerUpdateForm = () => {
  	const {CustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'customerList', ref:state._store, listDisplayName: '用户列表' }, // this is for model namespace and
    }))(CustomerUpdateForm)
  }

  getEmployeeWorkingStoreSearch = () => {
    const {EmployeeWorkingStoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      name: "员工工作的网点",
      role: "employeeWorkingStore",
      data: state._store.employeeWorkingStoreList,
      count: state._store.employeeWorkingStoreCount,
      currentPage: state._store.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._store.employeeWorkingStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, 
      referenceName: 'store', 
      listName: 'employeeWorkingStoreList', ref:state._store, 
      listDisplayName: '员工工作的网点列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreSearch)
  }
  getEmployeeWorkingStoreCreateForm = () => {
   	const {EmployeeWorkingStoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.employeeWorkingStoreList,
      count: state._store.employeeWorkingStoreCount,
      currentPage: state._store.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._store.employeeWorkingStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'employeeWorkingStoreList', ref:state._store, listDisplayName: '员工工作的网点列表'}, // this is for model namespace and
    }))(EmployeeWorkingStoreCreateForm)
  }
  
  getEmployeeWorkingStoreUpdateForm = () => {
  	const {EmployeeWorkingStoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'employeeWorkingStoreList', ref:state._store, listDisplayName: '员工工作的网点列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreUpdateForm)
  }


  
  buildRouters = () =>{
  	const {StoreDashboard} = GlobalComponents
  	const {StorePreference} = GlobalComponents
  	
  	
  	const routers=[
  	{path:"/store/:id/dashboard", component: StoreDashboard},
  	{path:"/store/:id/preference", component: StorePreference},
  	
  	
  	
  	{path:"/store/:id/list/lossAssessmentRecordList", component: this.getLossAssessmentRecordSearch()},
  	{path:"/store/:id/list/lossAssessmentRecordCreateForm", component: this.getLossAssessmentRecordCreateForm()},
  	{path:"/store/:id/list/lossAssessmentRecordUpdateForm", component: this.getLossAssessmentRecordUpdateForm()},
   	
  	{path:"/store/:id/list/printerList", component: this.getPrinterSearch()},
  	{path:"/store/:id/list/printerCreateForm", component: this.getPrinterCreateForm()},
  	{path:"/store/:id/list/printerUpdateForm", component: this.getPrinterUpdateForm()},
   	
  	{path:"/store/:id/list/bookCopyList", component: this.getBookCopySearch()},
  	{path:"/store/:id/list/bookCopyCreateForm", component: this.getBookCopyCreateForm()},
  	{path:"/store/:id/list/bookCopyUpdateForm", component: this.getBookCopyUpdateForm()},
   	
  	{path:"/store/:id/list/bookCopyTransferListAsOriginalStore", component: this.getBookCopyTransferAsOriginalStoreSearch()},
  	{path:"/store/:id/list/bookCopyTransferAsOriginalStoreCreateForm", component: this.getBookCopyTransferAsOriginalStoreCreateForm()},
  	{path:"/store/:id/list/bookCopyTransferAsOriginalStoreUpdateForm", component: this.getBookCopyTransferAsOriginalStoreUpdateForm()},
   	
  	{path:"/store/:id/list/bookCopyTransferListAsNewStore", component: this.getBookCopyTransferAsNewStoreSearch()},
  	{path:"/store/:id/list/bookCopyTransferAsNewStoreCreateForm", component: this.getBookCopyTransferAsNewStoreCreateForm()},
  	{path:"/store/:id/list/bookCopyTransferAsNewStoreUpdateForm", component: this.getBookCopyTransferAsNewStoreUpdateForm()},
   	
  	{path:"/store/:id/list/bookTakeStockPlanList", component: this.getBookTakeStockPlanSearch()},
  	{path:"/store/:id/list/bookTakeStockPlanCreateForm", component: this.getBookTakeStockPlanCreateForm()},
  	{path:"/store/:id/list/bookTakeStockPlanUpdateForm", component: this.getBookTakeStockPlanUpdateForm()},
   	
  	{path:"/store/:id/list/bookCopyOperationRecordList", component: this.getBookCopyOperationRecordSearch()},
  	{path:"/store/:id/list/bookCopyOperationRecordCreateForm", component: this.getBookCopyOperationRecordCreateForm()},
  	{path:"/store/:id/list/bookCopyOperationRecordUpdateForm", component: this.getBookCopyOperationRecordUpdateForm()},
   	
  	{path:"/store/:id/list/borrowingHistoryListAsLendingStore", component: this.getBorrowingHistoryAsLendingStoreSearch()},
  	{path:"/store/:id/list/borrowingHistoryAsLendingStoreCreateForm", component: this.getBorrowingHistoryAsLendingStoreCreateForm()},
  	{path:"/store/:id/list/borrowingHistoryAsLendingStoreUpdateForm", component: this.getBorrowingHistoryAsLendingStoreUpdateForm()},
   	
  	{path:"/store/:id/list/borrowingHistoryListAsReturnStore", component: this.getBorrowingHistoryAsReturnStoreSearch()},
  	{path:"/store/:id/list/borrowingHistoryAsReturnStoreCreateForm", component: this.getBorrowingHistoryAsReturnStoreCreateForm()},
  	{path:"/store/:id/list/borrowingHistoryAsReturnStoreUpdateForm", component: this.getBorrowingHistoryAsReturnStoreUpdateForm()},
   	
  	{path:"/store/:id/list/borrowingExpiredSkuListAsLendingStore", component: this.getBorrowingExpiredSkuAsLendingStoreSearch()},
  	{path:"/store/:id/list/borrowingExpiredSkuAsLendingStoreCreateForm", component: this.getBorrowingExpiredSkuAsLendingStoreCreateForm()},
  	{path:"/store/:id/list/borrowingExpiredSkuAsLendingStoreUpdateForm", component: this.getBorrowingExpiredSkuAsLendingStoreUpdateForm()},
   	
  	{path:"/store/:id/list/borrowingExpiredSkuListAsReturnStore", component: this.getBorrowingExpiredSkuAsReturnStoreSearch()},
  	{path:"/store/:id/list/borrowingExpiredSkuAsReturnStoreCreateForm", component: this.getBorrowingExpiredSkuAsReturnStoreCreateForm()},
  	{path:"/store/:id/list/borrowingExpiredSkuAsReturnStoreUpdateForm", component: this.getBorrowingExpiredSkuAsReturnStoreUpdateForm()},
   	
  	{path:"/store/:id/list/bookCopySharingApplicationList", component: this.getBookCopySharingApplicationSearch()},
  	{path:"/store/:id/list/bookCopySharingApplicationCreateForm", component: this.getBookCopySharingApplicationCreateForm()},
  	{path:"/store/:id/list/bookCopySharingApplicationUpdateForm", component: this.getBookCopySharingApplicationUpdateForm()},
   	
  	{path:"/store/:id/list/memberServiceRevenueList", component: this.getMemberServiceRevenueSearch()},
  	{path:"/store/:id/list/memberServiceRevenueCreateForm", component: this.getMemberServiceRevenueCreateForm()},
  	{path:"/store/:id/list/memberServiceRevenueUpdateForm", component: this.getMemberServiceRevenueUpdateForm()},
   	
  	{path:"/store/:id/list/storeAccountList", component: this.getStoreAccountSearch()},
  	{path:"/store/:id/list/storeAccountCreateForm", component: this.getStoreAccountCreateForm()},
  	{path:"/store/:id/list/storeAccountUpdateForm", component: this.getStoreAccountUpdateForm()},
   	
  	{path:"/store/:id/list/storeSlideList", component: this.getStoreSlideSearch()},
  	{path:"/store/:id/list/storeSlideCreateForm", component: this.getStoreSlideCreateForm()},
  	{path:"/store/:id/list/storeSlideUpdateForm", component: this.getStoreSlideUpdateForm()},
   	
  	{path:"/store/:id/list/campaignList", component: this.getCampaignSearch()},
  	{path:"/store/:id/list/campaignCreateForm", component: this.getCampaignCreateForm()},
  	{path:"/store/:id/list/campaignUpdateForm", component: this.getCampaignUpdateForm()},
   	
  	{path:"/store/:id/list/customerList", component: this.getCustomerSearch()},
  	{path:"/store/:id/list/customerCreateForm", component: this.getCustomerCreateForm()},
  	{path:"/store/:id/list/customerUpdateForm", component: this.getCustomerUpdateForm()},
   	
  	{path:"/store/:id/list/employeeWorkingStoreList", component: this.getEmployeeWorkingStoreSearch()},
  	{path:"/store/:id/list/employeeWorkingStoreCreateForm", component: this.getEmployeeWorkingStoreCreateForm()},
  	{path:"/store/:id/list/employeeWorkingStoreUpdateForm", component: this.getEmployeeWorkingStoreUpdateForm()},
     	
  	
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

     //const {StoreEditDetail} = GlobalComponents
     //const {StoreViewDetail} = GlobalComponents
     
     
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
           




             {this.getNavMenuItems(this.props.store.id)}
            
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
  store: state._store,
  ...state,
}))(StoreBizApp)



