import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/loadServiceVehicleMovementC2m/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementC2mManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementC2mManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementC2mManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/addHandOverChecklistResult/serviceTypeVehicleC2mId/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/availableHandOverItemId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/updateHandOverChecklistResultProperties/serviceVehicleMovementC2mId/id/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const serviceVehicleMovementC2mId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementC2mId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/removeHandOverChecklistResultList/serviceVehicleMovementC2mId/handOverChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleMovementC2mId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ServiceVehicleMovementC2mService = { view,
  load,
  addHandOverChecklistResult,
  updateHandOverChecklistResult,
  removeHandOverChecklistResultList,
  requestCandidateResponsibleWorker,
  requestCandidateMainOrder,
  requestCandidateMerchant,
  transferToAnotherResponsibleWorker,
  transferToAnotherMainOrder,
  transferToAnotherMerchant }
export default ServiceVehicleMovementC2mService

