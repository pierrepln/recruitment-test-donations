import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class Charity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      logo: '',
      loading: true,
      error: false
     };
  }

  componentDidMount() {
    const appId = '82d17467';
    const charityId = '2357';
    const API_ENDPOINT = `https://api.justgiving.com/${appId}/v1/charity/${charityId}`;
    const options = { headers: {"Content-Type": "application/json"} };

    fetch(API_ENDPOINT, options)
    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response.text();
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }).then((text) => {
      const data = JSON.parse(text);
      this.setState({
        description: data.description,
        logo: data.logoAbsoluteUrl,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: true,
        loading: false
      });
    });
  }

  renderCharityLogo() {
    if (this.state.logo)
      return (<img src={ this.state.logo } className="charity-logo" alt="logo" />);
  }

  renderCharityDescription() {
    if (this.state.loading)
      return (<div>description loading&hellip;</div>);
    else {
      if (this.state.error)
        return (<div>There was an error</div>);
      else
        return (<div className="charity-description">{ this.state.description }</div>);
    }
  }



  render() {
    return (
      <div className="charity-wrapper">
        <h3>Charity</h3>
        { this.renderCharityLogo() }
        { this.renderCharityDescription() }
      </div>
    );
  }

}

export default Charity;
