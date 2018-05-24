

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from '../launcher/Launcher'
import GlobalComponents from './'


function RouterConfig({ history }) {

	const {CarInspectionPlatformBizApp} = GlobalComponents
	const {ProvinceBizApp} = GlobalComponents
	const {CityBizApp} = GlobalComponents
	const {AvailableProductBizApp} = GlobalComponents
	const {AvailableVehicleTypeBizApp} = GlobalComponents
	const {AvailableVehicleUseCharacterBizApp} = GlobalComponents
	const {ContractBizApp} = GlobalComponents
	const {ServicePriceBizApp} = GlobalComponents
	const {AvailableServiceBizApp} = GlobalComponents
	const {ProductPriceBizApp} = GlobalComponents
	const {AvailableInsuranceBizApp} = GlobalComponents
	const {VehicleRepairingAllowanceBizApp} = GlobalComponents
	const {AvailableHandOverItemBizApp} = GlobalComponents
	const {CustomerBizApp} = GlobalComponents
	const {VehicleServiceCompanyBizApp} = GlobalComponents
	const {ServiceCompanyAuthenticationInfoBizApp} = GlobalComponents
	const {VehicleInspectionPlateNumberPatternBizApp} = GlobalComponents
	const {FileInspectionPlateNumberPatternBizApp} = GlobalComponents
	const {VehicleServiceCompanyBusinessScopeBizApp} = GlobalComponents
	const {CompanyQrcodePromotionRecordBizApp} = GlobalComponents
	const {VehicleServiceCompanyDispatcherBizApp} = GlobalComponents
	const {CompanyDiscountBizApp} = GlobalComponents
	const {VehicleServiceCompanyEmployeeBizApp} = GlobalComponents
	const {ServiceOrderFilterBizApp} = GlobalComponents
	const {CompanyEmployeeQualificationBizApp} = GlobalComponents
	const {CompanyEmployeeServingBizApp} = GlobalComponents
	const {CompanyEmployeeTerminationBizApp} = GlobalComponents
	const {EmployeeDrivingLicenseBizApp} = GlobalComponents
	const {InspectionStationBizApp} = GlobalComponents
	const {VehicleInfoBizApp} = GlobalComponents
	const {VehicleInspectionOrderBizApp} = GlobalComponents
	const {VehicleInspectionInsuranceOrderBizApp} = GlobalComponents
	const {VehicleInspectionOrderChargeBizApp} = GlobalComponents
	const {VehicleInspectionOrderServiceLogBizApp} = GlobalComponents
	const {VehicleInspectionOrderPaymentBizApp} = GlobalComponents
	const {HandOverChecklistItemBizApp} = GlobalComponents
	const {ServiceVehicleMovementC2mBizApp} = GlobalComponents
	const {ServiceVehicleMovementM2mBizApp} = GlobalComponents
	const {ServiceVehicleMovementM2cBizApp} = GlobalComponents
	const {ServiceFileMovementC2mBizApp} = GlobalComponents
	const {ServiceFileMovementM2mBizApp} = GlobalComponents
	const {ServiceFileMovementM2cBizApp} = GlobalComponents
	const {HandOverChecklistResultBizApp} = GlobalComponents
	const {ServiceInsuranceForInspectionBizApp} = GlobalComponents
	const {ServiceVehicleInspectionBizApp} = GlobalComponents
	const {ServiceFileInspectionBizApp} = GlobalComponents
	const {ServiceVehicleRepairingBizApp} = GlobalComponents
	const {RepairingAllowanceItemBizApp} = GlobalComponents
	const {VehicleRepairingPaymentBizApp} = GlobalComponents
	const {AvailableReviewItemBizApp} = GlobalComponents
	const {OrderReviewResultBizApp} = GlobalComponents
	const {AvailableRatingItemBizApp} = GlobalComponents
	const {OrderRatingResultBizApp} = GlobalComponents
	const {PreorderPromotionBizApp} = GlobalComponents
	const {OrderDiscountCouponBizApp} = GlobalComponents
	const {VehicleInspectionOrderCouponBizApp} = GlobalComponents
	const {AccountBizApp} = GlobalComponents
	const {ServiceCompanyAccountBizApp} = GlobalComponents
	const {RepairingCompanyAccountBizApp} = GlobalComponents
	const {InsuranceServiceAccountBizApp} = GlobalComponents
	const {MainOrderAccountBizApp} = GlobalComponents
	const {InspectionStationAccountBizApp} = GlobalComponents
	const {UserDomainBizApp} = GlobalComponents
	const {SecUserBizApp} = GlobalComponents
	const {SecUserBlockingBizApp} = GlobalComponents
	const {UserAppBizApp} = GlobalComponents
	const {ObjectAccessBizApp} = GlobalComponents
	const {LoginHistoryBizApp} = GlobalComponents
	const {GenericFormBizApp} = GlobalComponents
	const {FormMessageBizApp} = GlobalComponents
	const {FormFieldMessageBizApp} = GlobalComponents
	const {FormFieldBizApp} = GlobalComponents
	const {FormActionBizApp} = GlobalComponents



  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
          <Route path="/carInspectionPlatform/" component={CarInspectionPlatformBizApp} />
          <Route path="/province/" component={ProvinceBizApp} />
          <Route path="/city/" component={CityBizApp} />
          <Route path="/availableProduct/" component={AvailableProductBizApp} />
          <Route path="/availableVehicleType/" component={AvailableVehicleTypeBizApp} />
          <Route path="/availableVehicleUseCharacter/" component={AvailableVehicleUseCharacterBizApp} />
          <Route path="/contract/" component={ContractBizApp} />
          <Route path="/servicePrice/" component={ServicePriceBizApp} />
          <Route path="/availableService/" component={AvailableServiceBizApp} />
          <Route path="/productPrice/" component={ProductPriceBizApp} />
          <Route path="/availableInsurance/" component={AvailableInsuranceBizApp} />
          <Route path="/vehicleRepairingAllowance/" component={VehicleRepairingAllowanceBizApp} />
          <Route path="/availableHandOverItem/" component={AvailableHandOverItemBizApp} />
          <Route path="/customer/" component={CustomerBizApp} />
          <Route path="/vehicleServiceCompany/" component={VehicleServiceCompanyBizApp} />
          <Route path="/serviceCompanyAuthenticationInfo/" component={ServiceCompanyAuthenticationInfoBizApp} />
          <Route path="/vehicleInspectionPlateNumberPattern/" component={VehicleInspectionPlateNumberPatternBizApp} />
          <Route path="/fileInspectionPlateNumberPattern/" component={FileInspectionPlateNumberPatternBizApp} />
          <Route path="/vehicleServiceCompanyBusinessScope/" component={VehicleServiceCompanyBusinessScopeBizApp} />
          <Route path="/companyQrcodePromotionRecord/" component={CompanyQrcodePromotionRecordBizApp} />
          <Route path="/vehicleServiceCompanyDispatcher/" component={VehicleServiceCompanyDispatcherBizApp} />
          <Route path="/companyDiscount/" component={CompanyDiscountBizApp} />
          <Route path="/vehicleServiceCompanyEmployee/" component={VehicleServiceCompanyEmployeeBizApp} />
          <Route path="/serviceOrderFilter/" component={ServiceOrderFilterBizApp} />
          <Route path="/companyEmployeeQualification/" component={CompanyEmployeeQualificationBizApp} />
          <Route path="/companyEmployeeServing/" component={CompanyEmployeeServingBizApp} />
          <Route path="/companyEmployeeTermination/" component={CompanyEmployeeTerminationBizApp} />
          <Route path="/employeeDrivingLicense/" component={EmployeeDrivingLicenseBizApp} />
          <Route path="/inspectionStation/" component={InspectionStationBizApp} />
          <Route path="/vehicleInfo/" component={VehicleInfoBizApp} />
          <Route path="/vehicleInspectionOrder/" component={VehicleInspectionOrderBizApp} />
          <Route path="/vehicleInspectionInsuranceOrder/" component={VehicleInspectionInsuranceOrderBizApp} />
          <Route path="/vehicleInspectionOrderCharge/" component={VehicleInspectionOrderChargeBizApp} />
          <Route path="/vehicleInspectionOrderServiceLog/" component={VehicleInspectionOrderServiceLogBizApp} />
          <Route path="/vehicleInspectionOrderPayment/" component={VehicleInspectionOrderPaymentBizApp} />
          <Route path="/handOverChecklistItem/" component={HandOverChecklistItemBizApp} />
          <Route path="/serviceVehicleMovementC2m/" component={ServiceVehicleMovementC2mBizApp} />
          <Route path="/serviceVehicleMovementM2m/" component={ServiceVehicleMovementM2mBizApp} />
          <Route path="/serviceVehicleMovementM2c/" component={ServiceVehicleMovementM2cBizApp} />
          <Route path="/serviceFileMovementC2m/" component={ServiceFileMovementC2mBizApp} />
          <Route path="/serviceFileMovementM2m/" component={ServiceFileMovementM2mBizApp} />
          <Route path="/serviceFileMovementM2c/" component={ServiceFileMovementM2cBizApp} />
          <Route path="/handOverChecklistResult/" component={HandOverChecklistResultBizApp} />
          <Route path="/serviceInsuranceForInspection/" component={ServiceInsuranceForInspectionBizApp} />
          <Route path="/serviceVehicleInspection/" component={ServiceVehicleInspectionBizApp} />
          <Route path="/serviceFileInspection/" component={ServiceFileInspectionBizApp} />
          <Route path="/serviceVehicleRepairing/" component={ServiceVehicleRepairingBizApp} />
          <Route path="/repairingAllowanceItem/" component={RepairingAllowanceItemBizApp} />
          <Route path="/vehicleRepairingPayment/" component={VehicleRepairingPaymentBizApp} />
          <Route path="/availableReviewItem/" component={AvailableReviewItemBizApp} />
          <Route path="/orderReviewResult/" component={OrderReviewResultBizApp} />
          <Route path="/availableRatingItem/" component={AvailableRatingItemBizApp} />
          <Route path="/orderRatingResult/" component={OrderRatingResultBizApp} />
          <Route path="/preorderPromotion/" component={PreorderPromotionBizApp} />
          <Route path="/orderDiscountCoupon/" component={OrderDiscountCouponBizApp} />
          <Route path="/vehicleInspectionOrderCoupon/" component={VehicleInspectionOrderCouponBizApp} />
          <Route path="/account/" component={AccountBizApp} />
          <Route path="/serviceCompanyAccount/" component={ServiceCompanyAccountBizApp} />
          <Route path="/repairingCompanyAccount/" component={RepairingCompanyAccountBizApp} />
          <Route path="/insuranceServiceAccount/" component={InsuranceServiceAccountBizApp} />
          <Route path="/mainOrderAccount/" component={MainOrderAccountBizApp} />
          <Route path="/inspectionStationAccount/" component={InspectionStationAccountBizApp} />
          <Route path="/userDomain/" component={UserDomainBizApp} />
          <Route path="/secUser/" component={SecUserBizApp} />
          <Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
          <Route path="/userApp/" component={UserAppBizApp} />
          <Route path="/objectAccess/" component={ObjectAccessBizApp} />
          <Route path="/loginHistory/" component={LoginHistoryBizApp} />
          <Route path="/genericForm/" component={GenericFormBizApp} />
          <Route path="/formMessage/" component={FormMessageBizApp} />
          <Route path="/formFieldMessage/" component={FormFieldMessageBizApp} />
          <Route path="/formField/" component={FormFieldBizApp} />
          <Route path="/formAction/" component={FormActionBizApp} />
         <Route path="/" component={Launcher} />
        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig











