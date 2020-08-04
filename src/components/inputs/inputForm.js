import React from 'react'

const InputForm = (props) => {
    const handleInputChange = (val)=>{
        props.handleChange(val)
        props.resetError('')
    }
    return (
        <div className='container col-12 justify-content-center'>
            <div className='col-lg-6'>
                <form>
                    <input type={props.type} placeholder={props.placeholder}
                        className='form-control' value={props.value}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <span className='errors'> {props.errors} </span>
                </form>
            </div>
        </div>

    )
}

export default InputForm