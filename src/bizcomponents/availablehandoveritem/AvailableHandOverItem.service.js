import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableHandOverItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableHandOverItemManager/loadAvailableHandOverItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableHandOverItemManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherProduct = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}availableHandOverItemManager/transferToAnotherProduct/id/anotherProductId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/addHandOverChecklistItem/questionId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/updateHandOverChecklistItemProperties/availableHandOverItemId/id/tokensExpr/`
  const availableHandOverItemId = targetObjectId
  const requestParameters = { ...parameters, availableHandOverItemId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeHandOverChecklistItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/removeHandOverChecklistItemList/availableHandOverItemId/handOverChecklistItemIds/tokensExpr/`
  const requestParameters = { ...parameters, availableHandOverItemId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/addHandOverChecklistResult/availableHandOverItemId/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/updateHandOverChecklistResultProperties/availableHandOverItemId/id/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const availableHandOverItemId = targetObjectId
  const requestParameters = { ...parameters, availableHandOverItemId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/removeHandOverChecklistResultList/availableHandOverItemId/handOverChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, availableHandOverItemId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const AvailableHandOverItemService = { view,
  load,
  addHandOverChecklistItem,
  addHandOverChecklistResult,
  updateHandOverChecklistItem,
  updateHandOverChecklistResult,
  removeHandOverChecklistItemList,
  removeHandOverChecklistResultList,
  requestCandidateProduct,
  transferToAnotherProduct }
export default AvailableHandOverItemService

