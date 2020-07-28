import React, { useState } from 'react'
import LoginForm from '../components/formpages/LoginForm'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const [error, setError] = useState('')
    const history = useHistory()

    // submitting the data from the child component (login form)

    const handleSubmit = (data) => {

        const studentAccount = localStorage.getItem('accounts')
        if (!studentAccount) {
            setError('u need to creat email first')
        } else {

            const studentData = JSON.parse(localStorage.getItem('accounts'))
            const emailExist = studentData.find(student => student.email === data.email)
            if (emailExist !== undefined && emailExist.password === data.password) {
                history.pushState('profile')
            } else if (emailExist !== undefined && emailExist.password !== data.password) {
                setError('still something wrong !')
            } else {
                setError('u must resgist first ')
            }
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <br />
            <LoginForm handleSubmit={handleSubmit} error={error} />
        </div>
    )
}

export default LoginPage