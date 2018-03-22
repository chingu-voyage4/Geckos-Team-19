import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../src/actions/store';
import reducers from '../src/reducers/index';


import App from './App';


ReactDOM.render(

    <Provider store={store} >
        <App />
    </Provider>
        ,
    document.getElementById('root'));

 