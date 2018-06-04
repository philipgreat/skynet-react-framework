import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}applicationTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}applicationTypeManager/loadApplicationType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}applicationTypeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}applicationTypeManager/addDrugApplication/applicationTypeId/applicationNumber/companyId/drugId/drugTypeId/applicationDate/platformId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}applicationTypeManager/updateDrugApplicationProperties/applicationTypeId/id/applicationNumber/applicationDate/description/tokensExpr/`
  const applicationTypeId = targetObjectId
  const requestParameters = { ...parameters, applicationTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}applicationTypeManager/removeDrugApplicationList/applicationTypeId/drugApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, applicationTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ApplicationTypeService = { view,
  load,
  addDrugApplication,
  updateDrugApplication,
  removeDrugApplicationList,
  requestCandidatePlatform }
export default ApplicationTypeService

