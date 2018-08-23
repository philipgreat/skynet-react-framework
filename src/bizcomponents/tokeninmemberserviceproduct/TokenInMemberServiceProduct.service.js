import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/loadTokenInMemberServiceProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAvailableToken = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/requestCandidateAvailableToken/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAvailableToken = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}tokenInMemberServiceProductManager/transferToAnotherAvailableToken/id/anotherAvailableTokenId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMemberServiceProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/requestCandidateMemberServiceProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMemberServiceProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}tokenInMemberServiceProductManager/transferToAnotherMemberServiceProduct/id/anotherMemberServiceProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const TokenInMemberServiceProductService = { view,
  load,
  requestCandidateAvailableToken,
  requestCandidateMemberServiceProduct,
  transferToAnotherAvailableToken,
  transferToAnotherMemberServiceProduct }
export default TokenInMemberServiceProductService

