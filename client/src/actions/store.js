import {createStore, applyMiddleware,compose} from 'redux';
import reducers from '../reducers/index';
import ReduxPromise from 'redux-promise';


const store = createStore(reducers,compose(applyMiddleware(ReduxPromise),
window.devToolsExtension ? window.devToolsExtension(): f => f 
));

export { store };

