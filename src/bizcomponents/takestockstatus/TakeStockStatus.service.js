import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}takeStockStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}takeStockStatusManager/loadTakeStockStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}takeStockStatusManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}takeStockStatusManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}takeStockStatusManager/addBookTakeStockPlan/takeStockStatusId/planName/storeId/planDatetime/planCreatorId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}takeStockStatusManager/updateBookTakeStockPlanProperties/takeStockStatusId/id/planName/planDatetime/tokensExpr/`
  const takeStockStatusId = targetObjectId
  const requestParameters = { ...parameters, takeStockStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockPlanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}takeStockStatusManager/removeBookTakeStockPlanList/takeStockStatusId/bookTakeStockPlanIds/tokensExpr/`
  const requestParameters = { ...parameters, takeStockStatusId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const TakeStockStatusService = { view,
  load,
  addBookTakeStockPlan,
  updateBookTakeStockPlan,
  removeBookTakeStockPlanList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default TakeStockStatusService

