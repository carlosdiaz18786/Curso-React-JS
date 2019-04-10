import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../constants/weathers';

const data = {
    temperature:5,
    weatherState:SUN,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature:19,
    weatherState:WINDY,
    humidity: 8,
    wind: '19 m/s',
};

//data es un parametro que pasamos a WeatherData
class WeatherLocation  extends Component {

    constructor() {
        super(); //llamada al componente base siempre hay que ponerlo
        this.state = { 
            city: 'Buenos Aires',
            data:data,
        };
    }
    
    handleUpdateClick = () =>{
        this.setState({ //Lo utilizamos para setear el state si usamos state= no funciona
            city: 'Soachington D.C',
            data:data2,
        });
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick} >Actualizar</button>
             </div>
        );
    }
}

export default WeatherLocation;