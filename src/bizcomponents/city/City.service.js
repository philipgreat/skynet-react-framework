import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}cityManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/loadCity/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateProvince = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/requestCandidateProvince/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherProvince = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}cityManager/transferToAnotherProvince/id/anotherProvinceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addProductPrice/cityId/productId/vehicleType/greenVehicle/inspectionPrice/exhaustDetectionPrice/secondLevelMaintenancePrice/gradeEstimationPrice/agentServicePrice/toStoreServicePrice/discountAgentServicePrice/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateProductPriceProperties/cityId/id/vehicleType/greenVehicle/inspectionPrice/exhaustDetectionPrice/secondLevelMaintenancePrice/gradeEstimationPrice/agentServicePrice/toStoreServicePrice/discountAgentServicePrice/description/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeProductPriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeProductPriceList/cityId/productPriceIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addVehicleServiceCompany/addressCityId/companyName/description/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/canExemptProxyFee/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/promoteQrcodeImage/orderContact/orderContactPhone/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateVehicleServiceCompanyProperties/cityId/id/companyName/description/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/canExemptProxyFee/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/promoteQrcodeImage/orderContact/orderContactPhone/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleServiceCompanyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeVehicleServiceCompanyList/cityId/vehicleServiceCompanyIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInspectionStation = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addInspectionStation/addressCityId/name/operatingStatus/addressDetail/longitude/latitude/contactName/contactMobile/metrologyAccreditationImage/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInspectionStation = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateInspectionStationProperties/cityId/id/name/operatingStatus/addressDetail/longitude/latitude/contactName/contactMobile/metrologyAccreditationImage/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInspectionStationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeInspectionStationList/cityId/inspectionStationIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addVehicleInspectionOrder/contactAddressCityId/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyId/serviceCompanyInfo/contactAddressDetail/customerId/agreed/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/longitude/latitude/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateVehicleInspectionOrderProperties/cityId/id/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyInfo/contactAddressDetail/agreed/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/longitude/latitude/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeVehicleInspectionOrderList/cityId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CityService = { view,
  load,
  addProductPrice,
  addVehicleServiceCompany,
  addInspectionStation,
  addVehicleInspectionOrder,
  updateProductPrice,
  updateVehicleServiceCompany,
  updateInspectionStation,
  updateVehicleInspectionOrder,
  removeProductPriceList,
  removeVehicleServiceCompanyList,
  removeInspectionStationList,
  removeVehicleInspectionOrderList,
  requestCandidateProvince,
  transferToAnotherProvince }
export default CityService

