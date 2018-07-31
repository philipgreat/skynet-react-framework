import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookPlazaManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookPlazaManager/loadBookPlaza/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookPlazaManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookPlazaManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addBookRecommend = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addBookRecommend/bookPlazaId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookRecommend = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateBookRecommendProperties/bookPlazaId/id/name/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookRecommendList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeBookRecommendList/bookPlazaId/bookRecommendIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookSharingIncomeMetric = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addBookSharingIncomeMetric/bookPlazaId/vendorRate/lendingStoreRate/platformRate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookSharingIncomeMetric = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateBookSharingIncomeMetricProperties/bookPlazaId/id/vendorRate/lendingStoreRate/platformRate/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookSharingIncomeMetricList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeBookSharingIncomeMetricList/bookPlazaId/bookSharingIncomeMetricIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookDonationIncomeMetric = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addBookDonationIncomeMetric/bookPlazaId/vendorRate/lendingStoreRate/platformRate/publicServiceFundRate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookDonationIncomeMetric = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateBookDonationIncomeMetricProperties/bookPlazaId/id/vendorRate/lendingStoreRate/platformRate/publicServiceFundRate/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookDonationIncomeMetricList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeBookDonationIncomeMetricList/bookPlazaId/bookDonationIncomeMetricIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addMemberServiceIncomeMetric = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addMemberServiceIncomeMetric/bookPlazaId/storeRate/platformRate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberServiceIncomeMetric = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateMemberServiceIncomeMetricProperties/bookPlazaId/id/storeRate/platformRate/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMemberServiceIncomeMetricList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeMemberServiceIncomeMetricList/bookPlazaId/memberServiceIncomeMetricIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addBook/bookPlazaId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookRecommendId/platformId/bookSummary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateBookProperties/bookPlazaId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookSummary/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeBookList/bookPlazaId/bookIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addBookCopyStatus/bookPlazaId/statusName/statusCode/statusDescription/canBorrow/canSell/needCheckStock/alarmWhenCheck/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateBookCopyStatusProperties/bookPlazaId/id/statusName/statusCode/statusDescription/canBorrow/canSell/needCheckStock/alarmWhenCheck/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeBookCopyStatusList/bookPlazaId/bookCopyStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/addBookReview/bookPlazaId/bookInfoId/bookCopyId/reviewerId/reviewContent/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/updateBookReviewProperties/bookPlazaId/id/reviewContent/tokensExpr/`
  const bookPlazaId = targetObjectId
  const requestParameters = { ...parameters, bookPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookPlazaManager/removeBookReviewList/bookPlazaId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, bookPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookPlazaService = { view,
  load,
  addBookRecommend,
  addBookSharingIncomeMetric,
  addBookDonationIncomeMetric,
  addMemberServiceIncomeMetric,
  addBook,
  addBookCopyStatus,
  addBookReview,
  updateBookRecommend,
  updateBookSharingIncomeMetric,
  updateBookDonationIncomeMetric,
  updateMemberServiceIncomeMetric,
  updateBook,
  updateBookCopyStatus,
  updateBookReview,
  removeBookRecommendList,
  removeBookSharingIncomeMetricList,
  removeBookDonationIncomeMetricList,
  removeMemberServiceIncomeMetricList,
  removeBookList,
  removeBookCopyStatusList,
  removeBookReviewList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default BookPlazaService

