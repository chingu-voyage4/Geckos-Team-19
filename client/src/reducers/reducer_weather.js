import { FETCH_WEATHER } from '../actions/api';

let initialState = {
    locationFound: false,
    temp : null
}


onLocationChange(lon,lat) {
    if (lon !== null || lat !== null) {
        this.props.fetchWeather(lon, lat);
        // console.log(lon)
        // console.log(lat)
        // console.log(url)
        this.setState({
            locationFound : true, 
         })
         console.log(this.state.locationFound)
    } 

}


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
        return Object.assign({}, state, {
          temp : [ action.payload.data.main.temp],
          locationFound : 
    }
    return state;
}