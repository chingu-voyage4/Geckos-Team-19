import axios from 'axios';
const API_KEY = "50bb5384466ccb470dc659a13dca555a";
let url;
export const FETCH_ZIP = 'FETCH_ZIP';




export function fetchZip(zip) {
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;
    const request = axios.get(url);
    return {
        type: 'FETCH_ZIP',
        payload: request,
    }


}