import React, { Component } from 'react';
import { AppWrap} from '../styles/--main';
import {Methodize , Background, Organize,ButtonText, PageWrap, ButtonWrap, Button } from '../styles/--landingPage';
import Particles from 'react-particles-js';
 

class LandingPage extends Component {

    render(){
  
        return(
         
            <Background>
           
                <AppWrap>
                  
                   <PageWrap> 
                    <Particles width={750} 
                              height={100}
                              style={{
                                  marginTop:-180,
                                //   border:"1px red solid",
                              }}/>
                     <Methodize> METHODIZE </Methodize>
                     <Organize> organize your thoughts </Organize>
                     <ButtonWrap>
                       <Button href="http://localhost:3000/signin" ><ButtonText> sign in</ButtonText> </Button>
                       <Button href="http://localhost:3000/signup"><ButtonText> sign up</ButtonText> </Button>
                     </ButtonWrap>
                  </PageWrap>
                
                </AppWrap>
               
            </Background>
    
            
        )
    }
}


export default LandingPage;