import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}accountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountManager/loadAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}accountManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addServiceCompanyAccount/accountId/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/merchantId/responsibleWorkerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateServiceCompanyAccountProperties/accountId/id/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServiceCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeServiceCompanyAccountList/accountId/serviceCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addRepairingCompanyAccount/accountId/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/merchantId/responsibleWorkerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateRepairingCompanyAccountProperties/accountId/id/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeRepairingCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeRepairingCompanyAccountList/accountId/repairingCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addInsuranceServiceAccount/accountId/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/merchantId/responsibleWorkerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateInsuranceServiceAccountProperties/accountId/id/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInsuranceServiceAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeInsuranceServiceAccountList/accountId/insuranceServiceAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addMainOrderAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addMainOrderAccount/accountId/vehicleLicensePlateNumber/productName/inspectionPrice/agentServicePrice/city/vehicleType/orderTotalAmount/orderPromotionDiscount/orderCouponDiscount/orderInsuranceAmount/orderMerchantDiscount/orderCustomerPaymentAmount/orderServiceAmount/orderPlatformBalance/orderPlacedDatetime/orderPaymentDatetime/orderFinishedDatetime/mainOrderId/wechatOrderId/wechatPrepayId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMainOrderAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateMainOrderAccountProperties/accountId/id/vehicleLicensePlateNumber/productName/inspectionPrice/agentServicePrice/city/vehicleType/orderTotalAmount/orderPromotionDiscount/orderCouponDiscount/orderInsuranceAmount/orderMerchantDiscount/orderCustomerPaymentAmount/orderServiceAmount/orderPlatformBalance/orderPlacedDatetime/orderPaymentDatetime/orderFinishedDatetime/mainOrderId/wechatOrderId/wechatPrepayId/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMainOrderAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeMainOrderAccountList/accountId/mainOrderAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addInspectionStationAccount/accountId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/merchantId/responsibleWorkerId/inspectionStationId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateInspectionStationAccountProperties/accountId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeInspectionStationAccountList/accountId/inspectionStationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const AccountService = { view,
  load,
  addServiceCompanyAccount,
  addRepairingCompanyAccount,
  addInsuranceServiceAccount,
  addMainOrderAccount,
  addInspectionStationAccount,
  updateServiceCompanyAccount,
  updateRepairingCompanyAccount,
  updateInsuranceServiceAccount,
  updateMainOrderAccount,
  updateInspectionStationAccount,
  removeServiceCompanyAccountList,
  removeRepairingCompanyAccountList,
  removeInsuranceServiceAccountList,
  removeMainOrderAccountList,
  removeInspectionStationAccountList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default AccountService

