import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
