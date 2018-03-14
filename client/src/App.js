import React, { Component } from 'react';
import Time from './Containers/time';
import Weather from './Containers/weather';

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
