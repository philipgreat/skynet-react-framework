import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}borrowingHistoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/loadBorrowingHistory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBorrower = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBorrower/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBorrower = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingHistoryManager/transferToAnotherBorrower/id/anotherBorrowerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBook = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBook/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBook = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingHistoryManager/transferToAnotherBook/id/anotherBookId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingHistoryManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateLendingStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateLendingStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherLendingStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingHistoryManager/transferToAnotherLendingStore/id/anotherLendingStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReturnStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateReturnStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReturnStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingHistoryManager/transferToAnotherReturnStore/id/anotherReturnStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBorrowingStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBorrowingStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBorrowingStatus = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingHistoryManager/transferToAnotherBorrowingStatus/id/anotherBorrowingStatusId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingHistoryManager/addBorrowingExpiredSku/borrowingHistoryId/borrowerId/bookCopyId/bookId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/tokensExpr/`
  const borrowingHistoryId = targetObjectId
  const requestParameters = { ...parameters, borrowingHistoryId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingHistoryManager/updateBorrowingExpiredSkuProperties/borrowingHistoryId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/tokensExpr/`
  const borrowingHistoryId = targetObjectId
  const requestParameters = { ...parameters, borrowingHistoryId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingHistoryManager/removeBorrowingExpiredSkuList/borrowingHistoryId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, borrowingHistoryId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BorrowingHistoryService = { view,
  load,
  addBorrowingExpiredSku,
  updateBorrowingExpiredSku,
  removeBorrowingExpiredSkuList,
  requestCandidateBorrower,
  requestCandidateBook,
  requestCandidateBookCopy,
  requestCandidateLendingStore,
  requestCandidateReturnStore,
  requestCandidateBorrowingStatus,
  transferToAnotherBorrower,
  transferToAnotherBook,
  transferToAnotherBookCopy,
  transferToAnotherLendingStore,
  transferToAnotherReturnStore,
  transferToAnotherBorrowingStatus }
export default BorrowingHistoryService

