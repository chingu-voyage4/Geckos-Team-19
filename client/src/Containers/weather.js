import React, { Component } from 'react';
import TempButton from '../components/tempButton';
import { Div, ItemTemp, ListTemp, ItemBtn, Icon, List } from '../styles/--weather';
import icons from '../components/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/api';
import { store } from '../actions/store';


let url;
let apiKey = "50bb5384466ccb470dc659a13dca555a";
let lon;
let lat;

//put a timeout on a function that renders the display of the weather
//outside of the main rendom method
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "....loading",
            long: "...loading",
            
            error: null,
            tempKind: false,
            displayTemp: "",
            city: "",
            wind: "",
            humidity: ""
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
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
            })
      
    }
   
    onLocationChange() {
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
         

    }
   
    


  

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

    
 
    render() {
        const WEATHER = this.props.fetchWeather();
     
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
                            {store.getState().temp}
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

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
