import React, { useState} from 'react'
import RegistrationForm from '../components/formpages/RegistrationForm'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setStudentData} from '../store/authenticate/action'


const RegisterPage = () => {


    const [error,setError] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    
    
    // submitting the data from the child component (login form)

    const handleSubmit = (data) => {
        const studentAccount = localStorage.getItem('accounts')
        if(!studentAccount){
            localStorage.setItem('accounts', JSON.stringify([]))
        }

        const studentData = studentAccount ? JSON.parse(studentAccount) : []
        const emailExist = studentData.find(student => (student.email === data.email))

        if(emailExist !== undefined){
            setError('this email is already exist')
        }else{
            setError('')
           history.push('/profile')
           localStorage.setItem('accounts', JSON.stringify([...studentData,data]))
           dispatch(setStudentData(data))
        }
    }


    return (
        <div className='register col-12'>
            <RegistrationForm handleSubmit={handleSubmit} error={error}  />
        </div>
    )
}

export default RegisterPage
