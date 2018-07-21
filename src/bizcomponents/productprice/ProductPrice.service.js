import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}productPriceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPriceManager/loadProductPrice/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPriceManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}productPriceManager/transferToAnotherProduct/id/anotherProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPriceManager/requestCandidateCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCity = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}productPriceManager/transferToAnotherCity/id/anotherCityId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ProductPriceService = { view,
  load,
  requestCandidateProduct,
  requestCandidateCity,
  transferToAnotherProduct,
  transferToAnotherCity }
export default ProductPriceService

