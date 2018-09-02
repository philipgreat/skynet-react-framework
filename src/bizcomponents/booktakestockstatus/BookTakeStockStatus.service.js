import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookTakeStockStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockStatusManager/loadBookTakeStockStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockStatusManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockStatusManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookTakeStockStatusManager/addBookTakeStockResult/bookTakeStockStatusId/bookName/bookCopyId/employeeId/takeStoreResultsId/bookTakeStockPlanId/tokensExpr/`
  const bookTakeStockStatusId = targetObjectId
  const requestParameters = { ...parameters, bookTakeStockStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookTakeStockStatusManager/updateBookTakeStockResultProperties/bookTakeStockStatusId/id/bookName/tokensExpr/`
  const bookTakeStockStatusId = targetObjectId
  const requestParameters = { ...parameters, bookTakeStockStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookTakeStockStatusManager/removeBookTakeStockResultList/bookTakeStockStatusId/bookTakeStockResultIds/tokensExpr/`
  const requestParameters = { ...parameters, bookTakeStockStatusId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookTakeStockStatusService = { view,
  load,
  addBookTakeStockResult,
  updateBookTakeStockResult,
  removeBookTakeStockResultList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default BookTakeStockStatusService

