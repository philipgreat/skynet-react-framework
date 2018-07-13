import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeQualificationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeQualificationManager/loadCompanyEmployeeQualification/${targetObjectId}/${parametersExpr}/`,
  })
}






const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeQualificationManager/addVehicleServiceCompanyEmployee/qualificationId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/inspectionStationId/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeQualificationManager/updateVehicleServiceCompanyEmployeeProperties/companyEmployeeQualificationId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const companyEmployeeQualificationId = targetObjectId
  const requestParameters = { ...parameters, companyEmployeeQualificationId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeQualificationManager/removeVehicleServiceCompanyEmployeeList/companyEmployeeQualificationId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, companyEmployeeQualificationId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CompanyEmployeeQualificationService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  updateVehicleServiceCompanyEmployee,
  removeVehicleServiceCompanyEmployeeList }
export default CompanyEmployeeQualificationService

