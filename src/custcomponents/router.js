

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from '../launcher/Launcher'
import GlobalComponents from './'


function RouterConfig({ history }) {

<<<<<<< HEAD
	const {CarInspectionPlatformBizApp} = GlobalComponents
	const {PlatformConfigurationBizApp} = GlobalComponents
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
=======
	const {LossAssessmentRecordBizApp} = GlobalComponents
	const {BookSharingPlatformBizApp} = GlobalComponents
	const {AvailableTokenBizApp} = GlobalComponents
	const {AccountDataBizApp} = GlobalComponents
	const {CityBizApp} = GlobalComponents
	const {BookPlazaBizApp} = GlobalComponents
	const {BookRecommendBizApp} = GlobalComponents
	const {BookSharingIncomeMetricBizApp} = GlobalComponents
	const {BookDonationIncomeMetricBizApp} = GlobalComponents
	const {MemberServiceIncomeMetricBizApp} = GlobalComponents
	const {MemberServiceProductBizApp} = GlobalComponents
	const {TokenInMemberServiceProductBizApp} = GlobalComponents
	const {MemberServiceBundleSkuBizApp} = GlobalComponents
	const {LineItemBizApp} = GlobalComponents
	const {MainOrderPaymentBizApp} = GlobalComponents
	const {MainOrderBizApp} = GlobalComponents
	const {OrderLogBizApp} = GlobalComponents
	const {BookBizApp} = GlobalComponents
	const {PrinterBizApp} = GlobalComponents
	const {PrinterTaskBizApp} = GlobalComponents
	const {BookCopyStatusBizApp} = GlobalComponents
	const {BookCopyBizApp} = GlobalComponents
	const {BookCopyTransferBizApp} = GlobalComponents
	const {BookTakeStockPlanBizApp} = GlobalComponents
	const {BookTakeStockResultBizApp} = GlobalComponents
	const {BookCopyOperationRecordBizApp} = GlobalComponents
	const {BorrowingHistoryBizApp} = GlobalComponents
	const {BorrowingExpiredSkuBizApp} = GlobalComponents
	const {BookReviewTypeBizApp} = GlobalComponents
	const {BookReviewBizApp} = GlobalComponents
	const {BookReviewLikeBizApp} = GlobalComponents
	const {BookCopySharingApplicationBizApp} = GlobalComponents
	const {PlatformAccountBizApp} = GlobalComponents
	const {MemberServiceRevenueBizApp} = GlobalComponents
	const {PlatformAccountDetailsBizApp} = GlobalComponents
	const {FundationAccountBizApp} = GlobalComponents
	const {FundationAccountDetailsBizApp} = GlobalComponents
	const {StoreAccountBizApp} = GlobalComponents
	const {StoreAccountDetailsBizApp} = GlobalComponents
	const {TransactionTypeBizApp} = GlobalComponents
	const {CustomerAccountTransactionBizApp} = GlobalComponents
	const {StoreBizApp} = GlobalComponents
	const {StoreSlideBizApp} = GlobalComponents
	const {CampaignPlazaBizApp} = GlobalComponents
	const {CampaignBizApp} = GlobalComponents
	const {CampaignRegisterHistoryBizApp} = GlobalComponents
	const {CampaignReviewBizApp} = GlobalComponents
	const {CampaignLikeBizApp} = GlobalComponents
	const {CustomerBizApp} = GlobalComponents
	const {ShieldCustomerBizApp} = GlobalComponents
	const {InformBizApp} = GlobalComponents
	const {EmployeeBizApp} = GlobalComponents
	const {EmployeeWorkingStoreBizApp} = GlobalComponents
	const {RoleBizApp} = GlobalComponents
>>>>>>> 348f929f40a850bd475e4c69daca9a25322a77b7
	const {UserDomainBizApp} = GlobalComponents
	const {SecUserBizApp} = GlobalComponents
	const {SecUserBlockingBizApp} = GlobalComponents
	const {UserAppBizApp} = GlobalComponents
	const {ObjectAccessBizApp} = GlobalComponents
	const {LoginHistoryBizApp} = GlobalComponents
<<<<<<< HEAD
=======
	const {GenericFormBizApp} = GlobalComponents
	const {FormMessageBizApp} = GlobalComponents
	const {FormFieldMessageBizApp} = GlobalComponents
	const {FormFieldBizApp} = GlobalComponents
	const {FormActionBizApp} = GlobalComponents
	const {ActionTokenBizApp} = GlobalComponents
>>>>>>> 348f929f40a850bd475e4c69daca9a25322a77b7



  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
<<<<<<< HEAD
          <Route path="/carInspectionPlatform/" component={CarInspectionPlatformBizApp} />
          <Route path="/platformConfiguration/" component={PlatformConfigurationBizApp} />
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
=======
          <Route path="/lossAssessmentRecord/" component={LossAssessmentRecordBizApp} />
          <Route path="/bookSharingPlatform/" component={BookSharingPlatformBizApp} />
          <Route path="/availableToken/" component={AvailableTokenBizApp} />
          <Route path="/accountData/" component={AccountDataBizApp} />
          <Route path="/city/" component={CityBizApp} />
          <Route path="/bookPlaza/" component={BookPlazaBizApp} />
          <Route path="/bookRecommend/" component={BookRecommendBizApp} />
          <Route path="/bookSharingIncomeMetric/" component={BookSharingIncomeMetricBizApp} />
          <Route path="/bookDonationIncomeMetric/" component={BookDonationIncomeMetricBizApp} />
          <Route path="/memberServiceIncomeMetric/" component={MemberServiceIncomeMetricBizApp} />
          <Route path="/memberServiceProduct/" component={MemberServiceProductBizApp} />
          <Route path="/tokenInMemberServiceProduct/" component={TokenInMemberServiceProductBizApp} />
          <Route path="/memberServiceBundleSku/" component={MemberServiceBundleSkuBizApp} />
          <Route path="/lineItem/" component={LineItemBizApp} />
          <Route path="/mainOrderPayment/" component={MainOrderPaymentBizApp} />
          <Route path="/mainOrder/" component={MainOrderBizApp} />
          <Route path="/orderLog/" component={OrderLogBizApp} />
          <Route path="/book/" component={BookBizApp} />
          <Route path="/printer/" component={PrinterBizApp} />
          <Route path="/printerTask/" component={PrinterTaskBizApp} />
          <Route path="/bookCopyStatus/" component={BookCopyStatusBizApp} />
          <Route path="/bookCopy/" component={BookCopyBizApp} />
          <Route path="/bookCopyTransfer/" component={BookCopyTransferBizApp} />
          <Route path="/bookTakeStockPlan/" component={BookTakeStockPlanBizApp} />
          <Route path="/bookTakeStockResult/" component={BookTakeStockResultBizApp} />
          <Route path="/bookCopyOperationRecord/" component={BookCopyOperationRecordBizApp} />
          <Route path="/borrowingHistory/" component={BorrowingHistoryBizApp} />
          <Route path="/borrowingExpiredSku/" component={BorrowingExpiredSkuBizApp} />
          <Route path="/bookReviewType/" component={BookReviewTypeBizApp} />
          <Route path="/bookReview/" component={BookReviewBizApp} />
          <Route path="/bookReviewLike/" component={BookReviewLikeBizApp} />
          <Route path="/bookCopySharingApplication/" component={BookCopySharingApplicationBizApp} />
          <Route path="/platformAccount/" component={PlatformAccountBizApp} />
          <Route path="/memberServiceRevenue/" component={MemberServiceRevenueBizApp} />
          <Route path="/platformAccountDetails/" component={PlatformAccountDetailsBizApp} />
          <Route path="/fundationAccount/" component={FundationAccountBizApp} />
          <Route path="/fundationAccountDetails/" component={FundationAccountDetailsBizApp} />
          <Route path="/storeAccount/" component={StoreAccountBizApp} />
          <Route path="/storeAccountDetails/" component={StoreAccountDetailsBizApp} />
          <Route path="/transactionType/" component={TransactionTypeBizApp} />
          <Route path="/customerAccountTransaction/" component={CustomerAccountTransactionBizApp} />
          <Route path="/store/" component={StoreBizApp} />
          <Route path="/storeSlide/" component={StoreSlideBizApp} />
          <Route path="/campaignPlaza/" component={CampaignPlazaBizApp} />
          <Route path="/campaign/" component={CampaignBizApp} />
          <Route path="/campaignRegisterHistory/" component={CampaignRegisterHistoryBizApp} />
          <Route path="/campaignReview/" component={CampaignReviewBizApp} />
          <Route path="/campaignLike/" component={CampaignLikeBizApp} />
          <Route path="/customer/" component={CustomerBizApp} />
          <Route path="/shieldCustomer/" component={ShieldCustomerBizApp} />
          <Route path="/inform/" component={InformBizApp} />
          <Route path="/employee/" component={EmployeeBizApp} />
          <Route path="/employeeWorkingStore/" component={EmployeeWorkingStoreBizApp} />
          <Route path="/role/" component={RoleBizApp} />
>>>>>>> 348f929f40a850bd475e4c69daca9a25322a77b7
          <Route path="/userDomain/" component={UserDomainBizApp} />
          <Route path="/secUser/" component={SecUserBizApp} />
          <Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
          <Route path="/userApp/" component={UserAppBizApp} />
          <Route path="/objectAccess/" component={ObjectAccessBizApp} />
          <Route path="/loginHistory/" component={LoginHistoryBizApp} />
<<<<<<< HEAD
=======
          <Route path="/genericForm/" component={GenericFormBizApp} />
          <Route path="/formMessage/" component={FormMessageBizApp} />
          <Route path="/formFieldMessage/" component={FormFieldMessageBizApp} />
          <Route path="/formField/" component={FormFieldBizApp} />
          <Route path="/formAction/" component={FormActionBizApp} />
          <Route path="/actionToken/" component={ActionTokenBizApp} />
>>>>>>> 348f929f40a850bd475e4c69daca9a25322a77b7
         <Route path="/" component={Launcher} />
        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig











