import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeWorkingStoreManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeWorkingStoreManager/loadEmployeeWorkingStore/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateRole = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeWorkingStoreManager/requestCandidateRole/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRole = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}employeeWorkingStoreManager/transferToAnotherRole/id/anotherRoleId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeWorkingStoreManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}employeeWorkingStoreManager/transferToAnotherEmployee/id/anotherEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeWorkingStoreManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}employeeWorkingStoreManager/transferToAnotherStore/id/anotherStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const EmployeeWorkingStoreService = { view,
  load,
  requestCandidateRole,
  requestCandidateEmployee,
  requestCandidateStore,
  transferToAnotherRole,
  transferToAnotherEmployee,
  transferToAnotherStore }
export default EmployeeWorkingStoreService
