import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyManager/loadCompany/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyManager/addDrugApplication/companyId/applicationNumber/applicationTypeId/drugId/drugTypeId/applicationDate/platformId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyManager/updateDrugApplicationProperties/companyId/id/applicationNumber/applicationDate/description/tokensExpr/`
  const companyId = targetObjectId
  const requestParameters = { ...parameters, companyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyManager/removeDrugApplicationList/companyId/drugApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, companyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CompanyService = { view,
  load,
  addDrugApplication,
  updateDrugApplication,
  removeDrugApplicationList,
  requestCandidatePlatform }
export default CompanyService

