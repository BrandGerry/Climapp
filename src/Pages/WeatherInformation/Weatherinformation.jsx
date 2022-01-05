import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTES
import Loader from '../../Components/Custom/Loader/Loader';
import CiudadInfoDos from "../../Components/Home/City/CiudadInfoDos"
import Error from '../../Components/Custom/Loader/Error';


const Weatherinformation = () => {
    
    //STATES
    const {name} = useParams();
	const [mainCityData, setMainCityData] = useState(null);
	const [loader, setLoader] = useState(false);

    //EFFECT

	useEffect(() => {
		const handleCityDataDos = async () => {
		setLoader(true);
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=07784c7a91f79a4a9d0fcda0c88a3e78`);
		const result = await response.json();
		setMainCityData(result);
		setLoader(false);	
		};
        

		handleCityDataDos();

		// eslint-disable-next-line react-hooks/exhaustive-deps	
	}, []);


    return (
        <div>
            {
				loader? <Loader/> : null
			}
			{
				mainCityData? mainCityData.cod !== 200? 
					<Error 
						error={mainCityData.cod} 
						message={mainCityData.message} 
					/> : 
					<CiudadInfoDos
						city={mainCityData.name}
						country={mainCityData.sys.country}
						mainWeather={mainCityData.weather[0].main}
						weather={mainCityData.weather[0].description} 
						img={mainCityData.weather[0].icon}
						temp={mainCityData.main.temp}
						tempMin={mainCityData.main.temp_min}
						tempMax={mainCityData.main.temp_max}
						wind={mainCityData.wind.speed}
						humidity={mainCityData.main.humidity}
						pressure={mainCityData.main.pressure}
					/> : null 
			}
        </div>
    )
}

export default Weatherinformation;