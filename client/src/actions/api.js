import axios from 'axios';


const API_KEY = "50bb5384466ccb470dc659a13dca555a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${30}&lon=${-34}&APPID=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    const request = axios.get(ROOT_URL);
    console.log('Request:', request)
    return {
        type: 'FETCH_WEATHER',
        payload: request
    }
}









