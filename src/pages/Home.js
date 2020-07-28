import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='row col-lg-12 col-sm-8'>
            <div className='col-4'>
                <Link to='/register'> register </Link>
            </div>
            <div className='col-4'>
                <Link to='/Login'> Login </Link>
            </div>
        </div>
    )
}

export default HomePage