import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class Charity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      logo: ''
     };
  }

  componentWillMount() {
    const self = this;
    const appId = '82d17467';
    const charityId = '2357';
    const API_ENDPOINT = `https://api.justgiving.com/${appId}/v1/charity/${charityId}`;
    const options = { headers: {"Content-Type": "application/json"} };

    fetch(API_ENDPOINT, options)
    .then(function(response) {
      return response.text();
    }).then(function(text) {
      const data = JSON.parse(text);
      self.setState({
        description: data.description,
        logo: data.logoAbsoluteUrl
      });
    });
  }

  renderCharityLogo() {
    if (this.state.logo)
      return (<img src={ this.state.logo } className="charity-logo" alt="logo" />);
  }


  render() {
    return (
      <div className="charity-wrapper">
        <h3>Charity</h3>
        { this.renderCharityLogo() }
        <div className="charity-description">{ this.state.description }</div>
      </div>
    );
  }

}

export default Charity;
