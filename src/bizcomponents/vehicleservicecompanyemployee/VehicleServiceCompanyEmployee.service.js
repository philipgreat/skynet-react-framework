import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyEmployeeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyEmployeeManager/loadVehicleServiceCompanyEmployee/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyEmployeeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/transferToAnotherCompany/id/anotherCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateInspectionStation = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyEmployeeManager/requestCandidateInspectionStation/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherInspectionStation = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/transferToAnotherInspectionStation/id/anotherInspectionStationId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addServiceOrderFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceOrderFilter/employeeId/filterName/orderCount/selected/linkUrl/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceOrderFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceOrderFilterProperties/vehicleServiceCompanyEmployeeId/id/filterName/orderCount/selected/linkUrl/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceOrderFilterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceOrderFilterList/vehicleServiceCompanyEmployeeId/serviceOrderFilterIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addEmployeeDrivingLicense = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addEmployeeDrivingLicense/employeeId/holderName/licenseType/licenseNumber/expirationDate/image1/image2/image3/image4/image5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateEmployeeDrivingLicense = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateEmployeeDrivingLicenseProperties/vehicleServiceCompanyEmployeeId/id/holderName/licenseType/licenseNumber/expirationDate/image1/image2/image3/image4/image5/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeEmployeeDrivingLicenseList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeEmployeeDrivingLicenseList/vehicleServiceCompanyEmployeeId/employeeDrivingLicenseIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addVehicleInspectionOrderServiceLog/responsibleWorkerId/summary/longitude/latitude/serviceType/serviceTicket/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateVehicleInspectionOrderServiceLogProperties/vehicleServiceCompanyEmployeeId/id/summary/longitude/latitude/serviceType/serviceTicket/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderServiceLogList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeVehicleInspectionOrderServiceLogList/vehicleServiceCompanyEmployeeId/vehicleInspectionOrderServiceLogIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleMovementC2m/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleMovementC2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleMovementC2mList/vehicleServiceCompanyEmployeeId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleMovementM2m/receiverId/driverId/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleMovementM2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleMovementM2mList/vehicleServiceCompanyEmployeeId/serviceVehicleMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleMovementM2c/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleMovementM2cProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleMovementM2cList/vehicleServiceCompanyEmployeeId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileMovementC2m/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileMovementC2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileMovementC2mList/vehicleServiceCompanyEmployeeId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileMovementM2m/receiverId/senderId/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileMovementM2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileMovementM2mList/vehicleServiceCompanyEmployeeId/serviceFileMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileMovementM2c/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileMovementM2cProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileMovementM2cList/vehicleServiceCompanyEmployeeId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceInsuranceForInspection/responsibleWorkerId/serviceStatus/orderedInsuranceId/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceInsuranceForInspectionProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceInsuranceForInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceInsuranceForInspectionList/vehicleServiceCompanyEmployeeId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleInspection/responsibleWorkerId/serviceStatus/serviceSummary/inspectionStationId/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleInspectionProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleInspectionList/vehicleServiceCompanyEmployeeId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileInspection/responsibleWorkerId/serviceStatus/serviceSummary/inspectionStationId/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileInspectionProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileInspectionList/vehicleServiceCompanyEmployeeId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleRepairing/responsibleWorkerId/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/serviceVehicleInspectionId/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleRepairingProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleRepairingList/vehicleServiceCompanyEmployeeId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceCompanyAccount/responsibleWorkerId/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/merchantId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceCompanyAccountProperties/vehicleServiceCompanyEmployeeId/id/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceCompanyAccountList/vehicleServiceCompanyEmployeeId/serviceCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addRepairingCompanyAccount/responsibleWorkerId/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/merchantId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateRepairingCompanyAccountProperties/vehicleServiceCompanyEmployeeId/id/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeRepairingCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeRepairingCompanyAccountList/vehicleServiceCompanyEmployeeId/repairingCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addInsuranceServiceAccount/responsibleWorkerId/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/merchantId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateInsuranceServiceAccountProperties/vehicleServiceCompanyEmployeeId/id/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInsuranceServiceAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeInsuranceServiceAccountList/vehicleServiceCompanyEmployeeId/insuranceServiceAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addInspectionStationAccount/responsibleWorkerId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/merchantId/inspectionStationId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateInspectionStationAccountProperties/vehicleServiceCompanyEmployeeId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeInspectionStationAccountList/vehicleServiceCompanyEmployeeId/inspectionStationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const VehicleServiceCompanyEmployeeService = { view,
  load,
  addServiceOrderFilter,
  addEmployeeDrivingLicense,
  addVehicleInspectionOrderServiceLog,
  addServiceVehicleMovementC2m,
  addServiceVehicleMovementM2m,
  addServiceVehicleMovementM2c,
  addServiceFileMovementC2m,
  addServiceFileMovementM2m,
  addServiceFileMovementM2c,
  addServiceInsuranceForInspection,
  addServiceVehicleInspection,
  addServiceFileInspection,
  addServiceVehicleRepairing,
  addServiceCompanyAccount,
  addRepairingCompanyAccount,
  addInsuranceServiceAccount,
  addInspectionStationAccount,
  updateServiceOrderFilter,
  updateEmployeeDrivingLicense,
  updateVehicleInspectionOrderServiceLog,
  updateServiceVehicleMovementC2m,
  updateServiceVehicleMovementM2m,
  updateServiceVehicleMovementM2c,
  updateServiceFileMovementC2m,
  updateServiceFileMovementM2m,
  updateServiceFileMovementM2c,
  updateServiceInsuranceForInspection,
  updateServiceVehicleInspection,
  updateServiceFileInspection,
  updateServiceVehicleRepairing,
  updateServiceCompanyAccount,
  updateRepairingCompanyAccount,
  updateInsuranceServiceAccount,
  updateInspectionStationAccount,
  removeServiceOrderFilterList,
  removeEmployeeDrivingLicenseList,
  removeVehicleInspectionOrderServiceLogList,
  removeServiceVehicleMovementC2mList,
  removeServiceVehicleMovementM2mList,
  removeServiceVehicleMovementM2cList,
  removeServiceFileMovementC2mList,
  removeServiceFileMovementM2mList,
  removeServiceFileMovementM2cList,
  removeServiceInsuranceForInspectionList,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList,
  removeServiceVehicleRepairingList,
  removeServiceCompanyAccountList,
  removeRepairingCompanyAccountList,
  removeInsuranceServiceAccountList,
  removeInspectionStationAccountList,
  requestCandidateCompany,
  requestCandidateInspectionStation,
  transferToAnotherCompany,
  transferToAnotherInspectionStation }
export default VehicleServiceCompanyEmployeeService

