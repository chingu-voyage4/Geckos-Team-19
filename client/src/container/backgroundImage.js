import React, { Component } from 'react';
import {Background} from '../styles/--main'


let backgroundStyle =  document.body.style

class BackgroundImage extends Component {
componentDidMount() {
    backgroundStyle.backgroundImage = `url("../styles/default-image/default-image.jpg")`;
    // backgroundStyle.backgroundImage = `url("https://source.unsplash.com/collection/1851577/")`;
    backgroundStyle.backgroundRepeat = "no-repeat";
    backgroundStyle.backgroundSize = "cover";
    backgroundStyle.position = "absolute";
  }

   render() {
          return (
              <Background>
              </Background>
          );
      }

}

export default BackgroundImage;
