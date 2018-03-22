import React, { Component } from 'react';
import CardTW from './components/cardTW';
import BackgroundImage from './container/backgroundImage';


class App extends Component {
  render() {
      return (
        <div>
              <CardTW />
              <BackgroundImage />
        </div>
    );
  }
}

export default App;
