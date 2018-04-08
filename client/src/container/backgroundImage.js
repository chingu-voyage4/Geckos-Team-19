import React, { Component } from 'react';
import {Background} from '../styles/--main'

 let randomNumber = Math.floor(Math.random()*22) + 1;

let divStyle = {
    backgroundColor: 'pink',
   backgroundImage:`url(${require("../styles/default-image/image-"+ randomNumber + ".jpg")})`,

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




export default divStyle;
