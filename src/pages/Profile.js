import React, { useState, useEffect } from 'react'
import ProfileForm from '../components/formpages/ProfileForm'
import { useSelector } from 'react-redux'


const ProfilePage = () => {
    const student = useSelector(state => state.Authenticate.students)

    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/photos")
        //     .then(response => response.json())
        //     .then(data => setData(data));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'The Result is',
                body: 'Accepted',
                id:1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => setData(json));

    });

    return (
        <div className='profile col-12'>
            <div className='home text-center'>
                <br /><br /><br />
                <h1> welcome <br />
                    <span className='name'> {student.name}</span></h1>
                <ProfileForm />
            </div><p />
            <ul>
                {data.title} <br/><h1>{data.id}</h1> 
                {/* {data.map(el => (
                    <p>{el.title}</p>
                ))} */}
            </ul>
        </div>
    )
}

export default ProfilePage