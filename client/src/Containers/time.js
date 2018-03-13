import React from 'react';
import { Clock, ClockWrap, ClockButton, $Date } from '../styles/--time';

//defulat military time
const hours = new Date().getHours();
const mins = new Date().getMinutes();
const milTime = hours +""+ mins;
//get time zone time and date
const getDateTime = new Date().toLocaleString();
const time = getDateTime.substring(11, 16) + " " + getDateTime.substring(19, 22);
const date = getDateTime.substring(0, 9);
const year = new Date().getFullYear();


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: time,
            milTime: milTime,
            month: this.month(),
            date: date.substring(2, 4),
            year: year
        };
    }

 
//change from timeZone to Military Time
handleClick = (event) => {
    this.setState(prevState => ({
        time: !prevState.time
}));
    }
//display month name
month() {
   
    let month;
    switch (date.substring(0, 1)) {
        case '1':
            month = 'January'
            break;
        case '2':
            month = 'February'
            break;
        case '3':
            month = 'March'
            break;
        case '4':
            month = 'April'
            break;
        case '5':
            month = 'May'
            break;
        case '6':
            month = 'June'
            break;
        case '7':
            month = 'July'
            break;
        case '8':
            month = 'August'
            break;
        case '9':
            month = 'September'
            break;
        case '10':
            month = 'October'
            break;
        case '11':
            month = 'November'
            break;
        case '12':
            month = 'December'
            break;
        default:
            month = date;
    }
    
    return month;
    }
 
render() {
        
        return (
            <ClockWrap>
                <$Date>{this.state.month + " " + this.state.date + " " + this.state.year} </$Date>
                <Clock> <ClockButton onClick={this.handleClick} >{this.state.time ? time : milTime}</ClockButton> </Clock>
            </ClockWrap>
        );
    }
}



export default Time;