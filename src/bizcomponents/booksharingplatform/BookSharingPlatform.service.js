import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookSharingPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookSharingPlatformManager/loadBookSharingPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}







const addLossDiscount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addLossDiscount/bookSharingPlatformId/name/code/discountRatio/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossDiscount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateLossDiscountProperties/bookSharingPlatformId/id/name/code/discountRatio/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLossDiscountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeLossDiscountList/bookSharingPlatformId/lossDiscountIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addPlatformConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addPlatformConfiguration/bookSharingPlatformId/memberServiceAgreement/bookSharingAgreement/accountRechargeAgreement/messageInStoreListPage/feedbackContactInfo/myRightsTitle/myBorrowingTitle/myCampaignTitle/myBalanceTitle/myBookReviewTitle/myOrderTitle/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updatePlatformConfigurationProperties/bookSharingPlatformId/id/memberServiceAgreement/bookSharingAgreement/accountRechargeAgreement/messageInStoreListPage/feedbackContactInfo/myRightsTitle/myBorrowingTitle/myCampaignTitle/myBalanceTitle/myBookReviewTitle/myOrderTitle/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformConfigurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removePlatformConfigurationList/bookSharingPlatformId/platformConfigurationIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addAccountData = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addAccountData/bookSharingPlatformId/summary/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAccountData = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateAccountDataProperties/bookSharingPlatformId/id/summary/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAccountDataList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeAccountDataList/bookSharingPlatformId/accountDataIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCity/bookSharingPlatformId/name/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateCityProperties/bookSharingPlatformId/id/name/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCityList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeCityList/bookSharingPlatformId/cityIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookPlaza = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBookPlaza/bookSharingPlatformId/bookPlazaName/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookPlaza = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBookPlazaProperties/bookSharingPlatformId/id/bookPlazaName/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookPlazaList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBookPlazaList/bookSharingPlatformId/bookPlazaIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addMemberServiceProduct/bookSharingPlatformId/productName/productDescription/productPriority/productCoverImage/bookBorrowingLimitPrice/bookBorrowingCount/bookPurchasingDiscountRate/overduePay/freeBorrowingDays/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateMemberServiceProductProperties/bookSharingPlatformId/id/productName/productDescription/productPriority/productCoverImage/bookBorrowingLimitPrice/bookBorrowingCount/bookPurchasingDiscountRate/overduePay/freeBorrowingDays/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMemberServiceProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeMemberServiceProductList/bookSharingPlatformId/memberServiceProductIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addMainOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addMainOrder/bookSharingPlatformId/title/mainOrderStatus/createTime/customerId/originalAmount/actualAmount/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMainOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateMainOrderProperties/bookSharingPlatformId/id/title/mainOrderStatus/createTime/originalAmount/actualAmount/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMainOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeMainOrderList/bookSharingPlatformId/mainOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBook/bookSharingPlatformId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookRecommendId/bookPlazaId/bookSummary/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBookProperties/bookSharingPlatformId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookSummary/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBookList/bookSharingPlatformId/bookIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addTransferType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addTransferType/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateTransferType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateTransferTypeProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeTransferTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeTransferTypeList/bookSharingPlatformId/transferTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addTakeStockStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addTakeStockStatus/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateTakeStockStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateTakeStockStatusProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeTakeStockStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeTakeStockStatusList/bookSharingPlatformId/takeStockStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookTakeStockStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBookTakeStockStatus/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookTakeStockStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBookTakeStockStatusProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookTakeStockStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBookTakeStockStatusList/bookSharingPlatformId/bookTakeStockStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addTakeStoreResults = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addTakeStoreResults/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateTakeStoreResults = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateTakeStoreResultsProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeTakeStoreResultsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeTakeStoreResultsList/bookSharingPlatformId/takeStoreResultsIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBookCopyOperateType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBookCopyOperateType/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopyOperateType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBookCopyOperateTypeProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyOperateTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBookCopyOperateTypeList/bookSharingPlatformId/bookCopyOperateTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addBorrowingStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBorrowingStatus/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBorrowingStatusProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBorrowingStatusList/bookSharingPlatformId/borrowingStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addDeliverMethod = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addDeliverMethod/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateDeliverMethod = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateDeliverMethodProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeDeliverMethodList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeDeliverMethodList/bookSharingPlatformId/deliverMethodIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addApplicationStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addApplicationStatus/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateApplicationStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateApplicationStatusProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeApplicationStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeApplicationStatusList/bookSharingPlatformId/applicationStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addPlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addPlatformAccount/bookSharingPlatformId/name/amount/accountDataId/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updatePlatformAccountProperties/bookSharingPlatformId/id/name/amount/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removePlatformAccountList/bookSharingPlatformId/platformAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addFundationAccount/bookSharingPlatformId/name/amount/accountDataId/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateFundationAccountProperties/bookSharingPlatformId/id/name/amount/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeFundationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeFundationAccountList/bookSharingPlatformId/fundationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addStoreType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addStoreType/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStoreType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateStoreTypeProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeStoreTypeList/bookSharingPlatformId/storeTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addStore/bookSharingPlatformId/storeName/storeSubname/storeAddress/storeOpenTime/storeOpenTimeSecond/storeRoomNumber/longitude/latitude/storeImage/storeTypeId/cityId/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateStoreProperties/bookSharingPlatformId/id/storeName/storeSubname/storeAddress/storeOpenTime/storeOpenTimeSecond/storeRoomNumber/longitude/latitude/storeImage/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeStoreList/bookSharingPlatformId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addSlideType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addSlideType/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateSlideType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateSlideTypeProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeSlideTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeSlideTypeList/bookSharingPlatformId/slideTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addCampaignPlaza = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCampaignPlaza/bookSharingPlatformId/name/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignPlaza = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateCampaignPlazaProperties/bookSharingPlatformId/id/name/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignPlazaList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeCampaignPlazaList/bookSharingPlatformId/campaignPlazaIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addCampaignStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCampaignStatus/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateCampaignStatusProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeCampaignStatusList/bookSharingPlatformId/campaignStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCustomer/bookSharingPlatformId/nickName/logoImage/mobileNumber/realName/sexuality/memberServiceId/memberServiceStartDate/memberServiceExpireDate/accountBalance/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/birthday/identityCardNumber/familyAddress/memberServiceDailyPay/favouriteStoreId/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateCustomerProperties/bookSharingPlatformId/id/nickName/logoImage/mobileNumber/realName/sexuality/memberServiceStartDate/memberServiceExpireDate/accountBalance/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/birthday/identityCardNumber/familyAddress/memberServiceDailyPay/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeCustomerList/bookSharingPlatformId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addEmployee/bookSharingPlatformId/name/employeeImage/mobileNumber/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateEmployeeProperties/bookSharingPlatformId/id/name/employeeImage/mobileNumber/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeEmployeeList/bookSharingPlatformId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addProfitType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addProfitType/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateProfitType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateProfitTypeProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeProfitTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeProfitTypeList/bookSharingPlatformId/profitTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addProfitDistributeState = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addProfitDistributeState/bookSharingPlatformId/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateProfitDistributeState = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateProfitDistributeStateProperties/bookSharingPlatformId/id/name/code/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeProfitDistributeStateList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeProfitDistributeStateList/bookSharingPlatformId/profitDistributeStateIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



