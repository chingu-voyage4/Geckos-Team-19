import React, { Component } from 'react';
<<<<<<< HEAD

import Dashboard from './container/dashboard';
import BackgroundImage from './container/backgroundImage'
=======
import CardTW from './components/cardTW';
import SearchBar from '../src/containers/searchbar';
>>>>>>> e1bbfd900094305beefeb807324ada092caf75c9

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
            <BackgroundImage/>
            <Dashboard />
      </div>
=======
        <div>
            <SearchBar />
            <CardTW />
        </div>
>>>>>>> e1bbfd900094305beefeb807324ada092caf75c9
    );
  }
}

export default App;
