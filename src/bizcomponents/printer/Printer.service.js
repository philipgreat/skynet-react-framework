import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}printerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}printerManager/loadPrinter/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}printerManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}printerManager/transferToAnotherStore/id/anotherStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addPrinterTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/addPrinterTask/printerId/title/submitter/copyCount/content1/content2/content3/content4/content5/content6/printTaskStatus/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePrinterTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/updatePrinterTaskProperties/printerId/id/title/submitter/copyCount/content1/content2/content3/content4/content5/content6/printTaskStatus/createTime/tokensExpr/`
  const printerId = targetObjectId
  const requestParameters = { ...parameters, printerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePrinterTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/removePrinterTaskList/printerId/printerTaskIds/tokensExpr/`
  const requestParameters = { ...parameters, printerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const PrinterService = { view,
  load,
  addPrinterTask,
  updatePrinterTask,
  removePrinterTaskList,
  requestCandidateStore,
  transferToAnotherStore }
export default PrinterService

