import axios from 'axios';
const API_KEY = "50bb5384466ccb470dc659a13dca555a";
let url;
export const FETCH_ZIP = 'FETCH_ZIP';
export const FETCH_F = "FETCH_F";




export function fetchZip(zip) {
    url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;
    console.log(url);
    const request = axios.get(url);
    console.log('Request:', request)
    return {
        type: 'FETCH_ZIP',
        payload: request,
    }


}