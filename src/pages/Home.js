import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='row col-12 ml-0'>
                <div className='home col-4 text-center'>
                    <Link className='text-danger' to='/register'> register </Link>
                </div>
                <div className='home col-4 text-center'>
                    <Link className='text-warning'  to='/Login'> Login </Link>
                </div>
        </div>
    )
}

export default HomePage