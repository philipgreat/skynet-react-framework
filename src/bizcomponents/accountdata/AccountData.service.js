import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}accountDataManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountDataManager/loadAccountData/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountDataManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}accountDataManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addPlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/addPlatformAccount /accountDataId/name/amount/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/updatePlatformAccountProperties/accountDataId/id/name/amount/tokensExpr/`
  const accountDataId = targetObjectId
  const requestParameters = { ...parameters, accountDataId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/removePlatformAccountList/accountDataId/platformAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountDataId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/addFundationAccount /accountDataId/name/amount/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/updateFundationAccountProperties/accountDataId/id/name/amount/tokensExpr/`
  const accountDataId = targetObjectId
  const requestParameters = { ...parameters, accountDataId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeFundationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/removeFundationAccountList/accountDataId/fundationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountDataId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/addStoreAccount /accountDataId/name/amount/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/updateStoreAccountProperties/accountDataId/id/name/amount/tokensExpr/`
  const accountDataId = targetObjectId
  const requestParameters = { ...parameters, accountDataId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/removeStoreAccountList/accountDataId/storeAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountDataId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addTransactionType = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/addTransactionType /accountDataId/name/code/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateTransactionType = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/updateTransactionTypeProperties/accountDataId/id/name/code/tokensExpr/`
  const accountDataId = targetObjectId
  const requestParameters = { ...parameters, accountDataId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeTransactionTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountDataManager/removeTransactionTypeList/accountDataId/transactionTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, accountDataId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const AccountDataService = { view,
  load,
  addPlatformAccount,
  addFundationAccount,
  addStoreAccount,
  addTransactionType,
  updatePlatformAccount,
  updateFundationAccount,
  updateStoreAccount,
  updateTransactionType,
  removePlatformAccountList,
  removeFundationAccountList,
  removeStoreAccountList,
  removeTransactionTypeList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default AccountDataService

