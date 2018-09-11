import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}profitTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}profitTypeManager/loadProfitType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}profitTypeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}profitTypeManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addUndistributedProfit = (targetObjectId, parameters) => {
  const url = `${PREFIX}profitTypeManager/addUndistributedProfit/profitTypeId/summary/chargeStartDate/chargeEndDate/profitDistributeStateId/mainOrderId/amount/balance/customerId/platformId/tokensExpr/`
  const profitTypeId = targetObjectId
  const requestParameters = { ...parameters, profitTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateUndistributedProfit = (targetObjectId, parameters) => {
  const url = `${PREFIX}profitTypeManager/updateUndistributedProfitProperties/profitTypeId/id/summary/chargeStartDate/chargeEndDate/amount/balance/tokensExpr/`
  const profitTypeId = targetObjectId
  const requestParameters = { ...parameters, profitTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeUndistributedProfitList = (targetObjectId, parameters) => {
  const url = `${PREFIX}profitTypeManager/removeUndistributedProfitList/profitTypeId/undistributedProfitIds/tokensExpr/`
  const requestParameters = { ...parameters, profitTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ProfitTypeService = { view,
  load,
  addUndistributedProfit,
  updateUndistributedProfit,
  removeUndistributedProfitList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default ProfitTypeService

