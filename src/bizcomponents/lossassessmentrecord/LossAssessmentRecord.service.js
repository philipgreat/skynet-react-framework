import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}lossAssessmentRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossAssessmentRecordManager/loadLossAssessmentRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossAssessmentRecordManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookCopy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}lossAssessmentRecordManager/transferToAnotherBookCopy/id/anotherBookCopyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateRecordStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossAssessmentRecordManager/requestCandidateRecordStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRecordStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}lossAssessmentRecordManager/transferToAnotherRecordStore/id/anotherRecordStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateRecordPerson = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossAssessmentRecordManager/requestCandidateRecordPerson/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherRecordPerson = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}lossAssessmentRecordManager/transferToAnotherRecordPerson/id/anotherRecordPersonId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateDamagePerson = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}lossAssessmentRecordManager/requestCandidateDamagePerson/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherDamagePerson = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}lossAssessmentRecordManager/transferToAnotherDamagePerson/id/anotherDamagePersonId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const LossAssessmentRecordService = { view,
  load,
  requestCandidateBookCopy,
  requestCandidateRecordStore,
  requestCandidateRecordPerson,
  requestCandidateDamagePerson,
  transferToAnotherBookCopy,
  transferToAnotherRecordStore,
  transferToAnotherRecordPerson,
  transferToAnotherDamagePerson }
export default LossAssessmentRecordService

