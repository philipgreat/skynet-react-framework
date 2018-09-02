import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}fundationAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountManager/loadFundationAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}fundationAccountManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAccountData = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountManager/requestCandidateAccountData/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccountData = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}fundationAccountManager/transferToAnotherAccountData/id/anotherAccountDataId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}fundationAccountManager/addFundationAccountDetails /fundationAccountId/summary/amount/transactionTypeId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}fundationAccountManager/updateFundationAccountDetailsProperties/fundationAccountId/id/summary/amount/tokensExpr/`
  const fundationAccountId = targetObjectId
  const requestParameters = { ...parameters, fundationAccountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeFundationAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}fundationAccountManager/removeFundationAccountDetailsList/fundationAccountId/fundationAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, fundationAccountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const FundationAccountService = { view,
  load,
  addFundationAccountDetails,
  updateFundationAccountDetails,
  removeFundationAccountDetailsList,
  requestCandidatePlatform,
  requestCandidateAccountData,
  transferToAnotherPlatform,
  transferToAnotherAccountData }
export default FundationAccountService

