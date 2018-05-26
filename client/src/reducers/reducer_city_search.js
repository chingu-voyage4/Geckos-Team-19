import { FETCH_CITY_SEARCH } from '../actions/location-autofill';
import { getIcon } from './reducer_weather';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(({ lat, lng }) => {
        console.log('Geocode Success', { lat, lng }); // eslint-disable-line no-console
        this.setState({
            geocodeResults: this.renderGeocodeSuccess(lat, lng),
            lat: lat,
            lng: lng,
            loading: false,
        });
        console.log(this.state.lat)
        console.log(this.state.lng)
    })
    .catch(error => {
        console.log('Geocode Error', error); // eslint-disable-line no-console
        this.setState({
            geocodeResults: this.renderGeocodeFailure(error),
            loading: false,
        });
    });
  
let initialState = {
    lon: null,
    lat: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CITY_SEARCH:
            return Object.assign({}, state, {
                lon: action.getLatLng(results[0]).lon,
                lat: action.getLatLng(results[0]).lat
            });
        default:
            return state
    }
}