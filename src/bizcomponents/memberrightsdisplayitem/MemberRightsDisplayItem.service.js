import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberRightsDisplayItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberRightsDisplayItemManager/loadMemberRightsDisplayItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberRights = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberRightsDisplayItemManager/requestCandidateMemberRights/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMemberRights = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberRightsDisplayItemManager/transferToAnotherMemberRights/id/anotherMemberRightsId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const MemberRightsDisplayItemService = { view,
  load,
  requestCandidateMemberRights,
  transferToAnotherMemberRights }
export default MemberRightsDisplayItemService

