import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/loadServiceCompanyAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceCompanyAccountManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceCompanyAccountManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/requestCandidateAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAccount = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceCompanyAccountManager/transferToAnotherAccount/id/anotherAccountId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ServiceCompanyAccountService = { view,
  load,
  requestCandidateMerchant,
  requestCandidateResponsibleWorker,
  requestCandidateAccount,
  transferToAnotherMerchant,
  transferToAnotherResponsibleWorker,
  transferToAnotherAccount }
export default ServiceCompanyAccountService

