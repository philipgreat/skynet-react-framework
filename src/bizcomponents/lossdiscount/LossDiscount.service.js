import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}lossDiscountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossDiscountManager/loadLossDiscount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossDiscountManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}lossDiscountManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}lossDiscountManager/addLossAssessmentRecord /lossDiscountId/bookCopyId/recordStoreId/lossComment/lossImage/bookCopyEvaluationPrice/recordPersonId/damagePersonId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}lossDiscountManager/updateLossAssessmentRecordProperties/lossDiscountId/id/lossComment/lossImage/bookCopyEvaluationPrice/tokensExpr/`
  const lossDiscountId = targetObjectId
  const requestParameters = { ...parameters, lossDiscountId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLossAssessmentRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}lossDiscountManager/removeLossAssessmentRecordList/lossDiscountId/lossAssessmentRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, lossDiscountId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const LossDiscountService = { view,
  load,
  addLossAssessmentRecord,
  updateLossAssessmentRecord,
  removeLossAssessmentRecordList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default LossDiscountService

