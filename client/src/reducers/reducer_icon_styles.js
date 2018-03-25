import React from 'react';
import { FETCH_WEATHER } from '../actions/api';
import { icon } from '../components/icons';

let initialState = {
    icon: icon.cloudy
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            let iconCode = action.payload.data.weather[0].icon;
            let iconURL = `http://api.openweathermap.org/img/w/${iconCode}.png`;
            return Object.assign({}, state, {
                icon: <img src={iconURL} />
            });
            console.log(iconURL);
        default:
            return state
    }
}