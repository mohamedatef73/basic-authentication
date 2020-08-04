import React, { useState, useEffect } from 'react'
import InputForm from '../inputs/inputForm'
import { Link, useHistory } from 'react-router-dom'


const RegistrationForm = (props) => {
    // setting the state for the inputs using useState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // setting the errors state
    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailError] = useState('')
    const [ageErr, setAgeErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('')

    // checking the registration conditions
    const isName = () => {
        if (name.length < 2) {
            setNameErr('plz write correct name')
            return false
        } else {
            setNameErr('')
            return true
        }
    }

    const isEmail = () => {
        if ( email.length > 6 || email === '@'){
            setEmailError('')
            return true
        } else {
            setEmailError('this incrrect email')
            return false

        }
    }

    const isAge = () => {
            if (age <= 15 || age > 20){
            setAgeErr('this is not the correct age')
            return false
        } else {
            setAgeErr('')
            return true
        }
    }

    const isPassword = () => {
        if (password.length < 2 || password.length > 4) {
            setPasswordErr('the password must have 2 numbers at least')
            return false
        } else {
            setPasswordErr('')
            return true
        }
    }

    const isPasswordConfirmation = () => {
        if (confirmPassword !== password) {
            setConfirmPasswordErr('does not match!')
            return false
        } else {
            setConfirmPasswordErr('')
            return true
        }
    }


    // submitting the validate data to the parent component and move to the profile page


    const validateData = () => {
        const validateName = isName()
        const validateEmail = isEmail()
        const validateAge = isAge()
        const validatePassword = isPassword()
        const validateConfirmPassword = isPasswordConfirmation()


        if (validateName & validateEmail & validateAge & validatePassword & validateConfirmPassword) {
            const data = {
                name,
                email,
                age,
                password,
                confirmPassword
            }
            props.handleSubmit(data)
        }
    }

    useEffect(() => {
        if (props.error) {
            setEmailError(props.error)
        }
    }, [props.error, emailErr])





    return (
        <div className='mt-4'>
            <label>Name :</label>
            <InputForm type='text' placeholder='type your name' value={name}
                handleChange={setName} errors={nameErr} resetError={setNameErr}  />

            <label>Email :</label>
            <InputForm type='email' placeholder='type your email' value={email}
                handleChange={setEmail} errors={emailErr} resetError={setEmailError}  />

            <label>Age :</label>
            <InputForm type='number' placeholder='type your Age' value={age}
                handleChange={setAge} errors={ageErr} resetError={setAgeErr}  />
  

            <label>Password :</label>
            <InputForm type='password' placeholder='type the password'
                value={password}
                handleChange={setPassword} errors={passwordErr} resetError={setPasswordErr}  />

            <label>Confirm Password :</label>
            <InputForm type='password' placeholder='confirm the password'
                value={confirmPassword}
                handleChange={setConfirmPassword} errors={confirmPasswordErr} resetError={setConfirmPasswordErr}  />
            <br />
            <div className='col-lg-6 col-sm-12'>
                <button className='btn btn-warning mb-1'
                    onClick={validateData}>register</button>

                <Link to='/login'>
                    <button className='btn btn-warning float-right'>Already have one !</button>
                </Link>
            </div>



        </div>
    )
}

export default RegistrationForm