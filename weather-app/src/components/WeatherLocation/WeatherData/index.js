import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from '../WeatherData/WeatherTemperature';
import './styles.css';
import PropTypes from 'prop-types';

//clasName es para darle clase al elemento html
const WeatherData = ({ data: {temperature, weatherState, humidity, wind}}) => (
   <div className="weatherDataCont"> 
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

//Queremos que la data venga como un objeto con parametros establecidos
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
};

export default WeatherData;