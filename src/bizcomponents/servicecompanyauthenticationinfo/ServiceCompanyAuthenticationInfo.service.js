import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceCompanyAuthenticationInfoManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAuthenticationInfoManager/loadServiceCompanyAuthenticationInfo/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateServiceCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAuthenticationInfoManager/requestCandidateServiceCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceCompanyAuthenticationInfoManager/transferToAnotherServiceCompany/id/anotherServiceCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ServiceCompanyAuthenticationInfoService = { view,
  load,
  requestCandidateServiceCompany,
  transferToAnotherServiceCompany }
export default ServiceCompanyAuthenticationInfoService

