import { FETCH_WEATHER } from '../actions/api';
function getFahrenheit(action, day){
    let temp = action.payload.data.list[day].main.temp;
    temp = (temp * (9 / 5) - (459.67)).toFixed(0);
    return temp;
    }
function getCelcius(action, day){
    let temp = action.payload.data.list[day].main.temp;
    temp = (temp*(9 / 5) - (459.67)-32).toFixed(0);
    return temp;
}
let initialState = { temp: null, tempC: null };
export default function (state = initialState, action) {
    
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                day1F: getFahrenheit(action,0),
                day1C: getCelcius(action, 0),
                day2F: getFahrenheit(action,1),
                day2C: getCelcius(action,1),
                day3F: getFahrenheit(action,2),
                day3C: getCelcius(action, 2)
            });
        default:
            return state
    }
}