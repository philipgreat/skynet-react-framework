import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/loadVehicleServiceCompanyBusinessScope/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyBusinessScopeManager/transferToAnotherCompany/id/anotherCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAvailableService = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/requestCandidateAvailableService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAvailableService = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyBusinessScopeManager/transferToAnotherAvailableService/id/anotherAvailableServiceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const VehicleServiceCompanyBusinessScopeService = { view,
  load,
  requestCandidateCompany,
  requestCandidateAvailableService,
  transferToAnotherCompany,
  transferToAnotherAvailableService }
export default VehicleServiceCompanyBusinessScopeService

