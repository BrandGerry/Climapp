import React, {useState} from 'react'

//COMPONENTES
import WeatherForm from "../../Components/Home/Form/weatherForm"
import CiudadInfo from "../../Components/Home/City/Ciudadinfo"
import Loader from "../../Components/Custom/Loader/Loader"
import Header from '../../Components/Home/Header/Header'
import Error from '../../Components/Custom/Loader/Error'

const Home = () => {
    //STATE
    const [infCity , setInfCity]= useState(null);
    const [nombreCity , setNombreCity]= useState("");
    const [loader , setLoader]= useState(false);

    //FUNCIONES
    const buscarCiudad = ({value}) =>{
        setNombreCity(value) //Se le asigna el objeto Event.target.value
    }

    const enviarCiudad = async (e) =>{
        e.preventDefault();
        //Aqui ponemos el load cuando hace la peticion y lo reseteamos
        setInfCity(null);
        setLoader(true);
        //Llmamos a la api aqui porque lo necesitamos justo enviamos submit
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCity}&units=metric&appid=07784c7a91f79a4a9d0fcda0c88a3e78`
        const response = await fetch (API);
        const result = await response.json();
        setInfCity(result); 
        setLoader(false);
    }
    console.log(infCity)

    return (
        <div className="">
            <Header/>
            <WeatherForm 
            buscarCiudad={buscarCiudad} 
            nombreCity={nombreCity} 
            enviarCiudad={enviarCiudad}/>
           
            {
                loader ? <Loader/> : null
            }

            {
				infCity? infCity.cod !== 200? 
					<Error 
						error={infCity.cod} 
						mensaje={infCity.message} 
					/> : 
					<CiudadInfo
						name={infCity.name} 
						weather={infCity.weather[0].description} 
						img={infCity.weather[0].icon}
						temp={infCity.main.temp}
					/> : null 
			}
            
        </div>
    )
}

export default Home
