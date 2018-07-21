import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/loadServiceInsuranceForInspection/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateOrderedInsurance = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/requestCandidateOrderedInsurance/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherOrderedInsurance = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceInsuranceForInspectionManager/transferToAnotherOrderedInsurance/id/anotherOrderedInsuranceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceInsuranceForInspectionManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceInsuranceForInspectionManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceInsuranceForInspectionManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const ServiceInsuranceForInspectionService = { view,
  load,
  requestCandidateOrderedInsurance,
  requestCandidateResponsibleWorker,
  requestCandidateMerchant,
  requestCandidateMainOrder,
  transferToAnotherOrderedInsurance,
  transferToAnotherResponsibleWorker,
  transferToAnotherMerchant,
  transferToAnotherMainOrder }
export default ServiceInsuranceForInspectionService

