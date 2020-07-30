import React, { useEffect } from 'react'
import ResultForm from '../components/formpages/ResultForm'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getResultPage } from '../store/results/actions'

const ResultPage = () => {
    const student = useSelector(state => state.Authenticate.students)
    const login = useSelector(state => state.Authenticate.IsLoggedIn)
    const results = useSelector(state => state.results.results)
    const history = useHistory()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (login === false) {
    //         history.push('/login')
    //     }
    // }, [login, history])


    useEffect(() => {
        dispatch(getResultPage())
    }, [])

    return (
        <div className='row col-12'>
            <div className='result'>
            <h1 className='text-center text-success'> Result Page </h1>
            <br />
            <ResultForm />
            <ul>
                {
                    results.map(result => <li key={result.id}>
                        {result.title}</li>
                    )}
            </ul>
            </div>

        </div>
    )
}

export default ResultPage