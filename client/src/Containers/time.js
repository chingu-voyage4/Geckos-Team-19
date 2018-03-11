import React from 'react';
import { Clock, ClockWrap } from '../styles/--time';



class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }


    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (

            <ClockWrap>
                <Clock> {this.state.time} </Clock>
            </ClockWrap>
        );
    }
}



export default Time;