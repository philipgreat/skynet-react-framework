import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/loadBook/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookRecommend = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/requestCandidateBookRecommend/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookRecommend = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookManager/transferToAnotherBookRecommend/id/anotherBookRecommendId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/requestCandidateBookPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookManager/transferToAnotherBookPlaza/id/anotherBookPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBookCopy /bookInfoId/bookCopyVendorId/bookCopySharingType/locationStoreId/evaluationPrice/bookCopyStatusId/wxaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBookCopyProperties/bookId/id/bookCopySharingType/evaluationPrice/wxaId/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBookCopyList/bookId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBorrowingHistory /bookId/lendingDatetime/bookName/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopyId/bookCopySharingType/lendingStoreId/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/borrowingStatusId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBorrowingHistoryProperties/bookId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBorrowingHistoryList/bookId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBorrowingExpiredSku /bookId/borrowerId/bookCopyId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBorrowingExpiredSkuProperties/bookId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBorrowingExpiredSkuList/bookId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBookReview /bookInfoId/bookCopyId/reviewerId/reviewContent/bookPlazaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBookReviewProperties/bookId/id/reviewContent/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBookReviewList/bookId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addStoreSlide /bookId/tips/bannerImage/wxaLinkUrl/antdLinkUrl/slideTypeId/campaignId/memberServiceProductId/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateStoreSlideProperties/bookId/id/tips/bannerImage/wxaLinkUrl/antdLinkUrl/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreSlideList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeStoreSlideList/bookId/storeSlideIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookService = { view,
  load,
  addBookCopy,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookReview,
  addStoreSlide,
  updateBookCopy,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookReview,
  updateStoreSlide,
  removeBookCopyList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookReviewList,
  removeStoreSlideList,
  requestCandidateBookRecommend,
  requestCandidateBookPlaza,
  requestCandidatePlatform,
  transferToAnotherBookRecommend,
  transferToAnotherBookPlaza,
  transferToAnotherPlatform }
export default BookService

