import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/loadBookCopyOperationRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyOperationRecordManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateBookCopyOperateType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateBookCopyOperateType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopyOperateType = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyOperationRecordManager/transferToAnotherBookCopyOperateType/id/anotherBookCopyOperateTypeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateOperateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateOperateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherOperateStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyOperationRecordManager/transferToAnotherOperateStore/id/anotherOperateStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateOperationEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateOperationEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherOperationEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopyOperationRecordManager/transferToAnotherOperationEmployee/id/anotherOperationEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BookCopyOperationRecordService = { view,
  load,
  requestCandidateBookCopy,
  requestCandidateBookCopyOperateType,
  requestCandidateOperateStore,
  requestCandidateOperationEmployee,
  transferToAnotherBookCopy,
  transferToAnotherBookCopyOperateType,
  transferToAnotherOperateStore,
  transferToAnotherOperationEmployee }
export default BookCopyOperationRecordService

