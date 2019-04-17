import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = "97cfe4e3cb9d47e44621f70bb1ed4f7a";
const url = "http://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={ forecastData: null}
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }
    //No se ejecuta la primera vez por lo que es necesario el didmount
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city =>{
    //fetch or axios
     const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
     fetch(url_forecast).then(
         data=>( data.json())
         ).then( weather_data =>{
              const forecastData = transformForecast(weather_data);
              this.setState({forecastData});
             }
         );
    }
    
    renderForecastItemDays(forecastData){
        return forecastData.map( forecast =>(
            <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
            </ForecastItem>
        ));
    }

    renderProgress = () =>{
        return (<h3>"Cargando pronostico extendido"</h3>);
    }

    render(){
    const { city } = this.props;
    const { forecastData }=this.state;
        return (
        <div>
            <div className='forecast-title'>
                <h2> Pronostico Extendido para {city}</h2>
            </div>
            {forecastData ? this.renderForecastItemDays(forecastData):this.renderProgress()}
        </div>
        );
    }
}

ForecastExtended.propTypes ={
    city: PropTypes.string.isRequired
}

export default ForecastExtended;