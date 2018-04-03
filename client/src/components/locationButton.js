import React, { Component } from 'react';



class LocationButton extends Component {

    render() {
        return (
            <div>
                <button
  
                    onClick={this.props.onClick}>
                    {/* // tempkind={this.props.tempkind} >
                    // <i className={this.props.tempkind}></i> */}
                    search
                </button>


            </div>
        );
    }
}
export default LocationButton;