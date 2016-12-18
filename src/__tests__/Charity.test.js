import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Charity from '../Charity';

describe('Charity Component', function () {
  it('renders without crashing', () => {
    shallow(<Charity />);
  });
  it('renders a title', () => {
    const wrapper = shallow(<Charity />);
    const title = <h3>Charity</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});