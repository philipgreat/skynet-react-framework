import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/loadVehicleInspectionOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateServiceCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/requestCandidateServiceCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionOrderManager/transferToAnotherServiceCompany/id/anotherServiceCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateContactAddressCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/requestCandidateContactAddressCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherContactAddressCity = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionOrderManager/transferToAnotherContactAddressCity/id/anotherContactAddressCityId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionOrderManager/transferToAnotherCustomer/id/anotherCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}vehicleInspectionOrderManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionInsuranceOrder/mainOrderId/insuranceId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionInsuranceOrderProperties/vehicleInspectionOrderId/id/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionInsuranceOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionInsuranceOrderList/vehicleInspectionOrderId/vehicleInspectionInsuranceOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrderCharge = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderCharge/mainOrderId/title/code/amount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrderCharge = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderChargeProperties/vehicleInspectionOrderId/id/title/code/amount/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderChargeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderChargeList/vehicleInspectionOrderId/vehicleInspectionOrderChargeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderServiceLog/mainOrderId/summary/responsibleWorkerId/longitude/latitude/serviceType/serviceTicket/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderServiceLogProperties/vehicleInspectionOrderId/id/summary/longitude/latitude/serviceType/serviceTicket/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderServiceLogList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderServiceLogList/vehicleInspectionOrderId/vehicleInspectionOrderServiceLogIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderPayment/mainOrderId/paymentMethod/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderPaymentProperties/vehicleInspectionOrderId/id/paymentMethod/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderPaymentList/vehicleInspectionOrderId/vehicleInspectionOrderPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addHandOverChecklistItem/mainOrderId/questionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateHandOverChecklistItemProperties/vehicleInspectionOrderId/id/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeHandOverChecklistItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeHandOverChecklistItemList/vehicleInspectionOrderId/handOverChecklistItemIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementC2m/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementC2mProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleMovementC2mList/vehicleInspectionOrderId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementM2m/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/driverId/receiverId/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementM2mProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleMovementM2mList/vehicleInspectionOrderId/serviceVehicleMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementM2c/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementM2cProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleMovementM2cList/vehicleInspectionOrderId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementC2m/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementC2mProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileMovementC2mList/vehicleInspectionOrderId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementM2m/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/senderId/receiverId/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementM2mProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileMovementM2mList/vehicleInspectionOrderId/serviceFileMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementM2c/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementM2cProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/notifyDatetime/notifyAddress/notifyComment/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileMovementM2cList/vehicleInspectionOrderId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceInsuranceForInspection/mainOrderId/serviceStatus/orderedInsuranceId/responsibleWorkerId/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceInsuranceForInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceInsuranceForInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceInsuranceForInspectionList/vehicleInspectionOrderId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleInspection/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/inspectionStationId/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionReportImage6/inspectionReportImage7/inspectionReportImage8/internalStatus/initialInspectionPassed/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleInspectionList/vehicleInspectionOrderId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileInspection/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/inspectionStationId/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileInspectionList/vehicleInspectionOrderId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleRepairing/mainOrderId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/serviceVehicleInspectionId/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleRepairingProperties/vehicleInspectionOrderId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleRepairingList/vehicleInspectionOrderId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addOrderReviewResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addOrderReviewResult/mainOrderId/reviewName/reviewResult/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateOrderReviewResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateOrderReviewResultProperties/vehicleInspectionOrderId/id/reviewName/reviewResult/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeOrderReviewResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeOrderReviewResultList/vehicleInspectionOrderId/orderReviewResultIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addOrderRatingResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addOrderRatingResult/mainOrderId/ratingName/ratingResult/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateOrderRatingResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateOrderRatingResultProperties/vehicleInspectionOrderId/id/ratingName/ratingResult/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeOrderRatingResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeOrderRatingResultList/vehicleInspectionOrderId/orderRatingResultIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addOrderDiscountCoupon/mainOrderId/couponTitle/discountAmount/endDate/couponStatus/shareCode/customerId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateOrderDiscountCouponProperties/vehicleInspectionOrderId/id/couponTitle/discountAmount/endDate/couponStatus/shareCode/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeOrderDiscountCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeOrderDiscountCouponList/vehicleInspectionOrderId/orderDiscountCouponIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrderCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderCoupon/mainOrderId/couponTitle/discountAmount/endDate/appliedDate/couponStatus/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrderCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderCouponProperties/vehicleInspectionOrderId/id/couponTitle/discountAmount/endDate/appliedDate/couponStatus/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderCouponList/vehicleInspectionOrderId/vehicleInspectionOrderCouponIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const VehicleInspectionOrderService = { view,
  load,
  addVehicleInspectionInsuranceOrder,
  addVehicleInspectionOrderCharge,
  addVehicleInspectionOrderServiceLog,
  addVehicleInspectionOrderPayment,
  addHandOverChecklistItem,
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
  addOrderReviewResult,
  addOrderRatingResult,
  addOrderDiscountCoupon,
  addVehicleInspectionOrderCoupon,
  updateVehicleInspectionInsuranceOrder,
  updateVehicleInspectionOrderCharge,
  updateVehicleInspectionOrderServiceLog,
  updateVehicleInspectionOrderPayment,
  updateHandOverChecklistItem,
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
  updateOrderReviewResult,
  updateOrderRatingResult,
  updateOrderDiscountCoupon,
  updateVehicleInspectionOrderCoupon,
  removeVehicleInspectionInsuranceOrderList,
  removeVehicleInspectionOrderChargeList,
  removeVehicleInspectionOrderServiceLogList,
  removeVehicleInspectionOrderPaymentList,
  removeHandOverChecklistItemList,
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
  removeOrderReviewResultList,
  removeOrderRatingResultList,
  removeOrderDiscountCouponList,
  removeVehicleInspectionOrderCouponList,
  requestCandidateServiceCompany,
  requestCandidateContactAddressCity,
  requestCandidateCustomer,
  requestCandidatePlatform,
  transferToAnotherServiceCompany,
  transferToAnotherContactAddressCity,
  transferToAnotherCustomer,
  transferToAnotherPlatform }
export default VehicleInspectionOrderService

