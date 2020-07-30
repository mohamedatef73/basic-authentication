import Authenticate from './authenticate/reducer'
import results from './results/reducers'
import { combineReducers, createStore,compose, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './rootSaga'


const reducers = combineReducers({
    Authenticate,
    results
})



const composeEnhancer = typeof window === 'object' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;
 
const sagaMiddleWare = createSagaMiddleWare()

const enhancer = composeEnhancer(
    applyMiddleware(sagaMiddleWare)
)

const store = createStore(
    reducers,
    enhancer
)

sagaMiddleWare.run(rootSaga)


export default store