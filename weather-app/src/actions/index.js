import transformForecast from './../services/transformForecast';
export const SET_CITY = `SET_CITY`;
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const api_key = "97cfe4e3cb9d47e44621f70bb1ed4f7a";
const url = "http://api.openweathermap.org/data/2.5/forecast"

//action creator
const setCity = payLoad =>({type:SET_CITY, payLoad});
const setForecastData = payLoad => ({type:SET_FORECAST_DATA, payLoad});

export const setSelectedCity = payLoad => {
    return dispatch => {
        const url_forecast = `${url}?q=${payLoad}&appid=${api_key}`;
        //Activar en el estado un indicador de busqueda de datos
        dispatch (setCity(payLoad));

        return fetch(url_forecast).then(
            data=>( data.json())
            ).then( weather_data =>{
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise
                 dispatch(setForecastData({city:payLoad,forecastData}));
                }
            );
    }
};
