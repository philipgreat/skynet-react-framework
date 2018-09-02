import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookTakeStockPlanManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockPlanManager/loadBookTakeStockPlan/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockPlanManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockPlanManager/transferToAnotherStore/id/anotherStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlanCreator = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockPlanManager/requestCandidatePlanCreator/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlanCreator = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockPlanManager/transferToAnotherPlanCreator/id/anotherPlanCreatorId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateTakeStockStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockPlanManager/requestCandidateTakeStockStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherTakeStockStatus = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockPlanManager/transferToAnotherTakeStockStatus/id/anotherTakeStockStatusId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookTakeStockPlanManager/addBookTakeStockResult /bookTakeStockPlanId/bookName/bookCopyId/bookTakeStockStatusId/employeeId/takeStoreResultsId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookTakeStockPlanManager/updateBookTakeStockResultProperties/bookTakeStockPlanId/id/bookName/tokensExpr/`
  const bookTakeStockPlanId = targetObjectId
  const requestParameters = { ...parameters, bookTakeStockPlanId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookTakeStockPlanManager/removeBookTakeStockResultList/bookTakeStockPlanId/bookTakeStockResultIds/tokensExpr/`
  const requestParameters = { ...parameters, bookTakeStockPlanId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookTakeStockPlanService = { view,
  load,
  addBookTakeStockResult,
  updateBookTakeStockResult,
  removeBookTakeStockResultList,
  requestCandidateStore,
  requestCandidatePlanCreator,
  requestCandidateTakeStockStatus,
  transferToAnotherStore,
  transferToAnotherPlanCreator,
  transferToAnotherTakeStockStatus }
export default BookTakeStockPlanService

