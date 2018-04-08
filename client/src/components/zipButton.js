import React, { Component } from 'react';
import { InputButton } from '../styles/--weather';






class ZipButton extends Component {

    render() {
        return (
            <div>
                <InputButton
  
                    onClick={this.props.onClick}
                    tempkind={this.props.tempkind} >
                    <i className={this.props.tempkind}></i>
                    search
                </InputButton>


            </div>
        );
    }
}
export default ZipButton;