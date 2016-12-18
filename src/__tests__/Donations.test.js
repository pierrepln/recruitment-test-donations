import React from 'react';
import ReactDOM from 'react-dom';
import Donations from '../Donations';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Donations />, div);
});
