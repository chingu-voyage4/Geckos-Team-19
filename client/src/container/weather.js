import React, { Component } from 'react';
import TempButton from '../components/tempButton';
import { Div, ItemTemp, ListTemp, ItemBtn, Icon, List } from '../styles/--weather';
import icons from '../components/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/api';
import { store } from '../actions/store';




//put a timeout on a function that renders the display of the weather
//outside of the main rendom method
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "...loading",
            long: "...loading",
            
            error: null,
            tempKind: false,
            displayTemp: "...",
          
            city: "",
            wind: "",
            humidity: ""
        }
        this.handleClick = this.handleClick.bind(this);

    }


    callApi() {
        // Call the API page
        fetch(url)
            .then(response => response.json())
          //  .then(console.log(url))
            .then(response => {
                this.setState({
                    weather: (response.main.temp * 9 / 5 - 459.67).toFixed(1),
                    displayTemp: (response.main.temp * 9 / 5 - 459.67).toFixed(1)
                })
            })
            .catch(err => {
                console.error(err)
                return null
=======
    coords(type) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (type === 'lon') {
                    const lon = position.coords.longitude;
                    return lon;
                } else if (type === 'lat') {
                    const lat = position.coords.latitude;
                    return lat;
                } else {
                    return 'enter lon or lat';
                }
>>>>>>> e1bbfd900094305beefeb807324ada092caf75c9:client/src/Containers/weather.js
            })
      
    }
   
    onLocationChange() {
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&APPID=${apiKey}`
        if (this.state.long !== "...loading" || this.state.lat !== "...loading") {
            this.callApi();
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    error: null,
                });
            },
        );
        setTimeout(() => {
          //console.log(this.state.long);
          //console.log(this.state.lat);
            this.onLocationChange();
        }, 7000);
=======
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`
        if (this.state.lon !== null || this.state.lat !== null) {
            this.props.fetchWeather();
        } else {
            alert("wait for coordinates to load")
        }
    }
    componentDidMount() {
       
         setTimeout(() => {
             lon = this.coords('lon');
             lat = this.coords('lat');
        }, 1000);
         

>>>>>>> e1bbfd900094305beefeb807324ada092caf75c9:client/src/Containers/weather.js
    }






=======
    
>>>>>>> 104f7dba6425fe3361958fb3c3d02ae8a473b2a9:client/src/Containers/weather.js
    handleClick = (event) => {

        this.setState(prevState => ({
            tempKind: !prevState.tempKind
        }));
        if (this.state.tempKind) {
            this.setState({
                displayTemp: this.state.temp
            });
        } else {
            this.setState({
                displayTemp: ((this.state.temp - 32) * 5 / 9).toFixed(1)
        })
        }
    }

<<<<<<< HEAD:client/src/container/weather.js

=======
    
<<<<<<< HEAD:client/src/container/weather.js
 
>>>>>>> e1bbfd900094305beefeb807324ada092caf75c9:client/src/Containers/weather.js
=======
    componentDidMount() {
        this.props.fetchWeather();
    }
>>>>>>> 104f7dba6425fe3361958fb3c3d02ae8a473b2a9:client/src/Containers/weather.js
    render() {
        return (
            <Div>
                <List>
                    <h3>{this.props.city}</h3>
                    <Icon>
                        {icons.icon.sunny}
                    </Icon>
                    <div >
                        <p >Wind {this.state.wind}</p>
                        <p >Main {this.state.main}</p>
                        <p>Humidity {this.state.humidity}%</p>
                    </div>
                    <button>toggle placeholder</button>
                    <ListTemp>
                        <ItemTemp>
                            {store.getState().temp.temp}
                        </ItemTemp>
                        <ItemBtn>
                        <TempButton
                            onClick={this.handleClick}
                            tempkind={this.state.tempKind ? 'wi wi-celsius' : 'wi wi-fahrenheit'} />
                        </ItemBtn>
                    </ListTemp>

                </List>
            </Div>
        );
    }
}
<<<<<<< HEAD:client/src/container/weather.js
export default Weather;
=======

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
>>>>>>> e1bbfd900094305beefeb807324ada092caf75c9:client/src/Containers/weather.js