const addUndistributedProfit = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addUndistributedProfit/bookSharingPlatformId/summary/chargeStartDate/chargeEndDate/profitTypeId/profitDistributeStateId/mainOrderId/amount/balance/customerId/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateUndistributedProfit = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateUndistributedProfitProperties/bookSharingPlatformId/id/summary/chargeStartDate/chargeEndDate/amount/balance/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeUndistributedProfitList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeUndistributedProfitList/bookSharingPlatformId/undistributedProfitIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookSharingPlatformService = { view,
  load,
  addLossDiscount,
  addPlatformConfiguration,
  addAccountData,
  addCity,
  addBookPlaza,
  addMemberServiceProduct,
  addMainOrder,
  addBook,
  addTransferType,
  addTakeStockStatus,
  addBookTakeStockStatus,
  addTakeStoreResults,
  addBookCopyOperateType,
  addBorrowingStatus,
  addDeliverMethod,
  addApplicationStatus,
  addPlatformAccount,
  addFundationAccount,
  addStoreType,
  addStore,
  addSlideType,
  addCampaignPlaza,
  addCampaignStatus,
  addCustomer,
  addEmployee,
  addProfitType,
  addProfitDistributeState,
  addUndistributedProfit,
  updateLossDiscount,
  updatePlatformConfiguration,
  updateAccountData,
  updateCity,
  updateBookPlaza,
  updateMemberServiceProduct,
  updateMainOrder,
  updateBook,
  updateTransferType,
  updateTakeStockStatus,
  updateBookTakeStockStatus,
  updateTakeStoreResults,
  updateBookCopyOperateType,
  updateBorrowingStatus,
  updateDeliverMethod,
  updateApplicationStatus,
  updatePlatformAccount,
  updateFundationAccount,
  updateStoreType,
  updateStore,
  updateSlideType,
  updateCampaignPlaza,
  updateCampaignStatus,
  updateCustomer,
  updateEmployee,
  updateProfitType,
  updateProfitDistributeState,
  updateUndistributedProfit,
  removeLossDiscountList,
  removePlatformConfigurationList,
  removeAccountDataList,
  removeCityList,
  removeBookPlazaList,
  removeMemberServiceProductList,
  removeMainOrderList,
  removeBookList,
  removeTransferTypeList,
  removeTakeStockStatusList,
  removeBookTakeStockStatusList,
  removeTakeStoreResultsList,
  removeBookCopyOperateTypeList,
  removeBorrowingStatusList,
  removeDeliverMethodList,
  removeApplicationStatusList,
  removePlatformAccountList,
  removeFundationAccountList,
  removeStoreTypeList,
  removeStoreList,
  removeSlideTypeList,
  removeCampaignPlazaList,
  removeCampaignStatusList,
  removeCustomerList,
  removeEmployeeList,
  removeProfitTypeList,
  removeProfitDistributeStateList,
  removeUndistributedProfitList }
export default BookSharingPlatformService
