import React, { Component } from 'react';
import Time from './containers/time';
import Weather from './containers/weather';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Time />
            <Weather />
      </div>
    );
  }
}

export default App;
