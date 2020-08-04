import React, { useEffect } from 'react'
import ResultForm from '../components/formpages/ResultForm'
import { useSelector, useDispatch } from 'react-redux'
import { getResultPage } from '../store/results/actions'
import { Link } from 'react-router-dom'


const ResultPage = () => {
    const results = useSelector(state => state.results.results)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getResultPage())
    }, [])

    return (
        <div className='row col-12 '>
            <div className='result'>
            <br />

           <h1 className='text-center'><Link className=' text-primary' to='/home'>Home Page</Link></h1>

            <ResultForm />
            <ul>
                {
                    results.slice(0,5).map(result =><li key={result.id}>{(result.title)}</li>
                    )}
            </ul>
            </div>

        </div>
    )
}

export default ResultPage