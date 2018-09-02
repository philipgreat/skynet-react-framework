import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}cityManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/loadCity/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookSharingPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}cityManager/transferToAnotherBookSharingPlatform/id/anotherBookSharingPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addStore /cityId/storeName/storeSubname/storeAddress/storeOpenTime/storeOpenTimeSecond/storeRoomNumber/longitude/latitude/storeImage/storeTypeId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateStoreProperties/cityId/id/storeName/storeSubname/storeAddress/storeOpenTime/storeOpenTimeSecond/storeRoomNumber/longitude/latitude/storeImage/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeStoreList/cityId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CityService = { view,
  load,
  addStore,
  updateStore,
  removeStoreList,
  requestCandidateBookSharingPlatform,
  transferToAnotherBookSharingPlatform }
export default CityService

