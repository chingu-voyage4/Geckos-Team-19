import React from 'react';
import { Clock, TimeDateInputWrap, TimeDateMadeByWrap,LogoutMadeByWrap, D, TimeDateWrap, Methodize, Organize, NameWrap, Name} from '../styles/--time';
import LogOut from '../components/logOut'
import MadeBy from '../components/madeByAnimation';
import ParticlesMain from '../components/particles'
import Weather from '../container/weather';
import {Bounce} from '../styles/--weather';

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
                  <TimeDateInputWrap>
                    <TimeDateWrap>
                      <D> { this.state.date} </D>
                      {/* <SettingsButton><i className="fa fa-gears fa-1x"></i></SettingsButton> */}
                      <Clock> {this.state.time} </Clock>
                  
                    </TimeDateWrap>
                    <Bounce>
                   <Weather  />
                   </Bounce>
                 </TimeDateInputWrap>
            
                 <NameWrap>
                 
                   <Name>
                     <Methodize> METHODIZE</Methodize>
                      <Organize> organize your thoughts </Organize>
                   </Name>  
                   <ParticlesMain/>
                
                 </NameWrap>   
                 <LogoutMadeByWrap>
                   <LogOut logout={this.props.logout} history={this.props.history}/>
                   <MadeBy/>
                 </LogoutMadeByWrap>
                
           </TimeDateMadeByWrap>
        );
    }
}



export default Time; 