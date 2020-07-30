export const SET_STUDENT_STATUS = 'SET_STUDENT_STATUS'
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA'

export  function setStudentStatus(payload){
    return{type:SET_STUDENT_STATUS,payload}
}

export function setStudentData(payload){
    return{type:SET_STUDENT_DATA,payload}
}