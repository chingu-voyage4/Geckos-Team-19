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

    
    componentDidMount() {
        this.props.fetchWeather();
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

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
