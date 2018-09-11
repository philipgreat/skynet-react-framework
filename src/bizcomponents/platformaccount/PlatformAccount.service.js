import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}platformAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountManager/loadPlatformAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}platformAccountManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAccountData = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountManager/requestCandidateAccountData/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccountData = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}platformAccountManager/transferToAnotherAccountData/id/anotherAccountDataId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addPlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}platformAccountManager/addPlatformAccountDetails/platformAccountId/summary/amount/transactionTypeId/relatedMainOrderId/tokensExpr/`
  const platformAccountId = targetObjectId
  const requestParameters = { ...parameters, platformAccountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}platformAccountManager/updatePlatformAccountDetailsProperties/platformAccountId/id/summary/amount/tokensExpr/`
  const platformAccountId = targetObjectId
  const requestParameters = { ...parameters, platformAccountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}platformAccountManager/removePlatformAccountDetailsList/platformAccountId/platformAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, platformAccountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const PlatformAccountService = { view,
  load,
  addPlatformAccountDetails,
  updatePlatformAccountDetails,
  removePlatformAccountDetailsList,
  requestCandidatePlatform,
  requestCandidateAccountData,
  transferToAnotherPlatform,
  transferToAnotherAccountData }
export default PlatformAccountService

