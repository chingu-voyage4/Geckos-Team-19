import axios from 'axios';

const API_KEY = "50bb5384466ccb470dc659a13dca555a";
let url; 
export const FETCH_WEATHER = 'FETCH_WEATHER';




export function fetchWeather(lon, lat) {
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
        const request = axios.get(url);
        return {
            type: 'FETCH_WEATHER',
            payload: request
        
    }


}







