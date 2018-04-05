import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../src/actions/store';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';


ReactDOM.render(

    <Provider store={store} >
        <App />
    </Provider>
        ,
    document.getElementById('root'));

 