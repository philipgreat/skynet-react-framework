

import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';

import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError}=modeltool


export default {

  namespace: '_vehicleInspectionOrder',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
      	const modelName = 'vehicleInspectionOrder'
      	const parameter = {dispatch,history,location,modelName}
        //console.log("setupModel",setupModel,typeof(setupModel))
      	setupModel(parameter)

      })
    },
  },
  effects: {
    *view({ payload }, { call, put }) { 
      const {VehicleInspectionOrderService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(VehicleInspectionOrderService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {VehicleInspectionOrderService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(VehicleInspectionOrderService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    
    *doJob({ payload }, { call, put }) { 
      const {VehicleInspectionOrderService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })      
      const {serviceNameToCall, id, parameters} = payload;
      if(!serviceNameToCall){
      	handleClientError("没有提供后台服务的名字")
      	return;
      }
      if(!VehicleInspectionOrderService[serviceNameToCall]){
      	handleClientError("找不到后台服务: "+serviceNameToCall)
      	return;
      }
      
      const data = yield call(VehicleInspectionOrderService[serviceNameToCall], id, parameters)
      if(handleServerError(data)){
      	return
      }
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}List/${listName}`))
    },

    *addVehicleInspectionInsuranceOrder({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addVehicleInspectionInsuranceOrder, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/车辆上线检测保险订单列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionInsuranceOrder({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateVehicleInspectionInsuranceOrder, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/车辆上线检测保险订单列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionInsuranceOrderUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionInsuranceOrderList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeVehicleInspectionInsuranceOrderList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderCharge({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addVehicleInspectionOrderCharge, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/车辆检验订单费用列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderCharge({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateVehicleInspectionOrderCharge, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/车辆检验订单费用列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderChargeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionOrderChargeList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeVehicleInspectionOrderChargeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderServiceLog({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addVehicleInspectionOrderServiceLog, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/年检订单执行日志列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderServiceLog({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateVehicleInspectionOrderServiceLog, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/年检订单执行日志列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderServiceLogUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionOrderServiceLogList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeVehicleInspectionOrderServiceLogList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderPayment({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addVehicleInspectionOrderPayment, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/年检订单支付列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderPayment({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateVehicleInspectionOrderPayment, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/年检订单支付列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderPaymentUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionOrderPaymentList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeVehicleInspectionOrderPaymentList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addHandOverChecklistItem({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addHandOverChecklistItem, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/交接检查项列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateHandOverChecklistItem({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateHandOverChecklistItem, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/交接检查项列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextHandOverChecklistItemUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeHandOverChecklistItemList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeHandOverChecklistItemList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementC2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceVehicleMovementC2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/收车服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementC2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceVehicleMovementC2m, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/收车服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementC2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementC2mList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceVehicleMovementC2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceVehicleMovementM2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/移车服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceVehicleMovementM2m, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/移车服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementM2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementM2mList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceVehicleMovementM2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2c({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceVehicleMovementM2c, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/还车服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2c({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceVehicleMovementM2c, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/还车服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementM2cUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementM2cList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceVehicleMovementM2cList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementC2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceFileMovementC2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/收件服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementC2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceFileMovementC2m, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/收件服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementC2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementC2mList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceFileMovementC2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceFileMovementM2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/移件服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2m({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceFileMovementM2m, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/移件服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementM2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementM2mList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceFileMovementM2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2c({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceFileMovementM2c, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/还件服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2c({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceFileMovementM2c, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/还件服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementM2cUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementM2cList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceFileMovementM2cList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceInsuranceForInspection({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceInsuranceForInspection, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/保险服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceInsuranceForInspection({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceInsuranceForInspection, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/保险服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceInsuranceForInspectionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceInsuranceForInspectionList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceInsuranceForInspectionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleInspection({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceVehicleInspection, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/车辆上线检测列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleInspection({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceVehicleInspection, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/车辆上线检测列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleInspectionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleInspectionList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceVehicleInspectionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileInspection({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceFileInspection, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/6年免检服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileInspection({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceFileInspection, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/6年免检服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileInspectionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileInspectionList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceFileInspectionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleRepairing({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addServiceVehicleRepairing, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/维修服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleRepairing({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateServiceVehicleRepairing, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/维修服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleRepairingUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleRepairingList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeServiceVehicleRepairingList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderReviewResult({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addOrderReviewResult, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/订单评论结果列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateOrderReviewResult({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateOrderReviewResult, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/订单评论结果列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOrderReviewResultUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOrderReviewResultList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeOrderReviewResultList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderRatingResult({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addOrderRatingResult, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/订单评分结果列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateOrderRatingResult({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateOrderRatingResult, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/订单评分结果列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOrderRatingResultUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOrderRatingResultList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeOrderRatingResultList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderDiscountCoupon({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addOrderDiscountCoupon, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/优惠券列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateOrderDiscountCoupon({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateOrderDiscountCoupon, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/优惠券列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOrderDiscountCouponUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOrderDiscountCouponList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeOrderDiscountCouponList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderCoupon({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.addVehicleInspectionOrderCoupon, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/优惠券使用记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderCoupon({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.updateVehicleInspectionOrderCoupon, id, parameters)
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
      const location = { pathname: `/vehicleInspectionOrder/${id}/list/${type}List/优惠券使用记录列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderCouponUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionOrderCouponList({ payload }, { call, put }) {
      const {VehicleInspectionOrderService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleInspectionOrderService.removeVehicleInspectionOrderCouponList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
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

