import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
    'Buenos Aires,ar',
    'Bogota,col',
    'Monroe,us',
    'Santa Marta,col',
    'Madrid,es,'
];

class App extends Component {
    handleSelectedLocation = city =>{
        console.log(`handleSelectedLocation - ${city}`)
    }
    render() {
        return ( 
        <div className = "App">
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div >
        );
    }
}

export default App;