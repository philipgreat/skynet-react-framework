import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}carInspectionPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}carInspectionPlatformManager/loadCarInspectionPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}






const addPlatformConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addPlatformConfiguration/platformId/userAgreement/invoiceInstruction/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePlatformConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updatePlatformConfigurationProperties/carInspectionPlatformId/id/userAgreement/invoiceInstruction/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePlatformConfigurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removePlatformConfigurationList/carInspectionPlatformId/platformConfigurationIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addProvince/platformId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateProvinceProperties/carInspectionPlatformId/id/name/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeProvinceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeProvinceList/carInspectionPlatformId/provinceIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableProduct/platformId/productName/serviceKey/serviceDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableProductProperties/carInspectionPlatformId/id/productName/serviceKey/serviceDescription/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableProductList/carInspectionPlatformId/availableProductIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableVehicleType = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableVehicleType/platformId/vehicleType/vehicleTypeAlias/canPlaceOrder/canDoExempt/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableVehicleType = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableVehicleTypeProperties/carInspectionPlatformId/id/vehicleType/vehicleTypeAlias/canPlaceOrder/canDoExempt/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableVehicleTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableVehicleTypeList/carInspectionPlatformId/availableVehicleTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableVehicleUseCharacter = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableVehicleUseCharacter/platformId/name/aliasName/canDoExempt/commercialVehicle/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableVehicleUseCharacter = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableVehicleUseCharacterProperties/carInspectionPlatformId/id/name/aliasName/canDoExempt/commercialVehicle/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableVehicleUseCharacterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableVehicleUseCharacterList/carInspectionPlatformId/availableVehicleUseCharacterIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addContract/platformId/companyId/startDate/endDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateContractProperties/carInspectionPlatformId/id/startDate/endDate/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeContractList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeContractList/carInspectionPlatformId/contractIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addCustomer/platformId/nickName/logoImage/weixinOpenid/weixinAppid/longitude/latitude/secUserId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateCustomerProperties/carInspectionPlatformId/id/nickName/logoImage/weixinOpenid/weixinAppid/longitude/latitude/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeCustomerList/carInspectionPlatformId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleServiceCompany/platformId/companyName/description/operatingStatus/addressCityId/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/canExemptProxyFee/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/promoteQrcodeImage/orderContact/orderContactPhone/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleServiceCompanyProperties/carInspectionPlatformId/id/companyName/description/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/canExemptProxyFee/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/promoteQrcodeImage/orderContact/orderContactPhone/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeVehicleServiceCompanyList/carInspectionPlatformId/vehicleServiceCompanyIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInfo/platformId/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInfoProperties/carInspectionPlatformId/id/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInfoList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeVehicleInfoList/carInspectionPlatformId/vehicleInfoIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInspectionOrder/platformId/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyId/serviceCompanyInfo/contactAddressDetail/contactAddressCityId/customerId/agreed/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/longitude/latitude/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInspectionOrderProperties/carInspectionPlatformId/id/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyInfo/contactAddressDetail/agreed/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/longitude/latitude/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeVehicleInspectionOrderList/carInspectionPlatformId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableReviewItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableReviewItem/platformId/reviewName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableReviewItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableReviewItemProperties/carInspectionPlatformId/id/reviewName/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableReviewItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableReviewItemList/carInspectionPlatformId/availableReviewItemIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAvailableRatingItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableRatingItem/platformId/ratingName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAvailableRatingItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableRatingItemProperties/carInspectionPlatformId/id/ratingName/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAvailableRatingItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableRatingItemList/carInspectionPlatformId/availableRatingItemIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addPreorderPromotion = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addPreorderPromotion/platformId/promotionMessage/preorderDays/discountAmount/startDate/endDate/productId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePreorderPromotion = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updatePreorderPromotionProperties/carInspectionPlatformId/id/promotionMessage/preorderDays/discountAmount/startDate/endDate/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePreorderPromotionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removePreorderPromotionList/carInspectionPlatformId/preorderPromotionIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addOrderDiscountCoupon/platformId/couponTitle/discountAmount/endDate/couponStatus/shareCode/customerId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateOrderDiscountCouponProperties/carInspectionPlatformId/id/couponTitle/discountAmount/endDate/couponStatus/shareCode/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeOrderDiscountCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeOrderDiscountCouponList/carInspectionPlatformId/orderDiscountCouponIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAccount/platformId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAccountProperties/carInspectionPlatformId/id/description/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAccountList/carInspectionPlatformId/accountIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CarInspectionPlatformService = { view,
  load,
  addPlatformConfiguration,
  addProvince,
  addAvailableProduct,
  addAvailableVehicleType,
  addAvailableVehicleUseCharacter,
  addContract,
  addCustomer,
  addVehicleServiceCompany,
  addVehicleInfo,
  addVehicleInspectionOrder,
  addAvailableReviewItem,
  addAvailableRatingItem,
  addPreorderPromotion,
  addOrderDiscountCoupon,
  addAccount,
  updatePlatformConfiguration,
  updateProvince,
  updateAvailableProduct,
  updateAvailableVehicleType,
  updateAvailableVehicleUseCharacter,
  updateContract,
  updateCustomer,
  updateVehicleServiceCompany,
  updateVehicleInfo,
  updateVehicleInspectionOrder,
  updateAvailableReviewItem,
  updateAvailableRatingItem,
  updatePreorderPromotion,
  updateOrderDiscountCoupon,
  updateAccount,
  removePlatformConfigurationList,
  removeProvinceList,
  removeAvailableProductList,
  removeAvailableVehicleTypeList,
  removeAvailableVehicleUseCharacterList,
  removeContractList,
  removeCustomerList,
  removeVehicleServiceCompanyList,
  removeVehicleInfoList,
  removeVehicleInspectionOrderList,
  removeAvailableReviewItemList,
  removeAvailableRatingItemList,
  removePreorderPromotionList,
  removeOrderDiscountCouponList,
  removeAccountList }
export default CarInspectionPlatformService

