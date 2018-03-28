import axios from 'axios';
import { fetchZip } from '../actions/zip';

const API_KEY = "50bb5384466ccb470dc659a13dca555a";
let url; 
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_F = "FETCH_F";



export function fetchWeather(lon, lat) {
    if (lon === null || lat === null) {
        fetchZip() 
    } else {
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
        const request = axios.get(url);
        console.log('Request:', request)
        return {
            type: 'FETCH_WEATHER',
            payload: request
        }
    }


}







