import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceRevenueManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceRevenueManager/loadMemberServiceRevenue/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMember = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceRevenueManager/requestCandidateMember/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMember = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberServiceRevenueManager/transferToAnotherMember/id/anotherMemberId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceRevenueManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberServiceRevenueManager/transferToAnotherStore/id/anotherStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addPlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceRevenueManager/addPlatformAccountDetails/memberServiceRevenueId/summary/amount/transactionTypeId/platformAccountId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceRevenueManager/updatePlatformAccountDetailsProperties/memberServiceRevenueId/id/summary/amount/tokensExpr/`
  const memberServiceRevenueId = targetObjectId
  const requestParameters = { ...parameters, memberServiceRevenueId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceRevenueManager/removePlatformAccountDetailsList/memberServiceRevenueId/platformAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceRevenueId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const MemberServiceRevenueService = { view,
  load,
  addPlatformAccountDetails,
  updatePlatformAccountDetails,
  removePlatformAccountDetailsList,
  requestCandidateMember,
  requestCandidateStore,
  transferToAnotherMember,
  transferToAnotherStore }
export default MemberServiceRevenueService

