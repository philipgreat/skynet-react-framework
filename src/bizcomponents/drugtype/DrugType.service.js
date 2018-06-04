import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}drugTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}drugTypeManager/loadDrugType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}drugTypeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}drugTypeManager/addDrugApplication/drugTypeId/applicationNumber/companyId/applicationTypeId/drugId/applicationDate/platformId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}drugTypeManager/updateDrugApplicationProperties/drugTypeId/id/applicationNumber/applicationDate/description/tokensExpr/`
  const drugTypeId = targetObjectId
  const requestParameters = { ...parameters, drugTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}drugTypeManager/removeDrugApplicationList/drugTypeId/drugApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, drugTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const DrugTypeService = { view,
  load,
  addDrugApplication,
  updateDrugApplication,
  removeDrugApplicationList,
  requestCandidatePlatform }
export default DrugTypeService

