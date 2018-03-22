import axios from 'axios';


const API_KEY = "50bb5384466ccb470dc659a13dca555a";
let url; 
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_F = "FETCH_F";


function onLocationChange() {
   
    if (this.state.lon !== null || this.state.lat !== null) {
        this.fetchWeather();
    } else {
        alert("wait for coordinates to load")
    }
}






export function fetchWeather(lon, lat) {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
    console.log(url);
    const request = axios.get(url);
    console.log('Request:', request)
    return {
        type: 'FETCH_WEATHER',
        payload: request
    }


}





