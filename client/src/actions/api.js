import axios from 'axios';


const API_KEY = "50bb5384466ccb470dc659a13dca555a";
let url; 
export const FETCH_WEATHER = 'FETCH_WEATHER';








function onLocationChange() {
   
    if (this.state.lon !== null || this.state.lat !== null) {
        this.fetchWeather();
    } else {
        alert("wait for coordinates to load")
    }
}
function coords(type) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            if (type === 'lon') {
                const lon = position.coords.longitude;
                type = lon;
            } else if(type === 'lat') {
                const lat = position.coords.latitude;
                type = lat;
            } else {
                type = null
            }
        });
    return type;
}

let lat = coords('lat');
let lon = coords('lon');

export function fetchWeather() {
    
    console.log(lat)
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${-34}&lon=${30}&APPID=${API_KEY}`;
    const request = axios.get(url);
    console.log('Request:', request)
    return {
        type: 'FETCH_WEATHER',
        payload: request
    }
}









