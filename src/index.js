
import dva from 'dva'
import 'moment/locale/zh-cn'
import models from './models'
import './polyfill'
import './g2'
import RouterConfig from './router'
// import { browserHistory } from 'dva/router'
import './index.less'

import LauncherModel from './launcher/Launcher.model'
import BreadcrumbModel from './launcher/Breadcrumb.model'
import CarInspectionPlatformModel from './bizcomponents/carinspectionplatform/CarInspectionPlatform.model'
import IdentityCardModel from './bizcomponents/identitycard/IdentityCard.model'
import VehiclePermitModel from './bizcomponents/vehiclepermit/VehiclePermit.model'
import ProvinceModel from './bizcomponents/province/Province.model'
import CityModel from './bizcomponents/city/City.model'
import AvailableProductModel from './bizcomponents/availableproduct/AvailableProduct.model'
import AvailableVehicleTypeModel from './bizcomponents/availablevehicletype/AvailableVehicleType.model'
import AvailableVehicleUseCharacterModel from './bizcomponents/availablevehicleusecharacter/AvailableVehicleUseCharacter.model'
import ContractModel from './bizcomponents/contract/Contract.model'
import ServicePriceModel from './bizcomponents/serviceprice/ServicePrice.model'
import AvailableServiceModel from './bizcomponents/availableservice/AvailableService.model'
import ProductPriceModel from './bizcomponents/productprice/ProductPrice.model'
import AvailableInsuranceModel from './bizcomponents/availableinsurance/AvailableInsurance.model'
import VehicleRepairingAllowanceModel from './bizcomponents/vehiclerepairingallowance/VehicleRepairingAllowance.model'
import AvailableHandOverItemModel from './bizcomponents/availablehandoveritem/AvailableHandOverItem.model'
import CustomerModel from './bizcomponents/customer/Customer.model'
import VehicleServiceCompanyModel from './bizcomponents/vehicleservicecompany/VehicleServiceCompany.model'
import ServiceCompanyAuthenticationInfoModel from './bizcomponents/servicecompanyauthenticationinfo/ServiceCompanyAuthenticationInfo.model'
import VehicleInspectionPlateNumberPatternModel from './bizcomponents/vehicleinspectionplatenumberpattern/VehicleInspectionPlateNumberPattern.model'
import FileInspectionPlateNumberPatternModel from './bizcomponents/fileinspectionplatenumberpattern/FileInspectionPlateNumberPattern.model'
import VehicleServiceCompanyBusinessScopeModel from './bizcomponents/vehicleservicecompanybusinessscope/VehicleServiceCompanyBusinessScope.model'
import CompanyQrcodePromotionRecordModel from './bizcomponents/companyqrcodepromotionrecord/CompanyQrcodePromotionRecord.model'
import VehicleServiceCompanyDispatcherModel from './bizcomponents/vehicleservicecompanydispatcher/VehicleServiceCompanyDispatcher.model'
import CompanyDiscountModel from './bizcomponents/companydiscount/CompanyDiscount.model'
import VehicleServiceCompanyEmployeeModel from './bizcomponents/vehicleservicecompanyemployee/VehicleServiceCompanyEmployee.model'
import ServiceOrderFilterModel from './bizcomponents/serviceorderfilter/ServiceOrderFilter.model'
import CompanyEmployeeQualificationModel from './bizcomponents/companyemployeequalification/CompanyEmployeeQualification.model'
import CompanyEmployeeServingModel from './bizcomponents/companyemployeeserving/CompanyEmployeeServing.model'
import CompanyEmployeeTerminationModel from './bizcomponents/companyemployeetermination/CompanyEmployeeTermination.model'
import EmployeeDrivingLicenseModel from './bizcomponents/employeedrivinglicense/EmployeeDrivingLicense.model'
import InspectionStationModel from './bizcomponents/inspectionstation/InspectionStation.model'
import VehicleInfoModel from './bizcomponents/vehicleinfo/VehicleInfo.model'
import VehicleInspectionOrderModel from './bizcomponents/vehicleinspectionorder/VehicleInspectionOrder.model'
import VehicleInspectionInsuranceOrderModel from './bizcomponents/vehicleinspectioninsuranceorder/VehicleInspectionInsuranceOrder.model'
import VehicleInspectionOrderChargeModel from './bizcomponents/vehicleinspectionordercharge/VehicleInspectionOrderCharge.model'
import VehicleInspectionOrderServiceLogModel from './bizcomponents/vehicleinspectionorderservicelog/VehicleInspectionOrderServiceLog.model'
import VehicleInspectionOrderPaymentModel from './bizcomponents/vehicleinspectionorderpayment/VehicleInspectionOrderPayment.model'
import HandOverChecklistItemModel from './bizcomponents/handoverchecklistitem/HandOverChecklistItem.model'
import ServiceVehicleMovementC2mModel from './bizcomponents/servicevehiclemovementc2m/ServiceVehicleMovementC2m.model'
import ServiceVehicleMovementM2mModel from './bizcomponents/servicevehiclemovementm2m/ServiceVehicleMovementM2m.model'
import ServiceVehicleMovementM2cModel from './bizcomponents/servicevehiclemovementm2c/ServiceVehicleMovementM2c.model'
import ServiceFileMovementC2mModel from './bizcomponents/servicefilemovementc2m/ServiceFileMovementC2m.model'
import ServiceFileMovementM2mModel from './bizcomponents/servicefilemovementm2m/ServiceFileMovementM2m.model'
import ServiceFileMovementM2cModel from './bizcomponents/servicefilemovementm2c/ServiceFileMovementM2c.model'
import HandOverChecklistResultModel from './bizcomponents/handoverchecklistresult/HandOverChecklistResult.model'
import ServiceInsuranceForInspectionModel from './bizcomponents/serviceinsuranceforinspection/ServiceInsuranceForInspection.model'
import ServiceVehicleInspectionModel from './bizcomponents/servicevehicleinspection/ServiceVehicleInspection.model'
import ServiceFileInspectionModel from './bizcomponents/servicefileinspection/ServiceFileInspection.model'
import ServiceVehicleRepairingModel from './bizcomponents/servicevehiclerepairing/ServiceVehicleRepairing.model'
import RepairingAllowanceItemModel from './bizcomponents/repairingallowanceitem/RepairingAllowanceItem.model'
import VehicleRepairingPaymentModel from './bizcomponents/vehiclerepairingpayment/VehicleRepairingPayment.model'
import AvailableReviewItemModel from './bizcomponents/availablereviewitem/AvailableReviewItem.model'
import OrderReviewResultModel from './bizcomponents/orderreviewresult/OrderReviewResult.model'
import AvailableRatingItemModel from './bizcomponents/availableratingitem/AvailableRatingItem.model'
import OrderRatingResultModel from './bizcomponents/orderratingresult/OrderRatingResult.model'
import PreorderPromotionModel from './bizcomponents/preorderpromotion/PreorderPromotion.model'
import OrderDiscountCouponModel from './bizcomponents/orderdiscountcoupon/OrderDiscountCoupon.model'
import VehicleInspectionOrderCouponModel from './bizcomponents/vehicleinspectionordercoupon/VehicleInspectionOrderCoupon.model'
import AccountModel from './bizcomponents/account/Account.model'
import ServiceCompanyAccountModel from './bizcomponents/servicecompanyaccount/ServiceCompanyAccount.model'
import RepairingCompanyAccountModel from './bizcomponents/repairingcompanyaccount/RepairingCompanyAccount.model'
import InsuranceServiceAccountModel from './bizcomponents/insuranceserviceaccount/InsuranceServiceAccount.model'
import MainOrderAccountModel from './bizcomponents/mainorderaccount/MainOrderAccount.model'
import InspectionStationAccountModel from './bizcomponents/inspectionstationaccount/InspectionStationAccount.model'
import UserDomainModel from './bizcomponents/userdomain/UserDomain.model'
import SecUserModel from './bizcomponents/secuser/SecUser.model'
import SecUserBlockingModel from './bizcomponents/secuserblocking/SecUserBlocking.model'
import UserAppModel from './bizcomponents/userapp/UserApp.model'
import ObjectAccessModel from './bizcomponents/objectaccess/ObjectAccess.model'
import LoginHistoryModel from './bizcomponents/loginhistory/LoginHistory.model'
import GenericFormModel from './bizcomponents/genericform/GenericForm.model'
import FormMessageModel from './bizcomponents/formmessage/FormMessage.model'
import FormFieldMessageModel from './bizcomponents/formfieldmessage/FormFieldMessage.model'
import FormFieldModel from './bizcomponents/formfield/FormField.model'
import FormActionModel from './bizcomponents/formaction/FormAction.model'


