import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableTokenManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableTokenManager/loadAvailableToken/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableTokenManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}availableTokenManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addTokenInMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableTokenManager/addTokenInMemberServiceProduct/availableTokenId/description/tokenEnabled/memberServiceProductId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateTokenInMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableTokenManager/updateTokenInMemberServiceProductProperties/availableTokenId/id/description/tokenEnabled/tokensExpr/`
  const availableTokenId = targetObjectId
  const requestParameters = { ...parameters, availableTokenId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeTokenInMemberServiceProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableTokenManager/removeTokenInMemberServiceProductList/availableTokenId/tokenInMemberServiceProductIds/tokensExpr/`
  const requestParameters = { ...parameters, availableTokenId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const AvailableTokenService = { view,
  load,
  addTokenInMemberServiceProduct,
  updateTokenInMemberServiceProduct,
  removeTokenInMemberServiceProductList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default AvailableTokenService

