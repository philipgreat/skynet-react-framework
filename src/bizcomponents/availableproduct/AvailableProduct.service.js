import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableProductManager/loadAvailableProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableProductManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}availableProductManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addServicePrice/productId/contractId/availableServiceId/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateServicePriceProperties/availableProductId/id/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServicePriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeServicePriceList/availableProductId/servicePriceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableService = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addAvailableService/availableProductId/serviceName/serviceKey/serviceDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableService = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateAvailableServiceProperties/availableProductId/id/serviceName/serviceKey/serviceDescription/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableServiceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableServiceList/availableProductId/availableServiceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addProductPrice/productId/cityId/vehicleType/greenVehicle/inspectionPrice/exhaustDetectionPrice/secondLevelMaintenancePrice/gradeEstimationPrice/agentServicePrice/toStoreServicePrice/discountAgentServicePrice/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateProductPriceProperties/availableProductId/id/vehicleType/greenVehicle/inspectionPrice/exhaustDetectionPrice/secondLevelMaintenancePrice/gradeEstimationPrice/agentServicePrice/toStoreServicePrice/discountAgentServicePrice/description/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeProductPriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeProductPriceList/availableProductId/productPriceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableInsurance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addAvailableInsurance/productId/insuranceName/insuranceVendor/insurancePrice/summary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableInsurance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateAvailableInsuranceProperties/availableProductId/id/insuranceName/insuranceVendor/insurancePrice/summary/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableInsuranceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableInsuranceList/availableProductId/availableInsuranceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableHandOverItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addAvailableHandOverItem/productId/checkItemName/checkItemDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableHandOverItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateAvailableHandOverItemProperties/availableProductId/id/checkItemName/checkItemDescription/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableHandOverItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableHandOverItemList/availableProductId/availableHandOverItemIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addPreorderPromotion = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addPreorderPromotion/productId/promotionMessage/preorderDays/discountAmount/startDate/endDate/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePreorderPromotion = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updatePreorderPromotionProperties/availableProductId/id/promotionMessage/preorderDays/discountAmount/startDate/endDate/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePreorderPromotionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removePreorderPromotionList/availableProductId/preorderPromotionIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const AvailableProductService = { view,
  load,
  addServicePrice,
  addAvailableService,
  addProductPrice,
  addAvailableInsurance,
  addAvailableHandOverItem,
  addPreorderPromotion,
  updateServicePrice,
  updateAvailableService,
  updateProductPrice,
  updateAvailableInsurance,
  updateAvailableHandOverItem,
  updatePreorderPromotion,
  removeServicePriceList,
  removeAvailableServiceList,
  removeProductPriceList,
  removeAvailableInsuranceList,
  removeAvailableHandOverItemList,
  removePreorderPromotionList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default AvailableProductService

