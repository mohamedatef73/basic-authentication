import React, { useState} from 'react'
import RegistrationForm from '../components/formpages/RegistrationForm'
import { useHistory } from 'react-router-dom'

const registerPage = () => {


    const [error,setError] = useState('')
    const history = useHistory()

    
    
    // submitting the data from the child component (login form)

    const handleSubmit = (data) => {
        console.log(data)
        // save the data in the local storage
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

        }

    }


    return (
        <div className='register col-12'>
            <h1 className ='text-center'>register page</h1>
            <p />
            <RegistrationForm handleSubmit={handleSubmit}  />
        </div>
    )
}

export default registerPage
