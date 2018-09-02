import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}transferTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}transferTypeManager/loadTransferType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}transferTypeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}transferTypeManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}transferTypeManager/addBookCopyTransfer/transferTypeId/bookName/bookCopyId/originalStoreId/newStoreId/responsibleEmployeeId/tokensExpr/`
  const transferTypeId = targetObjectId
  const requestParameters = { ...parameters, transferTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}transferTypeManager/updateBookCopyTransferProperties/transferTypeId/id/bookName/tokensExpr/`
  const transferTypeId = targetObjectId
  const requestParameters = { ...parameters, transferTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyTransferList = (targetObjectId, parameters) => {
  const url = `${PREFIX}transferTypeManager/removeBookCopyTransferList/transferTypeId/bookCopyTransferIds/tokensExpr/`
  const requestParameters = { ...parameters, transferTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const TransferTypeService = { view,
  load,
  addBookCopyTransfer,
  updateBookCopyTransfer,
  removeBookCopyTransferList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default TransferTypeService

