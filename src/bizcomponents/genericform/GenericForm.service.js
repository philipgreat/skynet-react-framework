import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}genericFormManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}genericFormManager/loadGenericForm/${targetObjectId}/${parametersExpr}/`,
  })
}






const addFormMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/addFormMessage/formId/title/level/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFormMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/updateFormMessageProperties/genericFormId/id/title/level/tokensExpr/`
  const genericFormId = targetObjectId
  const requestParameters = { ...parameters, genericFormId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFormMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/removeFormMessageList/genericFormId/formMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, genericFormId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFormFieldMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/addFormFieldMessage/formId/title/parameterName/level/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFormFieldMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/updateFormFieldMessageProperties/genericFormId/id/title/parameterName/level/tokensExpr/`
  const genericFormId = targetObjectId
  const requestParameters = { ...parameters, genericFormId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFormFieldMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/removeFormFieldMessageList/genericFormId/formFieldMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, genericFormId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFormField = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/addFormField/formId/label/localeKey/parameterName/type/placeholder/defaultValue/description/fieldGroup/minValue/maxValue/required/disabled/customRendering/candidateValues/suggestValues/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFormField = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/updateFormFieldProperties/genericFormId/id/label/localeKey/parameterName/type/placeholder/defaultValue/description/fieldGroup/minValue/maxValue/required/disabled/customRendering/candidateValues/suggestValues/tokensExpr/`
  const genericFormId = targetObjectId
  const requestParameters = { ...parameters, genericFormId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFormFieldList = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/removeFormFieldList/genericFormId/formFieldIds/tokensExpr/`
  const requestParameters = { ...parameters, genericFormId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFormAction = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/addFormAction/formId/label/localeKey/actionKey/level/url/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFormAction = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/updateFormActionProperties/genericFormId/id/label/localeKey/actionKey/level/url/tokensExpr/`
  const genericFormId = targetObjectId
  const requestParameters = { ...parameters, genericFormId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFormActionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}genericFormManager/removeFormActionList/genericFormId/formActionIds/tokensExpr/`
  const requestParameters = { ...parameters, genericFormId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GenericFormService = { view,
  load,
  addFormMessage,
  addFormFieldMessage,
  addFormField,
  addFormAction,
  updateFormMessage,
  updateFormFieldMessage,
  updateFormField,
  updateFormAction,
  removeFormMessageList,
  removeFormFieldMessageList,
  removeFormFieldList,
  removeFormActionList }
export default GenericFormService

