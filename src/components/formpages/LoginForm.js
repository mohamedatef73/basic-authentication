import React, { useState, useEffect } from 'react'
import InputForm from '../inputs/inputForm'
import { useHistory } from 'react-router-dom'

const LoginForm = (props) => {

    // setting the state for the inputs using useState

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // setting the errors state

    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')

    // checking the registration conditions


    const isEmail = () => {
        if (email.length < 2) {
            setEmailErr('this email does not exist!')
            return false
        } else {
            setEmailErr('')
            return true
        }
    }

    const isPassword = () => {
        if (password.length < 2) {
            setPasswordErr('u must write two number at least')
            return false
        } else {
            setPasswordErr('')
            return true
        }
    }
    // submitting the validate data to the parent component and move to the profile page

    const history = useHistory()

    const validateData = () => {
        const validatEmail = isEmail()
        const validatPassword = isPassword()
        if (validatEmail & validatPassword) {
            const data = {
                email,
                password
            }
            history.push('/profile')
            props.handleSubmit(data)

        }
    }

    useEffect(() =>{
        if(props.error){
            setEmailErr(props.error)
        }
    },[props.error,setEmailErr])


    return (
        <div>
            <h1>Welcome Again ...</h1>

            <label>Email :</label>
            <InputForm type='email' placeholder='please type your email'
                value={email} errors={emailErr}
                handleChange={setEmail} />
            <br />

            <label>Password :</label>
            <InputForm type='password' placeholder='please type your password'
                value={password} errors={passwordErr}
                handleChange={setPassword} />
            <br />

            <button className='btn btn-warning'
                onClick={validateData}>Login to the profile</button>

        </div>
    )
}

export default LoginForm