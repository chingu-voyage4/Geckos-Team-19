
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
            
            <div>
                <Switch>
                        <Route exact path="/" render={props => <Main currentUser={currentUser}{...props} /> } />
                        <Route exact path="/signin" render={props=>{
                            return(
                                <AuthForm 
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser} 
                                buttonText="sign in" 
                                heading="welcome back" 
                                buttonOther="take me to sign up"
                                href="/signup"
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
                                buttonText="sign up"
                                heading="sign up please" 
                                buttonOther="take me to sign in"
                                href="/signin"
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
