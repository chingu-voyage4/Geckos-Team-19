import React from 'react';
import { Clock, ClockWrap, ClockButton, $Date } from '../styles/--time';

//defulat military time
const hours = new Date().getHours();
const mins = new Date().getMinutes();
const milTime = hours + ":" + mins;
//get time zone time and date
const getDateTime = new Date().toLocaleString();
const time = getDateTime.substring(11, 16) + " " + getDateTime.substring(19, 22);
const date = getDateTime.substring(0, 9);


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: time
        };
    }

//change from timeZone to Military Time
handleClick = (event) => {
    this.setState(prevState => ({
        time: !prevState.time
}));
}
 
    render() {
        return (
            <ClockWrap>
                <$Date style={{ color: 'white' }}>{date}</$Date>
                <Clock> <ClockButton onClick={this.handleClick} >{this.state.time ? time : milTime}</ClockButton> </Clock>
            </ClockWrap>
        );
    }
}



export default Time;