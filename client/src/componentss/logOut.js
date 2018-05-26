import React, {Component} from 'react';
import {LogOutBtn} from '../styles/--logOut';
import {Redirect } from 'react-router-dom';
import {logout} from '../actions/auth';


class LogOut extends Component {
    handleLogout(e){
        e.preventDefault
        this.props.logout()
        this.props.history.push('/')
    }
    render() {
        return(
  
          <LogOutBtn onClick={this.handleLogout.bind(this)}> Log Out </LogOutBtn>
  
        )
    }

}

export default LogOut;