import * as actions from './action'


const initialState = {
    students: {},
    IsLoggedIn: false
}

export default function reducer(state =initialState , action) {
    switch (action.type) {
        case actions.SET_STUDENT_STATUS:
            return { ...state, IsLoggedIn: action.payload }
        case actions.SET_STUDENT_DATA:
            return { ...state, students: action.payload }
        default:
            return state
    }
}