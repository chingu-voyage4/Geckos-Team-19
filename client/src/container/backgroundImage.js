import React, { Component } from 'react';


let backgroundStyle =  document.body.style

class BackgroundImage extends Component {
componentDidMount() {
    backgroundStyle.backgroundImage = `url("../styles/default-image/default-image.jpeg")`;
    backgroundStyle.backgroundImage = `url("https://source.unsplash.com/collection/1851577/")`;
    backgroundStyle.backgroundRepeat = "no-repeat";
    backgroundStyle.backgroundSize = "cover";
    backgroundStyle.height= '100vh';
    backgroundStyle.position = "relative";
  }

   render() {
          return (
              <div>
              </div>
          );
      }

}

export default BackgroundImage;
