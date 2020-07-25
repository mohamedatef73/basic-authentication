import React from 'react'
import { Link } from "react-router-dom"


const ProfileForm = () =>{
    return(
        <div>
            <h1>Welcome   To Your Profile Page</h1>
            <br/>
            <label>And You Can Check The Exam Result Here</label>
            <Link to='/Result'> Result Exam Page</Link>

        </div>
    )
}

export default ProfileForm