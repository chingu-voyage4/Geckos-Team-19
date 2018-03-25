import React from 'react';
import { Yellow, Blue, Grey, White } from '../styles/--weatherIcons';
//displayed in weather.js
const icon = {
    sunny: <i className='wi wi-day-sunny' style={{color: 'yellow'}}></i>,
    clearNight: <White className='wi wi-night-clear'></White>,
    rain: <Blue className='wi-rain'></Blue>,
    snow: <White className='wi-snow'></White>,
    sleet: <White className='wi-sleet' ></White>,
    wind: <Grey className='wi-strong-wind'></Grey>,
    fog: <Grey className='wi-fog'></Grey>,
    cloudy: <i className='wi wi-cloudy' style={{color: 'white'}}></i>,
    partlyCloudyDay: <White className='wi-day-cloudy'></White>,
    hail: <White className='wi-hail'></White>,
    thunderstorm: <Grey className='wi-storm-showers'></Grey>,
    tornado: <Grey className='wi-tornado'></Grey>
}

export {icon}

