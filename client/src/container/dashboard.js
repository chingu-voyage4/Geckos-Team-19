import React, { Component } from 'react';
import Time from './time';
import Weather from './weather';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">

            <Time />
            <Weather />
      </div>
    );
  }
}


export default Dashboard;
