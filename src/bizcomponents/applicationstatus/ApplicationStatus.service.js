import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}applicationStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}applicationStatusManager/loadApplicationStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}applicationStatusManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}applicationStatusManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}applicationStatusManager/addBookCopySharingApplication /applicationStatusId/contactName/contactMobile/deliverMethodId/contactAddress/bookCopyQuantity/customerId/employeeId/destinationStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}applicationStatusManager/updateBookCopySharingApplicationProperties/applicationStatusId/id/contactName/contactMobile/contactAddress/bookCopyQuantity/tokensExpr/`
  const applicationStatusId = targetObjectId
  const requestParameters = { ...parameters, applicationStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}applicationStatusManager/removeBookCopySharingApplicationList/applicationStatusId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, applicationStatusId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ApplicationStatusService = { view,
  load,
  addBookCopySharingApplication,
  updateBookCopySharingApplication,
  removeBookCopySharingApplicationList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default ApplicationStatusService

