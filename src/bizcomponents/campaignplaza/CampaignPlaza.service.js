import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignPlazaManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignPlazaManager/loadCampaignPlaza/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignPlazaManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignPlazaManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignPlazaManager/addCampaign/campaignPlazaId/campaignName/campaignContent/campaignImage/campaignStatusId/campaignStartTime/campaignFinishTime/campaignHoldAddress/registerDeadlineLeadHours/minimumRegisterQuantity/availableRegisterQuantity/publishStoreId/publishEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignPlazaManager/updateCampaignProperties/campaignPlazaId/id/campaignName/campaignContent/campaignImage/campaignStartTime/campaignFinishTime/campaignHoldAddress/registerDeadlineLeadHours/minimumRegisterQuantity/availableRegisterQuantity/tokensExpr/`
  const campaignPlazaId = targetObjectId
  const requestParameters = { ...parameters, campaignPlazaId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignPlazaManager/removeCampaignList/campaignPlazaId/campaignIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignPlazaId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CampaignPlazaService = { view,
  load,
  addCampaign,
  updateCampaign,
  removeCampaignList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default CampaignPlazaService

