import React, { Component } from 'react';
import Time from '../container/time';
import Weather from '../container/weather';
import Input from '../container/locationSearch';
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

