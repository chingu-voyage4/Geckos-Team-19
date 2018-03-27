import React, { Component } from 'react';

import { Button } from '../styles/--weather';




class ZipButton extends Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.onClick}
                    tempkind={this.props.tempkind} >
                    <i className={this.props.tempkind}></i>
                    Search
                </button>


            </div>
        );
    }
}
export default ZipButton;