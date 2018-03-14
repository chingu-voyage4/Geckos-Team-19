import React, { Component } from 'react';
import Time from '../containers/time';
import Weather from '../containers/weather';
import { TW } from '../styles/--weather';

 
class CardTW extends Component{
    render() {
        return (
            <TW>
                <Time />
                <Weather />
            </TW>
        );
    }
}

export default CardTW;

