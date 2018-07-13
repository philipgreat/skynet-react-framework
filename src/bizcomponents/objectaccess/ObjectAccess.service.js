import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}objectAccessManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}objectAccessManager/loadObjectAccess/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateApp = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}objectAccessManager/requestCandidateApp/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherApp = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}objectAccessManager/transferToAnotherApp/id/anotherAppId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ObjectAccessService = { view,
  load,
  requestCandidateApp,
  transferToAnotherApp }
export default ObjectAccessService

