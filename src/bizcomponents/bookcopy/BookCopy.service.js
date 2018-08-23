import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/loadBookCopy/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookInfo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateBookInfo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookInfo = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyManager/transferToAnotherBookInfo/id/anotherBookInfoId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookCopyVendor = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateBookCopyVendor/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopyVendor = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyManager/transferToAnotherBookCopyVendor/id/anotherBookCopyVendorId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateLocationStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateLocationStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherLocationStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyManager/transferToAnotherLocationStore/id/anotherLocationStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookCopyStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateBookCopyStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopyStatus = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyManager/transferToAnotherBookCopyStatus/id/anotherBookCopyStatusId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addLossAssessmentRecord/bookCopyId/recordStoreId/lossComment/recordPersonId/damagePersonId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateLossAssessmentRecordProperties/bookCopyId/id/lossComment/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLossAssessmentRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeLossAssessmentRecordList/bookCopyId/lossAssessmentRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookCopyTransfer/bookCopyId/bookName/originalStoreId/newStoreId/transferTypeId/responsibleEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookCopyTransferProperties/bookCopyId/id/bookName/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyTransferList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookCopyTransferList/bookCopyId/bookCopyTransferIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookTakeStockResult/bookCopyId/bookName/bookTakeStockStatusId/employeeId/takeStoreResultsId/bookTakeStockPlanId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookTakeStockResultProperties/bookCopyId/id/bookName/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookTakeStockResultList/bookCopyId/bookTakeStockResultIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookCopyOperationRecord/bookCopyId/bookName/bookCopyOperateTypeId/operateStoreId/operationEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookCopyOperationRecordProperties/bookCopyId/id/bookName/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookCopyOperationRecordList/bookCopyId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBorrowingHistory/bookCopyId/lendingDatetime/bookName/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopySharingType/lendingStoreId/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/borrowingStatusId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBorrowingHistoryProperties/bookCopyId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBorrowingHistoryList/bookCopyId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBorrowingExpiredSku/bookCopyId/borrowerId/bookId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBorrowingExpiredSkuProperties/bookCopyId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBorrowingExpiredSkuList/bookCopyId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookReview/bookCopyId/bookInfoId/reviewerId/reviewContent/bookPlazaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookReviewProperties/bookCopyId/id/reviewContent/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookReviewList/bookCopyId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookCopyService = { view,
  load,
  addLossAssessmentRecord,
  addBookCopyTransfer,
  addBookTakeStockResult,
  addBookCopyOperationRecord,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookReview,
  updateLossAssessmentRecord,
  updateBookCopyTransfer,
  updateBookTakeStockResult,
  updateBookCopyOperationRecord,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookReview,
  removeLossAssessmentRecordList,
  removeBookCopyTransferList,
  removeBookTakeStockResultList,
  removeBookCopyOperationRecordList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookReviewList,
  requestCandidateBookInfo,
  requestCandidateBookCopyVendor,
  requestCandidateLocationStore,
  requestCandidateBookCopyStatus,
  transferToAnotherBookInfo,
  transferToAnotherBookCopyVendor,
  transferToAnotherLocationStore,
  transferToAnotherBookCopyStatus }
export default BookCopyService

