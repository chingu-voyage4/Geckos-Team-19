import React, { Component } from 'react';
import {Background} from '../styles/--main'

let backgroundStyle =  document.body.style
let bg=require('../styles/default-image/image-17.jpg')
let imageUrl;
class BackgroundImage extends Component {
    constructor(props) {
    super(props);
        this.state = {
            imageNum:"",
            image:"",
        }
    }

      
     componentDidMount() {
        backgroundStyle.backgroundImage = `url("../styles/default-image/image-17.jpg")`;
    
         let randomNumber = Math.floor(Math.random()*22) + 1;
         
             this.setState({
               imageNum: randomNumber,
               image:"../styles/default-image/image-" + randomNumber + ".jpg",
           });
          
        }
    
       consoleLog = ()=>{
        console.log(this.state.imageNum);
        console.log(this.state.image);
       }
       
       


   render() {
          imageUrl = (this.state.image).toString();
    
          return (
              <div style={divStyle}>
            {/* <Background image={this.state.image}>
            </Background>*/}
             <p>{this.state.image}</p>
             <p> {imageUrl} </p> 
            </div>
       
          );
      }

}

let divStyle = {
    backgroundColor: 'pink',
   //  backgroundImage: "url("+bg+")" ,
   // backgroundImage: `url("../styles/default-image/image-11.jpg")`,
   //"url('" + bgImg + "')"
   //"url('" + bgImg + "')"
   //backgroundImage:`url(${require("../styles/default-image/image-15.jpg")})`,
    // backgroundImage:"url('" + require(this.imageUrl) + "')",
   // backgroundImage:`url(${require(this.imageUrl)})`,
   width:"100%",
   height:"100%",
   margin:"auto",
   backgroundSize:"cover",
   backgroundAttachment: "fixed",
   backgroundRepeat: "no-repeat",
   backgroundPosition: "center",
display: "block",
overflow: "auto",
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };




export default BackgroundImage;
