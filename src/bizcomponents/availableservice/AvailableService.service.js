import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableServiceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableServiceManager/loadAvailableService/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAvailableProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableServiceManager/requestCandidateAvailableProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAvailableProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}availableServiceManager/transferToAnotherAvailableProduct/id/anotherAvailableProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addServicePrice/availableServiceId/contractId/productId/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateServicePriceProperties/availableServiceId/id/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServicePriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeServicePriceList/availableServiceId/servicePriceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleRepairingAllowance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addVehicleRepairingAllowance/serviceId/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleRepairingAllowance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleRepairingAllowanceProperties/availableServiceId/id/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleRepairingAllowanceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeVehicleRepairingAllowanceList/availableServiceId/vehicleRepairingAllowanceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addVehicleServiceCompanyBusinessScope/availableServiceId/companyId/serviceAvailability/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleServiceCompanyBusinessScopeProperties/availableServiceId/id/serviceAvailability/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyBusinessScopeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeVehicleServiceCompanyBusinessScopeList/availableServiceId/vehicleServiceCompanyBusinessScopeIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const AvailableServiceService = { view,
  load,
  addServicePrice,
  addVehicleRepairingAllowance,
  addVehicleServiceCompanyBusinessScope,
  updateServicePrice,
  updateVehicleRepairingAllowance,
  updateVehicleServiceCompanyBusinessScope,
  removeServicePriceList,
  removeVehicleRepairingAllowanceList,
  removeVehicleServiceCompanyBusinessScopeList,
  requestCandidateAvailableProduct,
  transferToAnotherAvailableProduct }
export default AvailableServiceService

