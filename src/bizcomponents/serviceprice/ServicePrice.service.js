import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}servicePriceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/loadServicePrice/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateContract = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/requestCandidateContract/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherContract = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}servicePriceManager/transferToAnotherContract/id/anotherContractId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateAvailableService = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/requestCandidateAvailableService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAvailableService = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}servicePriceManager/transferToAnotherAvailableService/id/anotherAvailableServiceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}servicePriceManager/transferToAnotherProduct/id/anotherProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ServicePriceService = { view,
  load,
  requestCandidateContract,
  requestCandidateAvailableService,
  requestCandidateProduct,
  transferToAnotherContract,
  transferToAnotherAvailableService,
  transferToAnotherProduct }
export default ServicePriceService

