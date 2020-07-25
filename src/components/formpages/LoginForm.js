import React from 'react'
import InputForm from '../inputs/inputForm'
import { Link } from 'react-router-dom'

const LoginForm = () =>{
    return(
        <div>
            <h1>Welcome Again ...</h1>

           <label>Email :</label>
            <InputForm type='email' placeholder='please type your email'/>
            <br/>

            <label>Password :</label>
            <InputForm type='password' placeholder='please type your password'/>

            <Link to='/profile'>Profile Page</Link>

        </div>
    )
}

export default LoginForm