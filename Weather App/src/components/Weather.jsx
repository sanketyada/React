import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  let inputRef = useRef();
  const [massage,setMassage] = useState('')

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    if (city ==""){
        // setWeatherData(false)
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        setWeatherData(false)
        setMassage("Data Not Found")
      }

      // console.log(data);
      // console.log(data.weather[0].icon);

      const icon = allIcons[data.weather[0].icon] || clear;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(flase);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Azamgarh");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search Place" />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img className="weather_icon" src={weatherData.icon} alt="" />
          <p className="temp">{weatherData.temprature}°c</p>
          <p className="city">{weatherData.location}</p>
          <div className="weather_data">
            <div className="col">
              <img src={humidity} alt="" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humadity</span>
              </div>
            </div>

            <div className="col">
              <img src={wind} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <p style={{color:"red", marginTop:"10px"}}>{massage}</p>
       
        </>
      )}
    </div>
  );
}

export default Weather;
