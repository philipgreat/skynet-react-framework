

import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';

import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError}=modeltool


export default {

  namespace: '_availableProduct',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
      	const modelName = 'availableProduct'
      	const parameter = {dispatch,history,location,modelName}
        //console.log("setupModel",setupModel,typeof(setupModel))
      	setupModel(parameter)

      })
    },
  },
  effects: {
    *view({ payload }, { call, put }) { 
      const {AvailableProductService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(AvailableProductService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {AvailableProductService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(AvailableProductService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    
    *doJob({ payload }, { call, put }) { 
      const {AvailableProductService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })      
      const {serviceNameToCall, id, parameters} = payload;
      if(!serviceNameToCall){
      	handleClientError("没有提供后台服务的名字")
      	return;
      }
      if(!AvailableProductService[serviceNameToCall]){
      	handleClientError("找不到后台服务: "+serviceNameToCall)
      	return;
      }
      
      const data = yield call(AvailableProductService[serviceNameToCall], id, parameters)
      if(handleServerError(data)){
      	return
      }
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/availableProduct/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/availableProduct/${id}/list/${type}List/${listName}`))
    },

    *addServicePrice({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.addServicePrice, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableProduct/${id}/list/${type}List/合同价格列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServicePrice({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.updateServicePrice, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/availableProduct/${id}/list/${type}List/合同价格列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServicePriceUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServicePriceList({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.removeServicePriceList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableService({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.addAvailableService, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableProduct/${id}/list/${type}List/服务范围列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateAvailableService({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.updateAvailableService, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/availableProduct/${id}/list/${type}List/服务范围列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableServiceUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeAvailableServiceList({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.removeAvailableServiceList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addProductPrice({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.addProductPrice, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableProduct/${id}/list/${type}List/产品价格列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateProductPrice({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.updateProductPrice, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/availableProduct/${id}/list/${type}List/产品价格列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextProductPriceUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeProductPriceList({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.removeProductPriceList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableInsurance({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.addAvailableInsurance, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableProduct/${id}/list/${type}List/车辆代办保险列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateAvailableInsurance({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.updateAvailableInsurance, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/availableProduct/${id}/list/${type}List/车辆代办保险列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableInsuranceUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeAvailableInsuranceList({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.removeAvailableInsuranceList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableHandOverItem({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.addAvailableHandOverItem, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableProduct/${id}/list/${type}List/交接检查项列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateAvailableHandOverItem({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.updateAvailableHandOverItem, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/availableProduct/${id}/list/${type}List/交接检查项列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableHandOverItemUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeAvailableHandOverItemList({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.removeAvailableHandOverItemList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addPreorderPromotion({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.addPreorderPromotion, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableProduct/${id}/list/${type}List/提前下单优惠列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updatePreorderPromotion({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.updatePreorderPromotion, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/availableProduct/${id}/list/${type}List/提前下单优惠列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextPreorderPromotionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removePreorderPromotionList({ payload }, { call, put }) {
      const {AvailableProductService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableProductService.removePreorderPromotionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

  },
  
  reducers: {
    updateState(state, action) {
      const payload = { ...action.payload, loading: false }
      return { ...payload }
    },
    showLoading(state, action) {
      // const loading=true
      const payload = { ...action.payload, loading: true }
      return { ...payload }
    },
  },
}

