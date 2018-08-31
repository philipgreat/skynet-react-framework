import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignLikeManager/loadCampaignLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCampaign = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignLikeManager/requestCandidateCampaign/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCampaign = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignLikeManager/transferToAnotherCampaign/id/anotherCampaignId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReplier = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignLikeManager/transferToAnotherReplier/id/anotherReplierId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const CampaignLikeService = { view,
  load,
  requestCandidateCampaign,
  requestCandidateReplier,
  transferToAnotherCampaign,
  transferToAnotherReplier }
export default CampaignLikeService

