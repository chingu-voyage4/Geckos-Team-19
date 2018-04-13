import { FETCH_WEATHER } from '../actions/api';


export function getIcon(action) {
    var prefix = 'wi wi-';
    var code = action.id;
    var icon = action.icon;

    switch (icon) {
        case "01d":
        case "01n":
            icon = "sunny";
            break;
        case "02d":
        case "02n":
        case "03d":
        case "03n":
        case "04n":
        case "04d":
            icon = "cloudy";
            break;
        case "09n":
        case "09d":
        case "10d":
        case "10n":
            icon = "rain";
            break;
        case "11d":
        case "11n":
            icon = "thunderstorm";
            break;
        case "13d":
        case "13n":
            icon = "snow";
            break;
        case "50d":
            icon = "windy";
            break;
        default:
            icon = "snow";
    }
    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon;
       
    }
    // Finally tack on the prefix.
    icon = prefix + icon;
    return icon.toString().toLowerCase();
}


let initialState = {
    wind: null,
    humidity: null,
    main: null,
    city: null,
    icon: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                wind: action.payload.data.wind.speed,
                humidity: action.payload.data.main.humidity,
                main: action.payload.data.weather[0].main,
                city: action.payload.data.name,
                icon: getIcon(action.payload.data.weather[0])
            });
        default:
            return state
    }
}