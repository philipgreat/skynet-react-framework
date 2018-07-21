import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceOrderFilterManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceOrderFilterManager/loadServiceOrderFilter/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceOrderFilterManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceOrderFilterManager/transferToAnotherEmployee/id/anotherEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ServiceOrderFilterService = { view,
  load,
  requestCandidateEmployee,
  transferToAnotherEmployee }
export default ServiceOrderFilterService

