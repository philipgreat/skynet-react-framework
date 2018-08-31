import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}slideTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}slideTypeManager/loadSlideType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}slideTypeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}slideTypeManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}slideTypeManager/addStoreSlide/slideTypeId/tips/bannerImage/wxaLinkUrl/antdLinkUrl/bookId/campaignId/memberServiceProductId/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}slideTypeManager/updateStoreSlideProperties/slideTypeId/id/tips/bannerImage/wxaLinkUrl/antdLinkUrl/tokensExpr/`
  const slideTypeId = targetObjectId
  const requestParameters = { ...parameters, slideTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreSlideList = (targetObjectId, parameters) => {
  const url = `${PREFIX}slideTypeManager/removeStoreSlideList/slideTypeId/storeSlideIds/tokensExpr/`
  const requestParameters = { ...parameters, slideTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const SlideTypeService = { view,
  load,
  addStoreSlide,
  updateStoreSlide,
  removeStoreSlideList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default SlideTypeService

