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



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceRevenueManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberServiceRevenueManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const MemberServiceRevenueService = { view,
  load,
  requestCandidateMember,
  requestCandidateStore,
  requestCandidateMainOrder,
  transferToAnotherMember,
  transferToAnotherStore,
  transferToAnotherMainOrder }
export default MemberServiceRevenueService

