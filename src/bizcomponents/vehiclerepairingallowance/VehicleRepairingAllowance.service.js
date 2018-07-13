import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleRepairingAllowanceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingAllowanceManager/loadVehicleRepairingAllowance/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateService = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingAllowanceManager/requestCandidateService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherService = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleRepairingAllowanceManager/transferToAnotherService/id/anotherServiceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const VehicleRepairingAllowanceService = { view,
  load,
  requestCandidateService,
  transferToAnotherService }
export default VehicleRepairingAllowanceService

