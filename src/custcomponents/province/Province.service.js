import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


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
 




const addCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}provinceManager/addCity/provinceId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}provinceManager/updateCityProperties/provinceId/id/name/tokensExpr/`
  const provinceId = targetObjectId
  const requestParameters = { ...parameters, provinceId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCityList = (targetObjectId, parameters) => {
  const url = `${PREFIX}provinceManager/removeCityList/provinceId/cityIds/tokensExpr/`
  const requestParameters = { ...parameters, provinceId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProvinceService = { view,
  load,
  addCity,
  updateCity,
  removeCityList,
  requestCandidatePlatform }
export default ProvinceService

