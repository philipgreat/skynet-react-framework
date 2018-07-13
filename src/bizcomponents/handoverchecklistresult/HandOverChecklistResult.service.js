import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}handOverChecklistResultManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/loadHandOverChecklistResult/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAvailableHandOverItem = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateAvailableHandOverItem/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherAvailableHandOverItem = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherAvailableHandOverItem/id/anotherAvailableHandOverItemId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceTypeVehicleC2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeVehicleC2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceTypeVehicleC2m = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherServiceTypeVehicleC2m/id/anotherServiceTypeVehicleC2mId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceTypeVehicleM2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeVehicleM2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceTypeVehicleM2m = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherServiceTypeVehicleM2m/id/anotherServiceTypeVehicleM2mId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceTypeVehicleM2c = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeVehicleM2c/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceTypeVehicleM2c = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherServiceTypeVehicleM2c/id/anotherServiceTypeVehicleM2cId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceTypeFileC2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeFileC2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceTypeFileC2m = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherServiceTypeFileC2m/id/anotherServiceTypeFileC2mId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceTypeFileM2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeFileM2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceTypeFileM2m = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherServiceTypeFileM2m/id/anotherServiceTypeFileM2mId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateServiceTypeFileM2c = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeFileM2c/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherServiceTypeFileM2c = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}handOverChecklistResultManager/transferToAnotherServiceTypeFileM2c/id/anotherServiceTypeFileM2cId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const HandOverChecklistResultService = { view,
  load,
  requestCandidateAvailableHandOverItem,
  requestCandidateServiceTypeVehicleC2m,
  requestCandidateServiceTypeVehicleM2m,
  requestCandidateServiceTypeVehicleM2c,
  requestCandidateServiceTypeFileC2m,
  requestCandidateServiceTypeFileM2m,
  requestCandidateServiceTypeFileM2c,
  transferToAnotherAvailableHandOverItem,
  transferToAnotherServiceTypeVehicleC2m,
  transferToAnotherServiceTypeVehicleM2m,
  transferToAnotherServiceTypeVehicleM2c,
  transferToAnotherServiceTypeFileC2m,
  transferToAnotherServiceTypeFileM2m,
  transferToAnotherServiceTypeFileM2c }
export default HandOverChecklistResultService

