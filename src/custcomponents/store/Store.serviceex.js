import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'

//bookManager/actionBookWarehousingWithIsbn/storeId/scannedIsbn/bookCopyVendorId/bookCopySharingType/
const getMethod = (ownerClass, id, filterKey, pageNo) => {
    //const parametersExpr = joinParameters(parameters)
    return get({
      url: `${PREFIX}secUserManager/requestCandidateDomain/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
    })
}

//bookManager/actionBookWarehousingWithIsbn/storeId/scannedIsbn/bookCopyVendorId/bookCopySharingType/

const deleteBookCopyFromStore = (parameters) => {
  //public  Store removeBookCopy(ShuxiangUserContext userContext, String storeId, 
	//	String bookCopyId, int bookCopyVersion,String [] tokensExpr)
  const url = `${PREFIX}storeManager/removeBookCopy/storeId/bookCopyId/bookCopyVersion/tokensExpr/`
  const requestParameters = { ...parameters}

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })

}


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


  const createLossAssessment = (parameters) => {
    const url = `${PREFIX}employeeManager/createNewLossAssessment/idOfBorrowingHistory/idOfDiscount/comment/`
    const requestParameters = { ...parameters}
  
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    return post({
      url,
      data: joinPostParameters(requestParameters),
      headers,
    })
  }
//./employeeManager/addLossAssessmentRecord/employeeId/bookCopyId/recordStoreId/lossComment/lossImage/bookCopyEvaluationPrice/lossDiscountId/damagePersonId/tokensExpr/

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
    putBookOffShelf,putBookOnShelf,createLossAssessment,deleteBookCopyFromStore }
  export default BookStoreExService

