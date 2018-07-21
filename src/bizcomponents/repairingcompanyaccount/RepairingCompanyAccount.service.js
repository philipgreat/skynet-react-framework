import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/loadRepairingCompanyAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}repairingCompanyAccountManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}repairingCompanyAccountManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/requestCandidateAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccount = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}repairingCompanyAccountManager/transferToAnotherAccount/id/anotherAccountId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const RepairingCompanyAccountService = { view,
  load,
  requestCandidateMerchant,
  requestCandidateResponsibleWorker,
  requestCandidateAccount,
  transferToAnotherMerchant,
  transferToAnotherResponsibleWorker,
  transferToAnotherAccount }
export default RepairingCompanyAccountService

