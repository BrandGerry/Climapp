import React from 'react'

//Estilos
import "./weatherForm.styles.css";


const weatherForm = ({buscarCiudad,enviarCiudad}) => {
    return (
        <form action="" onSubmit={(e) => enviarCiudad(e)}>
            <input type="text" 
            placeholder="City Name" 
            onChange={({target}) => buscarCiudad (target)}/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default weatherForm
