import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceProductManager/loadMemberServiceProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceProductManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberServiceProductManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addMemberServiceBundleSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addMemberServiceBundleSku/memberProductId/memberServiceName/description/listPrice/salePrice/servicePeriodMonths/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberServiceBundleSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateMemberServiceBundleSkuProperties/memberServiceProductId/id/memberServiceName/description/listPrice/salePrice/servicePeriodMonths/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMemberServiceBundleSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeMemberServiceBundleSkuList/memberServiceProductId/memberServiceBundleSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addStoreSlide/memberServiceProductId/tips/bannerImage/wxaLinkUrl/antdLinkUrl/slideTypeId/bookId/campaignId/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateStoreSlideProperties/memberServiceProductId/id/tips/bannerImage/wxaLinkUrl/antdLinkUrl/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreSlideList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeStoreSlideList/memberServiceProductId/storeSlideIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addCustomer/memberServiceId/nickName/logoImage/mobileNumber/realName/sexuality/memberServiceStartDate/memberServiceExpireDate/accountBalance/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/birthday/identityCardNumber/familyAddress/memberServiceDailyPay/favouriteStoreId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateCustomerProperties/memberServiceProductId/id/nickName/logoImage/mobileNumber/realName/sexuality/memberServiceStartDate/memberServiceExpireDate/accountBalance/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/birthday/identityCardNumber/familyAddress/memberServiceDailyPay/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeCustomerList/memberServiceProductId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const MemberServiceProductService = { view,
  load,
  addMemberServiceBundleSku,
  addStoreSlide,
  addCustomer,
  updateMemberServiceBundleSku,
  updateStoreSlide,
  updateCustomer,
  removeMemberServiceBundleSkuList,
  removeStoreSlideList,
  removeCustomerList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default MemberServiceProductService

