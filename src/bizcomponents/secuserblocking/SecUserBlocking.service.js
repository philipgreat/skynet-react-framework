import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}secUserBlockingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}secUserBlockingManager/loadSecUserBlocking/${targetObjectId}/${parametersExpr}/`,
  })
}






const addSecUser = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserBlockingManager/addSecUser/blockingId/login/mobile/email/pwd/verificationCode/verificationCodeExpire/lastLoginTime/domainId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateSecUser = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserBlockingManager/updateSecUserProperties/secUserBlockingId/id/login/mobile/email/pwd/verificationCode/verificationCodeExpire/lastLoginTime/tokensExpr/`
  const secUserBlockingId = targetObjectId
  const requestParameters = { ...parameters, secUserBlockingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeSecUserList = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserBlockingManager/removeSecUserList/secUserBlockingId/secUserIds/tokensExpr/`
  const requestParameters = { ...parameters, secUserBlockingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const SecUserBlockingService = { view,
  load,
  addSecUser,
  updateSecUser,
  removeSecUserList }
export default SecUserBlockingService

