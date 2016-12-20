import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      loading: true,
      error: false
    };
  }

  componentWillMount() {
    const appId = '82d17467';
    const charityId = '2357';
    const API_ENDPOINT = `https://api.justgiving.com/${appId}/v1/campaigns/${charityId}`;
    const options = { headers: {"Content-Type": "application/json"} };

    fetch(API_ENDPOINT, options)
    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }).then((text) => {
      this.setState({
        campaigns: text.campaignsDetails,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        loading: false,
        error: true
      });
    });
  }

  renderSingleCampaign(campaign) {
    if (campaign) {
      return (
        <div>
          <p>{ campaign.campaignPageName }</p>
          <a href={ campaign.campaignUrl }>learn more&hellip;</a>
        </div>
    )}
  }

  renderCampList() {
    const self = this;
    if (this.state.campaigns) {
      return (
        <div>
          <ul>
            {this.state.campaigns.map(function(campaign, key) {
              return (<li key={ key }>{ self.renderSingleCampaign(campaign) }</li>);
            })}
          </ul>
        </div>
      )
    }
  }

  renderCampaigns() {
    if (this.state.loading)
      return (<div>description loading&hellip;</div>);
    else if (this.state.error)
      return (<div>There was an error</div>);
    else
      return this.renderCampList();
  }

  render() {
    return (
      <div className="donations-wrapper">
        { this.renderCampaigns() }
      </div>
    );
  }

}

export default Campaign;
