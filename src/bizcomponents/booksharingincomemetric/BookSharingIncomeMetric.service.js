import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookSharingIncomeMetricManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookSharingIncomeMetricManager/loadBookSharingIncomeMetric/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookSharingIncomeMetricManager/requestCandidateBookPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookSharingIncomeMetricManager/transferToAnotherBookPlaza/id/anotherBookPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BookSharingIncomeMetricService = { view,
  load,
  requestCandidateBookPlaza,
  transferToAnotherBookPlaza }
export default BookSharingIncomeMetricService

