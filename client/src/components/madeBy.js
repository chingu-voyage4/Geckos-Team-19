import React, {Component} from 'react';
import {MadeByBtn,  DropdownContent, DropdownA, Show} from '../styles/--madeby';


class MadeBy extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggle: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    render() {
        if(this.state.toggle === false){
            return (
                <MadeByBtn onClick = {this.handleClick} toggle = {this.state.toggle ? true : false}>
                   <p>Made By</p>
                </MadeByBtn>
            )
        } else if(this.state.toggle === true) {
            return (
                <div>
                <MadeByBtn onClick = {this.handleClick} >
                   <p>Made By</p>
                </MadeByBtn>
                <Show>
                    <DropdownContent>
                        <li>
                        <DropdownA>Lucas Balboa</DropdownA>
                        </li>
                        <li>
                        <DropdownA>Vera Butler</DropdownA>
                        </li>
                        <li>
                        <DropdownA>Inna L</DropdownA>
                        </li>
                    </DropdownContent>
                </Show>
                </div>
            )
        }
    };
};

class MenuItem extends React.Component {
    
}
            
            


export default MadeBy;