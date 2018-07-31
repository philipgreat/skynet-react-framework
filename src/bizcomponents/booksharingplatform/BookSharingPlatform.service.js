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






const addPlatformConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addPlatformConfiguration/platformId/memberServiceAgreement/bookSharingAgreement/accountRechargeAgreement/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updatePlatformConfigurationProperties/bookSharingPlatformId/id/memberServiceAgreement/bookSharingAgreement/accountRechargeAgreement/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformConfigurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removePlatformConfigurationList/bookSharingPlatformId/platformConfigurationIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addAvailableToken/bookSharingPlatformId/name/tokenCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateAvailableTokenProperties/bookSharingPlatformId/id/name/tokenCode/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableTokenList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeAvailableTokenList/bookSharingPlatformId/availableTokenIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAccountData = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addAccountData/bookSharingPlatformId/summary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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
  const url = `${PREFIX}bookSharingPlatformManager/addMemberServiceProduct/platformId/productName/productDescription/productPriority/productCoverImage/bookBorrowingLimitPrice/bookBorrowingCount/bookPurchasingDiscountRate/overduePay/freeBorrowingDays/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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
  const url = `${PREFIX}bookSharingPlatformManager/addBook/platformId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookRecommendId/bookPlazaId/bookSummary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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


const addPlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addPlatformAccount/platformId/name/amount/accountDataId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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
  const url = `${PREFIX}bookSharingPlatformManager/addFundationAccount/platformId/name/amount/accountDataId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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


const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addStore/platformId/storeName/storeAddress/storeOpenTime/storeRoomNumber/longitude/latitude/storeImage/storeType/cityId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateStoreProperties/bookSharingPlatformId/id/storeName/storeAddress/storeOpenTime/storeRoomNumber/longitude/latitude/storeImage/storeType/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeStoreList/bookSharingPlatformId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignPlaza = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCampaignPlaza/platformId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
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


const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCustomer/platformId/nickName/logoImage/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/mobileNumber/birthday/sexuality/realName/identityCardNumber/familyAddress/memberServiceId/memberServiceStartDate/memberServiceExpireDate/memberServiceDailyPay/accountBalance/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateCustomerProperties/bookSharingPlatformId/id/nickName/logoImage/miniProgramOpenid/serviceAccountOpenid/wechatUnionId/longitude/latitude/mobileNumber/birthday/sexuality/realName/identityCardNumber/familyAddress/memberServiceStartDate/memberServiceExpireDate/memberServiceDailyPay/accountBalance/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeCustomerList/bookSharingPlatformId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookSharingPlatformService = { view,
  load,
  addPlatformConfiguration,
  addAvailableToken,
  addAccountData,
  addCity,
  addBookPlaza,
  addMemberServiceProduct,
  addMainOrder,
  addBook,
  addPlatformAccount,
  addFundationAccount,
  addStore,
  addCampaignPlaza,
  addCustomer,
  updatePlatformConfiguration,
  updateAvailableToken,
  updateAccountData,
  updateCity,
  updateBookPlaza,
  updateMemberServiceProduct,
  updateMainOrder,
  updateBook,
  updatePlatformAccount,
  updateFundationAccount,
  updateStore,
  updateCampaignPlaza,
  updateCustomer,
  removePlatformConfigurationList,
  removeAvailableTokenList,
  removeAccountDataList,
  removeCityList,
  removeBookPlazaList,
  removeMemberServiceProductList,
  removeMainOrderList,
  removeBookList,
  removePlatformAccountList,
  removeFundationAccountList,
  removeStoreList,
  removeCampaignPlazaList,
  removeCustomerList }
export default BookSharingPlatformService

