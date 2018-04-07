import React, { Component } from 'react';
import {Background} from '../styles/--main'



class BackgroundImage extends Component {
    constructor(props) {
    super(props);
        this.state = {
            imageNum:"",
            img:"",
        }
    }

     componentDidMount() {
         let randomNumber = Math.floor(Math.random()*22) + 1
             this.setState({
               imageNum: randomNumber,
               image:"image-" + randomNumber + ".jpg",
           });
           console.log(this.state.imageNum);
           console.log(this.state.image);
        }
    
       consoleLog = ()=>{
        console.log(this.state.imageNum);
        console.log(this.state.image);
       }
       
      
      


   render() {
          return (
              <div>
                  <Background background={this.state.image}>
                  </Background>
                  {/* <p>{this.state.imageNum}</p>
                  <p onClick ={this.consoleLog}>Hello</p> */}
             </div>
          );
      }

}

export default BackgroundImage;
