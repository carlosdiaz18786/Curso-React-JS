import React from 'react';
import WeatherLocation from './../WeatherLocation';
import PropTypes from 'prop-types';


const LocationList = ({cities, onSelectedLocation}) =>{
    const handleWeatherLocationClick= city =>{
      console.log('clicked on handleWeatherLocationClick');
      onSelectedLocation(city);
    }

    //Al recorrer un array por map podemos llamar al index, se usa el key para evitar adverntencia arrojada por react, el key es un valor unico ejemplo citu no puede haber dos iguales
    const strToComponents = cities =>(
        cities.map( city =>(
             <WeatherLocation 
             key={city} 
             city={city}
             onWeatherLocationClick={ () => handleWeatherLocationClick(city)} >
             </WeatherLocation>)
            )
    );
    return( <div>
        {strToComponents(cities)}
    </div>  );
};
LocationList.propTypes ={
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;