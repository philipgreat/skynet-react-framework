import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignReviewManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignReviewManager/loadCampaignReview/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCampaign = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignReviewManager/requestCandidateCampaign/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCampaign = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignReviewManager/transferToAnotherCampaign/id/anotherCampaignId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReviewer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignReviewManager/requestCandidateReviewer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReviewer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignReviewManager/transferToAnotherReviewer/id/anotherReviewerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addCampaignReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignReviewManager/addCampaignReviewLike/campaignReviewId/replierId/tokensExpr/`
  const campaignReviewId = targetObjectId
  const requestParameters = { ...parameters, campaignReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignReviewManager/updateCampaignReviewLikeProperties/campaignReviewId/id/tokensExpr/`
  const campaignReviewId = targetObjectId
  const requestParameters = { ...parameters, campaignReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignReviewLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignReviewManager/removeCampaignReviewLikeList/campaignReviewId/campaignReviewLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignReviewId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addInform = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignReviewManager/addInform/campaignReviewId/informerId/bookReviewId/comments/tokensExpr/`
  const campaignReviewId = targetObjectId
  const requestParameters = { ...parameters, campaignReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInform = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignReviewManager/updateInformProperties/campaignReviewId/id/comments/tokensExpr/`
  const campaignReviewId = targetObjectId
  const requestParameters = { ...parameters, campaignReviewId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInformList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignReviewManager/removeInformList/campaignReviewId/informIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignReviewId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CampaignReviewService = { view,
  load,
  addCampaignReviewLike,
  addInform,
  updateCampaignReviewLike,
  updateInform,
  removeCampaignReviewLikeList,
  removeInformList,
  requestCandidateCampaign,
  requestCandidateReviewer,
  transferToAnotherCampaign,
  transferToAnotherReviewer }
export default CampaignReviewService

