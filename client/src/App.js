import React, { Component } from 'react';
import Time from './container/time';
import Weather from './container/weather';
import BackgroundImage from './container/backgroundImage'

class App extends Component {
  render() {
    return (
      <div className="App">
            <BackgroundImage/>
            <Time />
            <Weather />
      </div>
    );
  }
}

export default App;
