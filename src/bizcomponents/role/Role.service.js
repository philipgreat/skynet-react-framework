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







const addEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}roleManager/addEmployeeWorkingStore /roleId/description/employeeId/storeId/startDate/terminatedDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}roleManager/updateEmployeeWorkingStoreProperties/roleId/id/description/startDate/terminatedDate/tokensExpr/`
  const roleId = targetObjectId
  const requestParameters = { ...parameters, roleId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeEmployeeWorkingStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}roleManager/removeEmployeeWorkingStoreList/roleId/employeeWorkingStoreIds/tokensExpr/`
  const requestParameters = { ...parameters, roleId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const RoleService = { view,
  load,
  addEmployeeWorkingStore,
  updateEmployeeWorkingStore,
  removeEmployeeWorkingStoreList }
export default RoleService

