import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import ReduxPromise from 'redux-promise';


const store = createStore(reducers, applyMiddleware(ReduxPromise));

export { store };

