import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}messageTemplateManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}messageTemplateManager/loadMessageTemplate/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUpdatedBy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}messageTemplateManager/requestCandidateUpdatedBy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherUpdatedBy = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}messageTemplateManager/transferToAnotherUpdatedBy/id/anotherUpdatedById/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const MessageTemplateService = { view,
  load,
  requestCandidateUpdatedBy,
  transferToAnotherUpdatedBy }
export default MessageTemplateService

