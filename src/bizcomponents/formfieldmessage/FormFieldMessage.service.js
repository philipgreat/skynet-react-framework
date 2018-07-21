import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}formFieldMessageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formFieldMessageManager/loadFormFieldMessage/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateForm = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formFieldMessageManager/requestCandidateForm/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherForm = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}formFieldMessageManager/transferToAnotherForm/id/anotherFormId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const FormFieldMessageService = { view,
  load,
  requestCandidateForm,
  transferToAnotherForm }
export default FormFieldMessageService

