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
            store.getState().temp.temp
        } else {
            store.getState().temp.temp = ((store.getState().temp.temp) - 32) * (5 / 9).toFixed(1);
        }
    }

    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.fetchWeather(position.coords.longitude, position.coords.latitude)
            });
    }
   
    render() {
        return (
            <Div>
                <List>
                    <h3>{this.props.city}</h3>
                    <Icon>
                        {icons.icon.sunny}
                    </Icon>
                    <div >
                        <p >Wind {store.getState().wind.wind}</p>
                        <p >Main {store.getState().main.main}</p>
                        <p>Humidity {store.getState().humidity.humidity}%</p>
                    </div>
                    <button>3 day view placeholder</button>
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

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
