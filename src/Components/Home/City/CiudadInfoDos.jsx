import React from "react";

//STYLOS
import "./CiudadInfoDos.styles.css"

//Router
import {useHistory} from "react-router-dom";

const CiudadInfoDos = (props) => {
	
	const { 
		img, 
		mainWeather, 
		weather, 
		temp,
		humidity,
		pressure,
		wind
	} = props

    //HOOK ROUTER
    const History = useHistory();

    //FUNCIONES
    const handleHistory = () =>{
      //Go back regresa , push te manda a la vista que le mandas
      History.goBack()
    };

	return(
		<section>	
			<div >
				<div className="Primero">
					<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather-logo"/>
					<h4>{mainWeather}</h4>
					<p className="Weather">{weather}</p>
				</div>
			</div>

			<div className="Segundo">
				<p>Wind<br/><span>{wind}m/s</span></p>
				<p>Humidity<br/><span>{humidity}%</span></p>
				<p>Pressure<br/><span>{pressure}hPa</span></p>
                <p>{Math.trunc(temp)}°</p>
			</div>


			<button onClick={handleHistory}>Home</button>
		</section>		
	);
};

export default CiudadInfoDos;
