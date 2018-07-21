import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/loadVehicleInspectionInsuranceOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateInsurance = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/requestCandidateInsurance/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherInsurance = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionInsuranceOrderManager/transferToAnotherInsurance/id/anotherInsuranceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionInsuranceOrderManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const VehicleInspectionInsuranceOrderService = { view,
  load,
  requestCandidateInsurance,
  requestCandidateMainOrder,
  transferToAnotherInsurance,
  transferToAnotherMainOrder }
export default VehicleInspectionInsuranceOrderService

