import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}provinceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}provinceManager/loadProvince/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}provinceManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}provinceManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}provinceManager/addCity/provinceId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}provinceManager/updateCityProperties/provinceId/id/name/tokensExpr/`
  const provinceId = targetObjectId
  const requestParameters = { ...parameters, provinceId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCityList = (targetObjectId, parameters) => {
  const url = `${PREFIX}provinceManager/removeCityList/provinceId/cityIds/tokensExpr/`
  const requestParameters = { ...parameters, provinceId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ProvinceService = { view,
  load,
  addCity,
  updateCity,
  removeCityList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default ProvinceService

