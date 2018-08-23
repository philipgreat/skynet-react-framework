import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberRightsDisplayManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberRightsDisplayManager/loadMemberRightsDisplay/${targetObjectId}/${parametersExpr}/`,
  })
}






const addMemberRightsDisplayItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberRightsDisplayManager/addMemberRightsDisplayItem/memberRightsId/image/summary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberRightsDisplayItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberRightsDisplayManager/updateMemberRightsDisplayItemProperties/memberRightsDisplayId/id/image/summary/tokensExpr/`
  const memberRightsDisplayId = targetObjectId
  const requestParameters = { ...parameters, memberRightsDisplayId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMemberRightsDisplayItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberRightsDisplayManager/removeMemberRightsDisplayItemList/memberRightsDisplayId/memberRightsDisplayItemIds/tokensExpr/`
  const requestParameters = { ...parameters, memberRightsDisplayId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const MemberRightsDisplayService = { view,
  load,
  addMemberRightsDisplayItem,
  updateMemberRightsDisplayItem,
  removeMemberRightsDisplayItemList }
export default MemberRightsDisplayService

