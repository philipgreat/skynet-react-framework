import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'

//bookManager/actionBookWarehousingWithIsbn/storeId/scannedIsbn/bookCopyVendorId/bookCopySharingType/
const getMethod = (ownerClass, id, filterKey, pageNo) => {
    //const parametersExpr = joinParameters(parameters)
    return get({
      url: `${PREFIX}secUserManager/requestCandidateDomain/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
    })
}

//bookManager/actionBookWarehousingWithIsbn/storeId/scannedIsbn/bookCopyVendorId/bookCopySharingType/


const actionBookWarehousingWithIsbn = (targetObjectId, parameters) => {
    const url = `${PREFIX}bookManager/actionBookWarehousingWithIsbn/storeId/scannedIsbn/bookCopyVendorId/bookCopySharingType/`
    const requestParameters = { ...parameters}
  
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    return post({
      url,
      data: joinPostParameters(requestParameters),
      headers,
    })
  }


  const returnBookByEmployee = (targetObjectId, parameters) => {
    const url = `${PREFIX}bookCopyManager/returnBookByEmployee/bookCopyIdOrQrcode/`
    const requestParameters = { ...parameters}
  
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    return post({
      url,
      data: joinPostParameters(requestParameters),
      headers,
    })
  }


  const lentBookByEmployee = (targetObjectId, parameters) => {
    const url = `${PREFIX}bookCopyManager/lentBookByEmployee/storeId/customerId/bookCopyIdOrQrcode/`
    const requestParameters = { ...parameters}
  
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    return post({
      url,
      data: joinPostParameters(requestParameters),
      headers,
    })
  }

//putBookOnShelf
  

const putBookOnShelf = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/putBookOnShelf/bookCopyIdOrQrcode/storeId/`
  const requestParameters = { ...parameters}

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const putBookOffShelf = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/pullBookOffShelf/bookCopyIdOrQrcode/storeId/`
  const requestParameters = { ...parameters}

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}





  const BookStoreExService = { 
    actionBookWarehousingWithIsbn,
    returnBookByEmployee,
    lentBookByEmployee,
    putBookOffShelf,putBookOnShelf }
  export default BookStoreExService

