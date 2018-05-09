

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from './launcher/Launcher'

import {CarInspectionPlatformBizApp} from './custcomponents';
import {IdentityCardBizApp} from './custcomponents';
import {VehiclePermitBizApp} from './custcomponents';
import {ProvinceBizApp} from './custcomponents';
import {CityBizApp} from './custcomponents';
import {AvailableProductBizApp} from './custcomponents';
import {AvailableVehicleTypeBizApp} from './custcomponents';
import {AvailableVehicleUseCharacterBizApp} from './custcomponents';
import {ContractBizApp} from './custcomponents';
import {ServicePriceBizApp} from './custcomponents';
import {AvailableServiceBizApp} from './custcomponents';
import {ProductPriceBizApp} from './custcomponents';
import {AvailableInsuranceBizApp} from './custcomponents';
import {VehicleRepairingAllowanceBizApp} from './custcomponents';
import {AvailableHandOverItemBizApp} from './custcomponents';
import {CustomerBizApp} from './custcomponents';
import {VehicleServiceCompanyBizApp} from './custcomponents';
import {ServiceCompanyAuthenticationInfoBizApp} from './custcomponents';
import {VehicleInspectionPlateNumberPatternBizApp} from './custcomponents';
import {FileInspectionPlateNumberPatternBizApp} from './custcomponents';
import {VehicleServiceCompanyBusinessScopeBizApp} from './custcomponents';
import {CompanyQrcodePromotionRecordBizApp} from './custcomponents';
import {VehicleServiceCompanyDispatcherBizApp} from './custcomponents';
import {CompanyDiscountBizApp} from './custcomponents';
import {VehicleServiceCompanyEmployeeBizApp} from './custcomponents';
import {ServiceOrderFilterBizApp} from './custcomponents';
import {CompanyEmployeeQualificationBizApp} from './custcomponents';
import {CompanyEmployeeServingBizApp} from './custcomponents';
import {CompanyEmployeeTerminationBizApp} from './custcomponents';
import {EmployeeDrivingLicenseBizApp} from './custcomponents';
import {InspectionStationBizApp} from './custcomponents';
import {VehicleInfoBizApp} from './custcomponents';
import {VehicleInspectionOrderBizApp} from './custcomponents';
import {VehicleInspectionInsuranceOrderBizApp} from './custcomponents';
import {VehicleInspectionOrderChargeBizApp} from './custcomponents';
import {VehicleInspectionOrderServiceLogBizApp} from './custcomponents';
import {VehicleInspectionOrderPaymentBizApp} from './custcomponents';
import {HandOverChecklistItemBizApp} from './custcomponents';
import {ServiceVehicleMovementC2mBizApp} from './custcomponents';
import {ServiceVehicleMovementM2mBizApp} from './custcomponents';
import {ServiceVehicleMovementM2cBizApp} from './custcomponents';
import {ServiceFileMovementC2mBizApp} from './custcomponents';
import {ServiceFileMovementM2mBizApp} from './custcomponents';
import {ServiceFileMovementM2cBizApp} from './custcomponents';
import {HandOverChecklistResultBizApp} from './custcomponents';
import {ServiceInsuranceForInspectionBizApp} from './custcomponents';
import {ServiceVehicleInspectionBizApp} from './custcomponents';
import {ServiceFileInspectionBizApp} from './custcomponents';
import {ServiceVehicleRepairingBizApp} from './custcomponents';
import {RepairingAllowanceItemBizApp} from './custcomponents';
import {VehicleRepairingPaymentBizApp} from './custcomponents';
import {AvailableReviewItemBizApp} from './custcomponents';
import {OrderReviewResultBizApp} from './custcomponents';
import {AvailableRatingItemBizApp} from './custcomponents';
import {OrderRatingResultBizApp} from './custcomponents';
import {PreorderPromotionBizApp} from './custcomponents';
import {OrderDiscountCouponBizApp} from './custcomponents';
import {VehicleInspectionOrderCouponBizApp} from './custcomponents';
import {AccountBizApp} from './custcomponents';
import {ServiceCompanyAccountBizApp} from './custcomponents';
import {RepairingCompanyAccountBizApp} from './custcomponents';
import {InsuranceServiceAccountBizApp} from './custcomponents';
import {MainOrderAccountBizApp} from './custcomponents';
import {InspectionStationAccountBizApp} from './custcomponents';
import {UserDomainBizApp} from './custcomponents';
import {SecUserBizApp} from './custcomponents';
import {SecUserBlockingBizApp} from './custcomponents';
import {UserAppBizApp} from './custcomponents';
import {ObjectAccessBizApp} from './custcomponents';
import {LoginHistoryBizApp} from './custcomponents';
import {GenericFormBizApp} from './custcomponents';
import {FormMessageBizApp} from './custcomponents';
import {FormFieldMessageBizApp} from './custcomponents';
import {FormFieldBizApp} from './custcomponents';
import {FormActionBizApp} from './custcomponents';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
          <Route path="/carInspectionPlatform/" component={CarInspectionPlatformBizApp} />
          <Route path="/identityCard/" component={IdentityCardBizApp} />
          <Route path="/vehiclePermit/" component={VehiclePermitBizApp} />
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











