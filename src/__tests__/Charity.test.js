import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Charity from '../Charity';

describe('Charity Component', function () {
  it('renders without crashing', () => {
    shallow(<Charity />);
  });
});