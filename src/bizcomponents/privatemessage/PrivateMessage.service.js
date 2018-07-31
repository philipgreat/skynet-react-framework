import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}privateMessageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}privateMessageManager/loadPrivateMessage/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateDeliveryTo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}privateMessageManager/requestCandidateDeliveryTo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherDeliveryTo = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}privateMessageManager/transferToAnotherDeliveryTo/id/anotherDeliveryToId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const PrivateMessageService = { view,
  load,
  requestCandidateDeliveryTo,
  transferToAnotherDeliveryTo }
export default PrivateMessageService

