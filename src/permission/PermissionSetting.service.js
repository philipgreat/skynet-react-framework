
import { get,postForm,PREFIX} from '../axios/tools'

const requestCandidateSecUser = (ownerClass, id, filterKey, pageNo) => {
   
    const url = `${PREFIX}userAppManager/requestCandidateSecUser/ownerClass/id/filterKey/pageNo/`
    const requestParameters = {id, ownerClass,filterKey, pageNo}
    
    return postForm({url,requestParameters})
}	

const loadUserAppWithUser = (secUserId,objectType, objectId, title, appIcon) => {

  
  const url = `${PREFIX}secUserManager/loadUserAppWithUser/secUserId/objectType/objectId/title/appIcon/`
  const requestParameters = {secUserId,objectType, objectId, title, appIcon}
  console.log("requestParameters", requestParameters)
  return postForm({url,requestParameters})
}	

const updateAppPermission = (secUserId,userAppId, version, permission) => {
  const url = `${PREFIX}secUserManager/updateAppPermission/secUserId/userAppId/version/permission/`
  const requestParameters = {secUserId,userAppId,version,permission}
  console.log("requestParameters", requestParameters)
  return postForm({url,requestParameters})
}	

const updateListAccess = (secUserId,userAppId, displayName, permissionTokens) => {

  const url = `${PREFIX}secUserManager/updateListAccess/secUserId/userAppId/displayName/permissionTokens/`
  const requestParameters = {secUserId,userAppId,displayName,permissionTokens}
  console.log("requestParameters", requestParameters)
  return postForm({url,requestParameters})
}	

const PermissionSettingService = {
  requestCandidateSecUser,loadUserAppWithUser,updateAppPermission,updateListAccess
}

export default PermissionSettingService

