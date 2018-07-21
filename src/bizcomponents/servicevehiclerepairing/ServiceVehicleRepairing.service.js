import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/loadServiceVehicleRepairing/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleRepairingManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceVehicleInspection = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateServiceVehicleInspection/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceVehicleInspection = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleRepairingManager/transferToAnotherServiceVehicleInspection/id/anotherServiceVehicleInspectionId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleRepairingManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleRepairingManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addRepairingAllowanceItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/addRepairingAllowanceItem/serviceId/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateRepairingAllowanceItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/updateRepairingAllowanceItemProperties/serviceVehicleRepairingId/id/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const serviceVehicleRepairingId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleRepairingId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeRepairingAllowanceItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeRepairingAllowanceItemList/serviceVehicleRepairingId/repairingAllowanceItemIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleRepairingId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleRepairingPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/addVehicleRepairingPayment/serviceVehicleRepairingId/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleRepairingPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/updateVehicleRepairingPaymentProperties/serviceVehicleRepairingId/id/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const serviceVehicleRepairingId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleRepairingId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleRepairingPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeVehicleRepairingPaymentList/serviceVehicleRepairingId/vehicleRepairingPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleRepairingId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ServiceVehicleRepairingService = { view,
  load,
  addRepairingAllowanceItem,
  addVehicleRepairingPayment,
  updateRepairingAllowanceItem,
  updateVehicleRepairingPayment,
  removeRepairingAllowanceItemList,
  removeVehicleRepairingPaymentList,
  requestCandidateResponsibleWorker,
  requestCandidateServiceVehicleInspection,
  requestCandidateMerchant,
  requestCandidateMainOrder,
  transferToAnotherResponsibleWorker,
  transferToAnotherServiceVehicleInspection,
  transferToAnotherMerchant,
  transferToAnotherMainOrder }
export default ServiceVehicleRepairingService

