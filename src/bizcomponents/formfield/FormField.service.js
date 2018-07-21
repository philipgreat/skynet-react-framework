import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}formFieldManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formFieldManager/loadFormField/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateForm = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formFieldManager/requestCandidateForm/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherForm = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}formFieldManager/transferToAnotherForm/id/anotherFormId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const FormFieldService = { view,
  load,
  requestCandidateForm,
  transferToAnotherForm }
export default FormFieldService

