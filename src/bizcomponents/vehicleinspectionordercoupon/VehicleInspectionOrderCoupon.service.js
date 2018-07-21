import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderCouponManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderCouponManager/loadVehicleInspectionOrderCoupon/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderCouponManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionOrderCouponManager/transferToAnotherCustomer/id/anotherCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderCouponManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionOrderCouponManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const VehicleInspectionOrderCouponService = { view,
  load,
  requestCandidateCustomer,
  requestCandidateMainOrder,
  transferToAnotherCustomer,
  transferToAnotherMainOrder }
export default VehicleInspectionOrderCouponService

