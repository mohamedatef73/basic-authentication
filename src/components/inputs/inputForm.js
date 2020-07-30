import React from 'react'

const InputForm = (props) => {
    return (
        <div className='container col-12 justify-content-center'>
            <div className='col-lg-6'>
                <form>
                    <input type={props.type} placeholder={props.placeholder}
                        className='form-control' value={props.value}
                        onChange={(e) => props.handleChange(e.target.value)}
                    />
                    <span className='errors'> {props.errors} </span>
                </form>
            </div>
        </div>

    )
}

export default InputForm