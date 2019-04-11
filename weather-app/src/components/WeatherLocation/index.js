import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


//data es un parametro que pasamos a WeatherData
class WeatherLocation  extends Component {

    constructor(props) {
        super(props); //llamada al componente base siempre hay que ponerlo
        const { city } = props;
        this.state = { 
            city,
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
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json(); 
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });

    }

    render() {
        const {onWeatherLocationClick} =this.props;
        const {city, data} = this.state;

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {
                    data ?<WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={50}></CircularProgress>
                }
             </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;