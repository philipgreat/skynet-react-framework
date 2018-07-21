import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyDispatcherManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyDispatcherManager/loadVehicleServiceCompanyDispatcher/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyDispatcherManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyDispatcherManager/transferToAnotherCompany/id/anotherCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const VehicleServiceCompanyDispatcherService = { view,
  load,
  requestCandidateCompany,
  transferToAnotherCompany }
export default VehicleServiceCompanyDispatcherService

