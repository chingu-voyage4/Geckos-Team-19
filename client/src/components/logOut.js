import React, {Component} from 'react';
import {LogOutBtn, LogOutBtnWrap} from '../styles/--logOut';


class LogOut extends Component {
    render() {
        return(
        <LogOutBtnWrap>    
          <LogOutBtn> Log Out </LogOutBtn>
        </LogOutBtnWrap>    
        )
    }

}

export default LogOut;