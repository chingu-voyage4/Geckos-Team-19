import React from 'react';
import { Clock, ClockWrap } from '../styles/--time';



class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             //to switch to 24 hour format add hour12: false after minute
            time: new Date().toLocaleString([], {hour: '2-digit', minute:'2-digit'}),
            date: new Date().toDateString()
        };
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
            date: new Date().toDateString()
        });
    }

    render() {
        return (

            <ClockWrap>
                <Clock> { this.state.date} </Clock>
                <Clock> {this.state.time} </Clock>
            </ClockWrap>
        );
    }
}



export default Time; 