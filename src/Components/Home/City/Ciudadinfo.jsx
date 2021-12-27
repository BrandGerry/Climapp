import React from 'react'

//Router
import {useHistory} from "react-router-dom";

//STYLOS
import "./Ciudadinfo.styles.css"

const Ciudadinfo = ({name, weather, img, temp}) => {

    //Hook router
    const history = useHistory();

    //FUNCIONES
    const handleHistory = () =>{
        //Como si fuera link me escribe en la url weather history es un obj
        console.log(history);
        //history.push("/weather");
         history.push(`/weather/${name}`);
    }

    return (
        <div className="card">
            <div className="unouno">
               <h2>{name}</h2>
               <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="weather-logo"/>
			   <h4 className="negro">{Math.trunc(temp)}°</h4>
               <p className="pe">{weather}</p>
            </div>

            <div className="dosdos">
              <button onClick={handleHistory}>See more</button>
            </div>
        </div>
    )
}


export default Ciudadinfo
