import React from 'react'

const InputForm = (props) =>{
    return(
        <div>
            <form>
                <input type={props.type} placeholder={props.placeholder}
                 className='form-control'/>
            </form>

        </div>
    )
}

export default InputForm