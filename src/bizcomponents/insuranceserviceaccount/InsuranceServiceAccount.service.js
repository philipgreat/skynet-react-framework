import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/loadInsuranceServiceAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}insuranceServiceAccountManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}insuranceServiceAccountManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/requestCandidateAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccount = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}insuranceServiceAccountManager/transferToAnotherAccount/id/anotherAccountId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const InsuranceServiceAccountService = { view,
  load,
  requestCandidateMerchant,
  requestCandidateResponsibleWorker,
  requestCandidateAccount,
  transferToAnotherMerchant,
  transferToAnotherResponsibleWorker,
  transferToAnotherAccount }
export default InsuranceServiceAccountService

