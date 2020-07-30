import React, { useState} from 'react'
import LoginForm from '../components/formpages/LoginForm'
import { useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { setStudentStatus, setStudentData } from '../store/authenticate/action'


const LoginPage = () => {
    const [error, setError] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
     

    // submitting the data from the child component (login form)
 
    const handleSubmit = (data) => {

        const studentAccount = localStorage.getItem('accounts')
        if (!studentAccount) {
            setError('u need to creat email first')
        } else {

            const studentData = JSON.parse(localStorage.getItem('accounts'))
            const emailExist = studentData.find(student => student.email === data.email)
            if (emailExist !== undefined && emailExist.password === data.password) {
                dispatch(setStudentData(emailExist))
                dispatch(setStudentStatus(true))
                history.push('/profile')
            } else if (emailExist !== undefined && emailExist.password !== data.password) {
                setError('still something wrong !')
            } else {
                setError('u must resgist first ')
            }
        }
    }
    return (
        <div className='login col-12 '>
            <div className='col-lg-12 pb-4 mb-5'>
                <LoginForm handleSubmit={handleSubmit} backendError={error} />
            </div>
        </div>
    )
}

export default LoginPage