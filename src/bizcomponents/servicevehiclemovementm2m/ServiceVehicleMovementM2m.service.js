import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/loadServiceVehicleMovementM2m/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateResponsibleWorker = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherResponsibleWorker = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementM2mManager/transferToAnotherResponsibleWorker/id/anotherResponsibleWorkerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMainOrder = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementM2mManager/transferToAnotherMainOrder/id/anotherMainOrderId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateDriver = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/requestCandidateDriver/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherDriver = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementM2mManager/transferToAnotherDriver/id/anotherDriverId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateReceiver = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/requestCandidateReceiver/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherReceiver = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementM2mManager/transferToAnotherReceiver/id/anotherReceiverId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMerchant = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}serviceVehicleMovementM2mManager/transferToAnotherMerchant/id/anotherMerchantId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2mManager/addHandOverChecklistResult/serviceTypeVehicleM2mId/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/availableHandOverItemId/serviceTypeVehicleC2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2mManager/updateHandOverChecklistResultProperties/serviceVehicleMovementM2mId/id/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const serviceVehicleMovementM2mId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementM2mId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2mManager/removeHandOverChecklistResultList/serviceVehicleMovementM2mId/handOverChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleMovementM2mId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const ServiceVehicleMovementM2mService = { view,
  load,
  addHandOverChecklistResult,
  updateHandOverChecklistResult,
  removeHandOverChecklistResultList,
  requestCandidateResponsibleWorker,
  requestCandidateMainOrder,
  requestCandidateDriver,
  requestCandidateReceiver,
  requestCandidateMerchant,
  transferToAnotherResponsibleWorker,
  transferToAnotherMainOrder,
  transferToAnotherDriver,
  transferToAnotherReceiver,
  transferToAnotherMerchant }
export default ServiceVehicleMovementM2mService

