import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceBundleSkuManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceBundleSkuManager/loadMemberServiceBundleSku/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceBundleSkuManager/requestCandidateMemberProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMemberProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberServiceBundleSkuManager/transferToAnotherMemberProduct/id/anotherMemberProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const MemberServiceBundleSkuService = { view,
  load,
  requestCandidateMemberProduct,
  transferToAnotherMemberProduct }
export default MemberServiceBundleSkuService

