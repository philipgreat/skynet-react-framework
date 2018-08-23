import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/loadCampaign/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCampaignStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/requestCandidateCampaignStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCampaignStatus = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignManager/transferToAnotherCampaignStatus/id/anotherCampaignStatusId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePublishStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/requestCandidatePublishStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPublishStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignManager/transferToAnotherPublishStore/id/anotherPublishStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePublishEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/requestCandidatePublishEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPublishEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignManager/transferToAnotherPublishEmployee/id/anotherPublishEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateCampaignPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/requestCandidateCampaignPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCampaignPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}campaignManager/transferToAnotherCampaignPlaza/id/anotherCampaignPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/addStoreSlide/campaignId/tips/bannerImage/wxaLinkUrl/antdLinkUrl/slideTypeId/bookId/memberServiceProductId/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/updateStoreSlideProperties/campaignId/id/tips/bannerImage/wxaLinkUrl/antdLinkUrl/tokensExpr/`
  const campaignId = targetObjectId
  const requestParameters = { ...parameters, campaignId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreSlideList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/removeStoreSlideList/campaignId/storeSlideIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/addCampaignRegisterHistory/campaignId/cancelled/registerMemberId/registerDatetime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/updateCampaignRegisterHistoryProperties/campaignId/id/cancelled/registerDatetime/tokensExpr/`
  const campaignId = targetObjectId
  const requestParameters = { ...parameters, campaignId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignRegisterHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/removeCampaignRegisterHistoryList/campaignId/campaignRegisterHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/addCampaignReview/campaignId/reviewContent/reviewerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/updateCampaignReviewProperties/campaignId/id/reviewContent/tokensExpr/`
  const campaignId = targetObjectId
  const requestParameters = { ...parameters, campaignId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/removeCampaignReviewList/campaignId/campaignReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/addCampaignLike/campaignId/replierId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/updateCampaignLikeProperties/campaignId/id/tokensExpr/`
  const campaignId = targetObjectId
  const requestParameters = { ...parameters, campaignId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}campaignManager/removeCampaignLikeList/campaignId/campaignLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, campaignId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CampaignService = { view,
  load,
  addStoreSlide,
  addCampaignRegisterHistory,
  addCampaignReview,
  addCampaignLike,
  updateStoreSlide,
  updateCampaignRegisterHistory,
  updateCampaignReview,
  updateCampaignLike,
  removeStoreSlideList,
  removeCampaignRegisterHistoryList,
  removeCampaignReviewList,
  removeCampaignLikeList,
  requestCandidateCampaignStatus,
  requestCandidatePublishStore,
  requestCandidatePublishEmployee,
  requestCandidateCampaignPlaza,
  transferToAnotherCampaignStatus,
  transferToAnotherPublishStore,
  transferToAnotherPublishEmployee,
  transferToAnotherCampaignPlaza }
export default CampaignService

