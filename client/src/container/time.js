import React from 'react';
import { Clock, ClockWrap, D, TimeSettingsWrap, SettingsButton } from '../styles/--time';
import FontAwesome from 'react-fontawesome';


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             //to switch to 24 hour format add hour12: false after minute
            time: new Date().toLocaleString([], {hour: '2-digit', minute:'2-digit'}),
            date: new Date().toLocaleString([], {month: 'short',  day  : '2-digit'})        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            10000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            //to switch to 24 hour format add hour12: false after minute
            time: new Date().toLocaleString([], {hour: '2-digit', minute:'2-digit' }),
            date: new Date().toLocaleString([], {month: 'short',  day  : '2-digit'})
        });
    }

    render() {
        return (

            <ClockWrap>
                <D> { this.state.date} </D>
           
                <TimeSettingsWrap>
                    <SettingsButton><i className="fa fa-gears fa-1x"></i></SettingsButton>
                    <Clock> {this.state.time} </Clock>
                 </TimeSettingsWrap>
            </ClockWrap>
        );
    }
}



export default Time; 