import React, { Component } from 'react';
import TempButton from '../components/tempButton';
import { Div, ItemTemp, ListTemp, ItemBtn, Icon, List, InfoList, InfoItem } from '../styles/--weather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/api';
import { store } from '../actions/store';
import Input from '../container/locationSearch';
import '../styles/weather-icons/css/weather-icons.css';

// eslint-disable-next-line
let lat = null;
// eslint-disable-next-line
let lon = null;

//put a timeout on a function that renders the display of the weather
//outside of the main rendom method
class Weather extends Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            tempKind: false,
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    

    handleClick = (event) => {
        
        this.setState(prevState => ({
            tempKind: !prevState.tempKind
        }));
        if (this.state.tempKind) {
            // this.setState({
            //     displayTemp: this.state.temp
            // });
            store.getState().temp.tempC =  store.getState().temp.temp
        } else {
            store.getState().temp.tempC = ((store.getState().temp.tempC - 32) * 5 / 9).toFixed(0);
        }
    }
  
    
    componentDidMount() {

       //setTimeout(function(){ alert("Hello"); }, 3000);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                    this.props.fetchWeather(
                    lon = position.coords.longitude, 
                    lat = position.coords.latitude)
            });
        
    }
    render() {
        if (lon === null || lat === null) {
            return <Input />
        } else {
            return (
                <Div>
                    <List>
                        <h3>{store.getState().main.city}</h3>
                        <Icon>
                            <i className={store.getState().main.icon}></i>
                        </Icon>
                        <InfoList>
                            <InfoItem >Wind {store.getState().main.wind}mph</InfoItem>
                            <InfoItem >{store.getState().main.main}</InfoItem>
                            <InfoItem >Humidity {store.getState().main.humidity}%</InfoItem>
                        </InfoList>
                        <button>toggle placeholder</button>
                        <ListTemp>
                            <ItemTemp>
                                {store.getState().temp.tempC}

                            </ItemTemp>
                            <ItemBtn>
                                <TempButton
                                    onClick={this.handleClick}
                                    className={this.state.tempKind ? 'wi wi-celsius' : 'wi wi-fahrenheit'} />
                            </ItemBtn>
                        </ListTemp>

                    </List>

                </Div>
            )
        };
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