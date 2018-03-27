import React, { Component } from 'react';


let backgroundStyle =  document.body.style

class BackgroundImage extends Component {
componentDidMount() {
    backgroundStyle.backgroundImage = `url("https://source.unsplash.com/collection/1851577/")`;
    backgroundStyle.backgroundRepeat = "no-repeat";
    backgroundStyle.backgroundSize = "cover";
    backgroundStyle.position = "absolute";
  }

   render() {
          return (
              <div>
              </div>
          );
      }

}

export default BackgroundImage;
