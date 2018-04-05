import { FETCH_WEATHER } from '../actions/api';


let initialState = { temp: null, tempC: null };
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                temp: (action.payload.data.main.temp * 9 / 5 - 459.67).toFixed(0),
                tempC :(action.payload.data.main.temp * 9 / 5 - 459.67).toFixed(0)
            });
        default:
            return state
    }
}