import React from 'react';
import { Clock, TimeDateMadeByWrap, D, TimeDateWrap, Methodize, Organize, NameWrap, Name} from '../styles/--time';

import MadeBy from './madeBy';


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             //to switch to 24 hour format add hour12: false after minute
            time: new Date().toLocaleString([], {hour: '2-digit', minute:'2-digit'}),
            date: new Date().toLocaleString([], {month: 'long',  day  : '2-digit'})        };
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
            date: new Date().toLocaleString([], {month: 'long',  day  : '2-digit'})
        });
    }

    render() {
        return (

            <TimeDateMadeByWrap>
                  
                  <TimeDateWrap>
                    <D> { this.state.date} </D>
                    {/* <SettingsButton><i className="fa fa-gears fa-1x"></i></SettingsButton> */}
                    <Clock> {this.state.time} </Clock>
                 </TimeDateWrap>
                 <NameWrap>
                   <Name>
                     <Methodize> METHODIZE</Methodize>
                      <Organize> organize your thoughts </Organize>
                   </Name>   
                 </NameWrap>   

                 <MadeBy/>
           </TimeDateMadeByWrap>
        );
    }
}



export default Time; 