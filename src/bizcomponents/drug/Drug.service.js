import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}drugManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}drugManager/loadDrug/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}drugManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}drugManager/addDrugApplication/drugId/applicationNumber/companyId/applicationTypeId/drugTypeId/applicationDate/platformId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}drugManager/updateDrugApplicationProperties/drugId/id/applicationNumber/applicationDate/description/tokensExpr/`
  const drugId = targetObjectId
  const requestParameters = { ...parameters, drugId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}drugManager/removeDrugApplicationList/drugId/drugApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, drugId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const DrugService = { view,
  load,
  addDrugApplication,
  updateDrugApplication,
  removeDrugApplicationList,
  requestCandidatePlatform }
export default DrugService

