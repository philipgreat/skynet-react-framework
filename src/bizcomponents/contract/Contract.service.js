import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}contractManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}contractManager/loadContract/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}contractManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}contractManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}contractManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}contractManager/transferToAnotherCompany/id/anotherCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}contractManager/addServicePrice/contractId/availableServiceId/productId/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}contractManager/updateServicePriceProperties/contractId/id/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const contractId = targetObjectId
  const requestParameters = { ...parameters, contractId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeServicePriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}contractManager/removeServicePriceList/contractId/servicePriceIds/tokensExpr/`
  const requestParameters = { ...parameters, contractId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ContractService = { view,
  load,
  addServicePrice,
  updateServicePrice,
  removeServicePriceList,
  requestCandidatePlatform,
  requestCandidateCompany,
  transferToAnotherPlatform,
  transferToAnotherCompany }
export default ContractService

