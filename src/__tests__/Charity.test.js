import React from 'react';
import ReactDOM from 'react-dom';
import Charity from '../Charity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Charity />, div);
});
