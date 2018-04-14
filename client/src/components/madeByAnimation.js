import React, {Component} from 'react';
import {MadeByTitle, MadeByNames} from '../styles/--madeByAnimation';

class MadeBy extends Component {
    render() {
        return <MadeByTitle>
            Made By
            <MadeByNames>vera, inna, lucas</MadeByNames>
            </MadeByTitle>
    }
}

export default MadeBy