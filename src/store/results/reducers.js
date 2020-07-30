import * as actions from './actions'

const initialState = {
    results: []
}

export default function reducer(state = initialState , action) {
    switch (action.type) {
        case actions.FETCH_RESULT_PAGE:
            return { ...state, results: action.payload.data }
        default:
            return state
    }
}