import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}transactionTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}transactionTypeManager/loadTransactionType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAccountData = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}transactionTypeManager/requestCandidateAccountData/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccountData = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}transactionTypeManager/transferToAnotherAccountData/id/anotherAccountDataId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addPlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/addPlatformAccountDetails /transactionTypeId/summary/amount/platformAccountId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/updatePlatformAccountDetailsProperties/transactionTypeId/id/summary/amount/tokensExpr/`
  const transactionTypeId = targetObjectId
  const requestParameters = { ...parameters, transactionTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/removePlatformAccountDetailsList/transactionTypeId/platformAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, transactionTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/addFundationAccountDetails /transactionTypeId/summary/amount/fundationAccountId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/updateFundationAccountDetailsProperties/transactionTypeId/id/summary/amount/tokensExpr/`
  const transactionTypeId = targetObjectId
  const requestParameters = { ...parameters, transactionTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeFundationAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/removeFundationAccountDetailsList/transactionTypeId/fundationAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, transactionTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/addStoreAccountDetails /transactionTypeId/summary/amount/storeAccountId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/updateStoreAccountDetailsProperties/transactionTypeId/id/summary/amount/tokensExpr/`
  const transactionTypeId = targetObjectId
  const requestParameters = { ...parameters, transactionTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/removeStoreAccountDetailsList/transactionTypeId/storeAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, transactionTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addCustomerAccountTransaction = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/addCustomerAccountTransaction /transactionTypeId/summary/amount/balance/customerId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomerAccountTransaction = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/updateCustomerAccountTransactionProperties/transactionTypeId/id/summary/amount/balance/tokensExpr/`
  const transactionTypeId = targetObjectId
  const requestParameters = { ...parameters, transactionTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerAccountTransactionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}transactionTypeManager/removeCustomerAccountTransactionList/transactionTypeId/customerAccountTransactionIds/tokensExpr/`
  const requestParameters = { ...parameters, transactionTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const TransactionTypeService = { view,
  load,
  addPlatformAccountDetails,
  addFundationAccountDetails,
  addStoreAccountDetails,
  addCustomerAccountTransaction,
  updatePlatformAccountDetails,
  updateFundationAccountDetails,
  updateStoreAccountDetails,
  updateCustomerAccountTransaction,
  removePlatformAccountDetailsList,
  removeFundationAccountDetailsList,
  removeStoreAccountDetailsList,
  removeCustomerAccountTransactionList,
  requestCandidateAccountData,
  transferToAnotherAccountData }
export default TransactionTypeService

