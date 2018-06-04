import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}userAppManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userAppManager/loadUserApp/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateSecUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userAppManager/requestCandidateSecUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addObjectAccess = (targetObjectId, parameters) => {
  const url = `${PREFIX}userAppManager/addObjectAccess/appId/name/objectType/list1/list2/list3/list4/list5/list6/list7/list8/list9/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateObjectAccess = (targetObjectId, parameters) => {
  const url = `${PREFIX}userAppManager/updateObjectAccessProperties/userAppId/id/name/objectType/list1/list2/list3/list4/list5/list6/list7/list8/list9/tokensExpr/`
  const userAppId = targetObjectId
  const requestParameters = { ...parameters, userAppId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeObjectAccessList = (targetObjectId, parameters) => {
  const url = `${PREFIX}userAppManager/removeObjectAccessList/userAppId/objectAccessIds/tokensExpr/`
  const requestParameters = { ...parameters, userAppId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const UserAppService = { view,
  load,
  addObjectAccess,
  updateObjectAccess,
  removeObjectAccessList,
  requestCandidateSecUser }
export default UserAppService

