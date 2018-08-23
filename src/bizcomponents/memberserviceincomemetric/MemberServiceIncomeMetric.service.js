import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceIncomeMetricManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceIncomeMetricManager/loadMemberServiceIncomeMetric/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceIncomeMetricManager/requestCandidateBookPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}memberServiceIncomeMetricManager/transferToAnotherBookPlaza/id/anotherBookPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const MemberServiceIncomeMetricService = { view,
  load,
  requestCandidateBookPlaza,
  transferToAnotherBookPlaza }
export default MemberServiceIncomeMetricService

