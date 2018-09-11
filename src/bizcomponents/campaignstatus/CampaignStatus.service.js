import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignStatusManager/loadCampaignStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignStatusManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignStatusManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignStatusManager/addCampaign/campaignStatusId/campaignName/campaignContent/campaignImage/campaignStartTime/campaignFinishTime/campaignHoldAddress/registerDeadlineLeadHours/minimumRegisterQuantity/availableRegisterQuantity/publishStoreId/publishEmployeeId/campaignPlazaId/tokensExpr/`
  const campaignStatusId = targetObjectId
  const requestParameters = { ...parameters, campaignStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignStatusManager/updateCampaignProperties/campaignStatusId/id/campaignName/campaignContent/campaignImage/campaignStartTime/campaignFinishTime/campaignHoldAddress/registerDeadlineLeadHours/minimumRegisterQuantity/availableRegisterQuantity/tokensExpr/`
  const campaignStatusId = targetObjectId
  const requestParameters = { ...parameters, campaignStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignStatusManager/removeCampaignList/campaignStatusId/campaignIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignStatusId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CampaignStatusService = { view,
  load,
  addCampaign,
  updateCampaign,
  removeCampaignList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default CampaignStatusService

