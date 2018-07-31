import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}actionTokenManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}actionTokenManager/loadActionToken/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUserDomain = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}actionTokenManager/requestCandidateUserDomain/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherUserDomain = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}actionTokenManager/transferToAnotherUserDomain/id/anotherUserDomainId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ActionTokenService = { view,
  load,
  requestCandidateUserDomain,
  transferToAnotherUserDomain }
export default ActionTokenService











