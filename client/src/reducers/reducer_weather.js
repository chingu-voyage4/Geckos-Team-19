import { FETCH_WEATHER } from '../actions/api';

let initialState = { wind: null, main: null };
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                wind: action.payload.data.wind.speed + ' mph',
                main: action.payload.data.weather[0].main,
                humidity: action.payload.data.main.humidity
            });
    }
    return state;
}