// 1. Initialize
const app = dva({
  // history: browserHistory,
})

// 2. Plugins
// app.use({})


app.model(LauncherModel)
app.model(BreadcrumbModel)

app.model(CarInspectionPlatformModel)
app.model(IdentityCardModel)
app.model(VehiclePermitModel)
app.model(ProvinceModel)
app.model(CityModel)
app.model(AvailableProductModel)
app.model(AvailableVehicleTypeModel)
app.model(AvailableVehicleUseCharacterModel)
app.model(ContractModel)
app.model(ServicePriceModel)
app.model(AvailableServiceModel)
app.model(ProductPriceModel)
app.model(AvailableInsuranceModel)
app.model(VehicleRepairingAllowanceModel)
app.model(AvailableHandOverItemModel)
app.model(CustomerModel)
app.model(VehicleServiceCompanyModel)
app.model(ServiceCompanyAuthenticationInfoModel)
app.model(VehicleInspectionPlateNumberPatternModel)
app.model(FileInspectionPlateNumberPatternModel)
app.model(VehicleServiceCompanyBusinessScopeModel)
app.model(CompanyQrcodePromotionRecordModel)
app.model(VehicleServiceCompanyDispatcherModel)
app.model(CompanyDiscountModel)
app.model(VehicleServiceCompanyEmployeeModel)
app.model(ServiceOrderFilterModel)
app.model(CompanyEmployeeQualificationModel)
app.model(CompanyEmployeeServingModel)
app.model(CompanyEmployeeTerminationModel)
app.model(EmployeeDrivingLicenseModel)
app.model(InspectionStationModel)
app.model(VehicleInfoModel)
app.model(VehicleInspectionOrderModel)
app.model(VehicleInspectionInsuranceOrderModel)
app.model(VehicleInspectionOrderChargeModel)
app.model(VehicleInspectionOrderServiceLogModel)
app.model(VehicleInspectionOrderPaymentModel)
app.model(HandOverChecklistItemModel)
app.model(ServiceVehicleMovementC2mModel)
app.model(ServiceVehicleMovementM2mModel)
app.model(ServiceVehicleMovementM2cModel)
app.model(ServiceFileMovementC2mModel)
app.model(ServiceFileMovementM2mModel)
app.model(ServiceFileMovementM2cModel)
app.model(HandOverChecklistResultModel)
app.model(ServiceInsuranceForInspectionModel)
app.model(ServiceVehicleInspectionModel)
app.model(ServiceFileInspectionModel)
app.model(ServiceVehicleRepairingModel)
app.model(RepairingAllowanceItemModel)
app.model(VehicleRepairingPaymentModel)
app.model(AvailableReviewItemModel)
app.model(OrderReviewResultModel)
app.model(AvailableRatingItemModel)
app.model(OrderRatingResultModel)
app.model(PreorderPromotionModel)
app.model(OrderDiscountCouponModel)
app.model(VehicleInspectionOrderCouponModel)
app.model(AccountModel)
app.model(ServiceCompanyAccountModel)
app.model(RepairingCompanyAccountModel)
app.model(InsuranceServiceAccountModel)
app.model(MainOrderAccountModel)
app.model(InspectionStationAccountModel)
app.model(UserDomainModel)
app.model(SecUserModel)
app.model(SecUserBlockingModel)
app.model(UserAppModel)
app.model(ObjectAccessModel)
app.model(LoginHistoryModel)
app.model(GenericFormModel)
app.model(FormMessageModel)
app.model(FormFieldMessageModel)
app.model(FormFieldModel)
app.model(FormActionModel)


// 3. Model move to router
models.forEach((m) => {
  app.model(m)
})

// 4. Router
app.router(RouterConfig)

// 5. Start
app.start('#root')








