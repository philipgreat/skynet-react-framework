import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}dataPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}dataPlatformManager/loadDataPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}






const addCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/addCompany/platformId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/updateCompanyProperties/dataPlatformId/id/name/description/tokensExpr/`
  const dataPlatformId = targetObjectId
  const requestParameters = { ...parameters, dataPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/removeCompanyList/dataPlatformId/companyIds/tokensExpr/`
  const requestParameters = { ...parameters, dataPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addApplicationType = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/addApplicationType/platformId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateApplicationType = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/updateApplicationTypeProperties/dataPlatformId/id/name/description/tokensExpr/`
  const dataPlatformId = targetObjectId
  const requestParameters = { ...parameters, dataPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeApplicationTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/removeApplicationTypeList/dataPlatformId/applicationTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, dataPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addDrug = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/addDrug/platformId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrug = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/updateDrugProperties/dataPlatformId/id/name/description/tokensExpr/`
  const dataPlatformId = targetObjectId
  const requestParameters = { ...parameters, dataPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugList = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/removeDrugList/dataPlatformId/drugIds/tokensExpr/`
  const requestParameters = { ...parameters, dataPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addDrugType = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/addDrugType/platformId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrugType = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/updateDrugTypeProperties/dataPlatformId/id/name/description/tokensExpr/`
  const dataPlatformId = targetObjectId
  const requestParameters = { ...parameters, dataPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/removeDrugTypeList/dataPlatformId/drugTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, dataPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/addDrugApplication/platformId/applicationNumber/companyId/applicationTypeId/drugId/drugTypeId/applicationDate/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDrugApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/updateDrugApplicationProperties/dataPlatformId/id/applicationNumber/applicationDate/description/tokensExpr/`
  const dataPlatformId = targetObjectId
  const requestParameters = { ...parameters, dataPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDrugApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/removeDrugApplicationList/dataPlatformId/drugApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, dataPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addNewsSubscription = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/addNewsSubscription/platformId/nickName/emailAddress/mobile/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateNewsSubscription = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/updateNewsSubscriptionProperties/dataPlatformId/id/nickName/emailAddress/mobile/remark/tokensExpr/`
  const dataPlatformId = targetObjectId
  const requestParameters = { ...parameters, dataPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeNewsSubscriptionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}dataPlatformManager/removeNewsSubscriptionList/dataPlatformId/newsSubscriptionIds/tokensExpr/`
  const requestParameters = { ...parameters, dataPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const DataPlatformService = { view,
  load,
  addCompany,
  addApplicationType,
  addDrug,
  addDrugType,
  addDrugApplication,
  addNewsSubscription,
  updateCompany,
  updateApplicationType,
  updateDrug,
  updateDrugType,
  updateDrugApplication,
  updateNewsSubscription,
  removeCompanyList,
  removeApplicationTypeList,
  removeDrugList,
  removeDrugTypeList,
  removeDrugApplicationList,
  removeNewsSubscriptionList }
export default DataPlatformService

