import React, { Component } from 'react';
import Request from 'react-http-request';
import './App.css';

class Donations extends Component {
  render() {
    const appId = '82d17467';
    const charityId = '2357';
    const urlDonations = `https://api.justgiving.com/${appId}/v1/charity/${charityId}/donations`;
    return (
      <div className="donations-wrapper">
        <h3>Lastest Donation</h3>
        <Request
          url={ urlDonations } method='get' accept='application/json' verbose={ true } >
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
      </div>
    );
  }
}

export default Donations;
