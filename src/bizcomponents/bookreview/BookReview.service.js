import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookReviewManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/loadBookReview/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookInfo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateBookInfo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookInfo = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookReviewManager/transferToAnotherBookInfo/id/anotherBookInfoId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookReviewManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReviewer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateReviewer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReviewer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookReviewManager/transferToAnotherReviewer/id/anotherReviewerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateBookPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookReviewManager/transferToAnotherBookPlaza/id/anotherBookPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/addBookReviewLike/bookReviewId/replierId/tokensExpr/`
  const bookReviewId = targetObjectId
  const requestParameters = { ...parameters, bookReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/updateBookReviewLikeProperties/bookReviewId/id/tokensExpr/`
  const bookReviewId = targetObjectId
  const requestParameters = { ...parameters, bookReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookReviewLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/removeBookReviewLikeList/bookReviewId/bookReviewLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookReviewId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addInform = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/addInform/bookReviewId/informerId/campaignReviewId/comments/tokensExpr/`
  const bookReviewId = targetObjectId
  const requestParameters = { ...parameters, bookReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInform = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/updateInformProperties/bookReviewId/id/comments/tokensExpr/`
  const bookReviewId = targetObjectId
  const requestParameters = { ...parameters, bookReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInformList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/removeInformList/bookReviewId/informIds/tokensExpr/`
  const requestParameters = { ...parameters, bookReviewId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookReviewService = { view,
  load,
  addBookReviewLike,
  addInform,
  updateBookReviewLike,
  updateInform,
  removeBookReviewLikeList,
  removeInformList,
  requestCandidateBookInfo,
  requestCandidateBookCopy,
  requestCandidateReviewer,
  requestCandidateBookPlaza,
  transferToAnotherBookInfo,
  transferToAnotherBookCopy,
  transferToAnotherReviewer,
  transferToAnotherBookPlaza }
export default BookReviewService

