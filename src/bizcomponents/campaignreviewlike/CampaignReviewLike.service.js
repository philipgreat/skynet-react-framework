import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignReviewLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignReviewLikeManager/loadCampaignReviewLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReview = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignReviewLikeManager/requestCandidateReview/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReview = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignReviewLikeManager/transferToAnotherReview/id/anotherReviewId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignReviewLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReplier = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignReviewLikeManager/transferToAnotherReplier/id/anotherReplierId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const CampaignReviewLikeService = { view,
  load,
  requestCandidateReview,
  requestCandidateReplier,
  transferToAnotherReview,
  transferToAnotherReplier }
export default CampaignReviewLikeService

