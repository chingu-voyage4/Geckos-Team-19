import React, { Component } from 'react';
import TempButton from '../components/tempButton';
import { Div, TempWrap, List, ListTemp, ListBtn } from '../styles/--weather';
import icons from '../components/icons';


let url;
let apiKey = "50bb5384466ccb470dc659a13dca555a";

//put a timeout on a function that renders the display of the weather
//outside of the main rendom method
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "....loading",
            long: "...loading",
            weather: "...getting data",
            error: null,
            tempKind: false,
            displayTemp: ""
        }
        this.handleClick = this.handleClick.bind(this);
        
    }

    callApi() {
        // Call the API page
        fetch(url)
            .then(response => response.json())
            .then(console.log(url))
            .then(response => {
                this.setState({
                    weather: (response.main.temp * 9 / 5 - 459.67).toFixed(1),
                    displayTemp: (response.main.temp * 9 / 5 - 459.67).toFixed(1)
                })
            })
            .catch(err => {
                console.error(err)
                return null
            })
    }
    onLocationChange() {
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&APPID=${apiKey}`
        if (this.state.long !== null || this.state.lat !== null) {
            this.callApi();
        } else {
            alert("wait for coordinates to load")
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
            this.onLocationChange();
        }, 1000);
    }
   
    


  

    handleClick = (event) => {
        
        this.setState(prevState => ({
            tempKind: !prevState.tempKind
        }));
        if (this.state.tempKind) {
            this.setState({
                displayTemp: this.state.weather
            });
        } else {
            this.setState({
                displayTemp: ((this.state.weather - 32) * 5 / 9).toFixed(1)
        })
        }
    }

 
    render() {
        return (
            <Div>
                <TempWrap>
                    <List>
                        <li>
                            {icons.icon.sunny}
                        </li>
                        <ListTemp>
                            {this.state.displayTemp}
                        </ListTemp>
                        <ListBtn><TempButton
                                onClick={this.handleClick}
                                tempkind={this.state.tempKind ? 'wi wi-celsius' : 'wi wi-fahrenheit'} />
                        </ListBtn>
                     </List>
                </TempWrap>
            </Div>
        );
    }
}
export default Weather;