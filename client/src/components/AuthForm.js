import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Background,FormNameWrap, PageWrap,ButtonsWrap, ButtonOther, ButtonOtherText, Form, Methodize, Organize, NameWrap, Name, Heading, Input, Label, Button,ButtonText, AllInputs}  from '../styles/--signIn'



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
   
                <Background>
                  <PageWrap>

                      <FormNameWrap>
                          <NameWrap>
                             <Name>
                               <Methodize> METHODIZE </Methodize>
                               <Organize> organize your thoughts </Organize> 
                             </Name>  
                          </NameWrap>  
                        < Form onSubmit={this.handleSubmit} >
                        <Heading>{heading}</Heading>
                        {errors.message &&
                            ( <div className="alert alert-danger">{errors.message}</div>)
                            }
                       <AllInputs>     
                        <Label htmlFor="email">Email:</Label>
                        <Input
                        required
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                        />
                        <Label htmlFor="password">Password:</Label>
                        <Input
                        required
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                        />
                            {signUp && (
                                <div>
                                    <Label htmlFor="username">Username:</Label>
                                    <Input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    onChange={this.handleChange}
                                    value={username}
                                    />
                                    
                                </div>
                            )}
                        </AllInputs> 
                          <ButtonsWrap>
                            <Button type="submit" className='btn btn-primary btn-block btn-lg' onClick={this.handleSubmit}><ButtonText>
                            {buttonText}</ButtonText>
                            </Button>
                            <ButtonOther href={this.props.href}><ButtonOtherText>{this.props.buttonOther}</ButtonOtherText></ButtonOther>
                         </ButtonsWrap>
                      </Form>
                </FormNameWrap>     
                   </PageWrap>
                </Background>
           
        );
    }
}

export default AuthForm;