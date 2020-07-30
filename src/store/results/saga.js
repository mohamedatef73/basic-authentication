import { GET_RESULT_PAGE,FetchResultPage} from './actions'
import {takeLatest, put} from 'redux-saga/effects'

export function* fetchResultWatcher(){
    yield takeLatest( GET_RESULT_PAGE,fetchResultWorker)
}

export function* fetchResultWorker(action){
    let results = yield fetch('https://jsonplaceholder.typicode.com/photos',)
    .then((response) => response.json())
    yield put(FetchResultPage({data:results}))

}