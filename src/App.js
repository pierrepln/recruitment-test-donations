import React, { Component } from 'react';
import Header from './Header';
import Charity from './Charity';
import Donations from './Donations';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Charity />
          <Donations />
        </div>
      </div>
    );
  }
}

export default App;
