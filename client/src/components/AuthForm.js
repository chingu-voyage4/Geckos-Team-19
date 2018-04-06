import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            username:'',
            password:'',
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit= e=>{
        e.preventDefault();
        const authType = this.props.signUp ? 'signup': 'signin';
        this.props.onAuth(authType, this.state)
        .then(()=>{
            this.props.history.push('/');
        })
        .catch(()=>{
            return;
        });
    }
    render() {
        const{ email, username} = this.state;
        const {heading, buttonText, signUp, errors, history, removeError} = this.props;
    
        history.listen(() =>{
            removeError();
        })
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                < form onSubmit={this.handleSubmit} >
                <h2>{heading}</h2>
                {errors.message &&
                    ( <div className="alert alert-danger">{errors.message}</div>)
                    }
                <label htmlFor="email">Email:</label>
                <input
                 required
                 type="text" 
                 className="form-control" 
                 id="email" 
                 name="email"
                 onChange={this.handleChange}
                 value={email}
                  />
                <label htmlFor="password">Password:</label>
                <input
                 required
                 type="password"
                 className="form-control"
                 id="password"
                 name="password"
                 onChange={this.handleChange}
                  />
                    {signUp && (
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                            value={username}
                             />
                            
                        </div>
                    )}
                    <button type="submit" className='btn btn-primary btn-block btn-lg' onClick={this.handleSubmit}>
                    {buttonText}
                    </button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;