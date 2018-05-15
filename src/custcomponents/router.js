

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from '../launcher/Launcher'
import GlobalComponents from './'


function RouterConfig({ history }) {

	const {BookSharingPlatformBizApp} = GlobalComponents
	const {AccountManagementBizApp} = GlobalComponents
	const {ProvinceBizApp} = GlobalComponents
	const {CityBizApp} = GlobalComponents
	const {DistrictBizApp} = GlobalComponents
	const {BookManagementBizApp} = GlobalComponents
	const {MemberServiceManagementBizApp} = GlobalComponents
	const {BookTagRecordBizApp} = GlobalComponents
	const {BookCopySharingBenefitConfigurationBizApp} = GlobalComponents
	const {BookCopyDonateBenefitConfigurationBizApp} = GlobalComponents
	const {MemberServiceProductBizApp} = GlobalComponents
	const {MemberServicePeriodBizApp} = GlobalComponents
	const {MemberServiceSkuBizApp} = GlobalComponents
	const {MemberAccountRechargeProductBizApp} = GlobalComponents
	const {MemberAccountRechargeSkuBizApp} = GlobalComponents
	const {LineItemBizApp} = GlobalComponents
	const {MainOrderPaymentBizApp} = GlobalComponents
	const {MainOrderBizApp} = GlobalComponents
	const {BookBorrowConfigurationBizApp} = GlobalComponents
	const {BookBizApp} = GlobalComponents
	const {PrinterBizApp} = GlobalComponents
	const {PrinterTaskBizApp} = GlobalComponents
	const {BookCopyStatusBizApp} = GlobalComponents
	const {BookCopyBizApp} = GlobalComponents
	const {BookCopySkuBizApp} = GlobalComponents
	const {BookCopyCheckPlanBizApp} = GlobalComponents
	const {BookCopyCheckStatusBizApp} = GlobalComponents
	const {BookCopyCheckRecordBizApp} = GlobalComponents
	const {BookCopyOperationRecordBizApp} = GlobalComponents
	const {BorrowingHistoryBizApp} = GlobalComponents
	const {BorrowingExpiredSkuBizApp} = GlobalComponents
	const {BookReviewTypeBizApp} = GlobalComponents
	const {BookReviewBizApp} = GlobalComponents
	const {BookReviewLikeBizApp} = GlobalComponents
	const {BookCopySharingApplicationBizApp} = GlobalComponents
	const {PlatformAccountBizApp} = GlobalComponents
	const {PlatformAccountDetailsBizApp} = GlobalComponents
	const {FundationAccountBizApp} = GlobalComponents
	const {FundationAccountDetailsBizApp} = GlobalComponents
	const {StoreAccountBizApp} = GlobalComponents
	const {StoreAccountDetailsBizApp} = GlobalComponents
	const {CustomerAccountBizApp} = GlobalComponents
	const {CustomerAccountDetailsBizApp} = GlobalComponents
	const {StoreBizApp} = GlobalComponents
	const {WorkshopBizApp} = GlobalComponents
	const {WorkshopRegisterHistoryBizApp} = GlobalComponents
	const {WorkshopReviewBizApp} = GlobalComponents
	const {WorkshopLikeBizApp} = GlobalComponents
	const {CustomerBizApp} = GlobalComponents
	const {MemberCustomerBizApp} = GlobalComponents
	const {EmployeeBizApp} = GlobalComponents
	const {EmployeeWorkingStoreBizApp} = GlobalComponents
	const {RoleBizApp} = GlobalComponents
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
          <Route path="/bookSharingPlatform/" component={BookSharingPlatformBizApp} />
          <Route path="/accountManagement/" component={AccountManagementBizApp} />
          <Route path="/province/" component={ProvinceBizApp} />
          <Route path="/city/" component={CityBizApp} />
          <Route path="/district/" component={DistrictBizApp} />
          <Route path="/bookManagement/" component={BookManagementBizApp} />
          <Route path="/memberServiceManagement/" component={MemberServiceManagementBizApp} />
          <Route path="/bookTagRecord/" component={BookTagRecordBizApp} />
          <Route path="/bookCopySharingBenefitConfiguration/" component={BookCopySharingBenefitConfigurationBizApp} />
          <Route path="/bookCopyDonateBenefitConfiguration/" component={BookCopyDonateBenefitConfigurationBizApp} />
          <Route path="/memberServiceProduct/" component={MemberServiceProductBizApp} />
          <Route path="/memberServicePeriod/" component={MemberServicePeriodBizApp} />
          <Route path="/memberServiceSku/" component={MemberServiceSkuBizApp} />
          <Route path="/memberAccountRechargeProduct/" component={MemberAccountRechargeProductBizApp} />
          <Route path="/memberAccountRechargeSku/" component={MemberAccountRechargeSkuBizApp} />
          <Route path="/lineItem/" component={LineItemBizApp} />
          <Route path="/mainOrderPayment/" component={MainOrderPaymentBizApp} />
          <Route path="/mainOrder/" component={MainOrderBizApp} />
          <Route path="/bookBorrowConfiguration/" component={BookBorrowConfigurationBizApp} />
          <Route path="/book/" component={BookBizApp} />
          <Route path="/printer/" component={PrinterBizApp} />
          <Route path="/printerTask/" component={PrinterTaskBizApp} />
          <Route path="/bookCopyStatus/" component={BookCopyStatusBizApp} />
          <Route path="/bookCopy/" component={BookCopyBizApp} />
          <Route path="/bookCopySku/" component={BookCopySkuBizApp} />
          <Route path="/bookCopyCheckPlan/" component={BookCopyCheckPlanBizApp} />
          <Route path="/bookCopyCheckStatus/" component={BookCopyCheckStatusBizApp} />
          <Route path="/bookCopyCheckRecord/" component={BookCopyCheckRecordBizApp} />
          <Route path="/bookCopyOperationRecord/" component={BookCopyOperationRecordBizApp} />
          <Route path="/borrowingHistory/" component={BorrowingHistoryBizApp} />
          <Route path="/borrowingExpiredSku/" component={BorrowingExpiredSkuBizApp} />
          <Route path="/bookReviewType/" component={BookReviewTypeBizApp} />
          <Route path="/bookReview/" component={BookReviewBizApp} />
          <Route path="/bookReviewLike/" component={BookReviewLikeBizApp} />
          <Route path="/bookCopySharingApplication/" component={BookCopySharingApplicationBizApp} />
          <Route path="/platformAccount/" component={PlatformAccountBizApp} />
          <Route path="/platformAccountDetails/" component={PlatformAccountDetailsBizApp} />
          <Route path="/fundationAccount/" component={FundationAccountBizApp} />
          <Route path="/fundationAccountDetails/" component={FundationAccountDetailsBizApp} />
          <Route path="/storeAccount/" component={StoreAccountBizApp} />
          <Route path="/storeAccountDetails/" component={StoreAccountDetailsBizApp} />
          <Route path="/customerAccount/" component={CustomerAccountBizApp} />
          <Route path="/customerAccountDetails/" component={CustomerAccountDetailsBizApp} />
          <Route path="/store/" component={StoreBizApp} />
          <Route path="/workshop/" component={WorkshopBizApp} />
          <Route path="/workshopRegisterHistory/" component={WorkshopRegisterHistoryBizApp} />
          <Route path="/workshopReview/" component={WorkshopReviewBizApp} />
          <Route path="/workshopLike/" component={WorkshopLikeBizApp} />
          <Route path="/customer/" component={CustomerBizApp} />
          <Route path="/memberCustomer/" component={MemberCustomerBizApp} />
          <Route path="/employee/" component={EmployeeBizApp} />
          <Route path="/employeeWorkingStore/" component={EmployeeWorkingStoreBizApp} />
          <Route path="/role/" component={RoleBizApp} />
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











