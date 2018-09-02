import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}deliverMethodManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}deliverMethodManager/loadDeliverMethod/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}deliverMethodManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}deliverMethodManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}deliverMethodManager/addBookCopySharingApplication /deliverMethodId/contactName/contactMobile/applicationStatusId/contactAddress/bookCopyQuantity/customerId/employeeId/destinationStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}deliverMethodManager/updateBookCopySharingApplicationProperties/deliverMethodId/id/contactName/contactMobile/contactAddress/bookCopyQuantity/tokensExpr/`
  const deliverMethodId = targetObjectId
  const requestParameters = { ...parameters, deliverMethodId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}deliverMethodManager/removeBookCopySharingApplicationList/deliverMethodId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, deliverMethodId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const DeliverMethodService = { view,
  load,
  addBookCopySharingApplication,
  updateBookCopySharingApplication,
  removeBookCopySharingApplicationList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default DeliverMethodService

