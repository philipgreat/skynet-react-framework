import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookTakeStockResultManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockResultManager/loadBookTakeStockResult/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockResultManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockResultManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookTakeStockStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockResultManager/requestCandidateBookTakeStockStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookTakeStockStatus = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockResultManager/transferToAnotherBookTakeStockStatus/id/anotherBookTakeStockStatusId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockResultManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockResultManager/transferToAnotherEmployee/id/anotherEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateTakeStoreResults = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockResultManager/requestCandidateTakeStoreResults/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherTakeStoreResults = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockResultManager/transferToAnotherTakeStoreResults/id/anotherTakeStoreResultsId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookTakeStockPlan = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTakeStockResultManager/requestCandidateBookTakeStockPlan/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookTakeStockPlan = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookTakeStockResultManager/transferToAnotherBookTakeStockPlan/id/anotherBookTakeStockPlanId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BookTakeStockResultService = { view,
  load,
  requestCandidateBookCopy,
  requestCandidateBookTakeStockStatus,
  requestCandidateEmployee,
  requestCandidateTakeStoreResults,
  requestCandidateBookTakeStockPlan,
  transferToAnotherBookCopy,
  transferToAnotherBookTakeStockStatus,
  transferToAnotherEmployee,
  transferToAnotherTakeStoreResults,
  transferToAnotherBookTakeStockPlan }
export default BookTakeStockResultService

