import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}takeStoreResultsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}takeStoreResultsManager/loadTakeStoreResults/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}takeStoreResultsManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}takeStoreResultsManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}takeStoreResultsManager/addBookTakeStockResult/takeStoreResultsId/bookName/bookCopyId/bookTakeStockStatusId/employeeId/bookTakeStockPlanId/tokensExpr/`
  const takeStoreResultsId = targetObjectId
  const requestParameters = { ...parameters, takeStoreResultsId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}takeStoreResultsManager/updateBookTakeStockResultProperties/takeStoreResultsId/id/bookName/tokensExpr/`
  const takeStoreResultsId = targetObjectId
  const requestParameters = { ...parameters, takeStoreResultsId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}takeStoreResultsManager/removeBookTakeStockResultList/takeStoreResultsId/bookTakeStockResultIds/tokensExpr/`
  const requestParameters = { ...parameters, takeStoreResultsId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const TakeStoreResultsService = { view,
  load,
  addBookTakeStockResult,
  updateBookTakeStockResult,
  removeBookTakeStockResultList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default TakeStoreResultsService

