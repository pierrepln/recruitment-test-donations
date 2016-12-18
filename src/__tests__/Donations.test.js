import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Donations from '../Donations';

describe('Donations Component', function () {
  it('renders without crashing', () => {
    shallow(<Donations />);
  });
});