import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class Donations extends Component {
  constructor(props) {
    super(props);
    this.state = { donations: [] };
  }

  componentWillMount() {
    const self = this;
    const appId = '82d17467';
    const charityId = '2357';
    const API_ENDPOINT = `https://api.justgiving.com/${appId}/v1/charity/${charityId}/donations`;
    const options = { headers: {"Content-Type": "application/json"} };

    fetch(API_ENDPOINT, options)
    .then(function(response) {
      return response.text();
    }).then(function(text) {
      const data = JSON.parse(text);
      self.setState({
        donations: data.donations
      });
    });
  }

  renderDonation(donation) {
    return (
      <div className="donation">
        <div>{ donation.donorDisplayName }</div>
        <div>{ donation.amount } { donation.currencyCode }</div>
      </div>
    );
  }

  renderDonationsList() {
    const self = this;
    if (this.state.donations) {
      return (
        <div>
          <h3>Lastest Donations</h3>
          <ul>
            {this.state.donations.map(function(donation, key) {
              return (<li key={ key }>{ self.renderDonation(donation) }</li>);
            })}
          </ul>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="donations-wrapper">
        { this.renderDonationsList() }
      </div>
    );
  }

}

export default Donations;
