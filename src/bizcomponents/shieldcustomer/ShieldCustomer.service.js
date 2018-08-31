import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}shieldCustomerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}shieldCustomerManager/loadShieldCustomer/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}shieldCustomerManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}shieldCustomerManager/transferToAnotherCustomer/id/anotherCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateShield = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}shieldCustomerManager/requestCandidateShield/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherShield = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}shieldCustomerManager/transferToAnotherShield/id/anotherShieldId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ShieldCustomerService = { view,
  load,
  requestCandidateCustomer,
  requestCandidateShield,
  transferToAnotherCustomer,
  transferToAnotherShield }
export default ShieldCustomerService

