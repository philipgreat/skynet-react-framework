import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyDiscountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyDiscountManager/loadCompanyDiscount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyDiscountManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCompany = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}companyDiscountManager/transferToAnotherCompany/id/anotherCompanyId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const CompanyDiscountService = { view,
  load,
  requestCandidateCompany,
  transferToAnotherCompany }
export default CompanyDiscountService

