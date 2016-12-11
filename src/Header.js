import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h2>Recruitment Test - Charity Donations</h2>
        <p>An unattended front end recruitment test for JustGiving.</p>
      </div>
    );
  }
}

export default Header;
