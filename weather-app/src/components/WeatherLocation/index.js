import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather'
import {api_weather} from  '../../constants/api_url';

//data es un parametro que pasamos a WeatherData
class WeatherLocation  extends Component {

    constructor() {
        super(); //llamada al componente base siempre hay que ponerlo
        this.state = { 
            city: 'Bogota',
            data: null,
        };
        console.log("Constructor");
    }
    //states
    componentDidMount() {
        console.log("Did Mount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Did Update");
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then( resolve => {
            console.log(resolve);
            return resolve.json(); 
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });

    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?<WeatherData data={data}></WeatherData> : 
                    "Cargando..."}
             </div>
        );
    }
}

export default WeatherLocation;