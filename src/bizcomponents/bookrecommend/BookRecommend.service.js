import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookRecommendManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookRecommendManager/loadBookRecommend/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookPlaza = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookRecommendManager/requestCandidateBookPlaza/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherBookPlaza = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}bookRecommendManager/transferToAnotherBookPlaza/id/anotherBookPlazaId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookRecommendManager/addBook/bookRecommendId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookPlazaId/platformId/bookSummary/tokensExpr/`
  const bookRecommendId = targetObjectId
  const requestParameters = { ...parameters, bookRecommendId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookRecommendManager/updateBookProperties/bookRecommendId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookSummary/tokensExpr/`
  const bookRecommendId = targetObjectId
  const requestParameters = { ...parameters, bookRecommendId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookRecommendManager/removeBookList/bookRecommendId/bookIds/tokensExpr/`
  const requestParameters = { ...parameters, bookRecommendId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const BookRecommendService = { view,
  load,
  addBook,
  updateBook,
  removeBookList,
  requestCandidateBookPlaza,
  transferToAnotherBookPlaza }
export default BookRecommendService

