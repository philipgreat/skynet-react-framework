import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyStatusManager/loadBookCopyStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyStatusManager/requestCandidateBookPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyStatusManager/transferToAnotherBookPlaza/id/anotherBookPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyStatusManager/addBookCopy/bookCopyStatusId/bookInfoId/bookCopyVendorId/bookCopySharingType/locationStoreId/evaluationPrice/wxaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyStatusManager/updateBookCopyProperties/bookCopyStatusId/id/bookCopySharingType/evaluationPrice/wxaId/tokensExpr/`
  const bookCopyStatusId = targetObjectId
  const requestParameters = { ...parameters, bookCopyStatusId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyStatusManager/removeBookCopyList/bookCopyStatusId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyStatusId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookCopyStatusService = { view,
  load,
  addBookCopy,
  updateBookCopy,
  removeBookCopyList,
  requestCandidateBookPlaza,
  transferToAnotherBookPlaza }
export default BookCopyStatusService

