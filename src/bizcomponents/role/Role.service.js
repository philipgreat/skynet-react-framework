import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}roleManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}roleManager/loadRole/${targetObjectId}/${parametersExpr}/`,
  })
}






const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}roleManager/addEmployee/roleId/name/employeeImage/mobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}roleManager/updateEmployeeProperties/roleId/id/name/employeeImage/mobileNumber/tokensExpr/`
  const roleId = targetObjectId
  const requestParameters = { ...parameters, roleId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}roleManager/removeEmployeeList/roleId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, roleId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const RoleService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList }
export default RoleService

