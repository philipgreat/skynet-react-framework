import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeServingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeServingManager/loadCompanyEmployeeServing/${targetObjectId}/${parametersExpr}/`,
  })
}






const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeServingManager/addVehicleServiceCompanyEmployee/servingId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/inspectionStationId/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeServingManager/updateVehicleServiceCompanyEmployeeProperties/companyEmployeeServingId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const companyEmployeeServingId = targetObjectId
  const requestParameters = { ...parameters, companyEmployeeServingId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeServingManager/removeVehicleServiceCompanyEmployeeList/companyEmployeeServingId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, companyEmployeeServingId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CompanyEmployeeServingService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  updateVehicleServiceCompanyEmployee,
  removeVehicleServiceCompanyEmployeeList }
export default CompanyEmployeeServingService

