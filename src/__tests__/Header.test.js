import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header Component', function () {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
