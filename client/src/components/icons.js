import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { sunny } from '../styles/--weatherIcons';



//displayed in weather.js
const icon = {
    sunny: <i className='wi wi-day-sunny' style={sunny}></i>,
    clearNight: <i className='wi wi-night-clear'></i>,
    rain: <i className='wi-rain'></i>,
    snow: <i className='wi-snow'></i>,
    sleet: <i className='wi-sleet'></i>,
    wind: <i className='wi-strong-wind'></i>,
    fog: <i className='wi-fog'></i>,
    cloudy: <i className='wi-cloudy'></i>,
    partlyCloudyDay: <i className='wi-day-cloudy'></i>,
    hail: <i className='wi-hail'></i>,
    thunderstorm: <i className='wi-storm-showers'></i>,
    tornado: <i className='wi-tornado'></i>
}

export default { icon }; 