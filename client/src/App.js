import React, { Component } from 'react';

import Dashboard from './container/dashboard';
import BackgroundImage from './container/backgroundImage'

class App extends Component {
  render() {
    return (
      <div className="App">
            <BackgroundImage/>
            <Dashboard />
      </div>
    );
  }
}

export default App;
