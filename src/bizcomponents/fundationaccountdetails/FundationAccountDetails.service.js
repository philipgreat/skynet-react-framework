import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/loadFundationAccountDetails/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateTransactionType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/requestCandidateTransactionType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherTransactionType = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}fundationAccountDetailsManager/transferToAnotherTransactionType/id/anotherTransactionTypeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateFundationAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/requestCandidateFundationAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherFundationAccount = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}fundationAccountDetailsManager/transferToAnotherFundationAccount/id/anotherFundationAccountId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateRelatedMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/requestCandidateRelatedMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRelatedMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}fundationAccountDetailsManager/transferToAnotherRelatedMainOrder/id/anotherRelatedMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const FundationAccountDetailsService = { view,
  load,
  requestCandidateTransactionType,
  requestCandidateFundationAccount,
  requestCandidateRelatedMainOrder,
  transferToAnotherTransactionType,
  transferToAnotherFundationAccount,
  transferToAnotherRelatedMainOrder }
export default FundationAccountDetailsService

