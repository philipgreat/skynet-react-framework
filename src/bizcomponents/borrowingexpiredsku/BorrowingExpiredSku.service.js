import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/loadBorrowingExpiredSku/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBorrower = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBorrower/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBorrower = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingExpiredSkuManager/transferToAnotherBorrower/id/anotherBorrowerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingExpiredSkuManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBook = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBook/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBook = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingExpiredSkuManager/transferToAnotherBook/id/anotherBookId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateLendingStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateLendingStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherLendingStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingExpiredSkuManager/transferToAnotherLendingStore/id/anotherLendingStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReturnStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateReturnStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReturnStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingExpiredSkuManager/transferToAnotherReturnStore/id/anotherReturnStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBorrowingHistory = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBorrowingHistory/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBorrowingHistory = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingExpiredSkuManager/transferToAnotherBorrowingHistory/id/anotherBorrowingHistoryId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BorrowingExpiredSkuService = { view,
  load,
  requestCandidateBorrower,
  requestCandidateBookCopy,
  requestCandidateBook,
  requestCandidateLendingStore,
  requestCandidateReturnStore,
  requestCandidateBorrowingHistory,
  transferToAnotherBorrower,
  transferToAnotherBookCopy,
  transferToAnotherBook,
  transferToAnotherLendingStore,
  transferToAnotherReturnStore,
  transferToAnotherBorrowingHistory }
export default BorrowingExpiredSkuService

