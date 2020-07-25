import React from "react"
import { Link } from "react-router-dom"

const HomePage = () =>{
    return(
        <div>
            <h1>Home Page</h1>
            <div className='row'>
            <Link to='/register'> register </Link>&nbsp; &nbsp;

            <Link to='/Login'> Login </Link>
            </div>
        </div>
    )
}

export default HomePage