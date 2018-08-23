import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}platformAccountDetailsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/loadPlatformAccountDetails/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateTransactionType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/requestCandidateTransactionType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherTransactionType = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}platformAccountDetailsManager/transferToAnotherTransactionType/id/anotherTransactionTypeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatformAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/requestCandidatePlatformAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatformAccount = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}platformAccountDetailsManager/transferToAnotherPlatformAccount/id/anotherPlatformAccountId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateRelatedMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/requestCandidateRelatedMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRelatedMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}platformAccountDetailsManager/transferToAnotherRelatedMainOrder/id/anotherRelatedMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMemberServiceRevenue = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/requestCandidateMemberServiceRevenue/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMemberServiceRevenue = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}platformAccountDetailsManager/transferToAnotherMemberServiceRevenue/id/anotherMemberServiceRevenueId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const PlatformAccountDetailsService = { view,
  load,
  requestCandidateTransactionType,
  requestCandidatePlatformAccount,
  requestCandidateRelatedMainOrder,
  requestCandidateMemberServiceRevenue,
  transferToAnotherTransactionType,
  transferToAnotherPlatformAccount,
  transferToAnotherRelatedMainOrder,
  transferToAnotherMemberServiceRevenue }
export default PlatformAccountDetailsService

