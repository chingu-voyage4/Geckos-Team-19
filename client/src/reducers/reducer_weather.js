import { FETCH_WEATHER } from '../actions/api';

export default function (state = "...loading", action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data.main.temp]
    }
    return state;
}