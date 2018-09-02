import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/loadBookCopySharingApplication/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateApplicationStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/requestCandidateApplicationStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherApplicationStatus = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopySharingApplicationManager/transferToAnotherApplicationStatus/id/anotherApplicationStatusId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateDeliverMethod = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/requestCandidateDeliverMethod/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherDeliverMethod = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopySharingApplicationManager/transferToAnotherDeliverMethod/id/anotherDeliverMethodId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopySharingApplicationManager/transferToAnotherCustomer/id/anotherCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherEmployee = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopySharingApplicationManager/transferToAnotherEmployee/id/anotherEmployeeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateDestinationStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopySharingApplicationManager/requestCandidateDestinationStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherDestinationStore = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookCopySharingApplicationManager/transferToAnotherDestinationStore/id/anotherDestinationStoreId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const BookCopySharingApplicationService = { view,
  load,
  requestCandidateApplicationStatus,
  requestCandidateDeliverMethod,
  requestCandidateCustomer,
  requestCandidateEmployee,
  requestCandidateDestinationStore,
  transferToAnotherApplicationStatus,
  transferToAnotherDeliverMethod,
  transferToAnotherCustomer,
  transferToAnotherEmployee,
  transferToAnotherDestinationStore }
export default BookCopySharingApplicationService

