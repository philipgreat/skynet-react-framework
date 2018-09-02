import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}profitDistributeStateManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}profitDistributeStateManager/loadProfitDistributeState/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}profitDistributeStateManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}profitDistributeStateManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addUndistributedProfit = (targetObjectId, parameters) => {
  const url = `${PREFIX}profitDistributeStateManager/addUndistributedProfit /profitDistributeStateId/summary/chargeStartDate/chargeEndDate/profitTypeId/mainOrderId/amount/balance/customerId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateUndistributedProfit = (targetObjectId, parameters) => {
  const url = `${PREFIX}profitDistributeStateManager/updateUndistributedProfitProperties/profitDistributeStateId/id/summary/chargeStartDate/chargeEndDate/amount/balance/tokensExpr/`
  const profitDistributeStateId = targetObjectId
  const requestParameters = { ...parameters, profitDistributeStateId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeUndistributedProfitList = (targetObjectId, parameters) => {
  const url = `${PREFIX}profitDistributeStateManager/removeUndistributedProfitList/profitDistributeStateId/undistributedProfitIds/tokensExpr/`
  const requestParameters = { ...parameters, profitDistributeStateId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ProfitDistributeStateService = { view,
  load,
  addUndistributedProfit,
  updateUndistributedProfit,
  removeUndistributedProfitList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default ProfitDistributeStateService

