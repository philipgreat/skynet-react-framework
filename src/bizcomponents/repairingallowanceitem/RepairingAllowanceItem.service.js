import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}repairingAllowanceItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingAllowanceItemManager/loadRepairingAllowanceItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateService = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingAllowanceItemManager/requestCandidateService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherService = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}repairingAllowanceItemManager/transferToAnotherService/id/anotherServiceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const RepairingAllowanceItemService = { view,
  load,
  requestCandidateService,
  transferToAnotherService }
export default RepairingAllowanceItemService

