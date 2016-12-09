import React, { Component } from 'react';
import Request from 'react-http-request';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const appId = '82d17467';
    const charities = [{
        name: 'British Heart Foundation',
        id:	'183092',
      },{
        name: 'Macmillan Cancer Support',
        id:	'2116',
      },{
        name: 'Cancer Research UK',
        id:	'2357',
      },{
        name: 'Oxfam',
        id:	'13441',
      },{
        name: 'National Trust',
        id:	'183560',
      },{
        name: 'Save the Children',
        id:	'18570',
      }];
    const url = `https://api.justgiving.com/${appId}/v1/charity/${charities[0].id}`;
    // const urlDonation = `https://api.justgiving.com/${appId}/v1/charity/${charities[0].id}/donations`;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recruitment Test - Charity Donations</h2>
          <p>An unattended front end recruitment test for JustGiving.</p>
        </div>
        <p className="App-intro">
          To get started, select a charity in the list below.
        </p>
        <p>charityId: { charities[0].id }</p>
        <Request
          url={ url }
          method='get'
          accept='application/json'
          verbose={true}
        >
          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>loading...</div>;
              } else {
                return <div>{ result.text }</div>;
              }
            }
          }
        </Request>

        <hr/>

        <h3>Lastest Donation</h3>
        <p>TO DO:</p>
      </div>
    );
  }
}

export default App;
