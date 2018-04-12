import axios from 'axios';

 

const API_KEY = "50bb5384466ccb470dc659a13dca555a";

export const FETCH_WEATHER = 'FETCH_WEATHER';




export  function fetchWeather(lon, lat) {
    if (lon === null || lat === null) {
       console.log("not finding log or lat")
    } else {
        delete axios.defaults.headers.common['Authorization'];
        return (dispatch)=>{
            let url =  'https://api.openweathermap.org/data/2.5/weather';
            const request =  axios({
                   method:"GET",
                   url: url,
                   params:{appid:API_KEY,lat:lat,lon:lon}
               }).then((res)=>dispatch(dispatchWeather(res)))
        }


}
}

export function dispatchWeather(data){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwtToken}`;
    return{
        type:FETCH_WEATHER,
        payload:data
    }
}





