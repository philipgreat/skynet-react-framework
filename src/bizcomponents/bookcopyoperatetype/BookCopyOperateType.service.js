import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyOperateTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperateTypeManager/loadBookCopyOperateType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperateTypeManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyOperateTypeManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyOperateTypeManager/addBookCopyOperationRecord/bookCopyOperateTypeId/bookName/bookCopyId/operateStoreId/operationEmployeeId/tokensExpr/`
  const bookCopyOperateTypeId = targetObjectId
  const requestParameters = { ...parameters, bookCopyOperateTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyOperateTypeManager/updateBookCopyOperationRecordProperties/bookCopyOperateTypeId/id/bookName/tokensExpr/`
  const bookCopyOperateTypeId = targetObjectId
  const requestParameters = { ...parameters, bookCopyOperateTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyOperateTypeManager/removeBookCopyOperationRecordList/bookCopyOperateTypeId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyOperateTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookCopyOperateTypeService = { view,
  load,
  addBookCopyOperationRecord,
  updateBookCopyOperationRecord,
  removeBookCopyOperationRecordList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default BookCopyOperateTypeService

