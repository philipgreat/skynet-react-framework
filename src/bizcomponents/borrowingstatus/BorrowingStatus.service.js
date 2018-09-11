import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}borrowingStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingStatusManager/loadBorrowingStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingStatusManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}borrowingStatusManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingStatusManager/addBorrowingHistory/borrowingStatusId/lendingDatetime/bookName/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/lendingStoreId/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/tokensExpr/`
  const borrowingStatusId = targetObjectId
  const requestParameters = { ...parameters, borrowingStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingStatusManager/updateBorrowingHistoryProperties/borrowingStatusId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/tokensExpr/`
  const borrowingStatusId = targetObjectId
  const requestParameters = { ...parameters, borrowingStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingStatusManager/removeBorrowingHistoryList/borrowingStatusId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, borrowingStatusId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BorrowingStatusService = { view,
  load,
  addBorrowingHistory,
  updateBorrowingHistory,
  removeBorrowingHistoryList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default BorrowingStatusService

