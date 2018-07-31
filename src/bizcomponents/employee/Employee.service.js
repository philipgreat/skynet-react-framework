import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/loadEmployee/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateRole = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateRole/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRole = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}employeeManager/transferToAnotherRole/id/anotherRoleId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addMessageTemplate = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addMessageTemplate/updatedById/name/template/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMessageTemplate = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateMessageTemplateProperties/employeeId/id/name/template/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMessageTemplateList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeMessageTemplateList/employeeId/messageTemplateIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addLossAssessmentRecord/recordPersonId/bookCopyId/recordStoreId/lossComment/damagePersonId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateLossAssessmentRecordProperties/employeeId/id/lossComment/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLossAssessmentRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeLossAssessmentRecordList/employeeId/lossAssessmentRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopyTransfer/responsibleEmployeeId/bookName/bookCopyId/originalStoreId/newStoreId/transferType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopyTransferProperties/employeeId/id/bookName/transferType/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyTransferList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopyTransferList/employeeId/bookCopyTransferIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookTakeStockPlan/planCreatorId/planName/storeId/planDatetime/status/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookTakeStockPlanProperties/employeeId/id/planName/planDatetime/status/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockPlanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookTakeStockPlanList/employeeId/bookTakeStockPlanIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookTakeStockResult/employeeId/bookCopyId/bookTakeStockStatus/results/bookTakeStockPlanId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookTakeStockResultProperties/employeeId/id/bookTakeStockStatus/results/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookTakeStockResultList/employeeId/bookTakeStockResultIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopyOperationRecord/operationEmployeeId/bookCopyId/bookCopyOperateType/operateStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopyOperationRecordProperties/employeeId/id/bookCopyOperateType/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopyOperationRecordList/employeeId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopySharingApplication/employeeId/bookCopyQuantity/deliverMethod/destinationStoreId/contactAddress/contactName/contactMobile/status/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopySharingApplicationProperties/employeeId/id/bookCopyQuantity/deliverMethod/contactAddress/contactName/contactMobile/status/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopySharingApplicationList/employeeId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addCampaign/publishEmployeeId/campaignName/campaignContent/campaignImage/campaignStatus/campaignStartTime/campaignFinishTime/campaignHoldAddress/availableRegisterDeadline/availableRegisterQuantity/publishStoreId/campaignPlazaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateCampaignProperties/employeeId/id/campaignName/campaignContent/campaignImage/campaignStatus/campaignStartTime/campaignFinishTime/campaignHoldAddress/availableRegisterDeadline/availableRegisterQuantity/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeCampaignList/employeeId/campaignIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeWorkingStore/employeeId/description/storeId/startDate/terminatedDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeWorkingStoreProperties/employeeId/id/description/startDate/terminatedDate/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeEmployeeWorkingStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeWorkingStoreList/employeeId/employeeWorkingStoreIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const EmployeeService = { view,
  load,
  addMessageTemplate,
  addLossAssessmentRecord,
  addBookCopyTransfer,
  addBookTakeStockPlan,
  addBookTakeStockResult,
  addBookCopyOperationRecord,
  addBookCopySharingApplication,
  addCampaign,
  addEmployeeWorkingStore,
  updateMessageTemplate,
  updateLossAssessmentRecord,
  updateBookCopyTransfer,
  updateBookTakeStockPlan,
  updateBookTakeStockResult,
  updateBookCopyOperationRecord,
  updateBookCopySharingApplication,
  updateCampaign,
  updateEmployeeWorkingStore,
  removeMessageTemplateList,
  removeLossAssessmentRecordList,
  removeBookCopyTransferList,
  removeBookTakeStockPlanList,
  removeBookTakeStockResultList,
  removeBookCopyOperationRecordList,
  removeBookCopySharingApplicationList,
  removeCampaignList,
  removeEmployeeWorkingStoreList,
  requestCandidateRole,
  transferToAnotherRole }
export default EmployeeService

