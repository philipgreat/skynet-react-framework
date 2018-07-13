import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}handOverChecklistItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistItemManager/loadHandOverChecklistItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateQuestion = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistItemManager/requestCandidateQuestion/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherQuestion = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistItemManager/transferToAnotherQuestion/id/anotherQuestionId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistItemManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistItemManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const HandOverChecklistItemService = { view,
  load,
  requestCandidateQuestion,
  requestCandidateMainOrder,
  transferToAnotherQuestion,
  transferToAnotherMainOrder }
export default HandOverChecklistItemService

