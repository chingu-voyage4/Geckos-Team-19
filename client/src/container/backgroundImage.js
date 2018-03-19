import React, { Component } from 'react';
import {Body} from '../styles/--background'

let backgroundStyle =  document.body.style

class BackgroundImage extends Component {
componentDidMount() {
    backgroundStyle.backgroundImage = `url("https://source.unsplash.com/collection/1851577/")`;
  }

   render() {
          return (
              <div>
              </div>
          );
      }

}

export default BackgroundImage;
