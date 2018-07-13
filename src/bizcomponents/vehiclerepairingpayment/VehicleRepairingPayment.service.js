import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleRepairingPaymentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingPaymentManager/loadVehicleRepairingPayment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateServiceVehicleRepairing = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingPaymentManager/requestCandidateServiceVehicleRepairing/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceVehicleRepairing = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleRepairingPaymentManager/transferToAnotherServiceVehicleRepairing/id/anotherServiceVehicleRepairingId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const VehicleRepairingPaymentService = { view,
  load,
  requestCandidateServiceVehicleRepairing,
  transferToAnotherServiceVehicleRepairing }
export default VehicleRepairingPaymentService

