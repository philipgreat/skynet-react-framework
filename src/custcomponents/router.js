

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from '../launcher/Launcher'
import GlobalComponents from './'


function RouterConfig({ history }) {

	const {GamePlatformBizApp} = GlobalComponents
	const {CityBizApp} = GlobalComponents
	const {StoreBizApp} = GlobalComponents
	const {GameCategoryBizApp} = GlobalComponents
	const {GameBizApp} = GlobalComponents
	const {GameSessionBizApp} = GlobalComponents
	const {GameSessionRecordBizApp} = GlobalComponents
	const {GamePlayerRecordBizApp} = GlobalComponents
	const {RearrangeSessionTicketRecordBizApp} = GlobalComponents
	const {GameTokenBizApp} = GlobalComponents
	const {GameTicketBizApp} = GlobalComponents
	const {OnlineOrderBizApp} = GlobalComponents
	const {OnlineOrderPaymentBizApp} = GlobalComponents
	const {OnlineOrderRedeemHistoryBizApp} = GlobalComponents
	const {TicketPrintingBizApp} = GlobalComponents
	const {TicketPrintingHistoryBizApp} = GlobalComponents
	const {OfflineStoreOrderBizApp} = GlobalComponents
	const {CustomerBizApp} = GlobalComponents
	const {CouponBizApp} = GlobalComponents
	const {VipLevelBizApp} = GlobalComponents
	const {PlayerBizApp} = GlobalComponents
	const {EmployeeBizApp} = GlobalComponents
	const {AdBizApp} = GlobalComponents
	const {BannerBizApp} = GlobalComponents
	const {NewsBizApp} = GlobalComponents
	const {NewsContentBizApp} = GlobalComponents
	const {CampaignBizApp} = GlobalComponents
	const {ActionTokenBizApp} = GlobalComponents
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
          <Route path="/gamePlatform/" component={GamePlatformBizApp} />
          <Route path="/city/" component={CityBizApp} />
          <Route path="/store/" component={StoreBizApp} />
          <Route path="/gameCategory/" component={GameCategoryBizApp} />
          <Route path="/game/" component={GameBizApp} />
          <Route path="/gameSession/" component={GameSessionBizApp} />
          <Route path="/gameSessionRecord/" component={GameSessionRecordBizApp} />
          <Route path="/gamePlayerRecord/" component={GamePlayerRecordBizApp} />
          <Route path="/rearrangeSessionTicketRecord/" component={RearrangeSessionTicketRecordBizApp} />
          <Route path="/gameToken/" component={GameTokenBizApp} />
          <Route path="/gameTicket/" component={GameTicketBizApp} />
          <Route path="/onlineOrder/" component={OnlineOrderBizApp} />
          <Route path="/onlineOrderPayment/" component={OnlineOrderPaymentBizApp} />
          <Route path="/onlineOrderRedeemHistory/" component={OnlineOrderRedeemHistoryBizApp} />
          <Route path="/ticketPrinting/" component={TicketPrintingBizApp} />
          <Route path="/ticketPrintingHistory/" component={TicketPrintingHistoryBizApp} />
          <Route path="/offlineStoreOrder/" component={OfflineStoreOrderBizApp} />
          <Route path="/customer/" component={CustomerBizApp} />
          <Route path="/coupon/" component={CouponBizApp} />
          <Route path="/vipLevel/" component={VipLevelBizApp} />
          <Route path="/player/" component={PlayerBizApp} />
          <Route path="/employee/" component={EmployeeBizApp} />
          <Route path="/ad/" component={AdBizApp} />
          <Route path="/banner/" component={BannerBizApp} />
          <Route path="/news/" component={NewsBizApp} />
          <Route path="/newsContent/" component={NewsContentBizApp} />
          <Route path="/campaign/" component={CampaignBizApp} />
          <Route path="/actionToken/" component={ActionTokenBizApp} />
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











