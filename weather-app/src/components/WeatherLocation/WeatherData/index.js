import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from '../WeatherData/WeatherTemperature';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../../constants/weathers';
//clasName es para darle clase al elemento html
const WeatherData = () => (
    <div className="weatherDataCont"> 
        <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;