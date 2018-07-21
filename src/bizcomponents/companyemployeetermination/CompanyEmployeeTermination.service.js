import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeTerminationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeTerminationManager/loadCompanyEmployeeTermination/${targetObjectId}/${parametersExpr}/`,
  })
}






const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeTerminationManager/addVehicleServiceCompanyEmployee/terminationId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/inspectionStationId/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeTerminationManager/updateVehicleServiceCompanyEmployeeProperties/companyEmployeeTerminationId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const companyEmployeeTerminationId = targetObjectId
  const requestParameters = { ...parameters, companyEmployeeTerminationId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeTerminationManager/removeVehicleServiceCompanyEmployeeList/companyEmployeeTerminationId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, companyEmployeeTerminationId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CompanyEmployeeTerminationService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  updateVehicleServiceCompanyEmployee,
  removeVehicleServiceCompanyEmployeeList }
export default CompanyEmployeeTerminationService

