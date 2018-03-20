import React, { Component } from 'react';
import CardTW from './components/cardTW';
import SearchBar from '../src/containers/searchbar';

class App extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <CardTW />
        </div>
    );
  }
}

export default App;
