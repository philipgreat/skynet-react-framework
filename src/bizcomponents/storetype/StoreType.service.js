import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}storeTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeTypeManager/loadStoreType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeTypeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}storeTypeManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeTypeManager/addStore/storeTypeId/storeName/storeSubname/storeAddress/storeOpenTime/storeOpenTimeSecond/storeRoomNumber/longitude/latitude/storeImage/cityId/platformId/tokensExpr/`
  const storeTypeId = targetObjectId
  const requestParameters = { ...parameters, storeTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeTypeManager/updateStoreProperties/storeTypeId/id/storeName/storeSubname/storeAddress/storeOpenTime/storeOpenTimeSecond/storeRoomNumber/longitude/latitude/storeImage/tokensExpr/`
  const storeTypeId = targetObjectId
  const requestParameters = { ...parameters, storeTypeId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeTypeManager/removeStoreList/storeTypeId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, storeTypeId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const StoreTypeService = { view,
  load,
  addStore,
  updateStore,
  removeStoreList,
  requestCandidatePlatform,
  transferToAnotherPlatform }
export default StoreTypeService

