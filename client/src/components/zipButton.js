import React, { Component } from 'react';






class ZipButton extends Component {

    render() {
        return (
            <div>
                <button
                    style={{ borderRadius: '5px'}}
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