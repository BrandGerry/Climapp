import React from 'react'

//stylos
import "./Error.styles.css"

const Error = ({error,mensaje}) => {
    return (
        <div className="errorzazo">
            <p>{error}</p>
            <p>{mensaje}</p>
            
        </div>
    )
}

export default Error
