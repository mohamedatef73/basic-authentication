import React from 'react'
import { Link } from "react-router-dom"


const ProfileForm = () => {
    return (
        <div className='Profile text-center'>
            <div>
                <label> You Can Check The Exam Result From This Link</label>
                <br />
                <Link to='/Result'>
                    <button className='btn btn-warning'>
                        Result Exam Page
                   </button>

                </Link>
            </div>

        </div>
    )
}

export default ProfileForm