
import React from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import Main from './Main';
import AuthForm from '../components/AuthForm';
import {authUser} from '../actions/auth';
import { removeError } from '../actions/error';



const App = (props) => {
   const { authUser, errors, removeError, currentUser} = props;
        return (
            
            <div className="container">
                <Switch>
                        <Route exact path="/" render={props => <Main currentUser={currentUser}{...props} /> } />
                        <Route exact path="/signin" render={props=>{
                            return(
                                <AuthForm 
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser} 
                                buttonText="Log in" 
                                heading="Welcome Back." 
                                {...props}
                                />
                            )
                        }}/>
                        <Route exact path="/signup" render={props=>{
                            return(
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                signUp
                                buttonText="Sign me up"
                                heading="Sign up please" 
                                {...props}
                                />
                            )
                        }}/>
                </Switch>
            </div>
         
        );
    
}
function mapStateToProps(state){
    return{
        currentUser: state.currentUser,
        errors:state.errors
    };
}

export default withRouter(connect(mapStateToProps,{ authUser, removeError })(App));
