import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}storeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/loadStore/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidateCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCity = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}storeManager/transferToAnotherCity/id/anotherCityId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}storeManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addLossAssessmentRecord/recordStoreId/bookCopyId/lossComment/recordPersonId/damagePersonId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateLossAssessmentRecordProperties/storeId/id/lossComment/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLossAssessmentRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeLossAssessmentRecordList/storeId/lossAssessmentRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addPrinter = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addPrinter/storeId/name/location/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePrinter = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updatePrinterProperties/storeId/id/name/location/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePrinterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removePrinterList/storeId/printerIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopy/locationStoreId/bookInfoId/bookCopyVendorId/bookCopySharingType/evaluationPrice/bookCopyStatusId/wxaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyProperties/storeId/id/bookCopySharingType/evaluationPrice/wxaId/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyList/storeId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopyTransfer/newStoreId/originalStoreId/bookName/bookCopyId/transferType/responsibleEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyTransfer = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyTransferProperties/storeId/id/bookName/transferType/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyTransferList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyTransferList/storeId/bookCopyTransferIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookTakeStockPlan/storeId/planName/planDatetime/planCreatorId/status/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookTakeStockPlanProperties/storeId/id/planName/planDatetime/status/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockPlanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookTakeStockPlanList/storeId/bookTakeStockPlanIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopyOperationRecord/operateStoreId/bookCopyId/bookCopyOperateType/operationEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyOperationRecordProperties/storeId/id/bookCopyOperateType/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyOperationRecordList/storeId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingHistory/returnStoreId/lendingStoreId/lendingDatetime/bookName/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingHistoryProperties/storeId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingHistoryList/storeId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingExpiredSku/returnStoreId/lendingStoreId/borrowerId/bookCopyId/bookId/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingExpiredSkuProperties/storeId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingExpiredSkuList/storeId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopySharingApplication/destinationStoreId/bookCopyQuantity/deliverMethod/contactAddress/contactName/contactMobile/status/customerId/employeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopySharingApplicationProperties/storeId/id/bookCopyQuantity/deliverMethod/contactAddress/contactName/contactMobile/status/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopySharingApplicationList/storeId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addMemberServiceRevenue = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addMemberServiceRevenue/storeId/memberId/memberName/serviceStartDate/serviceEndDate/monthlyServiceFee/storeName/storeServiceCount/totalServiceCount/storeServiceRevenueRate/storeServiceRevenue/platformServiceRevenueRate/platformServiceRevenue/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberServiceRevenue = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateMemberServiceRevenueProperties/storeId/id/memberName/serviceStartDate/serviceEndDate/monthlyServiceFee/storeName/storeServiceCount/totalServiceCount/storeServiceRevenueRate/storeServiceRevenue/platformServiceRevenueRate/platformServiceRevenue/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMemberServiceRevenueList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeMemberServiceRevenueList/storeId/memberServiceRevenueIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addStoreAccount/storeId/name/amount/accountDataId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateStoreAccountProperties/storeId/id/name/amount/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeStoreAccountList/storeId/storeAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addStoreSlide/storeId/tips/bannerImage/wxaLinkUrl/antdLinkUrl/linkType/bookId/campaignId/memberServiceProductId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateStoreSlideProperties/storeId/id/tips/bannerImage/wxaLinkUrl/antdLinkUrl/linkType/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreSlideList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeStoreSlideList/storeId/storeSlideIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addCampaign/publishStoreId/campaignName/campaignContent/campaignImage/campaignStatus/campaignStartTime/campaignFinishTime/campaignHoldAddress/availableRegisterDeadline/availableRegisterQuantity/publishEmployeeId/campaignPlazaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateCampaignProperties/storeId/id/campaignName/campaignContent/campaignImage/campaignStatus/campaignStartTime/campaignFinishTime/campaignHoldAddress/availableRegisterDeadline/availableRegisterQuantity/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeCampaignList/storeId/campaignIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addEmployeeWorkingStore/storeId/description/employeeId/startDate/terminatedDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateEmployeeWorkingStoreProperties/storeId/id/description/startDate/terminatedDate/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeEmployeeWorkingStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeEmployeeWorkingStoreList/storeId/employeeWorkingStoreIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const StoreService = { view,
  load,
  addLossAssessmentRecord,
  addPrinter,
  addBookCopy,
  addBookCopyTransfer,
  addBookTakeStockPlan,
  addBookCopyOperationRecord,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookCopySharingApplication,
  addMemberServiceRevenue,
  addStoreAccount,
  addStoreSlide,
  addCampaign,
  addEmployeeWorkingStore,
  updateLossAssessmentRecord,
  updatePrinter,
  updateBookCopy,
  updateBookCopyTransfer,
  updateBookTakeStockPlan,
  updateBookCopyOperationRecord,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookCopySharingApplication,
  updateMemberServiceRevenue,
  updateStoreAccount,
  updateStoreSlide,
  updateCampaign,
  updateEmployeeWorkingStore,
  removeLossAssessmentRecordList,
  removePrinterList,
  removeBookCopyList,
  removeBookCopyTransferList,
  removeBookTakeStockPlanList,
  removeBookCopyOperationRecordList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookCopySharingApplicationList,
  removeMemberServiceRevenueList,
  removeStoreAccountList,
  removeStoreSlideList,
  removeCampaignList,
  removeEmployeeWorkingStoreList,
  requestCandidateCity,
  requestCandidatePlatform,
  transferToAnotherCity,
  transferToAnotherPlatform }
export default StoreService

