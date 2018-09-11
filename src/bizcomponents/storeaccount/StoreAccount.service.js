import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}storeAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountManager/loadStoreAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}storeAccountManager/transferToAnotherStore/id/anotherStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAccountData = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountManager/requestCandidateAccountData/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccountData = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}storeAccountManager/transferToAnotherAccountData/id/anotherAccountDataId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeAccountManager/addStoreAccountDetails/storeAccountId/summary/amount/transactionTypeId/relatedMainOrderId/tokensExpr/`
  const storeAccountId = targetObjectId
  const requestParameters = { ...parameters, storeAccountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeAccountManager/updateStoreAccountDetailsProperties/storeAccountId/id/summary/amount/tokensExpr/`
  const storeAccountId = targetObjectId
  const requestParameters = { ...parameters, storeAccountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeAccountManager/removeStoreAccountDetailsList/storeAccountId/storeAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, storeAccountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const StoreAccountService = { view,
  load,
  addStoreAccountDetails,
  updateStoreAccountDetails,
  removeStoreAccountDetailsList,
  requestCandidateStore,
  requestCandidateAccountData,
  transferToAnotherStore,
  transferToAnotherAccountData }
export default StoreAccountService

