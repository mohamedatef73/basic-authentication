export const GET_RESULT_PAGE = 'GET_RESULT_PAGE'
export const FETCH_RESULT_PAGE = 'FETCH_RESULT_PAGE'

export function getResultPage(){
    return{type:GET_RESULT_PAGE}
}

export function FetchResultPage(payload){
    return{type:FETCH_RESULT_PAGE,payload}
}