

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from '../launcher/Launcher'
import GlobalComponents from './'


function RouterConfig({ history }) {

	const {CommunityBizApp} = GlobalComponents
	const {InvitationCodeBizApp} = GlobalComponents
	const {HomePageBizApp} = GlobalComponents
	const {SlideBizApp} = GlobalComponents
	const {EncyclopediaItemBizApp} = GlobalComponents
	const {TaskPageBizApp} = GlobalComponents
	const {TaskFilterBizApp} = GlobalComponents
	const {CommunityUserBizApp} = GlobalComponents
	const {PatientInfoBizApp} = GlobalComponents
	const {UserSkillBizApp} = GlobalComponents
	const {MessageFilterBizApp} = GlobalComponents
	const {UserMessageBizApp} = GlobalComponents
	const {TaskBizApp} = GlobalComponents
	const {TaskAssigmentBizApp} = GlobalComponents
	const {TaskHidingBizApp} = GlobalComponents
	const {TaskResolvingBizApp} = GlobalComponents
	const {TaskRewardBizApp} = GlobalComponents
	const {TaskLikeBizApp} = GlobalComponents
	const {TaskReplyBizApp} = GlobalComponents
	const {TaskBestAnswerSettingBizApp} = GlobalComponents
	const {TaskReplyLikeBizApp} = GlobalComponents
	const {GroupPageBizApp} = GlobalComponents
	const {GroupFilterBizApp} = GlobalComponents
	const {ThreadBizApp} = GlobalComponents
	const {ThreadHidingBizApp} = GlobalComponents
	const {ThreadReplyBizApp} = GlobalComponents
	const {ThreadApprovalBizApp} = GlobalComponents
	const {ThreadCompletionBizApp} = GlobalComponents
	const {ThreadCancelingBizApp} = GlobalComponents
	const {ThreadRegistrationBizApp} = GlobalComponents
	const {ThreadLikeBizApp} = GlobalComponents
	const {ThreadReplyLikeBizApp} = GlobalComponents
	const {FanBizApp} = GlobalComponents
	const {FollowBizApp} = GlobalComponents
	const {BonusPointBizApp} = GlobalComponents
	const {ExperiencePointBizApp} = GlobalComponents
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
          <Route path="/community/" component={CommunityBizApp} />
          <Route path="/invitationCode/" component={InvitationCodeBizApp} />
          <Route path="/homePage/" component={HomePageBizApp} />
          <Route path="/slide/" component={SlideBizApp} />
          <Route path="/encyclopediaItem/" component={EncyclopediaItemBizApp} />
          <Route path="/taskPage/" component={TaskPageBizApp} />
          <Route path="/taskFilter/" component={TaskFilterBizApp} />
          <Route path="/communityUser/" component={CommunityUserBizApp} />
          <Route path="/patientInfo/" component={PatientInfoBizApp} />
          <Route path="/userSkill/" component={UserSkillBizApp} />
          <Route path="/messageFilter/" component={MessageFilterBizApp} />
          <Route path="/userMessage/" component={UserMessageBizApp} />
          <Route path="/task/" component={TaskBizApp} />
          <Route path="/taskAssigment/" component={TaskAssigmentBizApp} />
          <Route path="/taskHiding/" component={TaskHidingBizApp} />
          <Route path="/taskResolving/" component={TaskResolvingBizApp} />
          <Route path="/taskReward/" component={TaskRewardBizApp} />
          <Route path="/taskLike/" component={TaskLikeBizApp} />
          <Route path="/taskReply/" component={TaskReplyBizApp} />
          <Route path="/taskBestAnswerSetting/" component={TaskBestAnswerSettingBizApp} />
          <Route path="/taskReplyLike/" component={TaskReplyLikeBizApp} />
          <Route path="/groupPage/" component={GroupPageBizApp} />
          <Route path="/groupFilter/" component={GroupFilterBizApp} />
          <Route path="/thread/" component={ThreadBizApp} />
          <Route path="/threadHiding/" component={ThreadHidingBizApp} />
          <Route path="/threadReply/" component={ThreadReplyBizApp} />
          <Route path="/threadApproval/" component={ThreadApprovalBizApp} />
          <Route path="/threadCompletion/" component={ThreadCompletionBizApp} />
          <Route path="/threadCanceling/" component={ThreadCancelingBizApp} />
          <Route path="/threadRegistration/" component={ThreadRegistrationBizApp} />
          <Route path="/threadLike/" component={ThreadLikeBizApp} />
          <Route path="/threadReplyLike/" component={ThreadReplyLikeBizApp} />
          <Route path="/fan/" component={FanBizApp} />
          <Route path="/follow/" component={FollowBizApp} />
          <Route path="/bonusPoint/" component={BonusPointBizApp} />
          <Route path="/experiencePoint/" component={ExperiencePointBizApp} />
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











