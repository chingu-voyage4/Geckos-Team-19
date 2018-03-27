import { FETCH_WEATHER_INPUT } from '../actions/api';


let initialState = {
    wind: null,
    humidity: null,
    city: null,
  
 };
 export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_INPUT:
            return Object.assign({}, state, {
                wind: action.payload.data.wind.speed,
                humidity: action.payload.data.main.humidity,
                main: action.payload.data.weather[0].main,
                city: action.payload.data.name
            });
        default:
            return state
    }
 }