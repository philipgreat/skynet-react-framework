import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}informManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}informManager/loadInform/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateInformer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}informManager/requestCandidateInformer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherInformer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}informManager/transferToAnotherInformer/id/anotherInformerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateCampaignReview = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}informManager/requestCandidateCampaignReview/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCampaignReview = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}informManager/transferToAnotherCampaignReview/id/anotherCampaignReviewId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookReview = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}informManager/requestCandidateBookReview/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookReview = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}informManager/transferToAnotherBookReview/id/anotherBookReviewId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const InformService = { view,
  load,
  requestCandidateInformer,
  requestCandidateCampaignReview,
  requestCandidateBookReview,
  transferToAnotherInformer,
  transferToAnotherCampaignReview,
  transferToAnotherBookReview }
export default InformService

