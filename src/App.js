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
        <Charity />
        <Donations />
      </div>
    );
  }
}

export default App;
