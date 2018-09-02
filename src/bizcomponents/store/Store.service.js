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



const requestCandidateStoreType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidateStoreType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherStoreType = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}storeManager/transferToAnotherStoreType/id/anotherStoreTypeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
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
  const url = `${PREFIX}storeManager/addLossAssessmentRecord /recordStoreId/bookCopyId/lossComment/lossImage/bookCopyEvaluationPrice/lossDiscountId/recordPersonId/damagePersonId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateLossAssessmentRecordProperties/storeId/id/lossComment/lossImage/bookCopyEvaluationPrice/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addPrinter /storeId/name/location/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addBookCopy /locationStoreId/bookInfoId/bookCopyVendorId/bookCopySharingType/evaluationPrice/bookCopyStatusId/wxaId/tokensExpr/`
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



const addBookCopyTransferAsOriginalStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopyTransferAsOriginalStore /newStoreId/originalStoreId/bookName/bookCopyId/transferTypeId/responsibleEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyTransferAsOriginalStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyTransferAsOriginalStoreProperties/storeId/id/bookName/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyTransferListAsOriginalStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyTransferListAsOriginalStore/storeId/bookCopyTransferIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookCopyTransferAsNewStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopyTransferAsNewStore /newStoreId/originalStoreId/bookName/bookCopyId/transferTypeId/responsibleEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyTransferAsNewStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyTransferAsNewStoreProperties/storeId/id/bookName/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyTransferListAsNewStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyTransferListAsNewStore/storeId/bookCopyTransferIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookTakeStockPlan /storeId/planName/planDatetime/planCreatorId/takeStockStatusId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookTakeStockPlanProperties/storeId/id/planName/planDatetime/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addBookCopyOperationRecord /operateStoreId/bookName/bookCopyId/bookCopyOperateTypeId/operationEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyOperationRecordProperties/storeId/id/bookName/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyOperationRecordList/storeId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingHistoryAsLendingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingHistoryAsLendingStore /returnStoreId/lendingStoreId/lendingDatetime/bookName/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/borrowingStatusId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistoryAsLendingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingHistoryAsLendingStoreProperties/storeId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryListAsLendingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingHistoryListAsLendingStore/storeId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingHistoryAsReturnStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingHistoryAsReturnStore /returnStoreId/lendingStoreId/lendingDatetime/bookName/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/borrowingStatusId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistoryAsReturnStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingHistoryAsReturnStoreProperties/storeId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryListAsReturnStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingHistoryListAsReturnStore/storeId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingExpiredSkuAsLendingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingExpiredSkuAsLendingStore /returnStoreId/lendingStoreId/borrowerId/bookCopyId/bookId/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSkuAsLendingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingExpiredSkuAsLendingStoreProperties/storeId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuListAsLendingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingExpiredSkuListAsLendingStore/storeId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingExpiredSkuAsReturnStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingExpiredSkuAsReturnStore /returnStoreId/lendingStoreId/borrowerId/bookCopyId/bookId/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSkuAsReturnStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingExpiredSkuAsReturnStoreProperties/storeId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuListAsReturnStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingExpiredSkuListAsReturnStore/storeId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopySharingApplication /destinationStoreId/contactName/contactMobile/applicationStatusId/deliverMethodId/contactAddress/bookCopyQuantity/customerId/employeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopySharingApplicationProperties/storeId/id/contactName/contactMobile/contactAddress/bookCopyQuantity/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addMemberServiceRevenue /storeId/memberId/memberName/serviceStartDate/serviceEndDate/monthlyServiceFee/storeName/storeServiceCount/totalServiceCount/storeServiceRevenueRate/storeServiceRevenue/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberServiceRevenue = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateMemberServiceRevenueProperties/storeId/id/memberName/serviceStartDate/serviceEndDate/monthlyServiceFee/storeName/storeServiceCount/totalServiceCount/storeServiceRevenueRate/storeServiceRevenue/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addStoreAccount /storeId/name/amount/accountDataId/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addStoreSlide /storeId/tips/bannerImage/wxaLinkUrl/antdLinkUrl/slideTypeId/bookId/campaignId/memberServiceProductId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreSlide = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateStoreSlideProperties/storeId/id/tips/bannerImage/wxaLinkUrl/antdLinkUrl/tokensExpr/`
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
  const url = `${PREFIX}storeManager/addCampaign /publishStoreId/campaignName/campaignContent/campaignImage/campaignStatusId/campaignStartTime/campaignFinishTime/campaignHoldAddress/registerDeadlineLeadHours/minimumRegisterQuantity/availableRegisterQuantity/publishEmployeeId/campaignPlazaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateCampaignProperties/storeId/id/campaignName/campaignContent/campaignImage/campaignStartTime/campaignFinishTime/campaignHoldAddress/registerDeadlineLeadHours/minimumRegisterQuantity/availableRegisterQuantity/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeCampaignList/storeId/campaignIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addCustomer /favouriteStoreId/nickName/logoImage/mobileNumber/realName/sexuality/memberServiceId/memberServiceStartDate/memberServiceExpireDate/accountBalance/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/birthday/identityCardNumber/familyAddress/memberServiceDailyPay/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateCustomerProperties/storeId/id/nickName/logoImage/mobileNumber/realName/sexuality/memberServiceStartDate/memberServiceExpireDate/accountBalance/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/birthday/identityCardNumber/familyAddress/memberServiceDailyPay/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeCustomerList/storeId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addEmployeeWorkingStore /storeId/description/roleId/employeeId/startDate/terminatedDate/tokensExpr/`
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
  addBookCopyTransferAsOriginalStore,
  addBookCopyTransferAsNewStore,
  addBookTakeStockPlan,
  addBookCopyOperationRecord,
  addBorrowingHistoryAsLendingStore,
  addBorrowingHistoryAsReturnStore,
  addBorrowingExpiredSkuAsLendingStore,
  addBorrowingExpiredSkuAsReturnStore,
  addBookCopySharingApplication,
  addMemberServiceRevenue,
  addStoreAccount,
  addStoreSlide,
  addCampaign,
  addCustomer,
  addEmployeeWorkingStore,
  updateLossAssessmentRecord,
  updatePrinter,
  updateBookCopy,
  updateBookCopyTransferAsOriginalStore,
  updateBookCopyTransferAsNewStore,
  updateBookTakeStockPlan,
  updateBookCopyOperationRecord,
  updateBorrowingHistoryAsLendingStore,
  updateBorrowingHistoryAsReturnStore,
  updateBorrowingExpiredSkuAsLendingStore,
  updateBorrowingExpiredSkuAsReturnStore,
  updateBookCopySharingApplication,
  updateMemberServiceRevenue,
  updateStoreAccount,
  updateStoreSlide,
  updateCampaign,
  updateCustomer,
  updateEmployeeWorkingStore,
  removeLossAssessmentRecordList,
  removePrinterList,
  removeBookCopyList,
  removeBookCopyTransferListAsOriginalStore,
  removeBookCopyTransferListAsNewStore,
  removeBookTakeStockPlanList,
  removeBookCopyOperationRecordList,
  removeBorrowingHistoryListAsLendingStore,
  removeBorrowingHistoryListAsReturnStore,
  removeBorrowingExpiredSkuListAsLendingStore,
  removeBorrowingExpiredSkuListAsReturnStore,
  removeBookCopySharingApplicationList,
  removeMemberServiceRevenueList,
  removeStoreAccountList,
  removeStoreSlideList,
  removeCampaignList,
  removeCustomerList,
  removeEmployeeWorkingStoreList,
  requestCandidateStoreType,
  requestCandidateCity,
  requestCandidatePlatform,
  transferToAnotherStoreType,
  transferToAnotherCity,
  transferToAnotherPlatform }
export default StoreService

