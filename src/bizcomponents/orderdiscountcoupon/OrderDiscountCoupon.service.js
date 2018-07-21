import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}orderDiscountCouponManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderDiscountCouponManager/loadOrderDiscountCoupon/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderDiscountCouponManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}orderDiscountCouponManager/transferToAnotherCustomer/id/anotherCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderDiscountCouponManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}orderDiscountCouponManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderDiscountCouponManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}orderDiscountCouponManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const OrderDiscountCouponService = { view,
  load,
  requestCandidateCustomer,
  requestCandidateMainOrder,
  requestCandidatePlatform,
  transferToAnotherCustomer,
  transferToAnotherMainOrder,
  transferToAnotherPlatform }
export default OrderDiscountCouponService

