import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { store } from '../actions/store';

var d = new Date();
var weekday = new Array(7);
weekday[0] =  weekday[7];
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
weekday[7] = "Sun";



class ThreeDayForecast extends Component {
    render() {
        return(
            <div style={{color: "white"}}>
                <div>
                <h3>{weekday[d.getDay()]}</h3>
                <p>{store.getState().main.main}</p>
                <p>{store.getState().temp.day1F}</p>
                <i className={store.getState().main.icon}></i>
                </div>
                <div>
                <h3>{weekday[d.getDay()+1]}</h3>
                <p>{store.getState().main.main}</p>
                <p>{store.getState().temp.day2F}</p>
                <i className={store.getState().main.icon}></i>
                </div>
                <div>
                <h3>{weekday[d.getDay()+2]}</h3>
                <p>{store.getState().main.main}</p>
                <p>{store.getState().temp.day3F}</p>
                <i className={store.getState().main.icon}></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}

export default connect(mapStateToProps)(ThreeDayForecast)