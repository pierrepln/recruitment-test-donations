import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe('App Component', function () {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});