import {all} from 'redux-saga/effects'
import  { fetchResultWatcher } from './results/saga'

export default function* root(){
    yield all([
        fetchResultWatcher()
    ])
}
