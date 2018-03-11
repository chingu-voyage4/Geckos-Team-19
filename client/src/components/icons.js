import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { sunny } from '../styles/--weatherIcons';

//const weatherIcons is just for a reference to the wi-x-y
//eslint-disable-next-line
const weatherIcons = {
    //format is api_icon:[weather-icon-font,bg-color-key,font-color]
    'clear-day': ['wi-day-sunny', '#ffff33', '#000000'],
    'clear-night': ['wi-night-clear', '#2d2d86', '#ffffff'],
    'rain': ['wi-rain', '#003399', '#ffffff'],
    'snow': ['wi-snow', '#ccffff', '#000000'],
    'sleet': ['wi-sleet', '#ccffff', '#000000'],
    'wind': ['wi-strong-wind', '#80bfff', '#ffffff'],
    'fog': ['wi-fog', '#248f8f', '#000000'],
    'cloudy': ['wi-cloudy', '#8b8b8d', '#000000'],
    'partly-cloudy-day': ['wi-day-cloudy', '#ffffcc', '#000000'],
    'partly-cloudy-night': ['wi-night-alt-cloudy', '#2d2d86', '#ffffff'],
    'hail': ['wi-hail', '#ccffff', '#000000'],
    'thunderstorm': ['wi-storm-showers', '#4b4f4c', '#ffffff'],
    'tornado': ['wi-tornado', '#ff6600', '#000000']
}


const icon = {
    sunny: <i className='wi wi-day-sunny' style={sunny}></i>,
    clearNight: <i className='wi wi-night-clear'></i>
}

export default { icon }; 