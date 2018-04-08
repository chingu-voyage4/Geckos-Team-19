import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../src/actions/store';
import { BrowserRouter as Router} from 'react-router-dom';
// import './styles/font-awesome/css/font-awesome.min.css';
import { setAuthorizationToken, setCurrentUser } from '../src/actions/auth';
import jwtDecode from 'jwt-decode';

import App from '../src/container/App';

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    //prevent somone from manually tampering with the key of jwtToken in localStorage
    try{
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    }catch(err){
      store.dispatch(setCurrentUser({}));
    }
  }

ReactDOM.render(

    <Provider store={store} >
    <Router>
        <App />
        </Router>
    </Provider>
        ,
    document.getElementById('root'));

 