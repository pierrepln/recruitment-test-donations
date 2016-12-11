import React, { Component } from 'react';
import Request from 'react-http-request';
import './App.css';

class Charity extends Component {
  render() {
    const appId = '82d17467';
    const charityId = '2357';
    const urlInfo = `https://api.justgiving.com/${appId}/v1/charity/${charityId}`;
    return (
      <div className="charity-wrapper">
        <Request
          url={ urlInfo } method='get' accept='application/json' verbose={ true } >
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

export default Charity;
