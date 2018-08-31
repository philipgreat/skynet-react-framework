import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignRegisterHistoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignRegisterHistoryManager/loadCampaignRegisterHistory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCampaign = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignRegisterHistoryManager/requestCandidateCampaign/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCampaign = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignRegisterHistoryManager/transferToAnotherCampaign/id/anotherCampaignId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateRegisterMember = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignRegisterHistoryManager/requestCandidateRegisterMember/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRegisterMember = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignRegisterHistoryManager/transferToAnotherRegisterMember/id/anotherRegisterMemberId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const CampaignRegisterHistoryService = { view,
  load,
  requestCandidateCampaign,
  requestCandidateRegisterMember,
  transferToAnotherCampaign,
  transferToAnotherRegisterMember }
export default CampaignRegisterHistoryService

