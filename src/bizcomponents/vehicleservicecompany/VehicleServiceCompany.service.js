import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/loadVehicleServiceCompany/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAddressCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/requestCandidateAddressCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAddressCity = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyManager/transferToAnotherAddressCity/id/anotherAddressCityId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleServiceCompanyManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addContract/companyId/platformId/startDate/endDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateContractProperties/vehicleServiceCompanyId/id/startDate/endDate/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeContractList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeContractList/vehicleServiceCompanyId/contractIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceCompanyAuthenticationInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceCompanyAuthenticationInfo/serviceCompanyId/businessLicenseImg/businessLicenseCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceCompanyAuthenticationInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceCompanyAuthenticationInfoProperties/vehicleServiceCompanyId/id/businessLicenseImg/businessLicenseCode/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceCompanyAuthenticationInfoList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceCompanyAuthenticationInfoList/vehicleServiceCompanyId/serviceCompanyAuthenticationInfoIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleInspectionPlateNumberPattern/companyId/plateNumberPattern/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleInspectionPlateNumberPatternProperties/vehicleServiceCompanyId/id/plateNumberPattern/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionPlateNumberPatternList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleInspectionPlateNumberPatternList/vehicleServiceCompanyId/vehicleInspectionPlateNumberPatternIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addFileInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addFileInspectionPlateNumberPattern/companyId/plateNumberPattern/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateFileInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateFileInspectionPlateNumberPatternProperties/vehicleServiceCompanyId/id/plateNumberPattern/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeFileInspectionPlateNumberPatternList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeFileInspectionPlateNumberPatternList/vehicleServiceCompanyId/fileInspectionPlateNumberPatternIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyBusinessScope/companyId/availableServiceId/serviceAvailability/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyBusinessScopeProperties/vehicleServiceCompanyId/id/serviceAvailability/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyBusinessScopeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyBusinessScopeList/vehicleServiceCompanyId/vehicleServiceCompanyBusinessScopeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCompanyQrcodePromotionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addCompanyQrcodePromotionRecord/companyId/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCompanyQrcodePromotionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateCompanyQrcodePromotionRecordProperties/vehicleServiceCompanyId/id/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCompanyQrcodePromotionRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeCompanyQrcodePromotionRecordList/vehicleServiceCompanyId/companyQrcodePromotionRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleServiceCompanyDispatcher = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyDispatcher/companyId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyDispatcher = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyDispatcherProperties/vehicleServiceCompanyId/id/description/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyDispatcherList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyDispatcherList/vehicleServiceCompanyId/vehicleServiceCompanyDispatcherIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCompanyDiscount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addCompanyDiscount/companyId/allFreeDiscount/directDiscountValue/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCompanyDiscount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateCompanyDiscountProperties/vehicleServiceCompanyId/id/allFreeDiscount/directDiscountValue/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCompanyDiscountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeCompanyDiscountList/vehicleServiceCompanyId/companyDiscountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyEmployee/companyId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/inspectionStationId/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyEmployeeProperties/vehicleServiceCompanyId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/orderDispatcher/storeReceiver/movementAgent/inspectionAgent/repairman/printer/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyEmployeeList/vehicleServiceCompanyId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleInspectionOrder/serviceCompanyId/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyInfo/contactAddressDetail/contactAddressCityId/customerId/agreed/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/longitude/latitude/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleInspectionOrderProperties/vehicleServiceCompanyId/id/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyInfo/contactAddressDetail/agreed/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/longitude/latitude/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleInspectionOrderList/vehicleServiceCompanyId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementC2m/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementC2mList/vehicleServiceCompanyId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementM2m/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/driverId/receiverId/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementM2mProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementM2mList/vehicleServiceCompanyId/serviceVehicleMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementM2c/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementM2cList/vehicleServiceCompanyId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementC2m/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementC2mList/vehicleServiceCompanyId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementM2m/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/senderId/receiverId/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementM2mProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementM2mList/vehicleServiceCompanyId/serviceFileMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementM2c/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementM2cList/vehicleServiceCompanyId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceInsuranceForInspection/merchantId/serviceStatus/orderedInsuranceId/responsibleWorkerId/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceInsuranceForInspectionProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceInsuranceForInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceInsuranceForInspectionList/vehicleServiceCompanyId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleInspection/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/inspectionStationId/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleInspectionProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleInspectionList/vehicleServiceCompanyId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileInspection/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/inspectionStationId/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileInspectionProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileInspectionList/vehicleServiceCompanyId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleRepairing/merchantId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/serviceVehicleInspectionId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleRepairingProperties/vehicleServiceCompanyId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleRepairingList/vehicleServiceCompanyId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceCompanyAccount/merchantId/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceCompanyAccountProperties/vehicleServiceCompanyId/id/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceCompanyAccountList/vehicleServiceCompanyId/serviceCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addRepairingCompanyAccount/merchantId/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateRepairingCompanyAccountProperties/vehicleServiceCompanyId/id/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeRepairingCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeRepairingCompanyAccountList/vehicleServiceCompanyId/repairingCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addInsuranceServiceAccount/merchantId/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateInsuranceServiceAccountProperties/vehicleServiceCompanyId/id/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInsuranceServiceAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeInsuranceServiceAccountList/vehicleServiceCompanyId/insuranceServiceAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addInspectionStationAccount/merchantId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/responsibleWorkerId/inspectionStationId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateInspectionStationAccountProperties/vehicleServiceCompanyId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeInspectionStationAccountList/vehicleServiceCompanyId/inspectionStationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const VehicleServiceCompanyService = { view,
  load,
  addContract,
  addServiceCompanyAuthenticationInfo,
  addVehicleInspectionPlateNumberPattern,
  addFileInspectionPlateNumberPattern,
  addVehicleServiceCompanyBusinessScope,
  addCompanyQrcodePromotionRecord,
  addVehicleServiceCompanyDispatcher,
  addCompanyDiscount,
  addVehicleServiceCompanyEmployee,
  addVehicleInspectionOrder,
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
  updateContract,
  updateServiceCompanyAuthenticationInfo,
  updateVehicleInspectionPlateNumberPattern,
  updateFileInspectionPlateNumberPattern,
  updateVehicleServiceCompanyBusinessScope,
  updateCompanyQrcodePromotionRecord,
  updateVehicleServiceCompanyDispatcher,
  updateCompanyDiscount,
  updateVehicleServiceCompanyEmployee,
  updateVehicleInspectionOrder,
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
  removeContractList,
  removeServiceCompanyAuthenticationInfoList,
  removeVehicleInspectionPlateNumberPatternList,
  removeFileInspectionPlateNumberPatternList,
  removeVehicleServiceCompanyBusinessScopeList,
  removeCompanyQrcodePromotionRecordList,
  removeVehicleServiceCompanyDispatcherList,
  removeCompanyDiscountList,
  removeVehicleServiceCompanyEmployeeList,
  removeVehicleInspectionOrderList,
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
  requestCandidateAddressCity,
  requestCandidatePlatform,
  transferToAnotherAddressCity,
  transferToAnotherPlatform }
export default VehicleServiceCompanyService

