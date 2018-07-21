import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}preorderPromotionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}preorderPromotionManager/loadPreorderPromotion/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}preorderPromotionManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}preorderPromotionManager/transferToAnotherProduct/id/anotherProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}preorderPromotionManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}preorderPromotionManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const PreorderPromotionService = { view,
  load,
  requestCandidateProduct,
  requestCandidatePlatform,
  transferToAnotherProduct,
  transferToAnotherPlatform }
export default PreorderPromotionService

