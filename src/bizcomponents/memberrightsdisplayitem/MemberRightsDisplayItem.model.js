

import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';

import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError}=modeltool


export default {

  namespace: '_memberRightsDisplayItem',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
      	const modelName = 'memberRightsDisplayItem'
      	const parameter = {dispatch,history,location,modelName}
        //console.log("setupModel",setupModel,typeof(setupModel))
      	setupModel(parameter)

      })
    },
  },
  effects: {
    *view({ payload }, { call, put, select }) { 
    
<<<<<<< HEAD:src/bizcomponents/vehiclerepairingpayment/VehicleRepairingPayment.model.js
      const cachedData = yield select(state => state._vehicleRepairingPayment)
=======
      const cachedData = yield select(state => state._memberRightsDisplayItem)
>>>>>>> 69fce8703114b35fde9082e9f806d4b3dd160efb:src/bizcomponents/memberrightsdisplayitem/MemberRightsDisplayItem.model.js
      //if the data in the cache, just show it, there is no delay
      const link = payload.pathname
      //if the data in the cache, just show it, there is no delay
      if(cachedData.class){
<<<<<<< HEAD:src/bizcomponents/vehiclerepairingpayment/VehicleRepairingPayment.model.js
        //yield put({ type: 'breadcrumb/gotoLink', payload: { displayName:cachedData.displayName,link }} )
=======
        yield put({ type: 'breadcrumb/gotoLink', payload: { displayName:cachedData.displayName,link }} )
>>>>>>> 69fce8703114b35fde9082e9f806d4b3dd160efb:src/bizcomponents/memberrightsdisplayitem/MemberRightsDisplayItem.model.js
        yield put({ type: 'updateState', payload: cachedData })
      }else{
        yield put({ type: 'showLoading', payload })
      }
<<<<<<< HEAD:src/bizcomponents/vehiclerepairingpayment/VehicleRepairingPayment.model.js
      
      const {VehicleRepairingPaymentService} = GlobalComponents;
      const data = yield call(VehicleRepairingPaymentService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
=======
>>>>>>> 69fce8703114b35fde9082e9f806d4b3dd160efb:src/bizcomponents/memberrightsdisplayitem/MemberRightsDisplayItem.model.js
      
      const {MemberRightsDisplayItemService} = GlobalComponents;
      const data = yield call(MemberRightsDisplayItemService.view, payload.id)
      
<<<<<<< HEAD:src/bizcomponents/vehiclerepairingpayment/VehicleRepairingPayment.model.js
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
=======
      const displayName = payload.displayName||data.displayName
      
      if(!cachedData.class){
        yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      }
>>>>>>> 69fce8703114b35fde9082e9f806d4b3dd160efb:src/bizcomponents/memberrightsdisplayitem/MemberRightsDisplayItem.model.js

      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {MemberRightsDisplayItemService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(MemberRightsDisplayItemService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    
    *doJob({ payload }, { call, put }) { 
      const {MemberRightsDisplayItemService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })      
      const {serviceNameToCall, id, parameters} = payload;
      if(!serviceNameToCall){
      	handleClientError("没有提供后台服务的名字")
      	return;
      }
      if(!MemberRightsDisplayItemService[serviceNameToCall]){
      	handleClientError("找不到后台服务: "+serviceNameToCall)
      	return;
      }
      
      const data = yield call(MemberRightsDisplayItemService[serviceNameToCall], id, parameters)
      if(handleServerError(data)){
      	return
      }
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/memberRightsDisplayItem/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/memberRightsDisplayItem/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/memberRightsDisplayItem/${id}/list/${type}List/${listName}`))
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

