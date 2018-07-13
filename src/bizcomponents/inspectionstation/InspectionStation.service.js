import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}inspectionStationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}inspectionStationManager/loadInspectionStation/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAddressCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}inspectionStationManager/requestCandidateAddressCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAddressCity = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}inspectionStationManager/transferToAnotherAddressCity/id/anotherAddressCityId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addVehicleServiceCompanyEmployee/inspectionStationId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateVehicleServiceCompanyEmployeeProperties/inspectionStationId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeVehicleServiceCompanyEmployeeList/inspectionStationId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceVehicleInspection/inspectionStationId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceVehicleInspectionProperties/inspectionStationId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeServiceVehicleInspectionList/inspectionStationId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceFileInspection/inspectionStationId/serviceStatus/responsibleWorkerId/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceFileInspectionProperties/inspectionStationId/id/serviceStatus/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeServiceFileInspectionList/inspectionStationId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addInspectionStationAccount/inspectionStationId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/merchantId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateInspectionStationAccountProperties/inspectionStationId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeInspectionStationAccountList/inspectionStationId/inspectionStationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const InspectionStationService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  addServiceVehicleInspection,
  addServiceFileInspection,
  addInspectionStationAccount,
  updateVehicleServiceCompanyEmployee,
  updateServiceVehicleInspection,
  updateServiceFileInspection,
  updateInspectionStationAccount,
  removeVehicleServiceCompanyEmployeeList,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList,
  removeInspectionStationAccountList,
  requestCandidateAddressCity,
  transferToAnotherAddressCity }
export default InspectionStationService

