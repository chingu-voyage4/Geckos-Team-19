import React, { Component } from 'react';

import { Button } from '../styles/--weather';




class TempButton extends Component {
   
    render() {
        return (
            <div>
                <Button
                    onClick={this.props.onClick}
                    tempkind={this.props.tempkind} >
                    <i className={this.props.tempkind}></i>
                </Button>
                    
               
            </div>
        );
    }
}
export default TempButton;