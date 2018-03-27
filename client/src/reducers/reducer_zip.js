import { FETCH_ZIP } from '../actions/zip';
import { getIcon } from './reducer_weather';

let initialState = {
    wind: null,
    humidity: null,
    main: null,
    city: null,
    icon: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ZIP:
            return Object.assign({}, state, {
                wind: action.payload.data.wind.speed,
                humidity: action.payload.data.main.humidity,
                main: action.payload.data.weather[0].main,
                city: action.payload.data.name,
                country: action.payload.data.sys.country,
                icon: getIcon(action.payload.data.weather[0]),
                temp: (action.payload.data.main.temp * 9 / 5 - 459.67).toFixed(0),
                tempC: (action.payload.data.main.temp * 9 / 5 - 459.67).toFixed(0)
            });
        default:
            return state
    }
}

