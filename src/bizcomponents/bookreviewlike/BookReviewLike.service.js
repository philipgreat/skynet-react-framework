import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookReviewLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewLikeManager/loadBookReviewLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookReview = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewLikeManager/requestCandidateBookReview/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookReview = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookReviewLikeManager/transferToAnotherBookReview/id/anotherBookReviewId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReplier = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookReviewLikeManager/transferToAnotherReplier/id/anotherReplierId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BookReviewLikeService = { view,
  load,
  requestCandidateBookReview,
  requestCandidateReplier,
  transferToAnotherBookReview,
  transferToAnotherReplier }
export default BookReviewLikeService

