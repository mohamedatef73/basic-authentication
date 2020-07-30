import React from 'react'
import ProfileForm from '../components/formpages/ProfileForm'
import { useSelector } from 'react-redux'

const ProfilePage =() =>{
    const student = useSelector(state => state.Authenticate.students)



    return(
        <div className='profile col-12'>
            <div  className='home text-center'>
                <br/><br/><br/>
            <h1> welcome <br/>
            <span className='name'> {student.name}</span></h1>
            <ProfileForm />
            </div>
        </div>
    )
}

export default ProfilePage