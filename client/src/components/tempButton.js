import React, { Component } from 'react';

import { Button, Temp } from '../styles/--weather';




class TempButton extends Component {
   
    render() {
        return (
            <div>
                <Button
                    onClick={this.props.onClick}
                    tempkind={this.props.tempkind} >
                    <Temp><i className={this.props.tempkind}></i></Temp>
                </Button>
                    
               
            </div>
        );
    }
}
export default TempButton;