import React from 'react'
import InputForm from '../inputs/inputForm'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {
    return (
        <div>
            <label>Name :</label>
            <InputForm type='text' placeholder='type your name' />
            <br />

            <label>Email :</label>
            <InputForm type='email' placeholder='type your email' />
            <br />

            <label>Age :</label>
            <InputForm type='number' placeholder='type your Age' />
            <br />


            <label>Password :</label>
            <InputForm type='password' placeholder='type the password' />
            <br />

            <label>Confirm Password :</label>
            <InputForm type='password' placeholder='confirm the password' />
            <br />

            <div className='col-12'>
                <Link to='/profile'>
                    <button>register</button>
                </Link>
                <br /><br />
                <Link to='/login'>
                    <button className='float-right'>Allready have one !</button>
                </Link>
            </div>



        </div>
    )
}

export default RegistrationForm