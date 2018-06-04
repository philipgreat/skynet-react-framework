import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


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
 




const ObjectAccessService = { view,
  load,
  requestCandidateApp }
export default ObjectAccessService

