import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}mainOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}mainOrderManager/loadMainOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}mainOrderManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}mainOrderManager/transferToAnotherCustomer/id/anotherCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}mainOrderManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}mainOrderManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addLineItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addLineItem/mainOrderId/name/summary/coverImage/skuType/skuId/skuLink/rawPrice/itemDiscount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLineItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateLineItemProperties/mainOrderId/id/name/summary/coverImage/skuType/skuId/skuLink/rawPrice/itemDiscount/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLineItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeLineItemList/mainOrderId/lineItemIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addMainOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addMainOrderPayment/mainOrderId/paymentMethod/paidAmount/paymentStatus/wechatTransactionId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMainOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateMainOrderPaymentProperties/mainOrderId/id/paymentMethod/paidAmount/paymentStatus/wechatTransactionId/wechatPrepayId/createTime/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMainOrderPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeMainOrderPaymentList/mainOrderId/mainOrderPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addOrderLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addOrderLog/mainOrderId/title/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateOrderLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateOrderLogProperties/mainOrderId/id/title/description/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeOrderLogList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeOrderLogList/mainOrderId/orderLogIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addPlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addPlatformAccountDetails/relatedMainOrderId/summary/amount/transactionTypeId/platformAccountId/memberServiceRevenueId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updatePlatformAccountDetailsProperties/mainOrderId/id/summary/amount/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removePlatformAccountDetailsList/mainOrderId/platformAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addFundationAccountDetails/relatedMainOrderId/summary/amount/transactionTypeId/fundationAccountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateFundationAccountDetailsProperties/mainOrderId/id/summary/amount/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeFundationAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeFundationAccountDetailsList/mainOrderId/fundationAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addStoreAccountDetails/relatedMainOrderId/summary/amount/transactionTypeId/storeAccountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateStoreAccountDetailsProperties/mainOrderId/id/summary/amount/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeStoreAccountDetailsList/mainOrderId/storeAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCustomerAccountTransaction = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addCustomerAccountTransaction/relatedMainOrderId/summary/amount/transactionTypeId/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomerAccountTransaction = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateCustomerAccountTransactionProperties/mainOrderId/id/summary/amount/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerAccountTransactionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeCustomerAccountTransactionList/mainOrderId/customerAccountTransactionIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const MainOrderService = { view,
  load,
  addLineItem,
  addMainOrderPayment,
  addOrderLog,
  addPlatformAccountDetails,
  addFundationAccountDetails,
  addStoreAccountDetails,
  addCustomerAccountTransaction,
  updateLineItem,
  updateMainOrderPayment,
  updateOrderLog,
  updatePlatformAccountDetails,
  updateFundationAccountDetails,
  updateStoreAccountDetails,
  updateCustomerAccountTransaction,
  removeLineItemList,
  removeMainOrderPaymentList,
  removeOrderLogList,
  removePlatformAccountDetailsList,
  removeFundationAccountDetailsList,
  removeStoreAccountDetailsList,
  removeCustomerAccountTransactionList,
  requestCandidateCustomer,
  requestCandidateBookSharingPlatform,
  transferToAnotherCustomer,
  transferToAnotherBookSharingPlatform }
export default MainOrderService

