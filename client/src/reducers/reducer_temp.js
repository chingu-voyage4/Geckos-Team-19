import { FETCH_WEATHER } from '../actions/api';

let initialState = { temp: null };
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                temp: action.payload.data.main.temp
            });
        default:
            return state
    }
}