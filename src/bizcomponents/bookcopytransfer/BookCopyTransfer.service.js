import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyTransferManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyTransferManager/loadBookCopyTransfer/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyTransferManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyTransferManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateOriginalStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyTransferManager/requestCandidateOriginalStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherOriginalStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyTransferManager/transferToAnotherOriginalStore/id/anotherOriginalStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateNewStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyTransferManager/requestCandidateNewStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherNewStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyTransferManager/transferToAnotherNewStore/id/anotherNewStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateTransferType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyTransferManager/requestCandidateTransferType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherTransferType = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyTransferManager/transferToAnotherTransferType/id/anotherTransferTypeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateResponsibleEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyTransferManager/requestCandidateResponsibleEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyTransferManager/transferToAnotherResponsibleEmployee/id/anotherResponsibleEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BookCopyTransferService = { view,
  load,
  requestCandidateBookCopy,
  requestCandidateOriginalStore,
  requestCandidateNewStore,
  requestCandidateTransferType,
  requestCandidateResponsibleEmployee,
  transferToAnotherBookCopy,
  transferToAnotherOriginalStore,
  transferToAnotherNewStore,
  transferToAnotherTransferType,
  transferToAnotherResponsibleEmployee }
export default BookCopyTransferService

